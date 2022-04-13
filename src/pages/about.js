import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="about me">
        <StaticImage
        alt="Ed, a character from the anime series Cowboy Bebop"
        src="../images/ed.jpeg"
        />
      <p>my name is josh cretella</p>

      <p>i'm a software engineer based in los angeles, ca</p>

      <p>my work uses javascript, react, node.js, express and redux</p>

      <p>outside of programming, i'm interested in urban planning, architecture, photography, jazz, hiking in the desert, cookbooks, comic books and eating my way across los angeles</p> 
      
      <p><a href={`../../j-cretella-resume.pdf`} download>download my resume</a>
      <p><a href={`mailto:jcrtll@protonmail.com`}>send me an email</a></p>
      <p><a href={`https://github.com/strangesongs`}>github</a></p>
      <a href={`https://www.linkedin.com/in/josh-cretella/`}>linkedin</a></p>

    </Layout>
  )
}

export default AboutPage