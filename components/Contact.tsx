'use client'

import { useState, FormEvent } from 'react'

export default function Contact() {
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      // Initialize EmailJS if not already done
      if (typeof window !== 'undefined' && (window as any).emailjs) {
        const emailjs = (window as any).emailjs
        
        await emailjs.sendForm('service_2utfk6r', 'template_s8e73im', form)
        setMessage('Message sent ✅')
        form.reset()
        
        setTimeout(() => {
          setMessage('')
        }, 5000)
      }
    } catch (error) {
      setMessage('Failed to send message. Please try again.')
      setTimeout(() => {
        setMessage('')
      }, 5000)
      console.error('EmailJS error:', error)
    }
  }

  return (
    <section id="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="from_name" placeholder="Your name" required />
        <input type="email" name="email_id" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
        {message && <p className="contact_message">{message}</p>}
      </form>
    </section>
  )
}
