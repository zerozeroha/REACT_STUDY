// input1 : 사용자가 입력한 글 다루기


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() { 

  let post = '강남 우동 맛집'; 

  
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬 독학']);
  let [logo, setLOGO] = useState('ReactBlog');
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false); 
  let [title, setTitle] = useState(0);

  // 안에 내용 비워두기 = '' = 빈문자
  // state에 문자를 저장하고 싶은데 일단 기본값을 뭘 넣을지 모르겠으면 ''로 비워두기
  let [입력값, 입력값변경] = useState('')
  

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
        글제목.map(function(a, i ){
          return <div className='list'>
          <h4 onClick={()=>{setModal(true); setTitle(i)}}>
            { 글제목[i] }
            {/* e.preventDefault() 이러면 이벤트 기본 동작을 막아주고 
            상위html로 퍼지는 이벤트버블링을 막고 싶으면 e.stopPropagation() */}
            <span onClick={ (e) => { e.stopPropagation(); 따봉변경(따봉+1)
            }}>👍</span>
          {따봉[i]}</h4> {따봉[i]}
          <p>2월 17일 발행</p> 
        </div>
        })
      }

      {/* 
      <input>에 뭔가 입력시 코드실행하는 이벤트핸들러 : onChange / onInput 

      <input>에 입력한 값 가져오는 법
      e : 지금 발생하는 이벤트에 관련한 여러 기능이 담겨있음
      e.target.value : 이벤트 발생한 html태그에 입력한 값

      이벤트버블링 : 클릭이벤트는 상위html로 퍼짐

      <input>에 입력한 값 저장하려면 보통 변수/state에 저장해둠.
      (정보) state변경함수는 늦게처리됨.(리액트만든 사람이 이렇게 만들었다)

      state를 하나 만들어주고 onChange될 때마다 state에 e.target.value 넣으라고 코드를 짰음.
      */}
      <input onChange={(e) => { 
        입력값변경(e.target.value); //<-늦게처리됨.한글자치면 안나옴(전문용어로 비동기처리). 이거 완료되기 전에
        console.log(입력값)//<- 다음줄 실행됨.
        }} />



      {
        modal == true ? <Modal color="orange" title={title} 글제목={글제목} 글제목변경={글제목변경}/> : null 
      }
     </div>
          );
  }


      function Modal(props){
        return (
          <div className='modal' style={{background:props.color}}>
            <h4>{props.글제목[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={()=>{
              let copy = [...props.글제목]
              copy[0] = '여자코트';
              props.글제목변경(copy);
            }}
            >글수정</button>
   

      </div>
    )
  }




export default App;
