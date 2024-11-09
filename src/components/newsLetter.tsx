"use client";

import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function NewsletterPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://sheetdb.io/api/v1/edj5b3kqockge", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            {
              email
            }
          ]
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe.");
      }

      setMessage("Thank you for subscribing!");


      setTimeout(() => setShowPopup(false), 1000);
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Subscribe to our Newsletter</h2>
          <AiOutlineClose
            className="cursor-pointer text-gray-500"
            size={24}
            onClick={() => setShowPopup(false)}
          />
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Enter your email to stay updated with our latest news and offers.
        </p>
        <input
          type="email"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
        {message && <p className="text-sm mt-2 text-center">{message}</p>}
      </div>
    </div>
  );
}
