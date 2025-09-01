import { getRegExp } from 'korean-regexp';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectPokemonByRegExp } from '../../RTX/selector';
import Card from '../Card';

const Search = () => {
  const [searchParams] = useSearchParams();
  const param = searchParams.get('pokemon');
  const reg = getRegExp(param);

  const pokemon = useSelector(selectPokemonByRegExp(reg));
  console.log(pokemon);

  return (
    <>
      {pokemon.map((el) => (
        <Card el={el} />
      ))}
    </>
  );
};
export default Search;
