import { TodoCard } from '@my/ui';
import { onCheck, useCheckIfDone } from './TodoHooks';

export type Todo = {
  label: string;
  type: string;
  link?: string
};


const TodoCardWithContext = ({ todo, index, length }: { todo: Todo, index: number, length: number }) => {
  const checked = useCheckIfDone(todo.type);
  return (
    <TodoCard
      key={index}
      isFirst={index === 0}
      isLast={index === length - 1}
      label={todo.label}
      link={todo.link}
      onCheckedChange={onCheck(todo.type, todo.label)}
      checked={checked}
    />
  );
}

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <>
      {todos.map((t, index) => (
        <TodoCardWithContext key={index} todo={t} index={index} length={todos.length} />
      ))}
    </>
  );
}
