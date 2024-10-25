// let a = 10;
// let b = 100;

// export {a,b}

// export default 변수명 : 변수 한 개
// export 여러개 하려면 export{변수1,변수2}
// import 여러개 하려면 import {변수1, 변수2}from '경로'

let data = [
    {
      id : 0,
      title : "White and Black",
      content : "Born in France",
      price : 120000
    },
  
    {
      id : 1,
      title : "Red Knit",
      content : "Born in Seoul",
      price : 110000
    },
  
    {
      id : 2,
      title : "Grey Yordan",
      content : "Born in the States",
      price : 130000
    }
  ] 

  export default data;

// 참고) 함수도 export 가능
// 참고) 컴포넌트도 export 가능

