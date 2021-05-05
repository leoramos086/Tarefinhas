<template>
  <div class="home paper container">
    <div class="row">
      <div class="col sm-11 form-input">
        <div class="form-group">
          <label for="newTask">Nova tarefa</label>
          <input
            class="input-block"
            type="text"
            id="newTask"
            v-model="newTaskText"
            @keyup.enter="addNewTodo"
            :placeholder="randomPlaceholder()"
          />
        </div>
      </div>
      <div class="col sm-1 form-button">
        <button
          class="paper-btn btn-primary-outline btn-small"
          @click="addNewTodo"
        >
          Enviar
        </button>
      </div>
    </div>
    <hr />

    <todo v-for="(todo, index) in todos" :key="index" :data="todo"></todo>

    <div class="row flex-center" v-if="!todos.length">
      <p class="hax-text-centered">
        Sem tarefas no momento, aproveite a vida! 😄
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { addTodo, stateTodo } from '@/store/todoStore'
import Todo from '@/components/Todo.vue'

document.title = 'Tarefinhas'

export default defineComponent({
  name: 'Home',
  components: {
    Todo
  },
  setup () {
    const newTaskText = ref('')
    const todos = computed(() => {
      return stateTodo.todoList
    })
    // ❌: Não enviar vazio
    function addNewTodo () {
      addTodo({
        text: newTaskText.value,
        completed: false
      })

      newTaskText.value = ''
    }

    function randomPlaceholder (): string {
      const placeholders: Array<string> = [
        'Levar lixo para fora',
        'Dormir cedo',
        'Sentir a brisa',
        'Deitar em uma rede'
      ]

      const placeholderIndexSelected = Math.floor(
        Math.random() * placeholders.length
      )

      return `${placeholders[placeholderIndexSelected]}...`
    }

    return {
      addNewTodo,
      todos,
      newTaskText,
      randomPlaceholder
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  min-width: 600px;
}
.form-button {
  padding: 0;
  text-align: center;
  @media screen and (min-width: 769px) {
    margin-top: 55px;
  }

  .paper-btn {
    @media screen and (max-width: 769px) {
      width: 70%;
    }
  }
}

.form-input {
  padding-left: 0;
  padding-bottom: 0;
  // padding-right: 0;
}
</style>
