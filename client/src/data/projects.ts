import farmers from "../assets/Projects/farmer.jpg"; // ✅ ensure this path is correct relative to your file
import aitools from "../assets/Projects/aitool.jpg"; // ✅ ensure this path is correct relative to your file
import image from "../assets/Projects/IMAGE.jpg";

export const projects = [

   {
  title: "Farmers Marketing Hub",
  description: "A web platform that connects farmers directly with buyers, enabling real-time crop listings and transparent communication.",
  image: farmers,// ✅ ensure this path is correct relative to your file

  technologies: [
    { name: "HTML", bgColor: "bg-blue-100 dark:bg-blue-900/30", textColor: "text-blue-600 dark:text-blue-400" },
    { name: "CSS", bgColor: "bg-green-100 dark:bg-green-900/30", textColor: "text-green-600 dark:text-green-400" },
    { name: "NODE.JS", bgColor: "bg-purple-100 dark:bg-purple-900/30", textColor: "text-purple-600 dark:text-purple-400" },
    { name: "REACT", bgColor: "bg-blue-100 dark:bg-blue-900/30", textColor: "text-blue-600 dark:text-blue-400" }
  ],
  demoLink: "#",
  githubLink: "https://github.com/Chadarasipalli-Ramcharan"
},

{
  title: "AI Tools Explorer Hub",
  description: "A no-code web application that curates and showcases AI tools for students and developers with dynamic search functionality.",
  image: aitools, // ✅ Make sure you import this image correctly at the top
  technologies: [
    { name: "Glide", bgColor: "bg-yellow-100 dark:bg-yellow-900/30", textColor: "text-yellow-600 dark:text-yellow-400" },
    { name: "No-Code", bgColor: "bg-pink-100 dark:bg-pink-900/30", textColor: "text-pink-600 dark:text-pink-400" },
    { name: "AI APIs", bgColor: "bg-indigo-100 dark:bg-indigo-900/30", textColor: "text-indigo-600 dark:text-indigo-400" },
    { name: "UI/UX", bgColor: "bg-blue-100 dark:bg-blue-900/30", textColor: "text-blue-600 dark:text-blue-400" }
  ],
  demoLink: "#",
  githubLink: "https://github.com/Chadarasipalli-Ramcharan"
},
  {
    title: "AI Image Recognition",
    description: "A machine learning model that can identify objects in images with high accuracy using convolutional neural networks.",
    image: image,

    technologies: [
      { name: "Python", bgColor: "bg-blue-100 dark:bg-blue-900/30", textColor: "text-blue-600 dark:text-blue-400" },
      { name: "TensorFlow", bgColor: "bg-green-100 dark:bg-green-900/30", textColor: "text-green-600 dark:text-green-400" },
      { name: "Computer Vision", bgColor: "bg-purple-100 dark:bg-purple-900/30", textColor: "text-purple-600 dark:text-purple-400" }
    ],
    demoLink: "#",
    githubLink: "https://github.com/Chadarasipalli-Ramcharan"
  },
  
   
 
 

];
