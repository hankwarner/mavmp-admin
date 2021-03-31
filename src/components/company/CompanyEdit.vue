<template>
  <div class="edit-company-container">
    <span class="text">
      <b-field label="Name">
        <b-input v-model="company.name"></b-input>
      </b-field>
      <b-field label="LinkedIn URL">
        <b-input v-model="company.linkedIn"></b-input>
      </b-field>
      <b-field label="Bio">
        <b-input
          v-model="company.bio"
          maxlength="10000"
          type="textarea"
        ></b-input>
      </b-field>
      <b-button
        v-if="!loadingForm"
        @click="updateCompany"
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
import { getCompanyData, updateCompany } from "@/services/CompanyService";

export default {
  data() {
    return {
      company: {
        id: this.$route.params.id,
        name: "",
        bio: "",
        linkedIn: "",
      },
      apiResponse: "",
      loadingForm: false,
    };
  },
  created() {
    this.getCompanyInfo();
  },
  methods: {
    async getCompanyInfo() {
      try {
        this.loading = true;

        let response = await getCompanyData();
        this.company = response;
      } catch (err) {
        console.log(err);
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    async updateCompany() {
      try {
        this.loadingForm = true;

        let companyToUpdate = this.company;

        this.apiResponse = updateCompany(companyToUpdate);

        this.$buefy.toast.open("Company info successfully updated!");

        // Redirect to company page
        this.$router.push("/company");
      } catch (e) {
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

.edit-company-container {
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

@media only screen and (max-width: 40em) {
  .text {
    margin: 30% 0;
  }
}
</style>