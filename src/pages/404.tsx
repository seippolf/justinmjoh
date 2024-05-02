// import React from 'react';
// import Layout from '../components/Layout/Layout';
// import { Link } from 'gatsby';


// export function Head() {
//     return (
//         <>
//             <title>404 | Justin Johnson</title>
//             <meta name="description" content="404 error, page was not found!"/>
//             <link rel="canonical" href="http://justinmjoh.com/404"/>
//         </>
//     )
// }

// export default function NotFoundPage() {
//     return(
//         <Layout>
//             <article className="text-center">
//                 <h2 className="text-5xl underline">404</h2>
//                 <p className="p-2">You seem sorta lost.</p>
//                 <p className="p-2">But we all do too, sometimes.</p>
//                 <p className="p-2">Let me take you <Link to="/" className="underline hover:text-pink-600 focus:text-pink-600 active:text-pink-600">home</Link>.</p>
//             </article>
//         </Layout>
//     )
// }
import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>