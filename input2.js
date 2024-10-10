// input2 : 블로그 글발행 기능 & 삭제 기능


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
      


      {/* 글제목이라는 데이터 갯수에 맞게 html을 자동으로 생성되게 하는 코드 */}
      {
        글제목.map(function(a, i ){ // 스위치만 건드리면 UI 알아서 바뀜
          return <div className='list'>
            
          <h4 onClick={()=>{setModal(true); setTitle(i)}}>
            { 글제목[i] }

            <span onClick={ (e) => { e.stopPropagation(); 
            따봉변경(따봉+1)
            }}>👍</span>
          {따봉[i]}</h4> {따봉[i]}


          {/* 
          숙제2. 삭제버튼을 누르면 html이 삭제가 되게 만들기
            <div> 하나 삭제해주세요 X
            state에 글 삭제해주세요 O 
          : 삭제버튼을 누르면 글제목이라는 array에서 내가 원하는 자료만 딱 빼버리장.
          < splice(a, i) >
          : x번째 데이터를 삭제하고 싶으면 splice(x, 1) 쓰면 된댔습니다.
            첫 번째 인수는 제거할 배열 요소의 위치(인덱스)를 설정합니다.
            두 번째 인수는 제거할 배열 요소의 개수를 설정합니다. 
            
            0번째 삭제버튼 누르면 copy.splice(0, 1) 해주니까 0번글이 없어집니다.
            1번째 삭제버튼 누르면 copy.splice(1, 1) 해주니까 1번글이 없어집니다.
            2번째 삭제버튼 누르면 copy.splice(2, 1) 해주니까 2번글이 없어집니다. */}

          <span onClick={ () => { 
            let copy = [...글제목];
            copy.splice(a,1);
            글제목변경(copy);
            }}>🗑️</span>
          <p>2월 17일 발행</p> 
        </div>
        })
      }



      {/* 
        Q. 왜 새로고침하면 없어짐 ?
          : 새로고침시 html.js 파일 다시 읽어서 그럼
            다시 읽으면 state나 변수같은 것들도 초기값으로 변경됩니다. 원래그럼 

        숙제1. 버튼누르면 유저가 입력한 글을 글목록에 추가해주세요 
          <div> 하나 생성해주세요 X
          state에 글 추가해주세요 O  
          
        카피한거에 unshift(입력값) 해줬는데 
          이게 뭐냐면 array자료 맨 앞에 자료추가하는 문법 */}
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
