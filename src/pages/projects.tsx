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
                <p>As I figure out how I want to implement projects on this page, let the site itself serve as one:</p>
                <h3 className="font-bold underline">justinmjoh.com</h3>
                <ul className="list-disc pl-8">
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
                            <a className="duration-200 hover:text-pink-600" href="https://www.gatsbyjs.com/products/cloud/">Gatsby Cloud</a> (server)
                        </span>
                    </li>
                </ul>
            </article>
        </Layout>
    )
}
