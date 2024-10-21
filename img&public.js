// 이미지 넣는 법 & public 폴더 이용하기

import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import shoes from './img/bg.png'
// import 작명 from '이미지경로';
// html 파일에선 import부터 하고 필요한 곳에서 사용해야
// * html에서 src폴더 이미지 사용할 땐 import부터 해와야 함. (이미지가 100개면 어쩔 것?!)
// : public 폴더에도 이미지 보관가능
//   리액트는 사이트밣행 전에 html js css 파일을 압축함. (bundling)
//   BUT puclic 폴더에 있던 건 압축안됨.
// 그래서 형태를 보존하고 싶은 파일은 public 폴더에 넣으면 되는데 js 파일은 그럴 일은 거의 없고 
// 이미지, txt, json 등 수정이 필요없는 static 파일들의 경우엔 public 폴더에 보관해도 상관없습니다.


function App() {
  return (
    <div className="App">
      {/* (굳이 그대로 쓸 필요 x css로 커스터마이징 가능 o) */}
      <Button variant="primary">Primary</Button>
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* 대문사진넣기 */}
    <div className='main-bg' style={{backgroundImage : 'url('+shoes+')'}}></div>

    {/* 상품 레잉아웃 3개 만들기 (bootstrap으로 빠르게 하기)-상품이미지와 설명넣기*/}
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          {/* 외부에 호스팅해둔 이미지라면 이미지 절대주소만 넣으면 됩니다. */}
          {/* /img/logo.png : public에 있는 이미지 주소경로 */}
          <img src={process.env.PUBLIC_URL + '/img/logo192.png'} width="80%"></img>
          {/* react-bootstrap에 들어가서 복붙해야할 코드 */}
          {/* codingapple.com 경로에 배포하면 아무런 문제가 없지만
          codingapple.com/어쩌구/ 경로에 배포하면
          /logo192.png 이렇게 쓰면 파일을 찾을 수 없다고 나올 수도 있습니다. 
          그래서 /어쩌구/ 를 뜻하는 process.env.PUBLIC_URL 이것도 더해주면 된다고 하는군요.  */}
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className="col-md-4">
          <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="80%"></img>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
          <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="80%"></img>
          <h4>상품명</h4>
            <p>상품설명</p>
          </div>      
        </div>
    


    </div>
  );
}

export default App;
