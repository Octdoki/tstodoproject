import { createContext, Dispatch, useContext, useReducer } from "react";

export type Todo = {
    id: number
    text: string
    done : boolean
}

type TodosState = Todo[]

const TodosStateContext = createContext<TodosState | undefined>(undefined)

//createContext함수의 Generics 사용하여 Context에서 관리할 값 상태 설정
//추후 Provider 사용하지 않았을 떄는 Context 값 undefined 되어야하므로 
//Context의 값이 TodosState일 수도 있고, undefined일 수도 있다고 선언 

//액션들을 위한 타입스크립트 타입들을 선언.
//CREATE: 새로운 항목 생성
//TOGGLE: done 값 반전
//REMOVE: 항목 제거

type Action = 
| { type : 'CREATE'; text: string }
| { type : 'TOGGLE'; id: number }
| { type : 'REMOVE'; id: number }

type TodosDispatch = Dispatch<Action>
const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined)
//이렇게 Dispatch를 리액트 패키지에서 불러와서 Generic으로 액션들의 타입을 넣어주면, 
//추후 컴포넌트에서 액션을 디스패치 할 때 액션들에 대한 타입을 검사할 수 있음
//ex. 액션에 추가적으로 필요한 값(ex: id, text) 빠지면 오류가 발생

function todosReducer(state: TodosState, action: Action): TodosState {
    switch (action.type) {
      case 'CREATE':
        const nextId = Math.max(...state.map(todo => todo.id)) + 1;
        return state.concat({
          id: nextId,
          text: action.text,
          done: false
        });
      case 'TOGGLE':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        );
      case 'REMOVE':
        return state.filter(todo => todo.id !== action.id);
      default:
        throw new Error('Unhandled action');
    }
  }

  export function TodosContextProvider({ children }: { children: React.ReactNode }) {
    const [todos, dispatch] = useReducer(todosReducer, [
      {
        id: 1,
        text: 'Learning Typescript',
        done: true
      },
      {
        id: 2,
        text: '',
        done: true
      },
      {
        id: 3,
        text: 'TypeScript 와 Context API 함께 사용하기',
        done: false
      }
    ]);
  
    return (
      <TodosDispatchContext.Provider value={dispatch}>
        <TodosStateContext.Provider value={todos}>
          {children}
        </TodosStateContext.Provider>
      </TodosDispatchContext.Provider>
    );
  }
  //커스텀Hooks 생성
  export function useTodoState() {
    const state = useContext(TodosStateContext)
    if(!state) throw new Error('TodosProvider not found')
    return state
  }
  export function useTodosDispatch() { 
    const dispatch = useContext(TodosDispatchContext)
    if(!dispatch) throw new Error('TodosProvider not found')
    return dispatch
  }
  //만약 함수 내부에서 필요한 값이 유효하지 않다면 
  //에러를 throw 하여 각 Hooks이 반환하는 값의 타입은 언제나 유효하다는 것을 보장받을 수 있음




  