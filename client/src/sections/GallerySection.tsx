import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronDown } from "lucide-react";
import img1 from "../assets/Gallery/img1.jpg";
import img2 from "../assets/Gallery/img2.jpg";
import img3 from "../assets/Gallery/img3.jpg";
import img4 from "../assets/Gallery/img4.jpg";
import img5 from "../assets/Gallery/img5.jpg";
import img6 from "../assets/Gallery/img6.jpg";
import img7 from "../assets/Gallery/img7.jpg";
import img8 from "../assets/Gallery/img8.jpg";


export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
  { src: img1, alt: "College study group session" },
  { src: img2, alt: "Hackathon team collaboration" },
  { src: img3, alt: "Award ceremony at tech event" },
  { src: img4, alt: "Late night coding session" },
  { src: img5, alt: "College campus event" },
  { src: img6, alt: "Group discussion during project planning" },
  { src: img7, alt: "Workshop on AI technologies" },
  { src: img8, alt: "Presentation at technical symposium" }


  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="gallery" className="relative min-h-screen w-full py-20 px-4 flex flex-col justify-start items-center bg-black text-white font-[Poppins,sans-serif] overflow-hidden">
      {/* Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      >
        <source src="/background-gallery.mp4" type="video/mp4" />
      </video>

      {/* Glow Orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-600 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse-slow" />

      {/* Title */}
      <motion.div
        className="z-10 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       <h2 className="text-5xl font-extrabold drop-shadow-xl">
        <span className="text-white"> My</span>
        <span className="text-blue-500 relative inline-block">
            Gallery
            <motion.div
              className="absolute left-0 right-0 h-1 mt-1 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              style={{ transformOrigin: 'left' }}
            />
          </span>
          
          
        </h2>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        className="relative z-10 w-full max-w-7xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group bg-white/10 border border-white/10 backdrop-blur-md"
            variants={itemVariants}
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Dialog Viewer */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-transparent border-none shadow-none">
          <img
            src={selectedImage || ''}
            alt="Gallery image"
            className="w-full rounded-lg object-contain max-h-[80vh]"
          />
        </DialogContent>
      </Dialog>

      {/* Scroll Down Icon to Contact */}
      <motion.div
        className="absolute bottom-4 z-10 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={() => {
          const next = document.getElementById("contact");
          if (next) next.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </motion.div>
    </section>
  );
}
