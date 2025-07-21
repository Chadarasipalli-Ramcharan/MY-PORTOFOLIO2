import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the incoming data
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real app, you might want to store this in a database
      // or send an email notification
      console.log("Contact form submission:", validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Message received successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your request" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
