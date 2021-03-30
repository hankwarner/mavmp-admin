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
        @click="updateTestimonial"
        type="is-success"
        expanded
      >
        Submit
      </b-button>
      <b-button
        v-if="!loadingForm"
        @click="deleteTestimonial"
        type="is-danger is-light"
        expanded
      >
        Delete Testimonial
      </b-button>
      <b-loading v-else :is-full-page="false"></b-loading>
    </span>
  </div>
</template>

<script>
import {
  updateTestimonial,
  getTestimonialByID,
  deleteTestimonialById,
} from "@/services/TestimonialService";

export default {
  data() {
    return {
      testimonial: {
        id: this.$route.params.id,
        name: "",
        paragraphs: [],
      },
      apiResponse: "",
      loadingForm: false,
    };
  },
  created() {
    this.getTestimonial();
  },
  methods: {
    async getTestimonial() {
      this.testimonial = await getTestimonialByID(this.testimonial.id);
    },
    async updateTestimonial() {
      try {
        this.loadingForm = true;

        let testimonialToUpdate = this.testimonial;

        this.apiResponse = updateTestimonial(testimonialToUpdate);

        this.$buefy.toast.open("Testimonial successfully updated!");

        // Redirect to testimonials page
        this.$router.push("/testimonials");
      } catch (e) {
        this.apiResponse = e.message;
      } finally {
        this.loadingForm = false;
      }
    },
    async deleteTestimonial() {
      try {
        this.$buefy.dialog.confirm({
          title: "Deleting testimonial",
          message: "Are you sure you want to delete this testimonial?",
          confirmText: "Delete Testimonial",
          type: "is-danger",
          hasIcon: true,
          onConfirm: async () => {
            console.log(this.testimonial)
            this.apiResponse = await deleteTestimonialById(this.testimonial);

            this.$buefy.toast.open("Testimonial successfully deleted!");

            // Redirect to about us page
            this.$router.push("/testimonials");
          },
        });
      } catch (e) {
        console.log(e);
        this.apiResponse = e.message;
      } finally {
        this.loadingForm = false;
      }
    },
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
}
</style>