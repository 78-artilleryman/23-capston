import React, {useState} from "react";
import './ChatGpt.css';
const Counter = () => {
    const [num,setNumber] = useState(0);
    //0이라는 값을 기본값으로 갖는 변수 
    //0이라는 값을 변경시키기 위한 셋넘버

    const  increse = () =>  {
        setNumber(num + 1);
    };
    const decrese = () => {
        setNumber(num -1);
    };
    return(
        <div>
            <button onClick={increse}>+1</button>
            <button onClick={decrese}>-1</button>
            <p>{num}</p>
        </div>
    );
    //버튼을 클릭할떄마다 increse 함수를 호출

};

export default Counter;