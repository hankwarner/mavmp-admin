<template>
  <div class="edit-testimonial-container">
    <span class="text">
      <b-field label="Name">
        <b-input v-model="testimonial.name"></b-input>
      </b-field>
      <b-field label="Testimonial">
        <b-input
          v-for="(paragraph, index) in testimonial.paragraphs"
          :key="index"
          v-model="testimonial.paragraphs[index]"
          maxlength="2000"
          type="textarea"
        >
        </b-input>
      </b-field>
      <b-button
        v-if="!loadingForm"
        @click="testimonial.paragraphs.pop()"
        type="is-danger is-light"
        expanded
      >
        Remove Paragraph
      </b-button>
      <b-button
        v-if="!loadingForm"
        @click="testimonial.paragraphs.push([])"
        type="is-success"
        expanded
      >
        Add New Paragraph
      </b-button>
      <b-button
        v-if="!loadingForm"
        @click="createNewTestimonial"
        type="is-success"
        expanded
      >
        Submit
      </b-button>
      <b-loading v-else :is-full-page="false"></b-loading>
    </span>
  </div>
</template>

<script>
import { createTestimonial } from "@/services/TestimonialService";

export default {
  data() {
    return {
      testimonial: {
        id: "",
        name: "",
        paragraphs: [[""]],
      },
      apiResponse: "",
      loadingForm: false
    };
  },
  methods: {
    async createNewTestimonial() {
      try {
        this.loadingForm = true;

        let testimonialToCreate = this.testimonial;

        this.testimonial.id = await createTestimonial(testimonialToCreate);

        this.$buefy.toast.open("Testimonial successfully created!");

        // Redirect to testimonials page
        this.$router.push("/testimonials");
      } catch (e) {
        this.apiResponse = e.message;
      } finally {
        this.loadingForm = false;
      }
    }
  },
};
</script>

<style scoped>
.flex-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.edit-testimonial-container {
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  margin: 5% 0;
  background-color: rgba(145, 108, 67, 0.75);
}

.photo-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.headshots {
  height: 14rem;
  box-shadow: -2px -2px 2px rgba(34, 34, 34, 0.6);
  border-radius: 8px;
}

.uploader {
  flex: 1;
}

input {
  margin: 0 5% 5% 15%;
}

button {
  margin: 0 0 5%;
}

#upload-button {
  margin-left: 5%;
}

.text {
  flex: 1.5;
  text-align: left;
  padding-top: 2%;
  padding-bottom: 5%;
  padding-right: 15%;
  padding-left: 15%;
  margin-top: 5%;
}

@media only screen and (max-width: 40em) {
    .text {
        margin: 30% 0;
    }
}
</style>