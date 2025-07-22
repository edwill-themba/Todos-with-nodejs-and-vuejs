<template>
  <div class="title-text-field">
    <label>{{ props.label }}</label>
    <input
      class="input"
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="handleInput"
    />
    <span></span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "title",
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: String,
    default: "title",
  },
  placeholder: {
    type: String,
    default: "no title",
  },
});

const emit = defineEmits(["update:modelValue"]);
const handleInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style scoped>
.title-text-field {
  width: 100%;
  height: auto;
  padding: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.title-text-field label {
  margin: 10px 5px;
  padding: 5px auto;
  font-weight: bold;
  text-transform: capitalize;
}
.title-text-field .input {
  width: 100%;
  padding: 5px 5px 5px 5px;
  height: auto;
  background: transparent;
  outline: none;
  border: 1px solid #212529;
  margin: 5px auto;
}
</style>
