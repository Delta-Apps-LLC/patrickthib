<template>
  <div>
    <div class="centered">
      <SectionHeader title="Contact Me" />
      <div class="form-wrapper">
        <form class="main-white main-font"
          action="https://formspree.io/f/mvgopela"
          method="POST"
        >
          <fieldset>
            <legend>Your Information</legend>
            <div style="display: flex; justify-content: center;">
              <input v-model="firstname" type="text" id="firstname" name="firstname" placeholder="First name">
              <input v-model="lastname" type="text" id="lastname" name="lastname" placeholder="Last name">
            </div>
            <input v-model="email" type="email" id="email" name="email" placeholder="Email">
          </fieldset>
          <fieldset>
            <legend>Your Message</legend>
            <textarea
              v-model="message"
              id="message"
              name="message"
              placeholder="Message..."
            ></textarea>
          </fieldset>

          <v-btn
            type="submit"
            @click="clearForm()"
            style="padding: 20px; font-size: 18px; display: flex; margin: auto;"
            :disabled="firstname == '' || lastname == '' || email == '' || message == ''"
            dark
          >
            <v-icon color="#668297">mdi-send</v-icon>
            &ensp;Send
          </v-btn>
        </form>
      </div>
    </div>
    
    <SectionHeader title="Use The Links At The Top To Learn More" />
    <BottomBuffer />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';
import SectionHeader from '~/components/SectionHeader.vue'
import BottomBuffer from '~/components/BottomBuffer.vue'

export default {
  name: 'ContactPage',

  head() {
    return {
      title: 'Contact - Patrick Thibaudeau',
      meta: [
        { hid: 'contact-description', name: 'description', content: 'Patrick Thibaudeau contact page; send Patrick a message or inquiry' },
        { hid: 'keywords', name: 'keywords', content: 'Patrick, Thibaudeau, contact, email, message, architecture, sustainability' }
      ]
    }
  },

  created () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
    AOS.init()
  },

  components: {
    SectionHeader,
    BottomBuffer
  },

  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
      windowWidth: window.innerWidth,
    }
  },

  methods: {
    clearForm() {
      setTimeout(() => {
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.message = '';
      }, 1500)
    }
  }
}
</script>

<style scoped>
@import '~/assets/styles.css';

@media (max-width: 600px) {
  .form-wrapper {
    width: 90%;
  }
}

@media (min-width: 601px) {
  .form-wrapper {
    width: 50%;
  }
}

form {
  width: 100%;
}

fieldset {
  border-radius: 10px;
  border: solid #e1e1e1;
  color: #e1e1e1;
  padding: 10px;
  margin: 15px 10px;
}

fieldset > input, fieldset > div > input {
  margin: 5px;
  padding: 8px;
  border-radius: 10px;
  border: solid #668297;
  color: #e1e1e1;
  width: 48%;
}

#email {
  width: 98%;
}

#message {
  width: 98%;
  height: 200px;
  border: solid #668297;
  color: #e1e1e1;
  margin: 5px;
  padding: 8px;
  border-radius: 10px;
}
</style>