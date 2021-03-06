import React, { useState, useEffect } from "react";
import { RadialChart } from "react-vis";

import Confetti from '../Confetti'

import * as S from "./styles";

interface Winner {
  from: number,
  to: number
  angle: number
}

const maxHypotheticalSpeed = 1000;
const maxReachableDegrees = Math.random([0, 1]) * maxHypotheticalSpeed;
const duration = 8;

const getGaussianValue : (t:number) => number = t =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

const getWinner : (data: Winner[], degrees:number) => Winner = (data, degrees) => {
  const normalizedRotation = degrees % 360;

  const rangedData = data.map((e, index) => {
    if (index === 0) {
      return {
        ...e,
        from: 0,
        to: e.angle
      };
    }

    return {
      ...e,
      from: data[index - 1].angle * index + 1,
      to: e.angle * (index + 1)
    };
  });

  const winner = rangedData.find(
    obj => obj.from < normalizedRotation && obj.to > normalizedRotation
  );

  return winner;
};

  // ritorna valore tra 0 e 1
const getNormalizedTime = ({timer, initialTime, duration}) => {
  const currentTime = timer - initialTime
  return (currentTime / 1000) / duration
}


const Game = ({ data }) => {
  const [degrees, setDegrees] = useState(0);
  const [initialTime, setInitialTime] = useState(0);
  const [winner, setWinner] = useState(null);

  function handleUpdateDegrees(timer) {
    if (!initialTime) {
      setInitialTime(timer);
    }

    const gaussianValue = getGaussianValue(
      getNormalizedTime({timer, duration, initialTime}
    ));

    if (gaussianValue < 1) {
      setDegrees(maxReachableDegrees * gaussianValue);
      return;
    }

    const winner = getWinner(data, degrees);
    setWinner(winner);
  }

  useEffect(
    () => {
      let myTimer = requestAnimationFrame(handleUpdateDegrees);
      return () => {
        cancelAnimationFrame(myTimer);
      };
    },
    [degrees]
  );

  return (
    <S.Game>
      {winner && <Confetti />}
      <S.GameHeader>
        <S.Title>La famiglia Luatti</S.Title>
      </S.GameHeader>

      <S.RotateContainer>
        <S.Rotate style={{transform: `rotate(-${degrees.toFixed(2)}deg)`}}>
          <RadialChart
            width={350}
            height={350}
            radius={145}
            innerRadius={35}
            data={data}
            colorType="literal"
            showLabels={true}
            labelsStyle={{
              fontSize: "11px",
              fontWeight: "bold",
              fill: "white",
              textTransform: "uppercase",
              letterSpacing: ".04rem"
            }}
          />
        </S.Rotate>
        <S.RotationResult isGameEnded={winner} color={winner && winner.color}>
          <S.Line />
          <S.Winner isGameEnded={winner}>
            <S.WinnerLabel>{winner && winner.label}</S.WinnerLabel>
            <S.WinnerMessage isGameEnded={winner}>
              {winner && winner.message}
            </S.WinnerMessage>
          </S.Winner>

          {!winner && degrees.toFixed(2)}
        </S.RotationResult>
      </S.RotateContainer>
    </S.Game>
  );
};


export default Game