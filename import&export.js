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
            <div className="col-md-4">
              <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%"></img>
              <h4>{shoes[0].title}</h4>
              <p>{shoes[0].price}</p>
            </div>
            <div className="col-md-4">
              <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="80%"></img>
              <h4>{shoes[1].title}</h4>
              <p>{shoes[1].price}</p>
            </div>
            <div className="col-md-4">
              <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="80%"></img>
              <h4>{shoes[2].title}</h4>
              <p>{shoes[2].price}</p>
            </div>      
        </div>
      </div>
    </div>
  );
}

export default App;
