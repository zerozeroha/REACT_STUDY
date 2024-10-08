import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// App() 이것도 컴포넌트 였음 
function App() { 

  let post = '강남 우동 맛집'; 

  
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬 독학']);
  let [logo, setLOGO] = useState('ReactBlog');
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false); 
  // 스위치 역할
  // 0 or 1 / true or flase / '열림' or '닫힘'  : 형식은 자유, 모달창상태 표현만 가능하면 됨.
  

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
      {/*
      Q. 제목누르면 <Modal>창 보여주기 ? 
        -> 클릭시 state만 조절하면 됨.
      */}
      <div className='list'>
        <h4 onClick={()=>{ setModal(true) }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
      {/*
      Q. 글제목 한번 더 누르면 모달창이 닫혀야함 ?
      toggle 이용하기!!!!!! 이거 !modal 쓰는 거임
        느낌표가 뭐냐면 느낌표 우측 자료를 반대로 바꿔줍니다.
        !true는 출력해보면 false
        !false는 출력해보면 true
      */}
      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal) }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>


      {/* 

      < 동적인 UI ? >
        : 유저가 조작시 형태가 바뀌는
          모달창 탭 서브메뉴 툴팁 경고문 등 그런 UI

      < 동적인 UI 만드는 step >
        1. html css 로 미리 디자인완성

        2. UI의 현재 상태를 state로 저장
          : state를 하나 만들고 거기에 현재 Ui 상태정보를 저장
          -> 모달창은 열림/닫힘 이 두개 상태밖에 없기 때문에 그거 2종류만 표현할 수 있는 자료형이면 됨.

        3. state에 따라 UI가 어떻게 보일지 작성 <- 조건문 등으로 
          : state가 false면 <Modla>안보이게 true면 <Modal>보이게 

          function App (){

                let [modal, setModal] = useState(false);
                return (
                  저 state가 true면 <Modal></Modal>
                  false면 아무것도 보여주지마세요
                )
              }
            
              이렇게 코드짜라는 소리
      */}

      {/* 

      < JSX에서 조건문 쓰는 법 >
      
      특정 경우에만 코드실행하고 싶으면 if..........
      !! 근데 !! 중괄호 안에는 js if문, for문을 쓸 수 없음 !!
      왜냐면 html 작성 공간이기 때문에 !!

      if 대용으로!! -> 삼항연산자 ( ternary operator )
      조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드

      -> " html 중간에 조건문 쓰려면 삼항연산자 쓰기 ! 

       */}
      
      {
        modal == true ? <Modal/> : null 
      }

      {/* 리액트에선 버튼 누르면 모달창 스위치(state)만 건드림
      그냥 자바스크립트였으면 버튼누르면 모달창 html을 직접 건드림 */}
    </div>
  
  );
}

  function Modal(){
    return (
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
  }










export default App;
