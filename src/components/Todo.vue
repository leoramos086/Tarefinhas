<template>
  <div class="col-10 tarefa-text">
    <div class="form-group">
      <label for="paperChecks1" class="paper-check">
        <input type="checkbox" name="paperChecks" id="paperChecks1" />
        <span>{{ data.text }}</span>
      </label>
    </div>
  </div>
  <div class="col-2">
    <div class="form-group tarefa-buttons">
      <button class="paper-btn btn-primary-outline btn-small">Editar</button>
      <button
        class="paper-btn btn-primary-outline btn-small"
        @click="removeTodo(data.key)"
      >
        X
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { ITodo, removeTodo } from '@/store/todoStore'

export default defineComponent({
  name: 'Todo',
  props: {
    data: {
      type: Object as () => ITodo,
      required: true
    }
  },
  setup () {
    return {
      removeTodo
    }
  }
})
</script>

<style scoped lang="scss">
.tarefa-text {
  align-self: center;
}

.tarefa-buttons {
  display: flex;
  justify-content: space-around;
}
</style>
