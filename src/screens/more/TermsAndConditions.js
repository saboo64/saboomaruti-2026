import React from 'react';
import Header from '../../components/header/Header';
// import { Helmet } from 'react-helmet';
import SeoMeta from '../../components/SEo/SeoMeta';

function TermsAndConditions() {
  return (
    <>
      <SeoMeta
        title="Terms & Conditions of Maruti Cars | Popular Maruti"
        description="Please read all terms and conditions of Maruti Suzuki Cars, Insurance, Warranty, Offers & discounts finance services. For more information reach us 98488 98488."
        canonicalUrl="https://www.saboomaruti.in/terms-and-conditions"
        ogImage="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/Maruti+Suzuki+Arena+Saboo+RKS+Maruti+OG+Tag+Image.webp"
        twitterUrl="https://www.saboomaruti.in/terms-and-conditions"
      />

      <Header />
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/local/privacy_banner.webp"
        className="w-full"
        alt="privacy banner"
      />
      <div className="container px-5 mx-auto">
        <p className="text-xl font-bold uppercase">Terms and Conditions </p>

        <div className="my-4 space-y-1">
          <h5 className="font-semibold">
            Popular RKS Maruti Suzuki Statement of Terms and Conditions
          </h5>
          <p className="text-sm">
            At Popular RKS we take your privacy seriously. Please read the
            following to learn more about our terms and conditions.
          </p>
        </div>

        <div className="my-4 space-y-1">
          <h5 className="font-semibold">What the terms and conditions cover</h5>
          <p className="text-sm">
            This covers Popular RKS Maruti Suzuki treatment of personally
            identifiable information that Popular RKS Maruti Suzuki collects when
            you are on Popular RKS Maruti Suzuki site and when you use our
            services. This policy also covers Popular RKS Maruti Suzuki treatment
            of any Personally identifiable information that Popular RKS Maruti
            Suzuki shares with you.
          </p>
          <p className="text-sm">
            This policy does not apply to the practices of companies that Popular
            RKS Maruti Suzuki does not own or control or Popular RKS Maruti Suzuki
            does not own or employ or manage.
          </p>
          <br></br>
          <p className="text-sm">
            I, hereby authorize Popular RKS , to contact me. It will
            override my registry on the NCPR. By providing your contact details
            you have expressly authorized Popular RKS to contact you in future
            through calls /SMS / E-mails and inform you about our products..
          </p>
        </div>

        <div className="my-4 space-y-1">
          <h5 className="font-semibold">Information Collection and Use</h5>
          <p className="text-sm">
            <li>
              {" "}
              Popular RKS Maruti Suzuki collects personally identifiable
              information when you register for a Popular RKS Maruti Suzuki
              account.{" "}
              <li>
                When you choose the services and promotions. Popular RKS Maruti
                Suzuki may also receive personally identifiable information from
                our business partners.
              </li>
            </li>
          </p>

          <p className="text-sm">
            <li>
              When you register with Popular RKS Maruti Suzuki, we ask for your
              name, e-mail address, birth date, gender, occupation, industry and
              personal interest.
            </li>
            <li>
              {" "}
              Once you register with Popular RKS Maruti Suzuki and sign in to our
              services, you are not anonymous to us.
            </li>
          </p>
          <p className="text-sm">
            <li>
              Popular RKS Maruti Suzuki uses information for three general
              purpose: to fulfill your requests for certain products and
              services and to contact you about specials and new products.
            </li>
          </p>
        </div>

        <div className="my-4 space-y-1">
          <h5 className="font-semibold">Information Sharing and Disclosure</h5>
          <p className="text-sm">
            Popular RKS Maruti Suzuki will not sell or rent your Personally
            Identifiable Information to anyone.
          </p>
          <p className="text-sm">
            Popular RKS Maruti Suzuki will send Personally Identifiable
            Information about you when:
          </p>
          <p className="text-sm">
            <li>We have consent to share the information</li>
          </p>
          <p className="text-sm">
            <li>
              We need to share your information to provide the product or
              service you have requested.
            </li>
          </p>
          <p className="text-sm">
            <li>We respond to subpoenas, court orders or legal process.</li>
          </p>
          <p className="text-sm">
            <li>
              When we find your action on the web site violates the Popular RKS
              Maruti Suzuki terms and condition or any of your usage guidelines
              for specific products or services.
            </li>
          </p>
        </div>

        <div className="my-4 space-y-1">
          <h5 className="font-semibold">Security</h5>
          <p className="text-sm">
            <li>
              Your Popular RKS Maruti Suzuki account information is
              password-protected for your privacy and security We have taken
              adequate measures to secure access to your personal data.
            </li>
          </p>
        </div>
        <div className="my-4 space-y-1">
          <h5 className="font-semibold">Changes to this Policy</h5>
          <p className="text-sm">
            <li>
              {" "}
              Popular RKS Maruti Suzuki may edit this policy from time to time. If
              we make any substantial changes ,we will notify you by posting a
              prominent announcement on our pages.
            </li>
          </p>
        </div>
      </div>
    </>
  );
}

export default TermsAndConditions;
