//오늘의 숙제 :

// 1. 오늘 만든 상품목록을 컴포넌트로 만들어봅시다. 컴포넌트도 길면 다른 파일로 빼도 상관없음 

// 2. 컴포넌트만들면 그 안에 데이터바인딩도 아마 다시해야겠군요 

// 3. 반복적인 html이나 컴포넌트를 발견하면 연습삼아 map 반복문을 써봅시다. 

import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png'
import { useState } from 'react';
import data from './data.js';



function App() {


  let[shoes] = useState(data);
// 복잡한 자료에서 데이터 뽑을 댄 시작기호만 잘 보면 됩니다.

  return (
    <div className="App">
      <div className='main-bg' style={{backgroundImage : 'url('+bg+')'}}></div>
        <div className="container">
          <div className="row">
            {/* <Sneakers shoes = {shoes[0]} i={1}/>
            <Sneakers shoes = {shoes[1]} i={2}/>
            <Sneakers shoes = {shoes[2]} i={3}/> */}
            {
              shoes.map(function(a,i){
                return <Sneakers shoes = {shoes[i]} i={i}/>
              })
            }
            
        </div>
      </div>
    </div>
  );
}

// 컴포넌트 이름 앞에 대문자로 짓는 거 잊지말기!!
// img 태그에서 경로를 템플릿 리터럴로 : {}랑 ₩빽틱 써서 자바스크리브 문잗열로 만들기
function Sneakers(props){
  return(
    <div className="col-md-4">
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>  
  )
}

export default App;
