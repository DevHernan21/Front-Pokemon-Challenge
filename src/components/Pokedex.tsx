import { Link } from "react-router-dom";
import styled from "styled-components";
import { IPokemonsInterface } from "../helper/interfaces";

export const Pokedex: React.FC<IPokemonsInterface> = (
  props: IPokemonsInterface
) => {

  return (
    <>
      <Link to={props?.name}>
        <Card>
          <img src={props?.imageUrl} alt={""}/>
          <p>
            {props?.name} #{props?.id}
          </p>
          <TexContainer>
            <Text>Peso: {props.weight} lbs</Text>
            <Text>Abilidades: {props.abilities}</Text>
            <Text>Tipo: {props.types}</Text>
          </TexContainer>
        </Card>
      </Link>
    </>
  );
};

const Card = styled.div`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  color: #fff;
  background-color: #333333;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  text-transform: capitalize;
  width: 195px;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1024px) {
    width: 30vw;
  }
  @media (max-width: 768px) {
    width: 40vw;
    font-size: 1.5rem;
  }
`;
const TexContainer = styled.div`
  padding: 12px;
`;
const Text = styled.div`
  margin: 0 0 15px 0;
  font-size: 1.6rem;
  font-weight: bold;
`;
