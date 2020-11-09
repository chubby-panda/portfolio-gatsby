import React, { useState } from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import "./Navbar.css"

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  const showMenu = e => {
    if (menuVisible) {
      setMenuVisible(false)
    } else {
      setMenuVisible(true)
    }
  }

  return (
    <nav id="navbar">
      <ul>
        <li>
          <button onClick={showMenu}>
            {menuVisible ? (
              <FontAwesomeIcon icon={faTimes} size="2x" className="icon" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="2x" className="icon" />
            )}
          </button>
        </li>
        <li>
          <Link
            className={menuVisible ? "menu-item" : "menu-item menu-item-hide"}
            to="/"
          >
            Home
          </Link>
        </li>
        <small className={menuVisible ? null : "menu-item-hide"}>|</small>
        <li>
          <AnchorLink
            to="/#skills"
            title="Skills"
            className={menuVisible ? "menu-item" : "menu-item menu-item-hide"}
          >
            Skills
          </AnchorLink>
        </li>
        <small className={menuVisible ? null : "menu-item-hide"}>|</small>
        <li>
          <AnchorLink
            to="/#portfolio"
            title="Portfolio"
            className={menuVisible ? "menu-item" : "menu-item menu-item-hide"}
          >
            Portfolio
          </AnchorLink>
        </li>
        <small className={menuVisible ? null : "menu-item-hide"}>|</small>
        <li>
          <AnchorLink
            to="/#contact"
            title="Contact"
            className={menuVisible ? "menu-item" : "menu-item menu-item-hide"}
          >
            Contact
          </AnchorLink>
        </li>
        {/* <small className={menuVisible ? null : "menu-item-hide"}>|</small>
        <li>
          <Link
            className={menuVisible ? "menu-item" : "menu-item menu-item-hide"}
            to="/blog/"
          >
            Blog
          </Link>
        </li>
        <small className={menuVisible ? null : "menu-item-hide"}>|</small>
        <li>
          <Link
            className={menuVisible ? "menu-item" : "menu-item menu-item-hide"}
            to="/products/"
          >
            Products
          </Link>
        </li>
        <small className={menuVisible ? null : "menu-item-hide"}>|</small>
        <li>
          <Link
            className={menuVisible ? "menu-item" : "menu-item menu-item-hide"}
            to="/examples/"
          >
            Examples
          </Link>
        </li>
        <small className={menuVisible ? null : "menu-item-hide"}>|</small>
        <li>
          <Link
            className={menuVisible ? "menu-item" : "menu-item menu-item-hide"}
            to="/images/"
          >
            Images
          </Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default Navbar
