import styled from "styled-components";

export const Game = styled.div``;

export const GameHeader = styled.div`
  height: 4rem;
  border: 1px solid red;
`;

export const Title = styled.div`
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 1.25rem;
  letter-spacing: .125rem;
  font-family: sans-serif;
`;

export const RotateContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: calc(100vh - 4rem);
  justify-content: center;
`;


export const Rotate = styled.div.attrs({
  style: ({ rotate }) => ({
    transform: `rotate(${rotate}deg)`
  }),
})` display: inline-block;
  position: absolute;
`



export const RotationResult = styled.div`
  width: ${props => (props.isGameEnded ? "12rem" : "5rem")};
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: ${props => (props.isGameEnded ? "12rem" : "5rem")};
  color: black;
  transition: all 0.5s;

  background: ${props => (props.color ? props.color : "white")};
`;

export const Winner = styled.div`
  opacity: ${props => (props.isGameEnded ? 1 : 0)};
  transition: all 5s;
  position: ${props => (props.isGameEnded ? "relative" : "absolute")};
`;

export const Line = styled.div`
  position: absolute;
  border-left: 5px solid transparent;
  border-top: 30px solid black;
  border-right: 5px solid transparent;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const WinnerLabel = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid;
`;
export const WinnerMessage = styled.div`
  padding: 0 2rem;
  font-family: sans-serif;
  font-size: 0.75rem;
  text-align: center;
  opacity: ${props => (props.isGameEnded ? 1 : 0)};
  transition: all 10s;
`;