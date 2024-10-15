//  중요한 데이터는 변수말고 state에 담습니다.

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // 자료 잠깐 저장할 땐 state써도 됨. ( 변수문법 var let const )
  let post = '강남 우동 맛집'; 
  // 자료 잠깐 저장할 땐 state써도 됨.

  // state 만드는 법
    // 1. import {useState }
    // 2. useState(보관할 자료)
    // 3. let[작명, 작명]
  let [a, b] = useState('남자 코트 추천'); // [ 남자코트추천,함수 ] 이렇게 나옴
  // a = state에 보관했던 자료 나옴. (변수랑 용도 똑같음)
  // b = state 변경 도와주는 함수

  let [logo, setLOGO] = useState('ReactBlog');
  

  // 왜 state 써야함?
    // 일반 변수는 갑자기 변경되면 html에 자동으로 반영안됨. ex) let post = 강남 -> let post 역삼
    // state 쓰던 html은 자동 재렌더링됨.
    // 변동시 자동으로 html에 반영되게 만들고 싶으면 state 쓰셈.
    // 로고 같은 경우는 1,2년에 한 번 바뀌는데 굳이 state로?
    // 자주바뀌는 html에 적용을 할 수 있는 요소에다가 state를 쓰는 게 좋음.

  //(참고) Destructuring 문법
    // let num = [1, 2]; <- 여기 있던 걸 변수로 빼고 싶다. [1,2]

    // 오른쪽이랑 왼쪽이랑 형태맞춤을 해주는 것.
    // let [a, c] = [1, 2];
    // // let a = num[0];
    // // let c = num[1];


  let [따봉, 따봉변경] = useState(0);
  // 따봉변경 : state 변경용 함수임 -> 이거써야 html 재랜더링도 잘됨.
  // state 변경하는 법 : state변경함수 (새로운 state)
  

  return (
    // return()안에는 병렬로 태그 2개 이상 기입금지 : ex) <div></div>이런 병렬
    <div className="App"> 
    
      <div className="black-nav">
        <h4>{logo}</h4>
        {/* 로고글자도 state로 넣는다? : 쓸데 없음.<- 제목은 잘 안바뀌잖슴. */}
      </div>
      
    </div>
  );
}

export default App;
