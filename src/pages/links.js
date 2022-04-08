import * as React from 'react'
import Layout from '../components/layout'

const LinksPage = () => {
    return (
        <Layout pageTitle="links">
            <p>in no order of importance, here's a list of blogs, writers, articles and other resources i endorse</p>
            tech + programming
             <ul>
                 <li><a href={`https://techwontsave.us/`}>tech won't save us podcast</a></li>
                 <li><a href={`https://web3isgoinggreat.com/`}>web3 is going just great</a></li>
                 <li><a href={`https://logicmag.io/`}>logic magazine</a></li>
                 <li><a href={`https://blog.nelhage.com/`}>made of bugs</a></li>
                 <li><a href={`reallifemag.com`}>real life</a></li>
                 <li><a href={`jvns.ca`}>julia evans</a></li>
                 <li><a href={`https://alexkondov.com/tao-of-node/`}>tao of node</a></li>
                 <li><a href={`https://poignant.guide/`}>why's (poigant) guide to ruby</a></li>
                 <li><a href={`https://hack-yourself-first.com/`}>hack yourself first</a></li>
                 <li><a href={`https://codesmith.io`}>codesmith</a></li>
             </ul>

             assorted links
             <ul>
                 <li><a href={`https://archive.org.us/`}>internet archive</a></li>
                 <li><a href={`thebaffler.com`}>the baffler</a></li>
                 <li><a href={`https://knock-la.com`}>knock la</a></li>
                 <li><a href={`https://monsterbrains.blogspot.com/`}>monster brains</a></li>
             </ul>

             music
             <ul>
                 <li><a href={`https://aquariumdrunkard.com/`}>aquarium drunkard</a></li>
                 <li><a href={`https://www.thewire.co.uk/home/`}>the wire</a></li>
                 <li><a href={`https://ra.co/`}>resident advisor</a></li>
                 <li><a href={`https://thequietus.com/`}>the quietus</a></li>
             </ul>
             
        </Layout>
    )
}

export default LinksPage
