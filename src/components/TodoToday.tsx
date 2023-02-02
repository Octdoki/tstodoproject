import React from "react";
import styled from "styled-components";

const TodoTodayBlock = styled.div`

padding-top: 48px;
padding-left: 32px;
  padding-right: 32px;
border-bottom: 1px solid #e9ecef;

h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  h2 {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
`;


function TodoToday() {
    const date = new Date();

    const strWeak = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const Todayweek = strWeak[date.getDay()]
    const showTime = (date.getMonth()+1)
        + '/' + date.getDate() 
        + "/" + Todayweek;
  
    return (
        <TodoTodayBlock>
            <h1 >Write Anything</h1>
        
            <h2 > Today is : {showTime}</h2>
        </TodoTodayBlock>
    );
}
  
export default TodoToday;