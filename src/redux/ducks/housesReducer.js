import axios from "axios";

const GET_HOUSES = "GET_HOUSES";
const ADD_HOUSE = "ADD_HOUSE";
const REMOVE_HOUSE = "REMOVE_HOUSE";

export function getHouses() {
  return {
    type: GET_HOUSES,
    payload: axios.get("/api/houses")
  };
}

export function addHouses(obj) {
  return {
    type: ADD_HOUSE,
    payload: axios.post("/api/houses", obj)
  };
}

export function removeHouse(id) {
  return {
    type: REMOVE_HOUSE,
    payload: axios
      .delete(`${URL.house}?id=${id}`)
      .then(response => response.data)
  };
}

const initialState = {
  houses: [],

  isLoading: false,
  error: ""
};

export default function housesReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_HOUSES_PENDING":
      return { ...state, isLoading: true };
    case "GET_HOUSES_FULFILLED":
      return { ...state, isLoading: false, houses: action.payload.data };
    case "GET_HOUSES_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "ADD_HOUSE_PENDING":
      return { ...state, isLoading: true };
    case "ADD_HOUSE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        houses: [...state.houses, action.payload.data]
      };
    case "ADD_HOUSE_REJECTED":
      return { ...state, isLoading: true, error: action.payload };
    default:
      return state;
  }
}
