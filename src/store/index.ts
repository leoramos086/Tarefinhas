import { readonly } from '@vue/reactivity'
import TodoModule from '@/store/todoStore'

export default readonly({
  Todo: TodoModule
})
