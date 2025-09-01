import { useSelector } from 'react-redux';
import { selectFavoritePokemons } from './../RTX/selector';
import Card from './../components/Card';

const Favorites = () => {
  const pokemon = useSelector(selectFavoritePokemons);

  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} el={el} />
      ))}
    </>
  );
};

export default Favorites;
