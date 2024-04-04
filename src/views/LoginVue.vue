<script>
import { Form as ValidationForm, Field, ErrorMessage, useForm } from 'vee-validate'
import * as Yup from 'yup'
// import store2 from "./storePart2";
export default {
  name: 'LoginView',
  components: {
    ValidationForm,
    ErrorMessage,
    Field
  },
  data() {
    return {
      schema: Yup.object().shape({
        email: Yup.string().email().required('email is required'),

        password: Yup.string().required('password is required')
      }),
      meta: {}
    }
  },
  created() {
    this.routeHandler()
    const { meta } = useForm({
      validationSchema: this.schema // Pass schema to useForm
    })
    this.meta = meta // Assign meta to data property
  },
  methods: {
    updateData(payload) {
      this.$store.dispatch('userLoggedIn', true)
      localStorage.setItem('isLoggedIn', 'true')
      // this.$store.commit('updateProfile', payload)
      this.$router.push({ name: 'profile' })
    },
    onSubmit(values) {
      this.updateData(values)
    },
    routeHandler() {
      const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
      if (isLoggedIn) {
        this.$router.push(`${this.$route.path}`)
      } else {
        this.$router.push('/')
      }
    },
    onInvalidSubmit() {
      const submitBtn = document.querySelector('.submit-btn')
      submitBtn.classList.add('invalid')
      setTimeout(() => {
        submitBtn.classList.remove('invalid')
      }, 5000)
    }
  }
}
</script>
<template>
  <div class="about">
    <h1>Login-View</h1>
    <div class="form-container">
      <ValidationForm
        @submit="onSubmit"
        :validation-schema="schema"
        @invalid-submit="onInvalidSubmit"
      >
        <div class="TextInput">
          <label for="email">Email</label>

          <Field name="email" type="email" />
          <ErrorMessage class="has-error" name="email" />
        </div>
        <div class="TextInput">
          <label for="password">password</label>

          <Field name="password" type="password" />
          <ErrorMessage class="has-error" name="password" />
        </div>
        <button class="submit-btn" type="submit">Submit</button>
      </ValidationForm>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
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

form .TextInput .has-error {
  /* background-color: var(--error-bg-color); */
  color: red;
}

:root {
  --primary-color: #0071fe;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  width: 100%;
  height: 100%;
}

form {
  width: 300px;
  margin: 0px auto;
  padding-bottom: 60px;
}
form input {
  background-color: #f0f0f0;
  border-style: none;
  border: 1px solid;
  border-radius: 7px;
}
.submit-btn {
  background: var(--primary-color);
  outline: none;
  border: none;
  color: #fff !important;
  font-size: 18px;
  padding: 10px 15px;
  display: block;
  width: 100%;
  border-radius: 7px;
  margin-top: 40px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.submit-btn.invalid {
  animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}
.form-container {
  flex: 1;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px);
  }
  10% {
    transform: translate(-1px, -2px);
  }
  20% {
    transform: translate(-3px, 0px);
  }
  30% {
    transform: translate(3px, 2px);
  }
  40% {
    transform: translate(1px, -1px);
  }
  50% {
    transform: translate(-1px, 2px);
  }
  60% {
    transform: translate(-3px, 1px);
  }
  70% {
    transform: translate(3px, 1px);
  }
  80% {
    transform: translate(-1px, -1px);
  }
  90% {
    transform: translate(1px, 2px);
  }
  100% {
    transform: translate(1px, -2px);
  }
}

.submit-btn:hover {
  transform: scale(1.1);
}
@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    align-items: center;
  }
}
</style>
