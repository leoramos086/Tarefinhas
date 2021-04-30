<template>
  <div class="home paper container">
    <div class="row">
      <div class="col sm-11">
        <div class="form-group">
          <label for="paperInputs2">Nova tarefa</label>
          <input
            class="input-block"
            type="text"
            id="paperInputs2"
            :placeholder="randomPlaceholder()"
          />
        </div>
      </div>
      <div class="col sm-1 form-button">
        <button class="paper-btn btn-primary-outline btn-small">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

document.title = 'Tarefinhas'

export default defineComponent({
  name: 'Home',
  components: {},
  setup () {
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
      randomPlaceholder
    }
  }
})
</script>

<style lang="scss" scoped>
.form-button {
  margin-top: 55px;
  padding: 0;
  text-align: center;
}
</style>
