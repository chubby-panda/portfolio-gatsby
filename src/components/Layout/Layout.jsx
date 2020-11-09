import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer"
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="page-container">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
