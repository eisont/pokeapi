// 포켓몬 정보는 pokeapi.co에서 받아와서 표시하세요.
// 다음 중 최소 2개의 페이지를 만드세요.
// 1. main - 전체 포켓몬 리스트를 표시
// 2. detail - 포켓몬 상세 정보를 표시
// 3. favorite - 찜한 포켓몬 리스트를 표시
// 4. search - 포켓몬 검색 결과 리스트를 표시
// context AudioParam, reduc, rtk 등 전역 상태 관리 도구를 사용하세요.
// styled-components, tailwind css 등 스타일링 도구를 사용하세요.
// 최적화를 진행해보세요.

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMultiplePokemonById } from './RTX/thunk';

// data = https://pokeapi.co/api/v2/pokemon-species/1/
// 이름 = data.names[2].name
// 상세설명 = data.flavor_text_entries[23].flavor_text

// 포켓몬 이미지
// 앞 === https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// 뒤 === https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png

const App = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, [dispatch]);
  return (
    <>
      <></>
    </>
  );
};

export default App;
