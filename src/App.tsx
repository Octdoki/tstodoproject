import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoTemplate from './components/Todotemplete';
import TodoToday from './components/TodoToday';
import { TodosContextProvider } from './contexts/TodosContext';




const Rootdiv = styled.div`
  display : flex;
  height : 100vh;
  width : 100%;
  justify-content : center;
  align-items : center;
  flex-direction : column;
  background-image : linear-gradient(#ffafbd , #ffc3a0)
`;

const GlobalStyle = createGlobalStyle`
  body{
    padding : 0;
    margin : 0;
  }
`;

const App = () => {
  return (
   <>
   <TodosContextProvider>
     <GlobalStyle/>
     <Rootdiv>
         <TodoTemplate> 
         <TodoToday />  
          <TodoForm />
         <TodoList />
       </TodoTemplate> 
     </Rootdiv>
     
     
     
   </TodosContextProvider>
  
  
   </>
  );
}

export default App;
