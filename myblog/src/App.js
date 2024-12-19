import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import MainPage from './component/page/Main';
import PostWritePage from './component/page/PostWrite';
import PostViewPage from './component/page/PostView';

const MainText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainText>리액트 미니 블로그</MainText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/post-write' element={<PostWritePage />} />
        <Route path='/post/:postId' element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
