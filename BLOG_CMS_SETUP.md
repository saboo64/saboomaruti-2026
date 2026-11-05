# Blog dashboard setup

Staff write posts at `/admin`. Post text is stored in Firestore, and images are stored on ImageKit. These steps only need to be done once.

## 1. Firebase

Use the Firebase project you want to hold the blog. The free Spark plan is enough.

1. **Turn on login:** go to Authentication > Sign-in method and enable Email/Password.
2. **Create the database:** go to Firestore Database and create a database.
3. **Add the security rules:** in Firestore > Rules, paste the contents of `firestore.rules`, then publish.
4. **Add the web app settings:** in Project settings > Your apps, register a web app if there isn't one. Copy its values into the `REACT_APP_FIREBASE_*` variables in step 3.
5. **Create the server key:** in Project settings > Service accounts, select Generate new private key. Keep the downloaded file out of the project folder. Convert it with PowerShell:

   ```powershell
   [Convert]::ToBase64String([IO.File]::ReadAllBytes("C:\path\to\key.json"))
   ```

   The output is the value of `FIREBASE_SERVICE_ACCOUNT`.

## 2. ImageKit

In the Saboo ImageKit account, go to Developer options and copy the URL endpoint and the public and private keys. Set the URL endpoint in both `IMAGEKIT_URL_ENDPOINT` and `REACT_APP_IMAGEKIT_URL_ENDPOINT`. Uploads go to the `/popular_rks/blog/images` folder, which is created automatically.

Put real keys only in `.env` and Vercel. Never put them in `.env.example`, which is shared with the code.

## 3. Vercel

`.env` is ignored by Git, so Vercel can't read it. Add every variable listed in `.env.example` under Project > Settings > Environment Variables, then redeploy. `REACT_APP_*` values are built into the site, so a change only takes effect after a redeploy.

## 4. Give a staff member access

1. In Firebase, go to Authentication > Users > Add user and enter their email and a password.
2. Copy the new user's **User UID**.
3. In Firestore, create a collection named `admins`. Add a document whose **Document ID is that UID**. It needs no meaningful data, but the console requires one field, such as `name`.

To remove access, delete that document from `admins`.

To limit what they can manage, add an array field named `roles` to that document, with any of `blog`, `offers`, and `seo`. With no `roles` field, they can manage everything.

Finally, for the **Publish SEO changes** button, create a hook in Vercel under Project > Settings > Git > Deploy Hooks. Add its URL as `VERCEL_DEPLOY_HOOK`, and keep `FIREBASE_SERVICE_ACCOUNT` available to builds, because each build reads the saved SEO changes.

## 5. Check it works

1. Log in at `/admin` and publish a test post with a cover image and an image in the text.
2. Within about a minute, check that it appears at `/blog` and `/blog/<url>`.
3. Open the post's page source and confirm its title and text are in the HTML.
4. Check that `/blog-sitemap.xml` lists the post.
5. Delete the test post.

## Good to know

- **Running locally:** `npm start` runs the dashboard, blog, uploads, and sitemap using the values in `.env`. Restart it after changing `.env`. It doesn't apply `vercel.json` or the Google-ready page HTML, so check those on a Vercel preview.
- **Offers:** changes go live within about a minute, and an offer hides itself after its end date.
- **SEO:** saved changes only go live after **Publish SEO changes**, which rebuilds the site and takes a few minutes. Structured data stays in the code. After adding a page to the site, run `npm run build`, then `node scripts/extract-seo-defaults.js`, to add it to the SEO list.
- **Redirects:** the live site is on Vercel, so old-URL redirects belong in `vercel.json`. Those in `firebase.json` have no effect there.
- **Deleting images:** deleting a post doesn't delete its images from ImageKit. Remove them in the ImageKit dashboard if needed.
- **Writing posts:** format text with the editor's toolbar, and use the Preview tab to see the finished post. To change an image's size or description after adding it, click the image.
