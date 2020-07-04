import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

import {
  HeaderLogo,
  HeadingXL,
  HeadingL,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from '../components';

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 15vh;
  }
`;

const TextHome = styled.p`
  color: var(--dark-color-light);
  display: block;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 10vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 28em;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 19px;
    margin-bottom: 7vh;
  }
`;

const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`;

const Home = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <TextHome>
          <h1>Root Note</h1>
          <div class="toc">
            <a class="key" href="#c">C</a>
            <a class="key" href="#c-sharp">C♯</a>
            <a class="key" href="#d-flat">D♭</a>
            <a class="key" href="#d">D</a>
            <a class="key" href="#d-sharp">D♯</a>
            <a class="key" href="#e-flat">E♭</a>
            <a class="key" href="#e">E</a>
            <a class="key" href="#f">F</a>
            <a class="key" href="#f-sharp">F♯</a>
            <a class="key" href="#g-flat">G♭</a>
            <a class="key" href="#g">G</a>
            <a class="key" href="#g-sharp">G♯</a>
            <a class="key" href="#a-flat">A♭</a>
            <a class="key" href="#a">A</a>
            <a class="key" href="#a-sharp">A♯</a>
            <a class="key" href="#b-flat">B♭</a>
            <a class="key" href="#b">B</a>
          </div>

          <h3 id="c">C Ionian</h3>
          <p>
          C	D	E	F	G	A	B	C
          </p>
          <h3>C Dorian</h3>
          <p>
          C	D	E♭	F	G	A	B♭	C
          </p>
          <h3>C Phrygian</h3>
          <p>
          C	D♭	E♭	F	G	A♭	B♭	C
          </p>
          <h3>C Lydian</h3>
          <p>
          C	D	E	F♯	G	A	B	C
          </p>
          <h3>C Mixolydian</h3>
          <p>
          C	D	E	F	G	A	B♭	C
          </p>
          <h3>C Aeolian</h3>
          <p>
          C	D	E♭	F	G	A♭	B♭	C
          </p>
          <h3>C Locrian</h3>
          <p>
          C	D♭	E♭	F	G♭	A♭	B♭	C
          </p>

          <hr></hr>

          <h3 id="c-sharp">C♯ Ionian</h3>
          <p>
          C♯	D♯	E♯	F♯	G♯	A♯	B♯	C♯
          </p>
          <h3>C♯ Dorian</h3>
          <p>
          C♯	D♯	E	F♯	G♯	A♯	B	C♯
          </p>
          <h3>C♯ Phrygian</h3>
          <p>
          C♯	D	E	F♯	G♯	A	B	C♯
          </p>
          <h3>C♯ Lydian</h3>
          <p>
          C♯	D♯	E♯	F♯♯	G♯	A♯	B♯	C♯
          </p>
          <h3>C♯ Mixolydian</h3>
          <p>
          C♯	D♯	E♯	F♯	G♯	A♯	B	C♯
          </p>
          <h3>C♯ Aeolian</h3>
          <p>
          C♯	D♯	E	F♯	G♯	A	B	C♯
          </p>
          <h3>C♯ Locrian</h3>
          <p>
          C♯	D	E	F♯	G	A	B	C♯
          </p>

          <hr></hr>


          <h3 id="d-flat">D♭ Ionian</h3>
          <p>
          D♭	E♭	F	G♭	A♭	B♭	C	D♭
          </p>
          <h3>D♭ Dorian</h3>
          <p>
          D♭	E♭	F♭	G♭	A♭	B♭	C♭	D♭
          </p>
          <h3>D♭ Phrygian</h3>
          <p>
          D♭	E♭♭	F♭	G♭	A♭	B♭♭	C♭	D♭
          </p>
          <h3>D♭ Lydian</h3>
          <p>
          D♭	E♭	F	G	A♭	B♭	C	D♭
          </p>
          <h3>D♭ Mixolydian</h3>
          <p>
          D♭	E♭	F	G♭	A♭	B♭	C	D♭
          </p>
          <h3>D♭ Aeolian</h3>
          <p>
          D♭	E♭	F♭	G♭	A♭	B♭♭	C♭	D♭
          </p>
          <h3>D♭ Locrian</h3>
          <p>
          D♭	E♭♭	F	G	A♭♭	B♭♭	C♭	D♭
          </p>

          <hr></hr>


          <h3 id="d">D Ionian</h3>
          <p>
          D	E	F♯ 	G	A	B	C♯	D
          </p>
          <h3>D Dorian</h3>
          <p>
          D	E	F	G	A	B	C	D
          </p>
          <h3>D Phrygian</h3>
          <p>
          D	E♭	F	G	A	B♭	C	D
          </p>
          <h3>D Lydian</h3>
          <p>
          D	E	F♯ 	G♯	A	B	C♯	D
          </p>
          <h3>D Mixolydian</h3>
          <p>
          D	E	F♯ 	G	A	B	C	D
          </p>
          <h3>D Aeolian</h3>
          <p>
          D	E	F	G	A	B♭	C	D
          </p>
          <h3>D Locrian</h3>
          <p>
          D	E♭	F	G	A♭	B♭	C♯	D
          </p>

          <hr></hr>


          <h3 id="d-sharp">D♯ Ionian</h3>
          <p>
          D♯	E♯	F♯♯	G♯	A♯	B♯	C♯♯	D♯
          </p>
          <h3>D♯ Dorian</h3>
          <p>
          D♯	E♯	F♯	G♯	A♯	B♯	C♯	D♯
          </p>
          <h3>D♯ Phrygian</h3>
          <p>
          D♯	E	F♯	G♯	A♯	B	C♯	D♯
          </p>
          <h3>D♯ Lydian</h3>
          <p>
          D♯	E♯	F♯♯	G♯♯	A♯	B♯	C♯♯	D♯
          </p>
          <h3>D♯ Mixolydian</h3>
          <p>
          D♯	E♯	F♯♯	G♯	A♯	B♯	C♯	D♯
          </p>
          <h3>D♯ Aeolian</h3>
          <p>
          D♯	E♯	F♯	G♯	A♯	B	C♯	D♯
          </p>
          <h3>D♯ Locrian</h3>
          <p>
          D♯	E	F♯	G♯	A	B	C♯	D♯
          </p>

          <hr></hr>


          <h3 id="e-flat">E♭ Ionian</h3>
          <p>
          E♭	F	G	A♭	B♭	C	D	E♭
          </p>
          <h3>E♭ Dorian</h3>
          <p>
          E♭	F	G♭	A♭	B♭	C	D♭	E♭
          </p>
          <h3>E♭ Phrygian</h3>
          <p>
          E♭	F♭	G♭	A♭	B♭	C♭	D♭	E♭
          </p>
          <h3>E♭ Lydian</h3>
          <p>
          E♭	F	G	A	B♭	C	D	E♭
          </p>
          <h3>E♭ Mixolydian</h3>
          <p>
          E♭	F	G	A♭	B♭	C	D♭	E♭
          </p>
          <h3>E♭ Aeolian</h3>
          <p>
          E♭	F	G♭	A♭	B♭	C♭	D♭	E♭
          </p>
          <h3>E♭ Locrian</h3>
          <p>
          E♭	F♭	G♭	A♭	B♭♭	C♭	D♭	E♭
          </p>

          <hr></hr>


          <h3 id="e">E Ionian</h3>
          <p>
          E	F♯	G♯	A	B	C♯	D♯	E
          </p>
          <h3>E Dorian</h3>
          <p>
          E	F♯	G	A	B	C♯	D	E
          </p>
          <h3>E Phrygian</h3>
          <p>
          E	F	G	A	B	C	D	E
          </p>
          <h3>E Lydian</h3>
          <p>
          E	F♯	G♯	A♯	B	C♯	D♯	E
          </p>
          <h3>E Mixolydian</h3>
          <p>
          E	F♯	G♯	A	B	C♯	D	E
          </p>
          <h3>E Aeolian</h3>
          <p>
          E	F♯	G	A	B	C	D	E
          </p>
          <h3>E Locrian</h3>
          <p>
          E	F	G	A	B♭	C	D	E
          </p>

          <hr></hr>


          <h3 id="f">F Ionian</h3>
          <p>
          F	G	A	B♭	C	D	E	F
          </p>
          <h3>F Dorian</h3>
          <p>
          F	G	A♭	B♭	C	D	E♭	F
          </p>
          <h3>F Phrygian</h3>
          <p>
          F	G♭	A♭	B♭	C	D♭	E♭	F
          </p>
          <h3>F Lydian</h3>
          <p>
          F	G	A	B	C	D	E	F
          </p>
          <h3>F Mixolydian</h3>
          <p>
          F	G	A	B♭	C	D	E♭	F
          </p>
          <h3>F Aeolian</h3>
          <p>
          F	G	A♭	B♭	C	D♭	E♭	F
          </p>
          <h3>F Locrian</h3>
          <p>
          F	G♭	A♭	B♭	C♭	D♭	E♭	F
          </p>

          <hr></hr>


          <h3 id="f-sharp">F♯ Ionian</h3>
          <p>
          F♯	G♯	A♯	B	C♯	D♯	E♯	F♯
          </p>
          <h3>F♯ Dorian</h3>
          <p>
          F♯	G♯	A	B	C♯	D♯	E	F♯
          </p>
          <h3>F♯ Phrygian</h3>
          <p>
          F♯	G	A	B	C♯	D	E	F♯
          </p>
          <h3>F♯ Lydian</h3>
          <p>
          F♯	G♯	A♯	B♯	C♯	D♯	E♯	F♯
          </p>
          <h3>F♯ Mixolydian</h3>
          <p>
          F♯	G♯	A♯	B	C♯	D♯	E	F♯
          </p>
          <h3>F♯ Aeolian</h3>
          <p>
          F♯	G♯	A	B	C♯	D	E	F♯
          </p>
          <h3>F♯ Locrian</h3>
          <p>
          F♯	G	A♯	B	C	D	E	F♯
          </p>

          <hr></hr>


          <h3 id="g-flat">G♭ Ionian</h3>
          <p>
          G♭	A♭	B♭	C♭	D♭	E♭	F	G♭
          </p>
          <h3>G♭ Dorian</h3>
          <p>
          G♭	A♭	B♭♭	C♭	D♭	E♭	F♭	G♭
          </p>
          <h3>G♭ Phrygian</h3>
          <p>
          G♭	A♭♭	B♭♭	C♭	D♭	E♭♭	F♭	G♭
          </p>
          <h3>G♭ Lydian</h3>
          <p>
          G♭	A♭	B♭	C	D♭	E♭	F	G♭
          </p>
          <h3>G♭ Mixolydian</h3>
          <p>
          G♭	A♭	B♭	C♭	D♭	E♭	F♭	G♭
          </p>
          <h3>G♭ Aeolian</h3>
          <p>
          G♭	A♭	B♭♭	C♭	D♭	E♭♭	F♭	G♭
          </p>
          <h3>G♭ Locrian</h3>
          <p>
          G♭	A♭♭	B♭♭	C♭	D♭♭	E♭♭	F♭	G♭
          </p>

          <hr></hr>


          <h3 id="g">G Ionian</h3>
          <p>
          G	A	B	C	D	E	F♯	G
          </p>
          <h3>G Dorian</h3>
          <p>
          G	A	B♭	C	D	E	F	G
          </p>
          <h3>G Phrygian</h3>
          <p>
          G	A♭	B♭	C	D	E♭	F	G
          </p>
          <h3>G Lydian</h3>
          <p>
          G	A	B	C♯	D	E	F♯	G
          </p>
          <h3>G Mixolydian</h3>
          <p>
          G	A	B	C	D	E	F	G
          </p>
          <h3>G Aeolian</h3>
          <p>
          G	A	B♭	C	D	E♭	F	G
          </p>
          <h3>G Locrian</h3>
          <p>
          G	A♭	B♭	C	D♭	E♭	F	G
          </p>

          <hr></hr>


          <h3 id="g-sharp">G♯ Ionian</h3>
          <p>
          G♯	A♯	B♯	C♯	D♯	E♯	F♯♯	G♯
          </p>
          <h3>G♯ Dorian</h3>
          <p>
          G♯	A♯	B	C♯	D♯	E♯	F♯	G♯
          </p>
          <h3>G♯ Phrygian</h3>
          <p>
          G♯	A	B	C♯	D♯	E	F♯	G♯
          </p>
          <h3>G♯ Lydian</h3>
          <p>
          G♯	A♯	B♯	C♯♯	D♯	E♯	F♯♯	G♯
          </p>
          <h3>G♯ Mixolydian</h3>
          <p>
          G♯	A♯	B♯	C♯	D♯	E♯	F♯	G♯
          </p>
          <h3>G♯ Aeolian</h3>
          <p>
          G♯	A♯	B	C♯	D♯	E	F♯	G♯
          </p>
          <h3>G♯ Locrian</h3>
          <p>
          G♯	A	B	C♯	D	E	F♯	G♯
          </p>

          <hr></hr>


          <h3 id="a-flat">A♭ Ionian</h3>
          <p>
          A♭	B♭	C	D♭	E♭	F	G	A♭
          </p>
          <h3>A♭ Dorian</h3>
          <p>
          A♭	B♭	C♭	D♭	E♭	F	G♭	A♭
          </p>
          <h3>A♭ Phrygian</h3>
          <p>
          A♭	B♭♭	C♭	D♭	E♭	F♭	G♭	A♭
          </p>
          <h3>A♭ Lydian</h3>
          <p>
          A♭	B♭	C	D	E♭	F	G	A♭
          </p>
          <h3>A♭ Mixolydian</h3>
          <p>
          A♭	B♭	C	D♭	E♭	F	G♭	A♭
          </p>
          <h3>A♭ Aeolian</h3>
          <p>
          A♭	B♭	C♭	D♭	E♭	F♭	G♭	A♭
          </p>
          <h3>A♭ Locrian</h3>
          <p>
          A♭	B♭♭	C♭	D♭	E♭♭	F♭	G♭	A♭
          </p>

          <hr></hr>


          <h3 id="a">A Ionian</h3>
          <p>
          A	B	C♯	D	E	F♯	G♯	A
          </p>
          <h3>A Dorian</h3>
          <p>
          A	B	C	D	E	F♯	G	A
          </p>
          <h3>A Phrygian</h3>
          <p>
          A	B♭	C	D	E	F	G	A
          </p>
          <h3>A Lydian</h3>
          <p>
          A	B	C♯	D♯	E	F♯	G♯	A
          </p>
          <h3>A Mixolydian</h3>
          <p>
          A	B	C♯	D	E	F♯	G	A
          </p>
          <h3>A Aeolian</h3>
          <p>
          A	B	C	D	E	F	G	A
          </p>
          <h3>A Locrian</h3>
          <p>
          A	B♭	C	D	E♭	F	G	A
          </p>

          <hr></hr>


          <h3 id="a-sharp">A♯ Ionian</h3>
          <p>
          A♯	B♯	C♯♯	D♯	E♯	F♯♯	G♯♯	A♯
          </p>
          <h3>A♯ Dorian</h3>
          <p>
          A♯	B♯	C♯	D♯	E♯	F♯♯	G♯	A♯
          </p>
          <h3>A♯ Phrygian</h3>
          <p>
          A♯	B♯	C♯	D♯	E♯	F♯♯	G♯	A♯
          </p>
          <h3>A♯ Lydian</h3>
          <p>
          A♯	B♯	C♯♯	D♯♯	E♯	F♯♯	G♯♯	A♯
          </p>
          <h3>A♯ Mixolydian</h3>
          <p>
          A♯	B♯	C♯♯	D♯	E♯	F♯♯	G♯	A♯
          </p>
          <h3>A♯ Aeolian</h3>
          <p>
          A♯	B♯	C♯	D♯	E♯	F♯	G♯	A♯
          </p>
          <h3>A♯ Locrian</h3>
          <p>
          A♯	B♯	C♯	D♯	E♯	F♯	G♯	A♯
          </p>

          <hr></hr>


          <h3 id="b-flat">B♭ Ionian</h3>
          <p>
          B♭	C	D	E♭	F	G	A	B♭
          </p>
          <h3>B♭ Dorian</h3>
          <p>
          B♭	C	D♭	E♭	F	G	A♭	B♭
          </p>
          <h3>B♭ Phrygian</h3>
          <p>
          B♭	C♭	D♭	E♭	F	G♭	A♭	B♭
          </p>
          <h3>B♭ Lydian</h3>
          <p>
          B♭	C	D	E	F	G	A	B♭
          </p>
          <h3>B♭ Mixolydian</h3>
          <p>
          B♭	C	D	E♭	F	G	A♭	B♭
          </p>
          <h3>B♭ Aeolian</h3>
          <p>
          B♭	C	D♭	E♭	F	G♭	A♭	B♭
          </p>
          <h3>B♭ Locrian</h3>
          <p>
          B♭	C♭	D♭	E♭	F♭	G♭	A♭	B♭
          </p>

          <hr></hr>


          <h3 id="b">B Ionian</h3>
          <p>
          B	C♯	D♯	E	F♯	G♯	A♯	B
          </p>
          <h3>B Dorian</h3>
          <p>
          B	C♯	D	E	F♯	G♯	A	B
          </p>
          <h3>B Phrygian</h3>
          <p>
          B	C	D	E	F♯	G	A	B
          </p>
          <h3>B Lydian</h3>
          <p>
          B	C♯	D♯	E♯	F♯	G♯	A♯	B
          </p>
          <h3>B Mixolydian</h3>
          <p>
          B	C♯	D♯	E	F♯	G♯	A	B
          </p>
          <h3>B Aeolian</h3>
          <p>
          B	C♯	D♯	E	F♯	G♯	A	B
          </p>
          <h3>B Locrian</h3>
          <p>
          B	C	D	E	F	G	A	B
          </p>

          </TextHome>
        </Hero>
      </Layout>
    </>
  );
};

export default Home;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
