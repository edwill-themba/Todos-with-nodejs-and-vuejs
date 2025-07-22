<template>
  <div class="form-input-group">
    <label>{{ props.label }}</label>
    <div class="input-text">
      <span>
        <FontAwesomeIcon :icon="props.icon" />
      </span>
      <input
        :type="props.type"
        :placeholder="props.placeholder"
        :name="props.name"
        :value="props.modelValue"
        @input="handleInput"
        @blur="handleError"
      />
    </div>
    <span class="error-span">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const error = ref(null);
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    default: "username",
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  placeholder: {
    type: String,
    default: "Enter user name",
  },
  label: {
    type: String,
    default: "user name",
  },
  icon: {
    type: String,
    default: "user",
  },
});
const emit = defineEmits(["update:modelValue"]);
const handleInput = (event) => {
  emit("update:modelValue", event.target.value);
};

const handleError = () => {
  if (props.name === "email" && props.modelValue === "") {
    error.value = "the email field is required";
  }
  if (props.name === "password" && props.modelValue === "") {
    error.value = "the password field is required";
  }
  if (props.name === "username" && props.modelValue === "") {
    error.value = "the username field is required";
  }
  return;
};
</script>

<style scoped>
.form-input-group {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 350px;
  padding-bottom: 5px;
}
.form-input-group label {
  margin: 10px 5px;
  text-transform: capitalize;
}
.form-input-group .input-text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.form-input-group .input-text span {
  width: 10%;
  margin-left: 3px;
}
.form-input-group .input-text input {
  width: 90%;
  border: none;
  background: transparent;
  padding-left: 0px;
  font-size: 15px;
  outline: none;
}
.form-input-group .error-span {
  color: #df3333;
  margin: 0px 10px;
  padding: 2px;
}
</style>
