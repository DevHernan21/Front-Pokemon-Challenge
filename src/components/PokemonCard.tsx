import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IPokemonIdInterface, Precentage, RouteParam } from "../helper/interfaces";
import { pokemonGetByName } from "../helper/pokemonGetByName";

export const PokemonCard: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemonIdInterface | any>();
  const { pokemonName } = useParams<RouteParam>();

  useEffect(() => {
    const getData = async () => {
      const pokemonResp = await pokemonGetByName(pokemonName);
      setPokemons(pokemonResp.data);
    }
    getData();
  }, []);

  return (
    <>
      {pokemons && (
        <Card>
          <CharacterContainer>
            <Image src={pokemons.imageUrl} alt={""} />
            <p>
              {pokemons.name} #{pokemons.pokeId}
            </p>
          </CharacterContainer>
          <Heading>
            <Text>{pokemons.description}</Text>
          </Heading>
          <TexContainer>
            <Text>Abilidades: {pokemons.abilitiesRaw}</Text>
            <Text>Movimientos Especiales:</Text>
            <MovesContainer>
              <div className="slider-track">
                {pokemons.movesRaw.map((m: any, index: any) => (
                  <div className="slide">
                    <p key={index}>{m}</p>
                  </div>
                ))}
              </div>
            </MovesContainer>
          </TexContainer>
          <StatsContainer>
            <h3>Stats</h3>
            <br />
            {pokemons?.statsRaw.map((s: any) => (
              <Stat percentage={s.baseStat ?? 0} key={s.name}>
                <p>
                  {s.name} - {s.baseStat}
                </p>
                <div className="progress">
                  <div className="bar" />
                </div>
              </Stat>
            ))}
          </StatsContainer>
        </Card>
      )}
    </>
  );
};

const Card = styled.div`
  width: 35vw;
  color: #fff;
  background-color: #333333;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  text-transform: capitalize;
  margin-top: 20px;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    width: 50vw;
  }
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const CharacterContainer = styled.div`
  text-align: center;
  margin-bottom: 8px;
  padding: 10px;
  > p {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const Heading = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 200px;

  &:hover {
    animation: bounce 1.5s ease-out infinite;
    cursor: pointer;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const TexContainer = styled.div`
  padding: 12px;
`;

const MovesContainer = styled.div`
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-250px * 7))}
  }

  background: white;
  height: 100%;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: 10px;
  
  &::before,
  &::after {
   content: "";
   position: absolute;
   height: 100px;
   width: 50%;
   z-index: 2;
  }

  &::after {
   right: 0;
   top: 0;
   transform: rotateZ(180deg);
  }

  &::before {
   left: 0;
   top: 0;
  }

  .slider-track {
    display: flex;
    animation: scroll 50s linear infinite;
    width: calc(250px * 14);
  }

  .slide {
    width: 100px;
    height: auto;
    padding-right: 10px;
    padding-left: 10px;
  }

  p {
    color: #333;
    font-size: 1.6rem;
    font-weight: bold;
    width: 100%;
  }
`;

const Text = styled.div`
  margin: 0 0 15px 0;
  font-size: 1.6rem;
  font-weight: bold;
`;

const StatsContainer = styled.div`
  padding: 10px;
`;

const Stat = styled.div<Precentage>`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  overflow: hidden;

  p {
    color: #fff;
    font-size: 1.6rem;
    font-weight: bold;
    width: 100%;
  }

  .progress {
    background: rgba(196, 196, 196, 0.3);
    width: 100%;
    height: 20px;
    border-radius: 12px;
    .bar {
      width: ${(props) => `${props.percentage}%`};
      height: 100%;
      border-radius: 24px;
      background: #e25e5e;
      background: ${(props) =>
    props.percentage && props.percentage >= 40 ? "#E2B55E" : ""};
      background: ${(props) =>
    props.percentage && props.percentage >= 50 ? "#D8E25E" : ""};
      background: ${(props) =>
    props.percentage && props.percentage >= 70 ? "#A0E25E" : ""};
    }
  }
`;