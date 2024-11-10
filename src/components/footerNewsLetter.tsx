"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function FooterNewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async () => {
    if (!email) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email.",
        variant: "destructive", 
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://sheetdb.io/api/v1/edj5b3kqockge", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [{ email }],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe.");
      }

      toast({
        title: "Success",
        description: "Thank you for subscribing!", 
      });

      setEmail(""); 
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive", 
        });
      } else {
        toast({
          title: "Unexpected Error",
          description: "An unexpected error occurred.",
          variant: "destructive", 
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:w-[60%]">
      <div className="flex md:flex-row flex-col gap-2">
        <input
          type="email"
          className="flex-1 p-2 border rounded text-black"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          disabled={isSubmitting}
          className="bg-blue-600 w-[33%] md:w-full text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
    </div>
  );
}
