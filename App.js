//  eslint-disable Lint끄는 기능임 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // 서버에서 가져온 실제 데이터라고 가정
  let post = '강남 우동 맛집'; // 자료 잠깐 저장할 땐 변수

  // 자료 잠깐 저장할 땐 state써도 됩니다.
  // 1. import {useState }
  // 2. useState(보관할 자료)
  // 3. let[작명, 작명]
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬 독학']); // ['남자 코트 추천', 함수]남음
  let [logo, setLOGO] = useState('ReactBlog');
  // 글제목 = state에 보관했던 자료 나옴.
  // b = state 변경 도와주는 함수

  // 왜 state 써야함?
  // 일반 변수는 갑자기 변경되면 html에 자동으로 반영안됨.
  // state 쓰던 html은 자동 재렌더링됨.
  // 변동시 자동으로 html에 반영되게 만들고 싶으면 state 쓰셈.
  // 로고 같은 경우는 1,2년에 한 번 바뀌는데 굳이 state로?f
  // 자주바뀌는 html에 적용을 할 수 있는 요소에다가 state를 쓰는 게 좋음.

  //(참고) Destructuring 문법
  // let num = [1, 2];

  // let [a, c] = [1, 2];
  // // let a = num[0];
  // // let c = num[1];s

  // document.querySelector('h4').innerHTML = post;



  let [따봉, 따봉변경] = useState(0);
  // 따봉변경 : state 변경용 함수임 -> 이거써야 html 재랜더링도 잘됨.
  // state 변경하는 법 : state변경함수 (새로운 state)
  

  return (
    // return()안에는 병렬로 태그 2개 이상 기입금지 : ex) <div></div>이런 병렬
    <div className="App"> 
    {/* 실은 html이 아니라 jsx(.js파일에서 쓰는 html 대용품)임. */}
    {/* 리액트에서 <div>만드는 법 : react.createElement('div',null,'Hello World') 
    
    JSX문법

    1. class 넣을 땐 className 
    참고) css파일 쓰려면 상단에서 import'css파일 경로'
    
    2. 변수넣을 땐 {변수} 
    
    3. style 넣을 땐 style = {} */}
      <div className="black-nav">
        <h4 id={post}>블로그임.</h4>
        <h4>{logo}</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>
        가나다순 정렬
      </button>

      {/* (참고)array/object 다를 때 원본은 보존하는 게 좋음. */}
      {/* 아예 원본을 고쳐버리면 영구적으로 수정해버림 */}

      <button onClick={() => {
        // '글제목' 변수에 저장되어 있던 거는 화살표밖에 없음.
        // 그러면 let copy 에서 copy는 글제목에 있던 화살표가 복사되는 거임.
        let copy = [...글제목];
        // ...: 괄호를 벗겨주셈 [] : 괄호 다시 씌워주셈. ->그러면 완전히 다른 화살표가 생성되는 거임.
        copy[0] = '여자 코트 추천'; 
        글제목변경(copy);
      }}
      >글수정</button>
      {/* 
      
      [ state 변경함수 특징 ]
      기존 state == 신규 state 경우 변경안해줌.
      (기존 state = 글제목
      신규 state = copy) 
      
      [ array / object 특징 ]
      array / object 담은 변수엔 화살표만 저장됨. 
      array를 수정했지 변수에 있던 화살표는 수정안됨.

      변수1 & 변수2 화살표가 같으면 변수1 == 변수2 비교해도 true 나옴.(: 화살표가 같으니까)
      copy는 기존state와 달라지지 않았다고 생각
      array, object는 reference data type이라서 그럼.

      * 결론 : state가 array/object면 독립적 카피본을 만들어서 수정해야 함. 
      -> shallow copy 
      
      */}


  
      {/* 글목록 UI만들기 */}
      <div className='list'>
        {/* state 변경하는 법 (등호로 변경금지) */}
        <h4>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) }}>👍</span>
        {따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p> 
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <h4 style={{color : 'red', fontSize : '20px'}}>{ post }</h4>
      {/* - 블로그 글 제목을 만들고 싶은데
      실제 서비스면 이런데서 블로그 글 가져와서 보여줄 듯
      
      * 프론트엔드에서 하는일 = 데이터바인딩
      서버에서 데이터 가져와서 <html> 사이에 넣어주세요 
      
      (참고)에러메세지는 터미널/브라우저에서 확인 또는 개발자도구*/}
    </div>
  );
}

export default App;
