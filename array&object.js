// array, object state 변경하는 법

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; 
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬 독학']); // ['남자 코트 추천', 함수]남음
  let [logo, setLOGO] = useState('ReactBlog');
  

  let [따봉, 따봉변경] = useState(0);
  // 따봉변경 : state 변경용 함수임 -> 이거써야 html 재랜더링도 잘됨.
  // state 변경하는 법 : state변경함수 (새로운 state)
  

  return (
    <div className="App"> 
      <div className="black-nav">
        <h4 id={post}>블로그임.</h4>
        <h4>{logo}</h4>
      </div>


      {/* (참고)array/object 다를 때 원본은 보존하는 게 좋음. */}
      {/* 아예 원본을 고쳐버리면 영구적으로 수정해버림 */}

      <button onClick={() => {
        // 글제목변경('여자코트변경') : 이런식으로 자의적으로 변경하면 안됨.
          // -> 이걸로 기존 state를 갈아엎어버림.

        // 자의적이 아니라 컴퓨터 원하는 대로 코드를 짜야 함.
          // 글제목변경 (['여자코트 추천','강남 우동맛집','파이썬독학'])'
          // -> 이렇게 해도 됨. 근데 이러면 확장성이 없음. (비효율적)

        // --> 그러면!! 일부만 바꿔서 state변경함수에 넣으면 될 듯.
          // 글제목[0] = '여자코트 추천';
          // -> 이렇게 해야하는데!!

        // (참고) array/object 다를 때 원본은 보존하는 게 좋음.
        //  아예 원본을 영구적으로 고쳐버리면 원본 데이터가 필요하면 곤란해져 버림..힝

        // '글제목' 변수에 저장되어 있던 거는 화살표밖에 없음.
        // 그러면 let copy 에서 copy는 글제목에 있던 화살표가 복사되는 거임.
        let copy = [...글제목]; // ...: 괄호를 벗겨주셈 / [] : 괄호 다시 씌워주셈. ->그러면 완전히 다른 화살표가 생성되는 거임.
        copy[0] = '여자 코트 추천'; 
        console.log(copy == 글제목);
        글제목변경(copy);
      }}
      >글수정</button>
      {/* 
      
      [ state 변경함수 특징 ]
      기존 state == 신규 state (같을)경우 변경안해줌. <- 자원 절약 개념 (같은데 굳이?)
      (기존 state = 글제목
      신규 state = copy) 
      
      [ array / object 특징 ]
       let array = [1,2,3];
       : 자바스크립트에서는 array에다가 1,2,3을 집어넣어달라는 게아니라
        1,2,3이라는 array를 미지의 공간(RAM)에 저장해놓고 1,2,3이 어디에 있는지를 나타내는 화살표만 저장.

      array / object 담은 변수엔 화살표만 저장됨. 
      array를 수정했지 변수에 있던 화살표는 수정안됨.

      변수1 & 변수2 화살표가 같으면 변수1 == 변수2 비교해도 true 나옴.(: 화살표가 같으니까)
      copy는 기존state와 달라지지 않았다고 생각
      array, object는 reference data type이라서 그럼.

      * 결론 : state가 array/object면 독립적 카피본을 만들어서 수정해야 함. 
      -> 독립적인 사뵨 = shallow copy = deep copy
      
      */}

      
    </div>
  );
}

export default App;
