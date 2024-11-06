// Detail 안에 shoes라는 state 더 만들면 편할 듯
// : 근데 나중에 수정해야할 때 두 곳을 수정해야 해서 이렇게 하지 않음.
import { useState } from "react";
import { useParams } from "react-router-dom";


// 상세페이지에 상품명 넣기
function Detail(props){

  // let [shoes] = useState();
  // : 근데 나중에 수정해야할 때 두 곳을 수정해야 해서 이렇게 하지 않음.

  // 유저가 URL파라미터에 입력한 거 가져오려면 useParams()
  // 유저가 :id자리에 적은 거 가져와줌
  let {id} = useParams();
  console.log(id);

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            {/* shoes[현재 url에 임력한 숫자] */}
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    )
  }

  export default Detail;
