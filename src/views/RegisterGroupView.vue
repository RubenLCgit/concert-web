<script setup lang="ts">
import { ref } from 'vue';

const variant = 'elevated';
const color = ref('indigo');




const valid = ref(false);

const group = ref({
  groupName: '',
  groupPassword: '',
  groupExplicitContent: false,
  groupGenre: ''
});

const rules = {
  required: (value: string) => !!value || 'Required.',
  email: (value: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value) || 'Invalid e-mail.';
  }
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
          title="Formulario de registro"
          :color="color"
          :variant="variant"
          class="mx-auto"
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
                  :rules="[rules.required, rules.email]"
                ></v-text-field>
                <v-checkbox
                  v-model="group.groupExplicitContent"
                  label="Explicit content"
                ></v-checkbox>
                <v-text-field
                  v-model="group.groupGenre"
                  label="Genre"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-form>
            </v-container>
          </v-card-item>

          <v-card-actions>
            <v-btn variant="tonal" :disabled="!valid">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-app>
  </div>
</template>

<style scoped>
  .v-card {
    text-align: center;
  }

  .v-card-actions {
    justify-content: center;
    margin-bottom: 20px;
  }

  .center-snackbar {
    position: fixed;
    bottom: 80%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
</style>