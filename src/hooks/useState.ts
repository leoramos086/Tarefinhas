import { readonly } from '@vue/reactivity'
import todoModule from '@/Store/todo'

export default readonly({
  Todo: todoModule()
})
