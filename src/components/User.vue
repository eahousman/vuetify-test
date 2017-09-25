<template lang="pug">
  .user
    v-container
      v-form(v-model="valid" ref="form")
        v-text-field(label="Name" v-model="name" required :rules="nameRules", :counter="10")
        v-text-field(label="Email" v-model="email" required :rules="emailRules")
        v-select(label="Select" v-model="select" data-vv-name="select" required :rules="[(v) => !!v || 'Select is required']", :items="items")
        v-checkbox(label="Agree?" v-model="checkbox" required :rules="[(v) => !!v || 'You must agree to continue!']")

        v-btn(@click="submit", :class="{ green: valid, red: !valid }") submit
        v-btn(@click="clear") clear
</template>

<script>
  export default {
    name: 'user',
    data() {
      return {
        name: 'Frink',
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          (v) => !!v || 'Email is required',
          (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
        ],
        select: null,
        items: ['1', '2', '3', '4'],
        valid: false,
        checkbox: false
      };
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          this.$refs.form.$el.submit();
        }
      },
      clear() {
        this.$refs.form.reset();
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
