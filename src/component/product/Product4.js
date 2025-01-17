import { useEffect, useReducer } from "react"
import gsap from "gsap";

export default function Product4() {
    const inputStyle ={
        width:"15px"
    }

    function countReducer(oldCount, action){
        if(action === "DOWN"){
            return oldCount-1;
        }else if(action === "UP"){
            return oldCount+1;
        }else if(action === "RESET"){
            return 0;
        }
    }

   ㄴ
    function down(){
        countDispatch('DOWN');
    }
    function reset(){
        countDispatch('RESET');
    }
    function up(){
        countDispatch('UP');
    }

    useEffect(()=>{
        gsap.to(".box",{
            x: 200, // 오른쪽으로 200px 이동
            duration: 5, // 애니메이션 지속 시간
            repeat: -1, // 무한 반복
            yoyo: true, // 왕복(애니메이션 역방향 실행)
            ease: "power1.inOut", // 부드러운 이동 효과
        });
    },[])

  return (
    <div className="box">
        <button onClick={down}>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={up}>+</button>
        <span>{count}</span>
    </div>
  )
}
