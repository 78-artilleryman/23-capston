import React from "react";

const User = ({userData}) =>{
    return(
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}
const UserList = () => {
    const users =[
        {email: 'abc@gmail.com',name:'솔빈'},
        {email: 'bcd@gmail.com',name:'솔빕'},
        {email: 'efg@gmail.com',name:'솔빔'},
        {email: 'qwe@gmail.com',name:'솔빙'}
    ];

    return(
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user}/>)}
            </tbody>
        </table>
    )
}

export default UserList;