import * as React from "react"
import { Layout } from "../components/layout"
import { heading, paragraph, container } from "./404.module.css"

export default function ContactPage() {
  return (
    <Layout>
      <div className={container}>
        <h1 className={heading}>Contact Us</h1>
        <p className={paragraph}>
          We will add a form here and add email and social media information for you to get in touch with us.
        </p>
      </div>
    </Layout>
  )
}
