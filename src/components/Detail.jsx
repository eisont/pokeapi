import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from '../index.styled';

const Detail = memo(() => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const params = useParams();

  useEffect(() => {
    const FetchData = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.id}/`);
      const json = await res.json();
      setData(json);
    };
    FetchData();
  }, [params.id]);

  return (
    <S.DetailSt>
      {toggle ? (
        <img onClick={() => setToggle(!toggle)} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${params.id}.png`} />
      ) : (
        <img onClick={() => setToggle(!toggle)} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${params.id}.png`} />
      )}
      {!data?.names ? <div>Loading...</div> : <div>{data.names[2].name}</div>}
      {!data?.flavor_text_entries ? <div>Loading...</div> : <div>{data.flavor_text_entries[23].flavor_text}</div>}
    </S.DetailSt>
  );
});

export default Detail;
