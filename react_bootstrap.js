// 새로운 프로젝트 생성 & Bootstrap 사용하기
// 레이아웃을 복사붙여넣기식으로 편하게 개발가능한 Bootstrap 외부 라이브러리
// npm install 같은 설치명령어는 맨날 바뀌기때문에 사이트 들어가서 확인하고 설치하기
// 이제 react-bootstrap 사이트에서 ui복사붙여넣기 가능

import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
// 항상 그냥 가져오는 게 아니라 import해오기(맨 처음페이지), 대문자로 된 거 다 추가하기/ .점찍힘 건 굳이x

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
    </div>
  );
}

export default App;
