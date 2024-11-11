import { useState } from "react";
import { useParams } from "react-router-dom";


function Detail(props){


  let {id} = useParams();
  // console.log(id);

  //.find() 문법 : array 자료안에서 원하는 항목만 찾아올 수 있음
  // array자료.find(()=>{ return 조건식 }) 
  // 이렇게 쓰면 조건식에 맞는 자료를 찾아서 이 자리에 남겨줌
  let 찾은상품 = props.shoes.find(function(a){
    return(
      a.id == id
    )
  }
  )
  // { id } : 현재 페이지가 보여줘야 할 상품을 식별하기 위한 기준 
  // props.shoes.find() 함수에서 이 id와 배열의 각 상품 a.id를 비교하여, 
  // URL의 id와 일치하는 상품을 찾은상품 변수에 저장.
  // find() 콜백함수에 파라미터 넣으면 array자료에 있던 자료란 뜻 : 전 a라고 작명해봤음
  // 이 코드는 props.shoes 배열에서 a.id가 id와 같은 첫 번째 상품을 찾아서 찾은상품에 저장 
  // 만약 {id}를 사용하지 않으면 현재 페이지가 어떤 상품을 보여줘야 하는지 알 수 없게 됨

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    )
  }

  export default Detail;
