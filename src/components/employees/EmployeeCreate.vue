<template>
    <div class="edit-employee-container">
        <div class="flex-container">
            <span class="photo-container">
                <img
                    v-if="employee.image"
                    :src="`${employee.image}`"
                    alt="Headshot"
                    class="headshots"
                />
            </span>
            <div class="uploader">
                <input type="file" @change="onFileSelected">
                <b-button
                    v-if="!loadingImage" 
                    @click="onUpdatePhoto" 
                    type="is-success" 
                    expanded
                    id="upload-button"
                >
                    Update Photo
                </b-button>
                <b-button v-else loading type="is-success" expanded></b-button>
            </div>
        </div>

        <span class="text">
            <b-field label="Name">
                <b-input v-model="employee.name"></b-input>
            </b-field>
            <b-field label="Title">
                <b-input v-model="employee.title"></b-input>
            </b-field>
            <b-field label="Email">
                <b-input v-model="employee.email"></b-input>
            </b-field>
            <b-field label="Phone">
                <b-input v-model="employee.phone"></b-input>
            </b-field>
            <b-field label="LinkedIn URL">
                <b-input v-model="employee.linkedIn"></b-input>
            </b-field>
            <b-field label="Bio">
                <b-input v-model="employee.bio" maxlength="2000" type="textarea"></b-input>
            </b-field>
            <b-button 
                v-if="!loadingForm"
                @click="createNewEmployee" 
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
import { createBlobFromImage, createEmployee } from "@/services/EmployeeService";
import { getSasToken } from "@/services/AuthenticationService";
import { BlobServiceClient } from '@azure/storage-blob';

export default {
    data() {
        return {
            employee: {
				id: '',
				name: '',
				title: '',
				email: '',
				phone: '',
				linkedIn: '',
				bio: '',
                image: null
			},
            apiResponse: '',
            loadingImage: false,
            loadingForm: false,
            imageFile: null
        }
    },
    methods: {
        async createNewEmployee(){
			try {
				this.loadingForm = true;

                let employeeToCreate = this.employee;
                // Remove the token on the image url before sending to db
                employeeToCreate.image = employeeToCreate.image.split('?')[0];

                this.employee.id = await createEmployee(employeeToCreate);

                this.$buefy.toast.open('Employee successfully created!');
                
                // Redirect to about us page
                this.$router.push('/about-us');

			} catch (e) {
				this.apiResponse = e.message;

			} finally {
                this.loadingForm = false;
            }
		},
        onFileSelected(e) {
            this.imageFile = e.target.files[0];
        },
        async updateImage() {
            await createBlobFromImage(this.imageFile);
        },
        async onUpdatePhoto(){
            try {
                this.loadingImage = true;

                // Get a SAS token for authenticating the blob service client
                let sasToken = await getSasToken();
                let sasUrl = `https://mavmp.blob.core.windows.net?${sasToken}`;

                // Get blob services
                let blobServiceClient = new BlobServiceClient(sasUrl);
                let containerClient = blobServiceClient.getContainerClient("mavmp");

                let blobName = this.imageFile.name + new Date().getTime();
                let blockBlobClient = containerClient.getBlockBlobClient(blobName);
                
                let options = { blobHTTPHeaders: { blobContentType: this.imageFile.type } };

                // Save image as new blob
                let uploadBlobResponse = await blockBlobClient.uploadData(this.imageFile, options);

                let baseUrl = uploadBlobResponse._response.request.url.split('?')[0];

                // Update the image in the view
                this.employee.image = `${baseUrl}?${sasToken}`;

            } catch (err) {
                console.log(err);

            } finally {
                this.loadingImage = false;
            }
        },
        
    }
}
</script>

<style scoped>
.flex-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.edit-employee-container {
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
    .edit-employee-container {
        flex-direction: column;
        margin-bottom: 22%;
    }

    .flex-container {
        margin: 50% auto 15%;
    }
}
</style>