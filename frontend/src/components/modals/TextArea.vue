<template>
  <div class="body-textarea">
    <label>{{ props.label }}</label>
    <textarea
      class="input-textarea"
      :value="props.modelValue"
      :cols="props.cols"
      :rows="props.rows"
      :placeholder="props.placeholder"
      @input="handleInput"
    >
    </textarea>
    <span></span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  label: {
    type: String,
    default: "Body",
  },
  modelValue: {
    type: String,
    default: "",
  },
  cols: {
    type: Number,
    default: 10,
  },
  placeholder: {
    type: String,
    default: "enter todo body...",
  },
  rows: {
    type: Number,
    default: 5,
  },
});

const emit = defineEmits(["update:modelValue"]);
const handleInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style scoped>
.body-textarea {
  width: 100%;
  height: auto;
  padding: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.body-textarea label {
  margin: 10px 5px;
  padding: 5px auto;
  font-weight: bold;
  text-transform: capitalize;
}
.body-textarea .input-textarea {
  width: 100%;
  padding: 5px 5px 5px 5px;
  height: auto;
  background: transparent;
  outline: none;
  border: 1px solid #212529;
  margin: 5px auto;
}
</style>
