<template>
  <div class="about">
    <h1>This is an news page</h1>
    <div class="form-container">
      <v-card
        v-for="item in articles"
        :key="item.index"
        class="mx-auto my-8"
        elevation="16"
        max-width="344"
      >
        <v-card-item>
          <v-card-title> {{ item.title }} </v-card-title>
          <v-card-subtitle> :-{{ item.author }} </v-card-subtitle>
        </v-card-item>

        <v-card-text> :-{{ item.description }} </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewsView',
  data() {
    return {
      API_KEY: 'fb06bbb7a4294cfaa08708d0e2ce1e3a',
      articles: []
    }
  },
  methods: {
    routeHandler() {
      const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
      if (isLoggedIn) {
        this.$router.push(`${this.$route.path}`)
      } else {
        this.$router.push({ name: '' })
      }
    }
  },
  created() {
    this.routeHandler()
    const apiUrl = `https://newsapi.org/v2/everything?q=apple&from=2024-04-01&to=2024-04-01&sortBy=popularity&apiKey=${this.API_KEY}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Check if the response status is "ok"
        if (data.status === 'ok') {
          // Process the articles
          this.articles = data.articles
        } else {
          // Log an error message if the status is not "ok"
        }
      })
      .catch((error) => {
        // Log any errors that occur during the fetch
        console.error('Error fetching data:', error)
      })
  }
}
</script>
<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.cardd {
  border-radius: 8px;
  margin-top: 10px;
}
.form-container {
  flex: 1;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  border: 1px solid #d6d6d6;
  border-radius: 9px;
  overflow: auto;
  /* margin-bottom: 15vh; */
}
</style>
