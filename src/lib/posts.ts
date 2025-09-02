export const posts: Record<
  string,
  {
    title: string
    date: string
    excerpt: string
    content: string
  }
> = {
  "modern-website-2025": {
    title: "Why You Need a Modern Website in 2025",
    date: "Aug 20, 2025",
    excerpt: "A strong online presence starts with a professional, responsive website...",
    content: `
      <p>A strong online presence starts with a professional, responsive website. 
      Learn why modern businesses can’t afford to skip this in 2025...</p>
    `,
  },
  "my-frontend-stack": {
    title: "My Frontend Tech Stack (React, Next.js, Tailwind)",
    date: "Aug 25, 2025",
    excerpt: "Here’s the stack I use to build fast, modern, and scalable websites...",
    content: `
      <p>Here’s the stack I use to build fast, modern, and scalable websites 
      for clients: React, Next.js, TailwindCSS, and Framer Motion...</p>
    `,
  },
}
