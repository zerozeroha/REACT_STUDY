
import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png'
import { useState } from 'react';
import data from './data.js';

// import 해오기
import { Routes, Route, Link } from 'react-router-dom'

// 외부라이브러리 설치 세팅
// 터미널 열어서 npm install react-router-dom@6

function App() {


  let [shoes] = useState(data);

  return (
    <div className="App">

      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            {/* 페이지 이동버튼은 <Link></Link> */}
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지임</Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      {/* Route라는 컴포넌트는 페이지라고 생각하면 됨. */}
      {/* 라우터로 페이지 나누는 법 
          1. 우선 상단에서 여러가지 컴포넌트를 import 해오고 
          2. <Routes> 만들고 그 안에 <Route>를 작성합니다.
          3. <Route path="/url경로" element={ <보여줄html> } />  
      */}
      <Routes>
        {/* 메인페이지임 */}
        <Route path="/" element={<div>메인페이지임.</div>}/>
        {/* /detail로 접속하면 상세페이지 보여주고 싶다 */}
        {/* 페이지도 컴포넌트로 만들면 좋음 */}
        <Route path="/detail" element={
          <> 
          <div className='main-bg'></div>
            <div className="container">
              <div className="row">
                { shoes.map(function(a, i){
                    return <Card shoes = {shoes[i]} i={i}></Card>
                  })}
            </div>
          </div>
          </>
        } />
        <Route path="/zbout" element={<div>어바웃페이지임.</div>}/>
      </Routes>



      
    </div>
  );
}


// 페이지 나누는 법 (리액트 사용)
// 1. 컴포넌트 만들어서 상세페이지 내용 채움
// 2. 누가 / detail 접속하면 그 컴포넌트 보여줌
// (님들 알아서 코드 짤 수 있음.) -> react-router-dom 라이브러리 쓰면 그런거 쉽게 만들 수 있음.

function Card(props){
  return(
    <div className='col-md-4'>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width='80%'/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
