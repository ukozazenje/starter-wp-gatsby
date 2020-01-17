import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

class Page extends Component {
  render() {
    const page = this.props.data.wordpressPage;
    return (
      <Layout>
        <SEO title={page.title} />
        <h1
          dangerouslySetInnerHTML={{
            __html: page.title,
          }}
        />
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: page.content,
          }}
        />
      </Layout>
    );
  }
}

export default Page;

export const pageQuery = graphql`
  query SinglePage($id: String!) {
    wordpressPage(id: { eq: $id }) {
      id
      title
      content
    }
  }
`;
