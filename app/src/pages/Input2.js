import React, {useState} from "react";

const Input2 = () => {
    const [inputs, setInputs]= useState({
        name:"",
        email:"",
        tel:"",
    });
    
    const {name,email,tel} = inputs;

    const onChange = (e) =>{
        const value = e.target.value;
        const id = e.target.value;
        
        setInputs({
            ...inputs,
            [id]:value
        });
                    //현재 변경이 일어나는 곳에 id값을 가져와 업데이트
            //...깊은복사 (새로운 오브젝트를 만듬)
            // ...inputs에 name email tel이 다 들어가 있음
    };

    return(
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel"id="tel" value={tel} onChange={onChange}/>
            </div>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>
        </div>
    );
    
    
};

export default Input2;