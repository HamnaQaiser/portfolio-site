"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import { projects } from "@/lib/projects"
import * as React from "react"

export default function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params) 
  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{project.description}</p>
      </motion.div>

 {/*  Carousel */}
      {project.images && project.images.length > 0 && (
        <Carousel className="w-full max-w-3xl mx-auto mb-10">
          <CarouselContent>
            {project.images.map((img, i) => (
              <CarouselItem key={i}>
                <img
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="rounded-xl shadow-lg w-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}

      {/* Content + Sidebar */}
      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Case Study Content */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-2 space-y-6"
        >
          <h2 className="text-2xl font-semibold">Case Study</h2>
         <p className="text-gray-700 leading-relaxed">{project.details}</p>

        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gray-50 p-6 rounded-xl shadow"
        >
          <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="mt-6 space-x-4">
            <a
              href={project.link}
              target="_blank"
              className="text-indigo-600 hover:underline"
            >
              Live Demo →
            </a>
            <a
              href={project.github}
              target="_blank"
              className="text-gray-700 hover:underline"
            >
              GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
