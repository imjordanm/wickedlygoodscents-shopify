import * as React from "react"
import { Layout } from "../components/layout"
import { heading, paragraph, container } from "./404.module.css"

export default function AboutPage() {
  return (
    <Layout>
      <div className={container}>
        <h1 className={heading}>About Wickedly Good Scents</h1>
        <p className={paragraph}>
          We are a candle-making business out of South Dakota.
        </p>
      </div>
    </Layout>
  )
}
