import React, { useState } from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "./Navbar.css"

const styles = {
  transition: "all 0.5s ease-in-out",
}

const Navbar = () => {
  const [menuStyles, setMenuStyles] = useState({
    opacity: 0,
    scale: 0,
  })

  const showMenu = e => {
    menuStyles.opacity > 0
      ? setMenuStyles({ opacity: 0, transform: "-10px" })
      : setMenuStyles({ opacity: 1, transform: "0" })
  }

  return (
    <nav id="navbar">
      <button onClick={showMenu}>Menu</button>
      <ul
        style={{
          ...styles,
          opacity: menuStyles.opacity,
          transform: "translateX(" + menuStyles.transform + ")",
        }}
      >
        <li>
          <Link className="menu-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <AnchorLink to="/#skills" title="Skills" className="menu-item">
            Skills
          </AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#portfolio" title="Portfolio" className="menu-item">
            Portfolio
          </AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#contact" title="Contact" className="menu-item">
            Contact
          </AnchorLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
