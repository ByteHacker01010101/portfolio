import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext';

interface ContactFormProps {
  recipientEmail: string;
}

export function ContactForm({ recipientEmail }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        'service_y3enb31',
        'template_9uj9udv',
        {
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          message: formData.get('message'),
          to_email: recipientEmail,
        },
        'pr5hExslL_BzEkZy0'
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

  const inputClasses = `w-full px-4 py-2 rounded-lg ${
    isDark 
      ? 'bg-white bg-opacity-5 border border-purple-300 border-opacity-20 text-white placeholder-purple-300' 
      : 'bg-white border border-purple-200 text-gray-800 placeholder-gray-500'
  } focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50`;

  const labelClasses = isDark ? 'text-purple-200' : 'text-gray-700';

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="name" className={`block ${labelClasses} mb-2`}>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputClasses}
          placeholder="Your name"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className={`block ${labelClasses} mb-2`}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClasses}
          placeholder="your@email.com"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className={`block ${labelClasses} mb-2`}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={inputClasses}
          placeholder="Your message"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 rounded-lg transition-all hover:scale-[1.02] duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
          isDark 
            ? 'bg-purple-500 bg-opacity-30 hover:bg-opacity-50 text-white' 
            : 'bg-purple-600 hover:bg-purple-700 text-white'
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}