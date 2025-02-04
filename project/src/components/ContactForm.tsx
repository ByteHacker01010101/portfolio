import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface ContactFormProps {
  recipientEmail: string;
}

export function ContactForm({ recipientEmail }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Replace these with your EmailJS credentials
      await emailjs.send(
        'service_y3enb31', // Service ID from EmailJS
        'template_9uj9udv', // Template ID from EmailJS
        {
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          message: formData.get('message'),
          to_email: recipientEmail,
        },
        'pr5hExslL_BzEkZy0' // Public Key from EmailJS
      );

      toast.success('Message sent successfully!');
      form.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="name" className="block text-purple-200 mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-5 border border-purple-300 border-opacity-20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 text-white placeholder-purple-300"
          placeholder="Your name"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-purple-200 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-5 border border-purple-300 border-opacity-20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 text-white placeholder-purple-300"
          placeholder="your@email.com"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-purple-200 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-5 border border-purple-300 border-opacity-20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 text-white placeholder-purple-300"
          placeholder="Your message"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-purple-500 bg-opacity-30 hover:bg-opacity-50 text-white py-3 rounded-lg transition-all hover:scale-[1.02] duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}