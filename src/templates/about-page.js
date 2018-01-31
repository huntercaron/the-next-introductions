import React from 'react';
import styled from 'styled-components'

// styled components
const Title = styled.h1`

`

// page template component
export default function AboutPage({ data }) {
  const pageData = data.markdownRemark;

  return (
    <div>
      <Title>{pageData.title}</Title>

      <p>
        {pageData.description}
      </p>

    </div>
  );
};


// template query
export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        description
      }
    }
  }
`;
