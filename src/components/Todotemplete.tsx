import styled from 'styled-components';
import { ReactNode } from 'react';

const TodoTemplateBlock = styled.div`
display : flex;
  height : 80%;
  width : 80%;
  justify-content : center;
  align-items : center;
  flex-direction : column;
position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
background: white;
border-radius: 16px;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);



m


`;
type WrapperProps = {
	children: React.ReactNode;
}
function TodoTemplate({ children} : WrapperProps) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;