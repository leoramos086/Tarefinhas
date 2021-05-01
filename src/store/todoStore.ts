import { reactive, readonly } from 'vue'

export interface ITodo {
  key?: string
  text: string
  completed: boolean
}

const state = reactive({
  todoList: <ITodo[]>[
    {
      key: 'xqlmb2l5adr',
      text: 'Brasilieira',
      completed: false
    }
  ]
})

function addTodo (todo: ITodo): void {
  const newTodo = {
    ...todo,
    key: randomKey()
  }

  state.todoList.push(newTodo)
}

function removeTodo (textTodo: string): void {
  state.todoList = state.todoList.filter(todoItem => {
    return todoItem.key !== textTodo
  })
}

function randomKey (): string {
  return Math.random()
    .toString(36)
    .substr(2, 15)
}

export const stateTodo = readonly(state)

export { addTodo, removeTodo }
