import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Confetti from "react-confetti";
import { Star } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import linkedinLogo from "@/assets/Icons/linkedin.svg";
import githubLogo from "@/assets/Icons/github.svg";
import emailLogo from "@/assets/Icons/email.svg";
import locationLogo from "@/assets/Icons/location.svg";
import WhatsappLogo from "@/assets/Icons/whatsapp.svg";



const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type ContactFormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true);
  try {
    const prevMessages = JSON.parse(localStorage.getItem("messages") || "[]");
    const newMessage = {
      ...data,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      read: false,
    };
    const updated = [...prevMessages, newMessage];
    localStorage.setItem("messages", JSON.stringify(updated));

    // Confetti + Toast
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out.",
      variant: "default",
    });
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
    reset();
  } catch {
    toast({
      title: "Error",
      description: "Message failed. Try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


 const contactInfo = [
  {
    logo: linkedinLogo,
    title: "LinkedIn",
    content: "linkedin.com/in/RamCharan",
    link: "https://www.linkedin.com/in/chadarasipalli-ramcharan"
  },
  {
    logo: emailLogo,  
    title: "Email",
    content: "ch.charan2006@gmail.com",
    link: "mailto:ch.charan2006@gmail.com"
  },
  {
    logo: githubLogo,
    title: "GitHub",
    content: "Github.com/in/RamCharan",
    link: "https://github.com/Chadarasipalli-Ramcharan"
  },
  {
    logo: WhatsappLogo,
    title: "Whatsapp",
    content: "Whatsapp.Me/at/8639202608",
    link: "8639202608"
  },
  {
    logo: locationLogo,
    title: "Location",
    content: "Udaipur, Rajasthan, India"
  },
];


  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-20 px-4 flex flex-col justify-start items-center bg-black text-white font-[Poppins,sans-serif] overflow-hidden"
    >
      {/* Background Video */}
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-20 z-0">
        <source src="/background-projects.mp4" type="video/mp4" />
      </video>

      {/* Glowing Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full z-0 animate-pulse-slow" />

      {/* Confetti on Success */}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />}

      {/* Heading */}
      <motion.div className="z-10 text-center mb-12" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-5xl font-extrabold drop-shadow-xl text-white">
          Let's{" "}
          <span className="text-blue-500 relative inline-block">
            Connect
            <motion.div
              className="absolute left-0 right-0 h-1 mt-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              style={{ transformOrigin: "left" }}
            />
          </span>
        </h2>
      </motion.div>

      {/* Content Grid */}
      <div className="z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/10 backdrop-blur-lg p-6 rounded-[2rem] border-[3px] border-blue-500/50 shadow-[0_0_40px_5px_rgba(255,255,255,0.1)] hover:shadow-blue-500/30 transition-all duration-300"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <input
              placeholder="Your Name"
              {...register("name")}
              className={`w-full px-4 py-3 rounded-xl bg-transparent border ${errors.name ? "border-red-500" : "border-white/30"} text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <input
              placeholder="Your Email"
              {...register("email")}
              className={`w-full px-4 py-3 rounded-xl bg-transparent border ${errors.email ? "border-red-500" : "border-white/30"} text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <input
              placeholder="Subject"
              {...register("subject")}
              className={`w-full px-4 py-3 rounded-xl bg-transparent border ${errors.subject ? "border-red-500" : "border-white/30"} text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              {...register("message")}
              className={`w-full px-4 py-3 rounded-xl bg-transparent border ${errors.message ? "border-red-500" : "border-white/30"} text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
              rows={5}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-blue-500 hover:to-purple-700 text-white font-semibold shadow-lg"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {/* Contact Info Box */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-[2rem] border-[3px] border-pink-500/50 shadow-[0_0_40px_5px_rgba(255,255,255,0.1)] hover:shadow-pink-500/30 transition-all duration-300 flex flex-col justify-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Contact Us</h3>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4">
                <img src={info.logo} alt={`${info.title} logo`} className="w-10 h-10 object-contain" />
                <div className="flex flex-col">
                  <span className="text-white font-semibold">{info.title}</span>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noreferrer" className="text-blue-300 hover:underline hover:text-pink-400 text-sm transition duration-300">
                      {info.content}
                    </a>
                  ) : (
                    <span className="text-white/70 text-sm">{info.content}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Rate Portfolio Section */}
<div className="z-10 mt-16 text-center">
  <h3 className="text-2xl font-bold text-white mb-4">Rate My Portfolio</h3>
  <div className="flex justify-center gap-4">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-8 h-8 cursor-pointer transition-transform duration-300 ${
          (hovered ?? rating) >= star ? "text-yellow-400 scale-110" : "text-white/30"
        }`}
        fill={(hovered ?? rating) >= star ? "currentColor" : "none"}
        onMouseEnter={() => setHovered(star)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setRating(star)}
      />
    ))}
  </div>

  {rating > 0 && (
    <motion.p
      className="mt-4 text-pink-400 text-base font-medium"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Thank you for your feedback!
    </motion.p>
  )}


      </div>
    </section>
  );
}
