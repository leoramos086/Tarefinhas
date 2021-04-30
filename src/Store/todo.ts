import { reactive, readonly } from 'vue'

export interface ITodo {
  text: string
  completed: boolean
}

export default function TodoModule () {
  const todoList = reactive<ITodo[]>([])

  function addTodo (todo: ITodo): void {
    todoList.push(todo)
  }

  return {
    todoList: readonly(todoList),
    addTodo
  }
}
