import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="hello">
      <p>welcome to my personal page
        this is a personal portfolio page, as well as a blog of writing about programming, tech and whatever else i want to discuss
      </p>    
      <StaticImage
        alt="Ed, a character from the anime series Cowboy Bebop"
        src="../images/ed.jpeg"
      />
    </Layout>
  )
}

export default IndexPage