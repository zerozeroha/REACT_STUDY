// 다른 파일에 있던 자료 가져오려면 import & export

import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png'
import { useState } from 'react';

// import 작명 from './data.js'
import data from './data.js';

// export하려면 export default 변수명
// import하려면 import 작명 from '파일경로'

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
// img 태그에서 경로를 템플릿 리터럴로
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
