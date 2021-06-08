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
  position: absolute;
  top: -75%;
  margin-left: -114px;

  @media (min-width: 700px) {
    top: -58%;
    margin-left: -151px;
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

export const BoardContainer = styled.div`
  margin: 0.5em 1.25em;

  @media (min-width: 700px) {
    margin: 1em;
  }
`;

export const Board = styled.table`
  table-layout: fixed;
  width: 250px;
  height: 250px;
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

export const Cell = styled.td`
  width: 25px;
  height: 25px;
  color: ${(props) => (props.isActive ? 'black' : 'white')};
  border: 2px solid rgba(255, 255, 255, 0);
  background-color: ${(props) =>
    props.isActive ? 'var(--primary-color)' : !props.isLabel ? '#333' : ''};
  font-size: 15px;
  text-align: center;
  line-height: 20px;
  padding: 0;
  margin: 0;
  transition: border 0.2s ease-in;
  user-select: none;
  text-shadow: ${(props) => (props.isLabel ? '3px 3px black' : '')};
  cursor: ${(props) => (props.isInteractive ? 'pointer' : 'auto')};

  :hover {
    border: 2px solid
      rgba(255, 255, 255, ${(props) => (props.isInteractive ? 1 : 0)});
  }

  @media (min-width: 700px) {
    width: 30px;
    height: 30px;
    line-height: 25px;
  }
`;

export const FlexibleFormat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;
