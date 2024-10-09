// props를 응용한 상세페이지


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() { 

  let post = '강남 우동 맛집'; 

  
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬 독학']);
  let [logo, setLOGO] = useState('ReactBlog');
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false); 

  // Q. 지금 누른 글 제목이 모달창 안에 뜨게 하려면 ?
  let [title, setTitle] = useState(0);
  // 요 state를 굳이 여기 function App() 안에다가 만든 이유 ?
  // 사실 state를 자식에 만들면 부모 -> 자식 전송할 필요 없어지긴 함.
  // 근데 state가 Modal,App에서 필요하면 App에 만들어놔야 함. (자식 -> 부모는 안되니까)
  // (중요)state 만드는 곳은 state 사용하는 컴포넌트들 중 최상위 컴포넌트 (귀찮으면 그냥 App에 만드셈)




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
          <h4 onClick={()=>{setModal(true); setTitle(i)}}>{ 글제목[i] }
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

      {/* 이걸 글제목이라고 생각해보자 */}
      <button onClick={() => { setTitle(0)}}>글제목0</button>
      <button onClick={() => { setTitle(1)}}>글제목1</button>
      <button onClick={() => { setTitle(2)}}>글제목2</button>

    
    {/* title이라는 state는 function App()(즉, 부모 컨포넌트) 안에 있으니까 밑에 방식으로 전송해줘야 함. */}
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
            {/* 
              이제 UI조작하고 싶으면
              title이라는 스위치만 조작하면 됨.
            */}
            {/* 
              state를 props로 전송해주면 됨.

              { 만약에 title == 0 이면 0번 글제목 보여주세요 }
                
              { 저 title state가 0이면 props.글제목[0] }

              title이 0이면 글제목[0]
              title이 1이면 글제목[1] 
              title이 2이면 글제목[2] 
            */}
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
