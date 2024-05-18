<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';

const variant = 'elevated';
const color = ref('indigo');
const authStore = useAuthStore();
const router = useRouter();

const { login } = authStore;
const { isLogged } = storeToRefs(authStore);


const group = ref({
  groupName: '',
  groupPassword: ''
});

const valid = ref(false);

const rules = {
  required: (value: string) => !!value || 'Required.',
  password: (value: string) => {
    const pattern = /^.{4,}$/;
    return pattern.test(value) || 'The password must contain at least 4 or more characters.';
  }
};

const loginAndRedirect = async () => {
  await login(group.value.groupName, group.value.groupPassword);
  router.push('/');
};

</script>

<template>
  <div class="FormContainer">
    <v-app>
      <v-col
        cols="12"
        md="6"
      >
        <v-card 
          title=Login
          :color="color"
          :variant="variant"
          class="card-title"
        >
        <v-divider color="white"></v-divider>
          <v-card-item>
            <v-container>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model="group.groupName"
                  label="Name"
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  v-model="group.groupPassword"
                  label="Password"
                  :rules="[rules.required, rules.password]"
                  type="password"
                ></v-text-field>
                <div class="button-loggin">
                  <v-btn
                    @click="loginAndRedirect"
                    :disabled="!valid"
                  >
                    Login
                  </v-btn>
                </div>
              </v-form>
            </v-container>
          </v-card-item>
        </v-card>
      </v-col>
    </v-app>
  </div>
</template>

<style scoped>

  

  .button-loggin {
    display: flex;
    justify-content: center;
  }

  .card-title {
    margin-top: 10%;
    text-align: center;
  }

  .center-snackbar {
    position: fixed;
    bottom: 80%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
</style>