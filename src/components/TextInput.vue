<template>
  <div class="TextInput" :class="{ 'has-error': !!errors, success: meta.valid }">
    <label :for="name">{{ label }}</label>
    <input
      :name="name"
      :id="name"
      :type="typeText"
      :value="value"
      :placeholder="placeholder"
      @blur="handleBlur"
    />

    <p class="help-message" v-show="errors || meta.valid">
      {{ errors || successMessage }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: undefined
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    successMessage: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // Use a data property to store the input value
      inputValue: this.value,
      errorMessage: '',
      meta: {
        valid: true // Initial state for validation status
      }
    }
  },

  methods: {
    handleBlur() {
      // Trigger validation on blur (assuming using a validation library)
      // You would need to integrate your specific validation logic here
      this.errorMessage = '' // Simulate validation for demonstration
      this.meta.valid = true // Simulate validation for demonstration
    }
  }
}
</script>

<style scoped>
.TextInput {
  position: relative;
  margin-bottom: calc(1em * 1.5);
  width: 100%;
}

label {
  display: block;
  margin-bottom: 4px;
  width: 100%;
}

input {
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 15px 10px;
  outline: none;
  background-color: #f2f5f7;
  width: 100%;
  transition:
    border-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}

input:focus {
  border-color: var(--primary-color);
}

.help-message {
  position: absolute;
  bottom: calc(-1.5 * 1em);
  left: 0;
  margin: 0;
  font-size: 14px;
}

.TextInput.has-error input {
  background-color: var(--error-bg-color);
  color: var(--error-color);
}

.TextInput.has-error input:focus {
  border-color: var(--error-color);
}

.TextInput.has-error .help-message {
  color: var(--error-color);
}

.TextInput.success input {
  background-color: var(--success-bg-color);
  color: var(--success-color);
}

.TextInput.success input:focus {
  border-color: var(--success-color);
}

.TextInput.success .help-message {
  color: var(--success-color);
}
</style>
