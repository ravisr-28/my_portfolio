import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaArrowLeft } from 'react-icons/fa'
import BackgroundStyle from '../components/core/BackgroundStyle'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { toast, Toaster } from 'react-hot-toast'

function ContactInfo() {
    const contactDetails = [
        { icon: FaEnvelope, label: 'Email', value: 'ravishankarsingh345@gmail.com', href: 'mailto:ravishankarsingh345@gmail.com' },
        { icon: FaMapMarkerAlt, label: 'Location', value: 'Bihar, India', href: null },
    ]
    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/ravisr-28', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ravi-shankar-kumar-0a58403a6/', label: 'LinkedIn' },
        { icon: FaTwitter, href: 'https://x.com/ravi_shankar_18?s=21', label: 'Twitter' },
    ]

    return (
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="space-y-8">
                <div><h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Let&apos;s Connect</h3><p className="text-gray-600 dark:text-gray-400">Feel free to reach out for collaborations or just a friendly hello</p></div>
                <div className="space-y-4">
                    {contactDetails.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50">
                            <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-700/50"><item.icon className="w-5 h-5 text-gray-600 dark:text-gray-300" /></div>
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{item.label}</p>
                                {item.href ? <a href={item.href} className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500">{item.value}</a> : <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.value}</p>}
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Follow me</h4>
                    <div className="flex gap-3">
                        {socialLinks.map((s, i) => (
                            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                <s.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isMobile, setIsMobile] = useState(false)
    const formRef = useRef(null)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const userId = import.meta.env.VITE_EMAILJS_USER_ID

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (serviceId && templateId && userId && formRef.current) {
            emailjs.sendForm(serviceId, templateId, formRef.current, userId)
                .then(() => { toast.success('Email sent successfully'); setFormData({ name: '', email: '', message: '' }) })
                .catch(() => toast.error('Failed to send email'))
        } else {
            toast.error('Missing required EmailJS configuration')
        }
    }

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <BackgroundStyle>
            <Toaster position="top-right" />
            <div className="max-w-7xl mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
                    <Link to="/" className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 mb-4">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /><span>Back to Home</span>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                        Get in Touch
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Have a project in mind? Let&apos;s discuss how we can work together.</p>
                </motion.div>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-12">
                    {!isMobile && <ContactInfo />}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-500/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-500/10 rounded-full blur-2xl" />
                        <form ref={formRef} onSubmit={handleSubmit} className="relative space-y-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name"
                                    className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-400 focus:ring-0 transition-all duration-300" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-400 focus:ring-0 transition-all duration-300" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} placeholder="Your message here..."
                                    className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-gray-900 dark:focus:border-gray-400 focus:ring-0 transition-all duration-300 resize-none" required />
                            </div>
                            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                className="w-full px-6 py-1.5 rounded-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                                <span>Send Message</span><FaPaperPlane className="text-sm" />
                            </motion.button>
                        </form>
                    </motion.div>
                    {isMobile && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-8">
                            <ContactInfo />
                        </motion.div>
                    )}
                </div>
            </div>
        </BackgroundStyle>
    )
}
