 // 리액트에서 레이아웃 만들 때 쓰는 JSX문법 3개

import logo from './logo.svg';
import './App.css';


// 상단메뉴 만들어보기 ( 리액트라고 다른 거 없음 . html css 써서 디자인 하기 )
function App() {

  // 자료 잠깐 저장할 땐 변수
  let post = '강남 우동 맛집'; // 대충 서버에서 가져온 실제 데이터라고 가정

  // 쌩자바스크립트에서 : document.querySelector('h4').innerHTML = post;
  // 리액트에서 : {} 중괄호 사용하기 -> {post}
  

  return (
    // return()안에는 병렬로 태그 2개 이상 기입금지 : ex) <div></div>이런 병렬
    <div className="App"> 
    {/* 
      실은 html이 아니라 jsx(.js파일에서 쓰는 html 대용품)임.
      리액트에서 <div>만드는 법 : react.createElement('div',null,'Hello World') 
      
      < JSX문법 >
        1. class 넣을 땐 className 
        참고) css파일 쓰려면 상단에서 import'css파일 경로'      
        2. 변수넣을 땐 중괄효 : {변수} 
        3. style 넣을 땐 style = {} */}
      <div className="black-nav">
        <h4 id={post}>블로그임.</h4>
      </div>
      {/* JSX문법에서는 {}중괄호 안에 {}object사용해야 함.  */}
        <h4 style={{color : 'red', fontSize : '20px'}}>{ post }</h4>
    {/*   블로그 글 제목을 만들고 싶은데
          실제 서비스면 이런데서 블로그 글 가져와서 보여줄 듯
      

      * 프론트엔드에서 하는일 = 데이터바인딩
      서버에서 데이터 가져와서 <html> 사이에 넣어주세요 
      
      (참고)에러메세지는 터미널/브라우저에서 확인 또는 개발자도구*/}
    </div>
  );
}

export default App;
