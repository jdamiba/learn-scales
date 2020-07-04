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

const scales = {
  "modes": [
    {
      "name": "C Ionian",
      "notes": "C	D	E	F	G	A	B	C"
    },
    {
      "name": "C Dorian",
      "notes": "C	D	E♭	F	G	A	B♭	C"
    },
    {
      "name": "C Dorian",
      "notes": "C	D♭	E♭	F	G	A♭	B♭	C"
    },
    {
      "name": "C Phrygian",
      "notes": "C	D♭	E♭	F	G	A♭	B♭	C"
    },
    {
      "name": "C Lydian",
      "notes": "C	D	E	F♯	G	A	B	C"
    },
    {
      "name": "C Mixolydian",
      "notes": "C	D	E	F	G	A	B♭	C"
    },
    {
      "name": "C Aeolian",
      "notes": "C	D	E♭	F	G	A♭	B♭	C"
    },
    {
      "name": "C Locrian",
      "notes": "C	D♭	E♭	F	G♭	A♭	B♭	C"
    },
    {
      "name": "C♯ Ionian",
      "notes": "C♯	D♯	E♯	F♯	G♯	A♯	B♯	C♯"
    },
    {
      "name": "C♯ Dorian",
      "notes": "C♯	D♯	E	F♯	G♯	A♯	B	C♯"
    },
    {
      "name": "C♯ Phrygian",
      "notes": "C♯	D	E	F♯	G♯	A	B	C♯"
    },
    {
      "name": "C♯ Lydian",
      "notes": "C♯	D♯	E♯	F♯♯	G♯	A♯	B♯	C♯"
    },
    {
      "name": "C♯ Mixolydian",
      "notes": "C♯	D♯	E♯	F♯	G♯	A♯	B	C♯"
    },
    {
      "name": "C♯ Aeolian",
      "notes": "C♯	D♯	E	F♯	G♯	A	B	C♯"
    },
    {
      "name": "C♯ Locrian",
      "notes": "C♯	D	E	F♯	G	A	B	C♯"
    },
    {
      "name": "D♭ Ionian",
      "notes": "D♭	E♭	F	G♭	A♭	B♭	C	D♭"
    },
    {
      "name": "D♭ Dorian",
      "notes": "D♭	E♭	F♭	G♭	A♭	B♭	C♭	D♭"
    },
    {
      "name": "D♭ Phrygian",
      "notes": "D♭	E♭♭	F♭	G♭	A♭	B♭♭	C♭	D♭"
    },
    {
      "name": "D♭ Lydian",
      "notes": "D♭	E♭	F	G	A♭	B♭	C	D♭"
    },
    {
      "name": "D♭ Mixolydian",
      "notes": "D♭	E♭	F	G♭	A♭	B♭	C	D♭"
    },
    {
      "name": "D♭ Aeolian",
      "notes": "D♭	E♭	F♭	G♭	A♭	B♭♭	C♭	D♭"
    },
    {
      "name": "D♭ Locrian",
      "notes": "D♭	E♭♭	F	G	A♭♭	B♭♭	C♭	D♭"
    },
    {
      "name": "D Ionian",
      "notes": "D	E	F♯ 	G	A	B	C♯	D"
    },
    {
      "name": "D Dorian",
      "notes": "D	E	F	G	A	B	C	D"
    },
    {
      "name": "D Phrygian",
      "notes": "D	E♭	F	G	A	B♭	C	D"
    },
    {
      "name": "D Lydian",
      "notes": "D	E	F♯ 	G♯	A	B	C♯	D"
    },
    {
      "name": "D Mixolydian",
      "notes": "D	E	F♯ 	G	A	B	C	D"
    },
    {
      "name": "D Aeolian",
      "notes": "D	E	F	G	A	B♭	C	D"
    },
    {
      "name": "D Locrian",
      "notes": "D	E♭	F	G	A♭	B♭	C♯	D"
    },
    {
      "name": "D♯ Ionian",
      "notes": "D♯	E♯	F♯♯	G♯	A♯	B♯	C♯♯	D♯"
    },
    {
      "name": "D♯ Dorian",
      "notes": "D♯	E♯	F♯	G♯	A♯	B♯	C♯	D♯"
    },
    {
      "name": "D♯ Phrygian",
      "notes": "D♯	E	F♯	G♯	A♯	B	C♯	D♯"
    },
    {
      "name": "D♯ Lydian",
      "notes": "D♯	E♯	F♯♯	G♯♯	A♯	B♯	C♯♯	D♯"
    },
    {
      "name": "D♯ Mixolydian",
      "notes": "D♯	E♯	F♯♯	G♯	A♯	B♯	C♯	D♯"
    },
    {
      "name": "D♯ Aeolian",
      "notes": "D♯	E♯	F♯	G♯	A♯	B	C♯	D♯"
    },
    {
      "name": "D♯ Locrian",
      "notes": "D♯	E	F♯	G♯	A	B	C♯	D♯"
    },
    {
      "name": "E♭ Ionian",
      "notes": "E♭	F	G	A♭	B♭	C	D	E♭"
    },
    {
      "name": "E♭ Dorian",
      "notes": "E♭	F	G♭	A♭	B♭	C	D♭	E♭"
    },
    {
      "name": "E♭ Phrygian",
      "notes": "E♭	F♭	G♭	A♭	B♭	C♭	D♭	E♭"
    },
    {
      "name": "E♭ Lydian",
      "notes": "E♭	F	G	A	B♭	C	D	E♭"
    },
    {
      "name": "E♭ Mixolydian",
      "notes": "E♭	F	G	A♭	B♭	C	D♭	E♭"
    },
    {
      "name": "E♭ Aeolian",
      "notes": "E♭	F	G♭	A♭	B♭	C♭	D♭	E♭"
    },
    {
      "name": "E♭ Locrian",
      "notes": "E♭	F♭	G♭	A♭	B♭♭	C♭	D♭	E♭"
    },
    {
      "name": "E Ionian",
      "notes": "E	F♯	G♯	A	B	C♯	D♯	E"
    },
    {
      "name": "E Dorian",
      "notes": "E	F♯	G	A	B	C♯	D	E"
    },
    {
      "name": "E Phrygian",
      "notes": "E	F	G	A	B	C	D	E"
    },
    {
      "name": "E Lydian",
      "notes": "E	F♯	G♯	A♯	B	C♯	D♯	E"
    },
    {
      "name": "E Mixolydian",
      "notes": "E	F♯	G♯	A	B	C♯	D	E"
    },
    {
      "name": "E Aeolian",
      "notes": "E	F♯	G	A	B	C	D	E"
    },
    {
      "name": "E Locrian",
      "notes": "E	F	G	A	B♭	C	D	E"
    },
    {
      "name": "F Ionian",
      "notes": "F	G	A	B♭	C	D	E	F"
    },
    {
      "name": "F Dorian",
      "notes": "F	G	A♭	B♭	C	D	E♭	F"
    },
    {
      "name": "F Phrygian",
      "notes": "F	G♭	A♭	B♭	C	D♭	E♭	F"
    },
    {
      "name": "F Lydian",
      "notes": "F	G	A	B	C	D	E	F"
    },
    {
      "name": "F Mixolydian",
      "notes": "F	G	A	B♭	C	D	E♭	F"
    },
    {
      "name": "F Aeolian",
      "notes": "F	G	A♭	B♭	C	D♭	E♭	F"
    },
    {
      "name": "F Locrian",
      "notes": "F	G♭	A♭	B♭	C♭	D♭	E♭	F"
    },
    {
      "name": "F♯ Ionian",
      "notes": "F♯	G♯	A♯	B	C♯	D♯	E♯	F♯"
    },
    {
      "name": "F♯ Dorian",
      "notes": "F♯	G♯	A	B	C♯	D♯	E	F♯"
    },
    {
      "name": "F♯ Phrygian",
      "notes": "F♯	G	A	B	C♯	D	E	F♯"
    },
    {
      "name": "F♯ Lydian",
      "notes": "F♯	G♯	A♯	B♯	C♯	D♯	E♯	F♯"
    },
    {
      "name": "F♯ Mixolydian",
      "notes": "F♯	G♯	A♯	B	C♯	D♯	E	F♯"
    },
    {
      "name": "F♯ Aeolian",
      "notes": "F♯	G♯	A	B	C♯	D	E	F♯"
    },
    {
      "name": "F♯ Locrian",
      "notes": "F♯	G	A♯	B	C	D	E	F♯"
    },
    {
      "name": "G♭ Ionian",
      "notes": "G♭	A♭	B♭	C♭	D♭	E♭	F	G♭"
    },
    {
      "name": "G♭ Dorian",
      "notes": "G♭	A♭	B♭♭	C♭	D♭	E♭	F♭	G♭"
    },
    {
      "name": "G♭ Phrygian",
      "notes": "G♭	A♭♭	B♭♭	C♭	D♭	E♭♭	F♭	G♭"
    },
    {
      "name": "G♭ Lydian",
      "notes": "G♭	A♭	B♭	C	D♭	E♭	F	G♭"
    },
    {
      "name": "G♭ Mixolydian",
      "notes": "G♭	A♭	B♭	C♭	D♭	E♭	F♭	G♭"
    },
    {
      "name": "G♭ Aeolian",
      "notes": "G♭	A♭	B♭♭	C♭	D♭	E♭♭	F♭	G♭"
    },
    {
      "name": "G♭ Locrian",
      "notes": "G♭	A♭♭	B♭♭	C♭	D♭♭	E♭♭	F♭	G♭"
    },
    {
      "name": "G Ionian",
      "notes": "G	A	B	C	D	E	F♯	G"
    },
    {
      "name": "G Dorian",
      "notes": "G	A	B♭	C	D	E	F	G"
    },
    {
      "name": "G Phrygian",
      "notes": "G	A♭	B♭	C	D	E♭	F	G"
    },
    {
      "name": "G Lydian",
      "notes": "G	A	B	C♯	D	E	F♯	G"
    },
    {
      "name": "G Mixolydian",
      "notes": "G	A	B	C	D	E	F	G"
    },
    {
      "name": "G Aeolian",
      "notes": "G	A	B♭	C	D	E♭	F	G"
    },
    {
      "name": "G Locrian",
      "notes": "G	A♭	B♭	C	D♭	E♭	F	G"
    },
    {
      "name": "G♯ Ionian",
      "notes": "G♯	A♯	B♯	C♯	D♯	E♯	F♯♯	G♯"
    },
    {
      "name": "G♯ Dorian",
      "notes": "G♯	A♯	B	C♯	D♯	E♯	F♯	G♯"
    },
    {
      "name": "G♯ Phrygian",
      "notes": "G♯	A	B	C♯	D♯	E	F♯	G♯"
    },
    {
      "name": "G♯ Lydian",
      "notes": "G♯	A♯	B♯	C♯♯	D♯	E♯	F♯♯	G♯"
    },
    {
      "name": "G♯ Mixolydian",
      "notes": "G♯	A♯	B♯	C♯	D♯	E♯	F♯	G♯"
    },
    {
      "name": "G♯ Aeolian",
      "notes": "G♯	A♯	B	C♯	D♯	E	F♯	G♯"
    },
    {
      "name": "G♯ Locrian",
      "notes": "G♯	A	B	C♯	D	E	F♯	G♯"
    },
    {
      "name": "A♭ Ionian",
      "notes": "A♭	B♭	C	D♭	E♭	F	G	A♭"
    },
    {
      "name": "A♭ Dorian",
      "notes": "A♭	B♭	C♭	D♭	E♭	F	G♭	A♭"
    },
    {
      "name": "A♭ Phrygian",
      "notes": "A♭	B♭♭	C♭	D♭	E♭	F♭	G♭	A♭"
    },
    {
      "name": "A♭ Lydian",
      "notes": "A♭	B♭	C	D	E♭	F	G	A♭"
    },
    {
      "name": "A♭ Mixolydian",
      "notes": "A♭	B♭	C	D♭	E♭	F	G♭	A♭"
    },
    {
      "name": "A♭ Aeolian",
      "notes": "A♭	B♭	C♭	D♭	E♭	F♭	G♭	A♭"
    },
    {
      "name": "A♭ Locrian",
      "notes": "A♭	B♭♭	C♭	D♭	E♭♭	F♭	G♭	A♭"
    },
    {
      "name": "A Ionian",
      "notes": "A	B	C♯	D	E	F♯	G♯	A"
    },
    {
      "name": "A Dorian",
      "notes": "A	B	C	D	E	F♯	G	A"
    },
    {
      "name": "A Phrygian",
      "notes": "A	B♭	C	D	E	F	G	A"
    },
    {
      "name": "A Lydian",
      "notes": "A	B	C♯	D♯	E	F♯	G♯	A"
    },
    {
      "name": "A Mixolydian",
      "notes": "A	B	C♯	D	E	F♯	G	A"
    },
    {
      "name": "A Aeolian",
      "notes": "A	B	C	D	E	F	G	A"
    },
    {
      "name": "A Locrian",
      "notes": "A	B♭	C	D	E♭	F	G	A"
    },
    {
      "name": "A♯ Ionia",
      "notes": "A♯	B♯	C♯♯	D♯	E♯	F♯♯	G♯♯	A♯"
    },
    {
      "name": "A♯ Dorian",
      "notes": "A♯	B♯	C♯	D♯	E♯	F♯♯	G♯	A♯"
    },
    {
      "name": "A♯ Phrygian",
      "notes": "A♯	B♯	C♯	D♯	E♯	F♯♯	G♯	A♯"
    },
    {
      "name": "A♯ Lydia",
      "notes": "A♯	B♯	C♯♯	D♯♯	E♯	F♯♯	G♯♯	A♯"
    },
    {
      "name": "A♯ Mixolydian",
      "notes": "A♯	B♯	C♯♯	D♯	E♯	F♯♯	G♯	A♯"
    },
    {
      "name": "A♯ Aeolian",
      "notes": "A♯	B♯	C♯	D♯	E♯	F♯	G♯	A♯"
    },
    {
      "name": "A♯ Locrian",
      "notes": "A♯	B♯	C♯	D♯	E♯	F♯	G♯	A♯"
    },
    {
      "name": "B♭ Ionian",
      "notes": "B♭	C	D	E♭	F	G	A	B♭"
    },
    {
      "name": "B♭ Dorian",
      "notes": "B♭	C	D♭	E♭	F	G	A♭	B♭"
    },
    {
      "name": "B♭ Phrygian",
      "notes": "B♭	C♭	D♭	E♭	F	G♭	A♭	B♭"
    },
    {
      "name": "B♭ Lydian",
      "notes": "B♭	C	D	E	F	G	A	B♭"
    },
    {
      "name": "B♭ Mixolydian",
      "notes": "B♭	C	D	E♭	F	G	A♭	B♭"
    },
    {
      "name": "B♭ Aeolian",
      "notes": "B♭	C	D♭	E♭	F	G♭	A♭	B♭"
    },
    {
      "name": "B♭ Locrian",
      "notes": "B♭	C♭	D♭	E♭	F♭	G♭	A♭	B♭"
    },
    {
      "name": "B Ionian",
      "notes": "B	C♯	D♯	E	F♯	G♯	A♯	B"
    },
    {
      "name": "B Dorian",
      "notes": "B	C♯	D	E	F♯	G♯	A	B"
    },
    {
      "name": "B Phrygian",
      "notes": "B	C	D	E	F♯	G	A	B"
    },
    {
      "name": "B Lydian",
      "notes": "B	C♯	D♯	E♯	F♯	G♯	A♯	B"
    },
    {
      "name": "B Mixolydian",
      "notes": "B	C♯	D♯	E	F♯	G♯	A	B"
    },
    {
      "name": "B Aeolian",
      "notes": "B	C♯	D♯	E	F♯	G♯	A	B"
    },
    {
      "name": "B Locrian",
      "notes": "B	C	D	E	F	G	A	B"
    },

  ]
}

const Home = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <TextHome>
          {scales.modes.map(
            (scale) =>
              (
                <>
                  <h4>{scale.name}</h4>
                  <div className="flex">
                    <p className="note">{scale.notes}</p>
                  </div>
                  <hr></hr>
                </>
              )
            )
          }
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
