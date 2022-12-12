import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PokemonLogo from "../assets/pokemon-logo.png";
import { Pokedex } from "./Pokedex";
import { IPokemonsInterface } from "../helper/interfaces";
import { pokemonGetAll } from "../helper/pokemonGetAll";

export const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const [pokemonList, setPokemonList] = useState<IPokemonsInterface[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    const getData = async () => {
      const pokemonsResp = await pokemonGetAll(limit,offset)
      setPokemonList(pokemonsResp);
    }
    getData();
  }, [offset]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    history.push(`/${search.toLowerCase().trim()}`);
  };

  return (
    <Container>
      <Header>
        <img src={PokemonLogo} alt="Pokemon Logo" loading="lazy" />
      </Header>
      <SearchForm onSubmit={handleSubmit}>
        <h1>Busca a un Pokémon</h1>
        <div className="input">
          <input
            type="text"
            placeholder="(ej: 'Pikachu')"
            autoComplete="off"
            onChange={(event) => setSearch(event.currentTarget.value)}
          />
        </div>
      </SearchForm>
      <Heading>
        <p>Tu Pokedex</p>
      </Heading>
      <PokemonContainer>
        {pokemonList?.length > 0 ? (pokemonList.map((pokemon, i) => {
          return (
            <>
              <Pokedex
                key={i}
                id={pokemon.id}
                name={pokemon.name}
                imageUrl={pokemon.imageUrl}
                types={pokemon.types}
                abilities={pokemon.abilities}
                weight={pokemon.weight}
              />
            </>
          )
        })) : null}
      </PokemonContainer>
      <ButtonContainer>
        <StyledButton
          onClick={() => {
            setOffset(offset - limit);
          }}
          disabled={offset === 0}
        >
          Anterior
        </StyledButton>
        <StyledButton
          onClick={() => {
            setOffset(offset + limit);
          }}
        >
          Siguiente
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;

  > h1 {
    font-size: 3rem;
    color: white;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      font-size: 2rem;
      width: 90vw;
    }
  }
`;

const Header = styled.header`
  margin-top: 10rem;

  > img {
    width: 30vw;

    @media (max-width: 768px) {
      width: 90vw;
    }
  }
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  color: #fff;

  > h1 {
    font-size: 3rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      width: 90vw;
      display: flex;
      justify-content: center;
    }
  }

  .input {
    display: flex;
    justify-content: center;
    width: 45vh;

    > input {
      cursor: pointer;
      font-size: 1.6rem;
      width: 45vh;
      height: 5vh;
      margin-top: 3rem;
      text-align: center;
      color: #24292e;
      border: none;
      outline: none;
      border-radius: 24px;

      @media (max-width: 768px) {
        font-size: 1.4rem;
        width: 40vh;
      }
    }
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

const PokemonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  color: black;
  background-color: white;
  margin: 0 10px;
  cursor: pointer;
  margin-top: 3rem;
  padding: 8px 16px;
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
  margin: 20rem auto 0;

  @media (max-width: 768px) {
    margin-top: 10rem;
    width: 90vw;
  }

  > img {
    background-color: transparent;
    width: 5rem;
    animation-name: spinner;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  > p {
    background-color: #e25e5e;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 5rem;
    border-radius: 12px;
    padding: 3rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.17);

    @media (max-width: 1024px) {
      width: 80vw;
    }

    @media (max-width: 768px) {
      width: 90vw;
      font-size: 2rem;
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
