import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Ed, a character from the anime series Cowboy Bebop"
        src="../images/ed.jpeg"
      />
    </Layout>
  )
}

export default IndexPage