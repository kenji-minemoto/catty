<template>
  <div>
    <div>
      <h2>Contact</h2>
    </div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your Inquiry" label-for="input-3">
        <b-form-textarea
          id="input-3"
          v-model="form.inquiry"
          required
          placeholder="Enter Inquiry"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="secondary" class="button">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        inquiry: ''
      },
      show: true
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 80px;
  font-size: 50px;
  font-weight: 100;
}

.button {
  font-weight: bold;
  margin-top: 100px;
  width: 80%;
}

#input-group-1 {
  font-weight: bold;
  text-align: left;
  margin: 0 auto;
  width: 80%;
}

#input-group-2 {
  font-weight: bold;
  text-align: left;
  padding-top: 50px;
  margin: 0 auto;
  width: 80%;
}

#input-group-3 {
  font-weight: bold;
  text-align: left;
  padding-top: 50px;
  margin: 0 auto;
  width: 80%;
}
</style>
