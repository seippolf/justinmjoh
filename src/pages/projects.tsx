import React from 'react'
import Layout from '../components/Layout/Layout'

export function Head() {
    return (
        <>
            <title>Projects | Justin Johnson</title>
            <meta name="description" content="Justin Johnson is a web developer in Tucson, Arizona. Here are some of Justin's projects."/>
            <link rel="canonical" href="http://justinmjoh.com/projects"/>
        </>
    )
}

export default function ProjectsPage() {
    return (
        <Layout>
            <article className="space-y-2">
                <h2 className="text-xl font-bold underline">Projects</h2>
                <h3 className="font-bold underline">justinmjoh.com</h3>
                <p>
                    Let this site serve as an example. Its built on top of Gatsby and
                    uitilizes GitHub Actions for continuos deployment.
                </p>
                <ul className="list-disc pl-8 pb-4">
                    <li className="text-cyan-600">
                        <span className="text-slate-200">
                            <a className="duration-200 hover:text-pink-600" href="https://tailwindcss.com/">Tailwind</a> (frontend / CSS)
                        </span>
                    </li>
                    <li className="text-cyan-600">
                        <span className="text-slate-200">
                            <a className="duration-200 hover:text-pink-600" href="https://www.gatsbyjs.com/">GatsbyJS</a> (rendering)
                        </span>
                    </li>
                    <li className="text-cyan-600">
                        <span className="text-slate-200">
                            <a className="duration-200 hover:text-pink-600" href="https://pages.github.com/">GitHub Pages</a> (hosting)
                        </span>
                    </li>
                </ul>
                <h3 className="font-bold underline">CheckThatEmail</h3>
                <p>
                    Programmatic scam detection never looked so good. Built as a 48-hour coding
                    challenge for myself, I intermittently update this to extend how it can predict
                    scams based on an e-mail address alone.
                </p>
                <ul className="list-disc pl-8 pb-4">
                    <li className="text-cyan-600">
                        <span className="text-slate-200">
                            <a className="duration-200 hover:text-pink-600" href="https://nextjs.org/">Next.js</a> (Framework)
                        </span>
                    </li>
                    <li className="text-cyan-600">
                        <span className="text-slate-200">
                            <a className="duration-200 hover:text-pink-600" href="https://tailwindcss.com/">Tailwind</a> (frontend / CSS)
                        </span>
                    </li>
                </ul>
                <h3 className="font-bold underline">Persistent Telnet Proxy</h3>
                <p>
                    Self reconnecting telnet client software (needs to be installed on host and server) that allows
                    connections to persist across network drops and IP changes. Utilizes a TCP-inspired buffering 
                    system to store packets until a connection is re-established.
                </p>
                <ul className="list-disc pl-8">
                    <li className="text-cyan-600">
                        <p className='text-slate-200'>C (language)</p>
                    </li>
                    <li className="text-cyan-600">
                        <span className="text-slate-200">
                            <a className="duration-200 hover:text-pink-600" href="https://www.gnu.org/software/libc/manual/html_node/Sockets.html">GNU Socket Library</a> (library)
                        </span>
                    </li>
                </ul>
            </article>
        </Layout>
    )
}
