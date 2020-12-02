import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout/Layout"
import PortfolioList from "../components/PortfolioList/PortfolioList"
import ContactForm from "../components/ContactForm/ContactForm"

const getImage = graphql`
  {
    fluid: file(relativePath: { eq: "portrait.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, grayscale: false) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Home = () => {
  const data = useStaticQuery(getImage)

  return (
    <Layout>
      <div id="header">
        <div id="header-box-1"></div>
        <div id="header-box-2"></div>
      </div>
      <div id="showcase">
        <div id="showcase-image-container">
          <Image fluid={data.fluid.childImageSharp.fluid}></Image>
        </div>
        <div id="showcase-text-container">
          <h1>Hi, I'm Sophie</h1>
          <p>
            Junior Developer and Great Ape at Bonobo Labs, and She Codes Plus
            2020 graduate, with experience in JavaScript, React, Node, Python,
            Django, AWS, SCSS and more.
          </p>
          <p>
            Feel free to explore the portfolio section of this site, and if
            you're at the showcase right now, all of my She Codes Plus projects
            are already open in the browser.
          </p>
          <p>Thanks for stopping by!</p>
        </div>
      </div>

      <div id="skills">
        <h2>Skills</h2>
        <div id="skills-container">
          <div className="skill">
            <div className="big-number">
              <h2>01</h2>
            </div>
            <div className="skill-right">
              <h3>Frontend</h3>
              <p>
                Experience with modern HTML and CSS, SCSS/SASS, JavaScript, as
                well as frontend frameworks like React and Gatsby, and Google
                APIs.
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="big-number">
              <h2>02</h2>
            </div>
            <div className="skill-right">
              <h3>Backend</h3>
              <p>
                REST APIs using Django's REST framework, storage solutions with
                AWS S3, testing with Postman/Insomnia, Git version control
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="big-number">
              <h2>03</h2>
            </div>
            <div className="skill-right">
              <h3>Content</h3>
              <p>
                Social media marketing experience through Offspring Magazine,
                content published and distributed nationally throughout
                Australia
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="big-number">
              <h2>04</h2>
            </div>
            <div className="skill-right">
              <h3>Languages</h3>
              <p>
                Honour's degree in Applied Languages, with German, Spanish and
                Japanese. Worked and lived in a German/Spanish speaking
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div id="portfolio-showcase-header">
          <h2>Portfolio</h2>
          <Link className="btn btn-dark" to="portfolio">
            View all
          </Link>
        </div>
        <PortfolioList />
      </div>
      <ContactForm />
    </Layout>
  )
}

export default Home
