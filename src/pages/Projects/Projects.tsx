import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PageTransition } from "@/components/ui/page-transition";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Travel Booking Platform",
      description:
        "A comprehensive travel booking platform built with Vue.js, Java, JavaScript, MySQL and MongoDB. Features include user authentication, flight listings, itinerary reviews, and seamless booking experience all in one integrated website.",
      name: "Air Canada Connex",
      technology: "Vue.js 2, Nuxt 2, Java, JavaScript, MySQL, MongoDB",
    },
    {
      title: "Modern E-commerce Platform",
      description:
        "A responsive e-commerce website with modern UI/UX design principles built with Vue 3, TypeScript, Pinia, GraphQL, Vite, and Nuxt 3. It includes features like dynamic product listings, shopping cart management, secure user authentication, and optimized performance.",
      name:"Air Canada Connex",
      technology: "Vue.js 3, Nuxt 3, TypeScript, JavaScript, Pinia, GraphQL, Vite",
    },
    {
      title: "Flight, hotel, and car Booking Application",
      description:
        "A responsive booking application with modern UI/UX design principles built with Vue 2,  GraphQL, Vite, and Nuxt 2. It includes features like dynamic product listings, shopping cart for flights, cars, and hotels.",
      name:"Nexus Wind",
      technology: "Vue.js 2, Nuxt 2, GraphQL, MongoDB",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-neutral-950 relative pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <TextGenerateEffect
              words="Project description"
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            />
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Explore my portfolio of innovative projects that showcase modern
              web development techniques and creative problem-solving.
            </p>
          </div>

          <HoverEffect items={
            projects.map((project) => ({
              name: project.name,
              title: project.title,
              description: project.description,
              technology: project.technology,
            }))
          } />
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
