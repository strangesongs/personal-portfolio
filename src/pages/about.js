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

      <p>i'm a full stack software engineer based in los angeles, ca</p>

      <p>my work is built on javascript,  react, typescript, node.js and express.</p>

      <p>check out my work on <a href={`https://github.com/strangesongs`}>github</a></p>
      
      <p><a href={`../../j-cretella-resume.pdf`} download>download my resume here</a> or on <a href={`https://www.linkedin.com/in/josh-cretella/`}>linkedin</a></p>
      
      <p><a href={`mailto:jcrtll@protonmail.com`}>send me an email</a></p>

    </Layout>
  )
}

export default AboutPage