// map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때
// -> 반복문으로 같은 html 반복생성하는 법


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



  // // map() 사용법 : 모든 array자료 뒤에 붙일 수 있음.

  // // 1. array '자료 갯수'만큼 함수 안의 코드 실행해줌.
  // [1,2,3].map(function(a){
  //   console.log(1)
  // })
  
  // // 2. 함수 안의 파라미터(a)는 array안에 있던 자료랑 똑같음. -> a = 1,2,3
  // // 코드가 반복 실행되면서 1이 되고, 2가 되고, 3이 된다는 소리
  // [1,2,3].map(function(a){
  //   console.log(a)
  // })
  
  // // 3. return에 뭐 적으면 array로 담아줌.
  // // 'zzdbdbs'를 3번 실행함.
  // [1,2,3].map(function(a){
  //   return 'zzdbdbs'
  // })
  



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
    
      {/* 
        같은 html 반복재생하는 법
        보통은 for 문법쓰면 되는데...
        중괄호 안에서는 for 반복문 쓰지 못함.
        {
          for(3번 반복해주세요){
            <div>
          }
        }
       */}
      
      {/*    
        < map()으로 같은 html 반복재생하는 법 >
          : map 쓰고나면 그 자리에 []남음
          : html이 길어질수록 이런식으로 쓰는게 깔끔하고 보기 좋음. 
      */}
      {
        [1,2,3].map(function(){
          return <div className='list'>
          <h4>{ 글제목[1] }</h4>
          <p>2월 17일 발행</p> 
        </div>
        })
      }

      {/* 
        Q. 실제 블로그 글갯수만큼 html 생성해주세요 ? 
        Q. 왜 같은 글만 3개 보임 ?
          a : array 안의 데이터랬음.
      */}
      {
        글제목.map(function(a, i ){
          return <div className='list' key={i}>
          <h4 onClick={()=>{setModal(!modal)}}>{ a }</h4>
          <p>2월 17일 발행</p> 
        </div>
        })
      }
       {/* 
        참고2) 반복문으로 html 생성하려면 key={html마다 다른숫자}추가해야 함.
          : 반복 생성한 ui마다 다른 key값을 갖게 되도록 코드를 짜게 됨.
          : 그래야 리액트가 <div>들을 각각 구분할 수 있어서 그럼.
          : 이걸 써야 콘솔창에 warning이 없어짐. 
        */}

      {/* 
        Q. 왜 같은 글만 3개 보임 ?
          i : 반복문이 돌 때마다 0부터 1씩 증가하는 정수.
          ( 제목누르면 모달창 띄우기도 포함해서 코드 입력해봄. ) 
      */}
      {
        글제목.map(function(a, i ){
          return <div className='list'>
          <h4>{ 글제목[i] }
            <span onClick={ () => { 
              let copy = [...따봉];// ...(spread 연산자)를 사용하여 따봉 배열을 복사
              copy[i] = copy[i]+1;// 복사된 배열 copy에서 클릭한 글의 인덱스 i에 해당하는 값을 증가
              //  copy[i]는 현재 클릭된 글의 따봉 수를 의미하고, 이 값을 1 증가시켜 업데이트
              따봉변경(copy)// 업데이트된 copy 배열을 따봉변경 함수를 통해 새로운 상태로 설정
            }}>👍</span>
            {/* 리액트는 상태가 변경되었을 때 자동으로 컴포넌트를 다시 렌더링하므로, 따봉변경(copy)를 호출하면 변경된 따봉 수가 화면에 반영 */}
          {따봉[i]}</h4> {따봉[i]}
          <p>2월 17일 발행</p> 
        </div>
        })
      }

      {/* 
      리액트는 array 안에 html 담아놔도 잘 보여줌 
      */}
      {
        [<div>안녕</div>,<div>안녕</div>,<div>안녕</div>]
      }
      {/* 
      (참고1) 일반 for 반복문을 쓰고싶다면
        1. html들을 담아둘 array 자료를 하나 만들어줍니다.
        2. 일반 for 반복문을 이용해서 반복문을 돌림 
        3. 반복될 때 마다 array자료에 <div> 하나씩 추가해줍니다. 
        4. 원하는 곳에서 {array자료} 사용하면 됩니다.  
          
        예를 들면)

        function App (){
  
          var 어레이 = [];
          for (var i = 0; i < 3; i++) {
            어레이.push(<div>안녕</div>)
          }
          return (
            <div>
              { 어레이 }
            </div>
          )
        }
      */}

      {/* 
        결론 : 비슷한 html 반복생성하려면 map()쓰면 됩니다
        map()함수
          1. 왼쪽 array 자료만큼 내부코드 실행해줌.
          2. return 오른쪽에 있는 걸 array로 담아줌.
          3. 유용한 파라미터 2개 사용가능. 
      */}











      {
        modal == true ? <Modal/> : null 
      }
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
