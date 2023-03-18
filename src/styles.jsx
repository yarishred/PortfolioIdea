import { motion } from "framer-motion";
import styled from "styled-components";

//Styled Component Sandbox
export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  overflow:hidden ;
`;

export const Description = styled.div`
  z-index: 2;
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  flex: 1;
  z-index: 2;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hidden = styled.div`
  overflow: hidden;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  svg {
    font-size: 4rem;
    color: #23d997;
  }
`;

export const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  overflow: hidden;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  .logo {
    font-size: 2rem;
    font-family: "Gochi Hand", cursive;
    color: white;
    span {
      color: #23d997;
      font-size: 5rem;
    }
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export const StyledOurWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

export const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const MovieDetails = styled.div`
  color: white;
`;

export const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const Awards = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.05rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

export const ImageDisplay = styled.div`
  min-height: 50vh;
  p {
    text-align: center;
    padding: 8rem;
  }
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;

export const WaveSVG = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
  scale: 1.1;
`;

export const Hide = styled.div`
  overflow: hidden;
`

//Frame Animation
export const Frame1  = styled(motion.div)`
  position: fixed;
  left: 0;
  top:10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`
export const Frame2 = styled(Frame1)`
  background: #ff8efb;
`
export const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`
export const Frame4 = styled(Frame1)`
  background: #8eff80;
`

//Nested Styled Components
export const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

export const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  .faq-line {
    background: #cccccc;
    height: 0.05rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
