<template>
  <div
    class="row tarefa-content"
    @mouseenter="showButtons = true"
    @mouseleave="showButtons = false"
  >
    <div class="col-10 todo-block" @click.prevent="toggleCompleted()">
      <div class="form-group">
        <label :for="'check' + data.key" class="paper-check">
          <input
            type="checkbox"
            :name="'check' + data.key"
            :id="'check' + data.key"
            :checked="data.completed"
          />
          <span :class="{ 'has-completed': data.completed }" v-if="!hasEditable"
            >{{ data.text }} | {{ data.key }}</span
          >
          <span v-else></span>
        </label>
        <input
          type="text"
          id="editTodo"
          v-model="textNotSave"
          ref="inputTodoEdit"
          v-if="hasEditable"
        />
      </div>
    </div>
    <div class="col-2" v-if="showButtons">
      <div class="form-group tarefa-buttons" v-if="!hasEditable">
        <button
          class="paper-btn btn-primary-outline btn-small"
          @click.prevent="toggleEditable"
          v-if="!data.completed"
        >
          Editar
        </button>
        <button
          class="paper-btn btn-primary-outline btn-small"
          @click="removeTodo(data.key)"
        >
          ❌
        </button>
      </div>
      <div class="form-group tarefa-buttons" v-else>
        <button
          class="paper-btn btn-primary-outline btn-small"
          @click.prevent="editSave"
        >
          ✔️
        </button>
        <button
          class="paper-btn btn-primary-outline btn-small"
          @click.prevent="editCancel"
        >
          ❌
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import { ITodo, removeTodo, updateTodo } from '@/store/todoStore'

export default defineComponent({
  name: 'Todo',
  props: {
    data: {
      type: Object as () => ITodo,
      required: true
    }
  },
  setup (props, context) {
    const hasEditable = ref(false)
    const textNotSave = ref('')
    const inputTodoEdit = ref()
    const showButtons = ref(false)

    function toggleCompleted () {
      const completed = !props.data.completed
      updateTodo(props.data.key, { completed })

      // inputTextEdit.value.focus()
    }

    function toggleEditable () {
      console.log(props.data.key)
      hasEditable.value = !hasEditable.value
      textNotSave.value = JSON.parse(JSON.stringify(props.data.text))
      setTimeout(() => {
        if (inputTodoEdit.value) {
          inputTodoEdit.value.focus()
        }
      }, 150)
    }

    function editSave () {
      updateTodo(props.data.key, { text: textNotSave.value })
      editCancel()
    }

    function editCancel () {
      textNotSave.value = ''
      hasEditable.value = false
    }

    onMounted(() => {
      console.log(context)
      console.log('MOUNTED')
      console.log(props.data)
    })

    return {
      showButtons,
      editSave,
      editCancel,
      textNotSave,
      inputTodoEdit,
      hasEditable,
      removeTodo,
      toggleEditable,
      toggleCompleted
    }
  }
})
</script>

<style lang="scss" scoped>
.tarefa-text {
  align-self: center;
}

.todo-block {
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;

  .form-group {
    margin-bottom: 0;

    label{
      margin-bottom: 0;
    }
  }
  #editTodo {
    width: 95%;
  }
}

.tarefa-buttons {
  display: flex;
  justify-content: space-around;
}

.has-completed {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
