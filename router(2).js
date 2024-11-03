// 리액트 라우터 2 : navigate, nesteㅇ routes, outlet
// router의 장점
// 1. 이런 식으로 UI 만들면 뒤로가기 버튼 이용가능
// 2. 페이지 이동이 쉬움 (UI스위치 조작 쉬움)


import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png'
import { useState } from 'react';
import data from './data.js';

// useNavigate, Outlet 추가
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
// ./routes 추가 : 페이지 역할하는 js파일은 routes 아니면 pages 폴더에 묶기
import Detail from './routes/Detail.js'
// 자주 쓰는 함수가 들어있는 js파일은 utils폴더에 묶기


function App() {

// use어쩌고저쩌고로 시작하는 함수 : 훅
// -> 융용한 것들이 들어있는 함수
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

    {/* 1. 페이지 이동도와주는 useNavigate() */}
      <Navbar bg='light' variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* 뒤로가기 버튼( 2로 하면 두번 뒤로감 ) */}
            {/* <Nav.Link onClick={()=>{ navigate(-1)}}>Home</Nav.Link> */}
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            {/* 이 함수 실행하면 페이지 이동됨 */}
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
      <Routes>
        <Route path="/" element={<div>메인페이지임.</div>}/>
        
        <Route path="/detail" element={<Detail/>}/>
        {/* 3. Nested Routes ( nested : 태그 안에 태그 들어간 거 )
          (장점) 1. route작성이 약간 간단해질 수도
                2. nested route 접속시엔 element 2개나 보임
            /bout/member 페이지도 만들고
            /about/location 페이지도 만들고
        */}
        <Route path="/about" element={<About/>}>
        {/* /about/member 접속시 <About>&<div>멤버임</div>둘다보임 */}
        {/* element={어디 보여줄지 정해야하는데 정하려면 <Outlet></Outlet>} */}
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<About/>}/>
        </Route>
        {/* 2. 404페이지( *:이 외에 모든 것 ) */}
        <Route path="*" element={<div>없는 페이지요</div>}/>
      </Routes>



      
    </div>
  );
}


function About () {
  return(
    <div>
      <h4> 회사정보 </h4>
      {/* nested routes의 element 보여주는 곳은 <Outlet></Outlet> */}
      <Outlet></Outlet>
    </div>
  )
}


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
