import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import SeoMeta from '../../components/SEo/SeoMeta';
import StructuredData from '../../components/SEo/StructuredData';
import { imagekitUrl } from '../../lib/imagekit';
import BlogContent from './BlogContent';
import { formatDate } from './BlogList';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let active = true;
    setStatus('loading');
    fetch(`/api/posts?slug=${encodeURIComponent(slug)}`)
      .then((response) => {
        if (response.status === 404) return null;
        if (!response.ok) throw new Error(`status ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (!active) return;
        setPost(data ? data.post : null);
        setStatus(data ? 'ready' : 'missing');
      })
      .catch((err) => {
        console.error('Could not load post:', err);
        if (active) setStatus('error');
      });
    return () => {
      active = false;
    };
  }, [slug]);

  const canonicalUrl = `https://www.saboomaruti.in/blog/${slug}`;

  if (status !== 'ready') {
    const message = {
      loading: 'Loading post…',
      missing: 'We couldn’t find this post.',
      error: 'We couldn’t load this post. Please refresh the page to try again.',
    }[status];
    return (
      <>
        {status === 'missing' && (
          <SeoMeta
            title='Page not found | Popular RKS'
            description='This blog post could not be found.'
            canonicalUrl='https://www.saboomaruti.in/blog'
            robots='noindex'
          />
        )}
        <Header />
        <main className='container min-h-screen px-4 mx-auto mt-10 text-center pt-14'>
          <p className='mb-4 text-gray-600'>{message}</p>
          {status !== 'loading' && (
            <Link to='/blog' className='text-red-600 underline'>
              Back to the blog
            </Link>
          )}
        </main>
      </>
    );
  }

  const description = post.metaDescription || post.excerpt;

  return (
    <>
      <SeoMeta
        title={post.metaTitle || `${post.title} | Popular RKS`}
        description={description}
        canonicalUrl={canonicalUrl}
        ogImage={post.coverImage || undefined}
        ogType='article'
        author={post.author}
      />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description,
          image: post.coverImage || undefined,
          url: canonicalUrl,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt || post.publishedAt,
          author: { '@type': 'Organization', name: post.author },
          publisher: {
            '@type': 'AutomotiveDealer',
            name: 'Popular RKS Maruti Suzuki',
          },
        }}
      />
      <Header />
      <main className='container max-w-3xl px-4 pb-12 mx-auto mt-10 pt-14'>
        <Link to='/blog' className='text-sm text-red-600 underline'>
          ← All posts
        </Link>
        <PostContent post={post} />
      </main>
    </>
  );
};

// Shared with the dashboard preview, so staff see what visitors will see.
export const PostContent = ({ post }) => (
  <article>
    {post.category && (
      <p className='mt-4 text-xs font-semibold text-red-600 uppercase'>
        {post.category}
      </p>
    )}
    <h1 className='mt-2 mb-3 text-3xl font-bold leading-tight text-blue-800 md:text-4xl'>
      {post.title}
    </h1>
    <p className='mb-6 text-sm text-gray-500'>
      {[post.author, formatDate(post.publishedAt)].filter(Boolean).join(' · ')}
    </p>
    {post.coverImage && (
      <img
        src={imagekitUrl(post.coverImage, 'w-1200,f-auto')}
        alt={post.coverImageAlt || ''}
        className='w-full h-auto mb-6 rounded-lg'
      />
    )}
    <BlogContent html={post.body} />
  </article>
);

export default BlogPost;
