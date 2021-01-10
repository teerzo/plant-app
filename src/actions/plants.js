import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPlants = () => async (dispatch) => {
  console.log('getPlants start');

  try {
    const { data } = await api.fetchPlants();
    console.log('getPlants', data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPlant = (plant) => async (dispatch) => {
  try {
    const { data } = await api.createPlant(plant);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePlant = (id, plant) => async (dispatch) => {
  try {
    const { data } = await api.updatePlant(id, plant);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePlant = (id) => async (dispatch) => {
  try {
    await await api.deletePlant(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};