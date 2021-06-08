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
    overflow: hidden;
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
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  overflow: hidden;
  padding: 0 0.5em 0.5em 0.5em;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Notification = styled.div`
  background-color: var(--primary-color);
  padding: 0.5em;
  position: relative;
  text-align: center;
  width: 110%;

  @media (min-width: 700px) {
    padding: 0.75em;
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

export const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.075);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: var(--primary-color);
  color: black;
  border-radius: 3px;
  padding: 0.5em 1em;
  font-size: 1em;
  margin: ${({ margin }) => margin};
  border: none;
  cursor: pointer;
  transition: filter 0.2s ease-out;

  :focus {
    outline: none;
  }

  :hover {
    filter: brightness(120%);
  }
`;

export const Text = styled.p`
  color: white;
  margin: 1em;
`;

export const TooltipContainer = styled.span`
  position: absolute;
  background-color: #222;
  width: 190px;
  border-radius: 20px;
  padding: 0.25em 1em;
  border: 1px solid var(--primary-color);
  border-bottom-left-radius: 0px;
  color: white;
`;

export const FooterComponent = styled.div`
	display: flex;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 0.5rem;
	font-family: 'Big Shoulders Text', cursive;
	background: rgb(126, 126, 126);
	background: linear-gradient(
		90deg,
		rgba(126, 126, 126, 1) 0%,
		rgba(205, 205, 203, 1) 29%,
		rgba(181, 181, 181, 1) 76%,
		rgba(122, 122, 122, 1) 100%
	);
	height: 3rem;
	justify-content: center;
	text-align: center;
	& > :first-child {
		margin-left: auto;
		padding-right: 1rem;
	}
	& > :last-child {
		margin-right: auto;
		padding-left: 1rem;
	}
`;

export const FooterText = styled.p`
	color: #000129;
	margin: auto 0;
	& > a {
		transition: 0.5s;
	}
	& > a:link,
	& > a:active,
	& > a:visited {
		color: #000129;
	}
	& > a:hover {
		color: #333;
		transition: 0.5s;
	}
`;

export const FooterLinksDiv = styled.div`
	display: flex;
	& > * {
		margin: auto;
	}
`;