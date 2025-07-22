<template>
  <div>
    <label :for="props.label">{{ props.label }}</label>
    <input
           :type="props.type"
           :value="props.modelValue"
           @input="handleInput">
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "checkbox",
  },
  modelValue: {
    type: [Boolean, Number],
    //default: true,
  },
  label: {
    type: String,
    default: "Like this todo",
  },
  for: {
    type: String,
    default: "Like this todo",
  },
});

const emits = defineEmits(["update:modelValue"]);
const handleInput = (event) => {
  emits("update:modelValue", event.target.value);
};
</script>

