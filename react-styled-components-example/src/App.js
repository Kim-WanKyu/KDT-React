import './App.css';
import React from 'react';
// import './style.css';
import styled from 'styled-components';

// styled-components : 스타일을 적용된 컴포넌트를 쉽게 만들어 줄 수 있다.
/* 컴포넌트를 만들 때, 모든 요소를 다 넣다 보니까, 디자인 요소도 넣게 되는데,
  css는 객체가 아니기 때문에, 억지로 자바스크립트가 허용하는 방식으로 바꾸어
  객체로 만들어 사용하게 된다.
  이는 css 와 다른 불편함이 생기게 된다.
  그래서, styled-components 를 사용하면 편하다.
*/
// styled-components의 특징 중 하나는 css 를 그대로 사용할 수 있다는 점이다.


// styled-components.
const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;

// styled-components 래핑 (SimpleButton)
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

// styled-components 가 아닌 일반적인 리액트 컴포넌트.
const ReactButton = (props) => {
  const style = {
    color: 'white',
    backgroundColor: 'blue'
  }
  return <button className={props.className}
   style={style}>{props.children}</button>
};

// 일반 컴포넌트 래핑도 가능. (일반 컴포넌트에서 className 필수).
const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

// primary의 값에 따라 동적으로 달라지는 컴포넌트.
const PrimaryButton = styled.button`
  color: ${(props) => props.primary ? 'white' : 'black' };
  background-color: ${(props) => props.primary ? 'blue' : 'white'};
`;

// + 가변적인 크기의 PrimaryButton.
const PrimarySizeButton = styled(PrimaryButton)`
  font-size: ${(props) => `${(Number)(props.fsize)}px` };
`;


function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <hr/>
      <ReactButton>ReactButton</ReactButton>
      <ReactLargeButton>ReactLarge</ReactLargeButton>
      <hr/>
      <PrimaryButton>PrimaryButton-default</PrimaryButton>
      <PrimaryButton primary>PrimaryButton-primary</PrimaryButton>
      <hr/>
      <PrimarySizeButton primary size={10}>10</PrimarySizeButton>
      <PrimarySizeButton fsize={20}>20</PrimarySizeButton>
      <PrimarySizeButton primary fsize={30}>30</PrimarySizeButton>
      <PrimarySizeButton fsize={40}>40</PrimarySizeButton>
    </div>
  );
}

export default App;
