// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import SEO from "../modules/utility/seo"

const SecondPage = (props: PageProps) => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
