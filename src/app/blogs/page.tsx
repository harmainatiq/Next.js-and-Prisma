import React from 'react'
import posts from './../../data/posts'
import Link from 'next/link'

const BlogsPage = () => {
  return (
    <div className='max-w-4xl mx-auto py-8'>
        <h1 className='text-3xl font-bold mb-4'>Blogs</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 gap-3 text-black'>
            {posts . map(post => (
                <Link key={post.id} href={`/blogs/${post.id}`} className='bg-white p-4 rounded-md shadow-md'>
                    <h2 className='text-xl font-bold'>{post.title}</h2>
                    <p>written by: {post.username}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default BlogsPage