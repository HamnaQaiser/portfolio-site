"use client"

import { useParams } from "next/navigation"
import { posts } from "@/lib/posts"

export default function BlogPost() {
  const { slug } = useParams() as { slug: string }
  const post = posts[slug]

  if (!post) {
    return <p className="text-center py-20">Post not found.</p>
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-gray-500 mt-2">{post.date}</p>
      <article
        className="prose prose-lg mt-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  )
}
