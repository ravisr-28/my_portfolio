import { Link } from 'react-router-dom'
import { FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function FloatingContactButton() {
    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        >
            <Link
                to="/contact-us"
                className="flex items-center justify-center w-12 h-12 rounded-full 
                    bg-gray-900 dark:bg-white text-white dark:text-gray-900
                    shadow-lg hover:shadow-xl transition-all duration-300
                    hover:scale-110"
                aria-label="Contact"
            >
                <FaEnvelope className="w-5 h-5" />
            </Link>
        </motion.div>
    )
}
