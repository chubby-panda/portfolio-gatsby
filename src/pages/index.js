import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout/Layout"
import PortfolioList from "../components/PortfolioList/PortfolioList"

const getImage = graphql`
  {
    fluid: file(relativePath: { eq: "portfolio-showcase.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, grayscale: false) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default function Home() {
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
          <small>WEB DEVELOPER</small>
          <h1>Hi, I'm Sophie</h1>
          <p>
            And I'm an enthusiastic web developer currently enrolled in the She
            Codes Plus program in Perth, with experience in React.js, CSS,
            SASS/SCSS, JavaScript, Python, REST APIs, AWS and more. I have a
            background in content writing and foreign language communication.
            I'm passionate about high-quality UX, finding simple solutions to
            complex problems, and building beautiful websites.
          </p>
          <p>
            I'm currently seeking opportunities in the Perth Metropolitan area
            and would love to speak with you about your next project.
          </p>
          <p className="signature">SPhoon</p>
        </div>
      </div>

      <div id="skills">
        <h2>Skills</h2>
        <div id="skills-container">
          <div className="skill">
            <div className="big-number">01</div>
            <div className="skill-right">
              <h3>Frontend</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur omnis obcaecati velit libero aliquid. Fugiat in
                dicta aut quasi nesciunt?
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="big-number">02</div>
            <div className="skill-right">
              <h3>Backend</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur omnis obcaecati velit libero aliquid. Fugiat in
                dicta aut quasi nesciunt?
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="big-number">03</div>
            <div className="skill-right">
              <h3>Content</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur omnis obcaecati velit libero aliquid. Fugiat in
                dicta aut quasi nesciunt?
              </p>
            </div>
          </div>
          <div className="skill">
            <div className="big-number">04</div>
            <div className="skill-right">
              <h3>Languages</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur omnis obcaecati velit libero aliquid. Fugiat in
                dicta aut quasi nesciunt?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div id="portfolio-showcase-header">
          <h2>Portfolio</h2>
          <Link className="btn" to="portfolio">
            View all
          </Link>
        </div>
        <PortfolioList />
      </div>

      {/* <div id="quote-section">
        <div id="quote">
          <h4>&#x201D;</h4>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            nesciunt dolorum alias provident aut unde eveniet saepe. Sint
            perspiciatis iste neque consequuntur eum omnis corporis!"
          </p>
          <p className="bold">Random Name</p>
          <p className="subtext">Job title</p>
        </div>
        <div id="quote-images">
          <div id="quote-image-container">Image here</div>
          <div id="quote-image-container">Image here</div>
          <div id="quote-image-container">Image here</div>
        </div>
      </div> */}

      <div id="contact">
        <h2>Contact</h2>
        <form method="post" action="https://formspree.io/f/mgepyzzd">
          <div className="form-item">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" />
          </div>
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="_replyto" />
          </div>
          <div className="form-item">
            <label htmlFor="message">Message</label>
            <textarea id="message" type="text" name="message" />
          </div>
          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </Layout>
  )
}
