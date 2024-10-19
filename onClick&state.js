//  버튼 기능 개발 & 리액트 state 변경
/*eslint-disable*/  // 이라는 주석을 js 파일 최상단에 추가해주면 eslint 기능(warning)을 잠시 끌 수 있습니다. 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; 
  let [a, b] = useState('남자 코트 추천'); 
  let [ 따봉, 따봉변경 ] = useState(0); // 두번째 작명한건 state 변경을 도와주는 함수.
                                     // 그거 써야 state 변경이 가능.
// 사용법_!!!!!!

따봉변경(새로운state) 
// 왜냐면 state 변경함수는 ( ) 안에 넣은걸로 state를 갈아치워주는 함수라 그럼!!!!
  
// onclick 사용법
// ( JSX에서는 이렇게 합니다. )
  // 1. Click이 대문자인거
  // 2. {} 중괄호 사용하는거
  // 3. 그냥 코드가 아니라 함수를 넣어야 잘 동작한다는거 
  // 함수는 그냥 긴 코드를 짧은 단어 하나로 축약해주는 문법.

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        {/* 이러면 안됨. */}
      <h4> { 글제목[0] } <span onClick={ ()=>{ 따봉 = 따봉 + 1 } } >👍</span> { 따봉 }</h4>
        {/*
          따봉변경( 따봉 = 따봉 + 1 ) 이딴거 안됨. 깔끔하게 새로운 state만 집어넣으시면 됨.
          안타깝게도 저건 변수가 아니라 state임!!
          state는 state변경함수를 써서 state를 변경해야합니다!! */}
      <p>2월 17일 발행</p>
      </div>
      <div className="list">
      <h4> { 글제목[1] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } } >👍</span> { 따봉 }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
