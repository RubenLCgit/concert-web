<script setup lang="ts">
import { ref } from 'vue';


const variant = 'elevated';
const color = ref('indigo');


const valid = ref(false);

const event = ref({
  eventName: '',
  eventDate: '',
  eventZipCode: '',
  eventCapacity: '',
  eventOnlyAdults: false
});

// const rules = {
//   required: (value: string) => !!value || 'Required.',
//   email: (value: string) => {
//     const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return pattern.test(value) || 'Invalid e-mail.';
//   }
// };

</script>

<template>
  <div class="FormContainer">
    <v-app>
      <v-container class="d-flex justify-center align-center">
      <v-col
        cols="12"
        md="6"
      >
        <v-card
          title="Creación de eventos"
          :color="color"
          :variant="variant"
          class="mx-auto"
        >
        <v-divider color="white"></v-divider>
          <v-card-item>
            <v-container>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model="event.eventName"
                  label="Name"
                ></v-text-field>
                <v-text-field
                  v-model="event.eventDate"
                  label="Date"
                ></v-text-field>
                <v-text-field
                  v-model="event.eventZipCode"
                  label="Zip Code"
                ></v-text-field>
                <v-text-field
                  v-model="event.eventCapacity"
                  label="Capacity"
                ></v-text-field>
                <v-checkbox
                  v-model="event.eventOnlyAdults"
                  label="OnlyAdults"
                ></v-checkbox>
              </v-form>
            </v-container>
          </v-card-item>

          <v-card-actions>
            <v-btn variant="tonal" :disabled="!valid">Añadir evento</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-container>
    </v-app>
  </div>
</template>

<style scoped>

  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Para centrar verticalmente en la ventana */
  }
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