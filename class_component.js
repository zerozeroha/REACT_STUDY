// class를 이용한 옛날 React 문법
// function 말고 class 문법으로도 컴포넌트 생성가능
// ( 요즘에 많이 안 쓴다 하더라도 class 컴포넌트 모르면 뉴비인 거 티남 )

import React from 'react';  // React 전체를 불러와야 class 컴포넌트를 사용할 수 있음

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { render } from '@testing-library/react';



function App() { 

  let post = '강남 우동 맛집'; 
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬 독학']);
  let [logo, setLOGO] = useState('ReactBlog');
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false); 
  let [title, setTitle] = useState(0);
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
        글제목.map(function(a, i){
          return <div className='list'>
            
          <h4 onClick={()=>{setModal(true); setTitle(i)}}>
            { 글제목[i] }

            <span onClick={ (e) => { e.stopPropagation(); 
            따봉변경(따봉+1)
            }}>👍</span>
          {따봉[i]}</h4> {따봉[i]}

          
          <span onClick={ () => { 
            let copy = [...글제목];
            copy.splice(a,1);
            글제목변경(copy);
            }}>🗑️</span>
          <p>2월 17일 발행</p> 
        </div>
        })
      }


      <input onChange={(e) => { 
        입력값변경(e.target.value); 
        console.log(입력값)
        }} />
        <button onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}
        >발행</button>


      {
        modal == true ? <Modal color="orange" title={title} 글제목={글제목} 글제목변경={글제목변경}/> : null 
      }
      <Modal2/>
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

      // class문법으로 컴포넌트 만들려면
      // class 문법 : 변수, 함수 보관함임.
      // constructor, super, render 이거 세개 무조건 채워넣어야 함. (기본 템플릿)
      // component 쓰는 이유 : 긴 html을 깔끔한 단어 하나로 요약하고 싶을 때!
      class Modal2 extends React.Component {
        constructor(props){
          super(props);
          // class 컴포넌트에서 state 만들려면
          this.state = {
            name : 'kim',
            age : 20
          }
        }
        render(){
          return ( 
            <div>안녕{this.state.age}
            <button onClick={()=>{
              this.setState({age:21})
            }}>버튼</button>
            </div>
          )
        }
      }




export default App;
