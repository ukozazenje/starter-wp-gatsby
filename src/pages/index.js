import React, {Component} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

class BlogIndex extends Component {
  render() {
    return (
      <Layout>
        <SEO title="All posts" />
        <h1>Home Page</h1>
      </Layout>
    )
  }
}

export default BlogIndex
