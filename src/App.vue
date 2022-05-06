<template>
  <header class="App-header">
    <img class="App-logo" alt="Vue logo" src="./assets/logo.svg">
    <nav>
      ChargeOver.js Vue Demo |

      <a
          class="App-link"
          href="https://developer.chargeover.com/apidocs/js/"
          target="_blank"
          rel="noopener noreferrer"
      >
        Read the documentation
      </a>

      <p>
        Open your browser console, then click the button below!
      </p>

      <button @click="createCustomer">Create a customer</button>
    </nav>
  </header>
</template>

<script>
import ChargeOverJS from './plugins/chargeover'

export default {
  name: 'App',
  /**
   * Loading this in the App.vue will make it available for all components.
   * You can also import this inside components instead to load it only where
   * needed.
   */
  mounted() {
    ChargeOverJS.load(process.env.VUE_APP_CHARGEOVERJS_INSTANCE, process.env.VUE_APP_CHARGEOVERJS_TOKEN);
  },
  methods: {
    createCustomer() {
      ChargeOverJS.createCustomer()
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  text-align: center;
}

.App-logo {
  height: 8vmin;
  pointer-events: none;
}

nav {
  margin: 1rem 0;
}

p {
  font-size: 1.3rem;
}

.App-header {
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
}

.App-link {
  color: #2c429b;
  margin-left: 8px;
}

button {
  padding: 1rem 2rem;
  font-size: 1.3rem;
  border: none;
  background: #2c429b;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background: #23357c;
}

</style>
