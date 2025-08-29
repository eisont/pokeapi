import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PokemonListSlice } from './redux/redux';
import { useDispatch, useSelector } from 'react-redux';
const PoketmonItem = lazy(() => import('./components/PoketmonItem'));
import Detail from './components/Detail';
import Favorites from './components/Favorites';
import * as S from './index.styled';

// 포켓몬 정보는 pokeapi.co에서 받아와서 표시하세요.
// 다음 중 최소 2개의 페이지를 만드세요.
// 1. main - 전체 포켓몬 리스트를 표시
// 2. detail - 포켓몬 상세 정보를 표시
// 3. favorite - 찜한 포켓몬 리스트를 표시
// 4. search - 포켓몬 검색 결과 리스트를 표시
// context AudioParam, reduc, rtk 등 전역 상태 관리 도구를 사용하세요.
// styled-components, tailwind css 등 스타일링 도구를 사용하세요.
// 최적화를 진행해보세요.

// data = https://pokeapi.co/api/v2/pokemon-species/1/
// 이름 = data.names[2].name
// 상세설명 = data.flavor_text_entries[23].flavor_text

// 포켓몬 이미지
// 앞 === https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// 뒤 === https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png

const App = () => {
  const data = useSelector((state) => state.ItemListData);
  const dispatch = useDispatch();

  useEffect(() => {
    const FetchDataAll = async () => {
      try {
        const requests = Array.from({ length: 151 }, (_, i) => fetch(`https://pokeapi.co/api/v2/pokemon-species/${i + 1}/`).then((res) => res.json()));

        const results = await Promise.all(requests);

        dispatch(PokemonListSlice.actions.GetItemListData(results));
      } catch (err) {
        console.error(err);
      }
    };
    FetchDataAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>포켓몬 도감</S.Title>
      </S.Header>
      <S.Nav>
        <S.Box>
          <S.Menu to='/'>메인페이지</S.Menu>
          <S.Menu to='/select'>찜</S.Menu>
        </S.Box>
      </S.Nav>

      <S.Main>
        <Suspense
          fallback={new Array(1024).fill().map((el, i) => (
            <S.Item key={i} />
          ))}
        >
          <Routes>
            <Route
              path='/'
              element={
                <>
                  {data.map((e, i) => (
                    <PoketmonItem key={i} item={e} index={i} />
                  ))}
                </>
              }
            />

            <Route path='/:id' element={<Detail />} />
            <Route path='/select' element={<Favorites />} />
          </Routes>
        </Suspense>
      </S.Main>
    </S.Wrapper>
  );
};

export default App;
