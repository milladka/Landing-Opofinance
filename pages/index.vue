<template>
  <v-container fluid style="height:100%" class="bg">
    <v-row align="center" justify="center" style="height:100%">
      <v-col cols="12" md="4">
        <v-btn depressed block x-large class="btn-index my-2" to="/crypto">Crypto</v-btn>
        <v-btn depressed block x-large class="btn-index my-2" to="/shares">Shares</v-btn>
        <v-btn depressed block x-large class="btn-index my-2" to="/fiboda">Fiboda</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>