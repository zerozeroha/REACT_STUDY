// 리액트 라우터 3 : URL 파라미터로 상세페이지 100개 만들기
import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png'
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'


function App() {

  // App -> Detail 전송하면 사용가능
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg='light' variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<div>메인페이지임.</div>}/>
        <Route path="/" element={
          <> 
          <div>메인페이지임.</div>
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
        {/* Detail컴포넌트에다가 shoes 전송쓰기 
            상세 페이지 3개 만들기?
              : 페이지 여러개 만들고 싶으면 :URL파라미터 써도 됩니다. 
              /detail/아무거나 라는 뜻   
            하나의 컴포넌트로 각각 다른 내용을 보여줘야 함. 
              : props 활용하면 컴포넌트 1개로 각각 다른 내용가능
              
      * path 작명할 때 /:어쩌구 이렇게 사용하면 "아무 문자"를 뜻합니다.
        그래서 위의 <Route>는 누군가 주소창에 /detail/아무거나 입력했을 때
        <Detail> 컴포넌트 보여달라는 뜻*/}
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
        
        {/* (참고)URL 파라미터 만들 때 - 여러개 가능 
        <Route path="/detail/:id/:ㄴㅇㄹ/:sddde" element={<Detail shoes={shoes}/>}/> */}

        <Route path="*" element={<div>없는 페이지요</div>}/>
      </Routes>

      
      {/* <Routes>
        <Route path="/" element={<div>메인페이지임.</div>}/>        
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<About/>}/>
        </Route>
        <Route path="*" element={<div>없는 페이지요</div>}/>
      </Routes> */}

      <Routes>
      <Route path="/event" element={<Eventpage></Eventpage>}>
        <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
        <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>        
        </Route>
      </Routes>

      
    </div>
  );
}


function About () {
  return(
    <div>
      <h4> 회사정보 </h4>
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

function Eventpage(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )

}

export default App;
