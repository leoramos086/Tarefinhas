import { reactive, readonly } from 'vue'

export interface ITodo {
  key: string
  text: string
  completed: boolean
}

const todoMockup: ITodo[] = [
  {
    key: 'xqlmb2l5adr',
    text: 'Tomar Café',
    completed: false
  }
]

const state = reactive({
  todoList: <ITodo[]>[]
})

function addTodo (todo: Pick<ITodo, 'completed' | 'text'>): void {
  const newTodo = {
    ...todo,
    key: randomKey()
  }

  state.todoList.push(reactive(newTodo))
  console.log(state.todoList)
}

function updateTodo (key: string, todoChanged: Partial<ITodo>) {
  state.todoList = state.todoList.map(todo => {
    if (todo.key === key) {
      const newTodo = {
        ...todo,
        ...todoChanged
      }
      return newTodo
    }
    return todo
  })
}

function removeTodo (key: string): void {
  console.log(state.todoList)
  state.todoList = state.todoList.filter(todoItem => {
    return todoItem.key !== key
  })
  console.log(state.todoList)
}

function randomKey (): string {
  return Math.random()
    .toString(36)
    .substr(2, 15)
}

export const stateTodo = readonly(state)

export { addTodo, removeTodo, updateTodo }
