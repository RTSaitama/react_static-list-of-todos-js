import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => {
  return todos.map(todo => <TodoInfo todo={todo} key={todo.id} />);
};
