import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', roboto;
  }
  body {
    background-color: #111;
  }
  :root {
    --primary-color: #286bad;
  }
`;

export const Nav = styled.nav`
  text-align: center;
  padding-top: 3em;
  margin: 0.5em 0;
  position: relative;

  @media (min-width: 700px) {
    margin: 2em 0;
  }
`;

export const Title = styled.h1`
  color: var(--primary-color);
  font-family: 'Anton';
  font-size: 2em;
  letter-spacing: 5px;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;

  @media (min-width: 700px) {
    font-size: 3em;
  }
`;

export const Logo = styled.img`
  filter: invert(35%) sepia(63%) saturate(643%) hue-rotate(168deg) 
  brightness(94%) contrast(89%);
  transform: scaleX(-1);
  padding: 0.25em;
  width: 200px;
  margin-right: 2.5em;
  position: absolute;
  top: -75%;
  margin-left: -116px;

  @media (min-width: 700px) {
    top: -58%;
    margin-left: -155px;
  }
`;

export const Container = styled.section`
  background-color: #222;
  border-radius: 10px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  overflow: hidden;
  padding: 0 0.5em 0.5em 0.5em;
  width: fit-content;
`;

export const Notification = styled.div`
  background-color: var(--primary-color);
  padding: 0.5em 0.25em;
  margin: 0 -0.5em;
  position: relative;
  text-align: center;

  @media (min-width: 700px) {
    padding: 1em 0;
  }
`;

export const Heading = styled.h1`
  color: var(--primary-color);
  font-size: 1em;
  margin-bottom: 0.15em;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.25);

  @media (min-width: 700px) {
    font-size: 1.5em;
  }
`;

export const Cell = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  color: white;
  outline: ${(props) => (props.hasBorder ? '2px' : 0)} solid white;
  background-color: ${(props) =>
    props.isActive ? '#229D71' : props.hasBorder ? '#333' : ''};
  font-size: 1.5em;
  text-align: center;
  line-height: 40px;
  transition: transform 0.2s ease-in;
  text-shadow: 3px 3px black;

  :hover {
    transform: scale(${(props) => (props.isHoverable ? 1.1 : undefined)});
  }

  @media (min-width: 700px) {
    width: 30px;
    height: 30px;
  }
`;

export const Board = styled.div`
  margin: 0.5em;

  @media (min-width: 700px) {
    margin: 1em;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const FlexFormat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;
