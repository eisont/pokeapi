import { useSelector } from 'react-redux';
import Card from './../components/Card';

const Main = () => {
  const pokemonData = useSelector((state) => state.pokemon.data);

  return (
    <>
      {pokemonData.map((el) => (
        <Card key={el.id} el={el} />
      ))}
    </>
  );
};

export default Main;
