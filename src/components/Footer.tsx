import React from 'react'
import {FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-slate-900 py-2 border-t border-pink-600 text-center">
            <div className="inline-flex space-x-4 md:space-x-2 py-2 px-2 border border-yellow-400 rounded-xl">
                <a href="https://github.com/seippolf">
                    <FaGithub className="h-6 w-6 md:h-5 md:w-5 duration-200 hover:text-cyan-600 focus:text-cyan-600" title="GitHub" />
                </a>
                <a href="https://www.instagram.com/justinmjoh">
                    <FaInstagram className="h-6 w-6 md:h-5 md:w-5 duration-200 hover:text-cyan-600 focus:text-cyan-600" title="Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/justinmjoh">
                    <FaLinkedinIn className="h-6 w-6 md:h-5 md:w-5 duration-200 hover:text-cyan-600 focus:text-cyan-600" title="LinkedIn" />
                </a>
                <a href="https://twitter.com/justinmjoh">
                    <FaTwitter className="h-6 w-6 md:h-5 md:w-5 duration-200 hover:text-cyan-600 focus:text-cyan-600" title="Twitter" />
                </a>
            </div>
            <p className="text-sm py-2 px-2 font-vcr">&copy; { new Date().getFullYear() } by Justin Johnson</p>
        </footer>
    )
}