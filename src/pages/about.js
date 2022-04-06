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
      <p>my name is josh</p>

      <p>i'm a software developer based in los angeles, ca</p>

      <p>check out my work on <a href={`https://github.com/strangesongs`}>github</a></p>
      
      or <a href={`../../j-cretella-resume.pdf`} download>download my resume here</a>

    
    </Layout>
  )
}

export default AboutPage