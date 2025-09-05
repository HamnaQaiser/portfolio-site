"use client"

import { Button } from "@/components/ui/button"
import { posts } from "@/lib/posts"
import { projects } from "@/lib/projects"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-indigo-50 to-white">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold"
        >
          Hi, I’m <span className="text-indigo-600">Hamna</span>
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600">
          Frontend Developer specializing in modern, responsive websites with React, Next.js & TailwindCSS
        </p>
        
        <div className="mt-8 flex gap-4">
          <a href="https://www.fiverr.com/s/dDd96L3" className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700">
            Hire Me
          </a>
          <a href="/resume.pdf" className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100">
            Download Resume
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              {project.images && project.images.length > 0 && (
  <img
    src={project.images[0]}
    alt={project.title}
    className="rounded-t-xl w-full h-56 object-cover"
  />
)}

              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-indigo-600 hover:underline"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-gray-600 hover:underline"
                  >
                    GitHub
                  </Link>
                  <Link href={`/projects/${project.slug}`}>
  <Button variant="outline">View Details</Button>
</Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




    {/* Blog Section */}
      <section className="py-20 bg-gray-50" id="blog">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Blog</h2>
          <div className="space-y-8">
            {Object.entries(posts).map(([slug, post]) => (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="block bg-white p-6 rounded-xl shadow transition transform hover:scale-[1.02] hover:bg-indigo-50 hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold">{post.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{post.date}</p>
                <p className="text-gray-600 mt-3">{post.excerpt}</p>

                {/* Read More with arrow animation */}
                <div className="group flex items-center text-indigo-600 hover:text-indigo-800 mt-4 font-medium">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
     



      {/* Contact Section */}
      <section className="py-20 max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-xl" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-xl" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-xl h-32" />
          <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 w-full">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <p>&copy; {new Date().getFullYear()} Hamna. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://github.com" target="_blank"><Github className="w-5 h-5 hover:text-white" /></a>
            <a href="https://linkedin.com" target="_blank"><Linkedin className="w-5 h-5 hover:text-white" /></a>
            <a href="mailto:hamna@example.com"><Mail className="w-5 h-5 hover:text-white" /></a>
          </div>
        </div>
      </footer>
    </main>
  )
}
