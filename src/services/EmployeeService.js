import Api from './Api';

const getEmployeeByID = async (id) => {
    let employeeResponse = await Api().get(`/employee/${id}`);

    return employeeResponse.data;
}

const getAllEmployees = async () => {
    let employeeResponse = await Api().get('/employee');

    return employeeResponse.data;
}

const updateEmployee = async (updatedEmployee) => {
    try {
        let response = await Api().put('/employee', updatedEmployee);

        if(response == 'Error'){
            throw new Error('There was a problem saving the new data. Please try again.');
        }

        return response;

    } catch (e) {
        return e.message;
    }
}

const createEmployee = async (newEmployee) => {
    try {
        let response = await Api().post('/employee', newEmployee);

        if(response == 'Error'){
            throw new Error('There was a problem adding the new employee. Please try again.');
        }

        return response;

    } catch (e) {
        return 'Error';
    }
}

const deleteEmployeeById = async (employee) => {
    try {
        let response = await Api().delete('/employee', { data: employee });

        if(response == 'Error'){
            throw new Error('There was a problem deleting the employee. Please try again.');
        }

        return response;

    } catch (e) {
        return 'Error';
    }
}

const addImageUrlToDB = async (id, url) => {
    let req = { id: id, url: url };

    let res = await Api().put('/employee/image', req);

    return res;
}

const createBlobFromImage = async (imageFile) => {
    let res = await Api().post('/employee/image', imageFile);

    return res;
}

export { 
    getAllEmployees, 
    getEmployeeByID, 
    updateEmployee, 
    createEmployee, 
    deleteEmployeeById, 
    addImageUrlToDB,
    createBlobFromImage
};
