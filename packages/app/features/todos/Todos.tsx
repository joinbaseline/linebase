import { TodoCard } from '@my/ui';
import { onCheck, useCheckIfDone } from './TodoHooks';

export type Todo = {
  label: string;
  type: string;
  link?: string
};


export const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <>
      {todos.map((t, index) => {
        const checked = useCheckIfDone(t.type);
        return (
          <TodoCard 
            key={index}
            isFirst={index === 0}
            isLast={index === todos.length - 1}
            label={t.label} 
            link={t.link} 
            onCheckedChange={onCheck(t.type, t.label)}
            checked={checked}
          />
        );
      })}
    </>
  );
}
