import React, { useState } from 'react';
import { useTodosDispatch } from '../contexts/TodosContext';
import '../styles/TodoForm.scss'


function TodoForm() {
  const [value, setValue] = useState('');
  const dispatch = useTodosDispatch()
  //useTodosDispatch Hook 을 통해 dispatch 함수를 받아오고, 액션을 디스 패치합니다.

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 새 항목 생성하기
    dispatch({
      type: 'CREATE',
      text : value
    })
    setValue('');
  };

  return (
    <form onSubmit={onSubmit} className = "todoForm">
      <input
        value={value}
        placeholder="Let's Take Notes"
        onChange={e => setValue(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

export default TodoForm;