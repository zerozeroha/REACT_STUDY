import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// App() 이것도 컴포넌트 였음 
function App() { 

  let post = '강남 우동 맛집'; 

  
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬 독학']);
  let [logo, setLOGO] = useState('ReactBlog');
  let [따봉, 따봉변경] = useState(0);
  

  return (
    <div className="App"> 
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

      <button onClick={() => {
           let copy = [...글제목];
        copy[0] = '여자 코트 추천'; 
        글제목변경(copy);
      }}
      >글수정</button>
  
      <div className='list'>
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
      <Modal></Modal>
      <Modal/>
      {/* 참고2) 
      <함수명></함수명>, <함수명/> 둘 다 가능 */}

    </div>
  
  );
}

  {/* 
   < component 만들 때 주의할 점! >

      - 다른 function 바깥에다가 만들어야 함.
        : function App(){}내부에 만들면 안됨!!
          알고보니 App(){} <- 이것도 컴포넌트 였던 거임~
        
      - 작명할 땐 영어 대문자로!
      
      - retrun() 안에 html 태그들 여러개 못 들어감. 
        : JSX의 규칙 때문. return() 안에는 반드시 하나의 부모 요소로 감싸진 상태로 요소들을 반환. 
          여러 개의 HTML 요소가 있으면, React는 그 요소들을 하나의 그룹으로 감싸야 제대로 렌더링할 수 있음.
          -> 그래서 <div>감싸는 거임~
  */}
  function Modal(){
    return (
      <div className='mocal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
  } 

      {/* 
      
      html덩어리들을 깔끔하게 축약하는 문법 : component -> <Modal/>

      < 컴포넌트 장점 >
        : 내 코드를 처음 보는 사람들도 쉽게 이해할 수 있다. / 관리 쉬워짐.
      
      < 컴포넌트 만드는 법 >      
        1. function 만들고 작명하기
        2. return()안에 축약을 원하는 html 담기
        3. <함수명></함수명>쓰기

      < 어떤 걸 컴포넌트로 만들면 좋은가 >
        1. 반복적인 html 축약할 때
        2. 큰 페이지들
        3. 자주변경되는 것들

      < 컴포넌트의 단점 >
        : state 가져다 쓸 때 문제생김.
        A함수에 있던 변수는 B함수에서 맘대로 가져다 쓸 수 없음.
      
      */}





      // 참고 1)
      // return() 안에 html 병렬기입하려면 <div>로 감싸주기
      // 근데 여기서!!
      // 의미없는 <div>대신 <></>사용가능! : fragment 문법

      function Modalllllll (){
        return (
          <>
            <div className='mocal'>
              <h4>제목</h4>
              <p>날짜</p>
              <p>상세내용</p>
            </div>
            <div></div>
            </>
        )

        // 참고 3) 컴포넌트 만드는 문법2 . arrow function 써두 됨!

        let moddalll = () => {
          return(
            console.log(1)
          )
        }
      }










export default App;
