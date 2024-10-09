// 자식이 부모의 state 가져다쓰고 싶을 때는 props


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() { 

  let post = '강남 우동 맛집'; 

  
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬 독학']);
  let [logo, setLOGO] = useState('ReactBlog');

  // 이렇게 array를 이용하면 한 변수에 자료 3개를 저장할 수 있으니까 이래도 됨.
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false); 




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
      {
        [1,2,3].map(function(){
          return <div className='list'>
          <h4>{ 글제목[1] }</h4>
          <p>2월 17일 발행</p> 
        </div>
        })
      }

    
      {
        글제목.map(function(a, i ){
          return <div className='list' key={i}>
          <h4 onClick={()=>{setModal(!modal)}}>{ a }</h4>
          <p>2월 17일 발행</p> 
        </div>
        })
      }
      {
        글제목.map(function(a, i ){
          return <div className='list'>
          <h4>{ 글제목[i] }
            <span onClick={ () => { 
              let copy = [...따봉];
              copy[i] = copy[i]+1;
              따봉변경(copy)
            }}>👍</span>
          {따봉[i]}</h4> {따봉[i]}
          <p>2월 17일 발행</p> 
        </div>
        })
      }

    {/*
       Modal 컴포넌트가 글 제목을 수정하려면, 글제목 상태를 사용해야 하고, 
      이를 수정할 수 있도록 글제목변경 함수도 전달해야 함.
      그래서 App 컴포넌트에서 Modal 컴포넌트로 이 두 가지를 props로 넘겨주는 거 */}
      {
        modal == true ? <Modal color="orange" 글제목={글제목} 글제목변경={글제목변경}/> : null 
      }
     </div>

    // (정보)파라미터문법은 다양한 기능을 하는 함수를 만들 때 사용함.
    // : 실은 props도 파라미터 문법일 뿐
    // (참고)props로 일반 문자도 전송 가능
  
  );
}

    // 그래서 글제목이란 변수는 App()함수 바깥에서는 못쓴다는 소리! 정의가 안되어 있으니깐!
    // -> 이럴때 쓰는 것이 props 함수 ~!
    function 함수(){
      let a = 10; // 모든 변수는 함수탈출불가 (함수 바깥에서는 쓸 수 없음.)
    }


    // 부모->자식 state 전송하는 법 ( 자식->부모 불가능/ 자식->자식 불가능 )
    // 1. <자식컴포넌트 작명={state이름}
    // 2. props 파라미터 등록 후 props.작명 사용

    // 컴포넌트 많아지면 props쓰는 게 귀찮아짐.

    // Q. 모달창 안에 첫 째 글제목을 넣어보자
    // Q. 모달창 안에 글수정버튼을 만들고 그거 누르면 첫 글제목이 '여자코트 추천'으로 바뀌는 기능을 만들어보기!
      function Modal(props){
        return (
          <div className='modal' style={{background:props.color}}>
            <h4>{props.글제목[0]}</h4>
            {/* state 집어넣는 게 좋을 듯 */}
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={()=>{
              let copy =[...props.글제목]
              copy[0] = '여자 코트 추천';
              props.글제목변경(copy);
            }}>글수정</button>
    {/*
      글제목: 리액트의 상태 변수로, 현재 글 제목들을 저장하고 있음.
      글제목변경: 상태를 업데이트할 때 사용하는 함수
      props.글제목: App에서 전달받은 현재 글 제목
      props.글제목변경 : 그 제목을 변경하는 함수 
    */}

      </div>
    )
  }








export default App;
