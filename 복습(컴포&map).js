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
              `i={i}`는 **리액트의 `props`를 통해 해당 요소의 인덱스를 전달**하는 방식입니다. 

// `shoes.map()`을 사용할 때 `i`는 현재 반복 중인 요소의 인덱스를 나타냅니다. 이 값을 자식 컴포넌트(`Card`)에 **`props`로 전달**해, 내부에서 이미지나 텍스트 등을 해당 인덱스에 맞게 렌더링할 수 있습니다.

// 예를 들어:

```jsx
<Card shoes={shoes[i]} i={i} />
```

이 코드는 `Card` 컴포넌트로 `i`를 넘기며, `Card`에서 그 값을 이용해 해당 신발의 정보나 이미지를 정확하게 표시합니다.
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
