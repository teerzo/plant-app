import axios from 'axios';

let url = '';

if( process.env.REACT_APP_SERVER_URL) {
    url = process.env.REACT_APP_SERVER_URL;
    console.log('server url', url);

}
else {
    console.log('cannot find server url to connect to');
}

export const fetchPlants = () => axios.get(`${url}/plants`);
export const createPlant = (newPlant) => axios.post(`${url}/plants`, newPlant);
export const updatePlant = (id, updatedPlant) => axios.patch(`${url}/plants/${id}`, updatedPlant);
export const deletePlant = (id) => axios.delete(`${url}/plants/${id}`);