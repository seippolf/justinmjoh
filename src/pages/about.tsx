import React from 'react'
import Layout from '../components/Layout/Layout'
import photo from '../images/about-photo.jpeg'

export function Head() {
    return (
        <>
            <title>About Me | Justin Johnson</title>
            <meta name="description" content="Justin Johnson is a web developer in Tucson, Arizona. Here is some information about Justin."/>
            <link rel="canonical" href="http://justinmjoh.com/about"/>
        </>
    )
}

export default function AboutPage() {
    return (
        <Layout>
            <article className="space-y-4">
                <img src={ photo } width="148" height="148" alt="Justin Johnson" className="mx-auto border border-cyan-600 rounded-xl"/>
                <h2 className="text-xl font-bold underline">About Me</h2>
                <p>
                    I grew up in the suburbs adjacent to the tech centers of Bellevue and Redmond. From a young
                    age, probably elementary school I began taking apart computers and various electronics (with
                    intermittent success putting them back together). After seeing Tron: Legacy, it
                    was pretty much set that computers would become my career path.
                </p>
                <p>
                    Throughout much of middle and high school, programming, scripting and gaming constituted for much
                    of my time. I remember my friends and I making many strange projects using breadboards and microcontrollers,
                    when we weren't playing either Counter Strike or Halo. For the latter part of highs chool I attended workshops 
                    at DigiPen institute that covered web development, cyber-security, AI and robotics, and even sound engineering. 
                </p>
                <p>
                    After highschool, I attended Bellevue College where I learned perseverance, ultimately earning my Associate in Science
                    degree amidst the height of the Coronavirus Pandemic. After graduation, I moved to Tucson, Arizona to further my 
                    education, now finishing my Bachelor in Computer Science degree. Outside of class, I do full stack development for the university's 
                    business affairs team. 
                </p>
            </article>
        </Layout>
    )
}