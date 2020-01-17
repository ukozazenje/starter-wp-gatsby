import React, {Component} from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost
    return (
      <Layout>
        <SEO title={post.title} />
        <h1
          dangerouslySetInnerHTML={{
            __html: post.title,
          }}
        />
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </Layout>
    )
  }
}

export default Post

export const pageQuery = graphql`
  query PostPage($id: String!) {
    wordpressPost(id: {eq: $id}) {
      id
      title
      content
    }
  }
`
