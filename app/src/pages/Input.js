import React, {useState} from "react";

const Input = () => {
    const [txtValue,setTextValue] = useState("");
    //0이라는 값을 기본값으로 갖는 변수 
    //0이라는 값을 변경시키기 위한 셋넘버

    const onChange = (e) => {
        setTextValue(e.target.value);
    };
    //이벤트.타겟  = 인풋에 벨류를 말함
    
    return(
        <div>
            <input type="text" value={txtValue} onChange={onChange}/>
            <br/>
            <p>{txtValue}</p>
        </div>
    );
    //버튼을 클릭할떄마다 increse 함수를 호출

};

export default Input;