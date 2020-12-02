import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import "./PortfolioCard.css"

const PortfolioCard = ({ item }) => {
  const getSubString = string => {
    if (string.length > 150) {
      string = string.substring(0, 150)
      return string
    }
  }

  return (
    <Link id="portfolio-card" to={`/portfolio/${item.slug}`}>
      <article id="portfolio-item" key={item.id}>
        <div className="portfolio-item-text">
          <h4>{item.title}</h4>
          <div className="thumbnail">
            <Image fluid={item.images[0].fluid} alt={item.title} />
          </div>
          <p>{getSubString(item.description.description)}...</p>
        </div>
        <Link className="btn btn-dark-solid" to={`/portfolio/${item.slug}`}>
          Read more
        </Link>
      </article>
    </Link>
  )
}

export default PortfolioCard
