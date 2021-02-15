import styled from "styled-components";

export const Game = styled.div`
  background-color: #081329;
  padding: 1rem;
`;

export const GameHeader = styled.div`
  height: 4rem;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: white;
  font-family: sans-serif;
  font-weight: 600;
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


export const Rotate = styled.div`
  display: inline-block;
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
  border-top: 30px solid white;
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
  font-weight: 600;
  color: white;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid;
`;
export const WinnerMessage = styled.div`
  padding: 0 2rem;
  font-family: sans-serif;
  font-size: .75rem;
  text-align: center;
  color: white;
  opacity: ${props => (props.isGameEnded ? 1 : 0)};
  transition: all 10s;
`;
