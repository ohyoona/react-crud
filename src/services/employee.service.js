import httpClient from "../http-common";

const getAll=()=>{
    return httpClient.get('/people');
}

const create = data =>{
    return httpClient.post('/people2', data);
}

const update = data =>{
    return httpClient.put('/people3', data);
}

const getId = id => {
    return httpClient.get(`/people4/${id}`);
}

export default {getAll, create, update, getId};