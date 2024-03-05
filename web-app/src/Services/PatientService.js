import axios from 'axios'
// import React, { Component } from 'react'

// const baseURL = "http://localhost:3000/Patients"

const baseURL ="http://localhost:8080/api/v1/Appointments"

class PatientService {

    //Patient services

    createPatient(data) {
        console.log(data);

        return axios.post(baseURL, data)
    }

    getPatients() {
        return axios.get(baseURL)
    }

    //edit 
    getPatientsById(id) {
        return axios.get(baseURL + '/' + id)
    }
    updatePatient(id,Patient) {
        return axios.put(baseURL + '/' + id,Patient)
    }

    removePatient(id) {
        console.log(baseURL + "/" + id)
        return axios.delete(baseURL + "/" + id)
    }

}
export default new PatientService();
