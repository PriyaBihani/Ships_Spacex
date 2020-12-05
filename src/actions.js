import gql from "graphql-tag";
import request from "./utils/request";

export const fetchShips = () => async (dispatch) => {
  const response = await request(gql`
    {
      ships {
        name
        home_port
        image
      }
    }
  `);
  dispatch({ type: "FETCH_SHIPS", payload: response.data.ships });
};

export const search = (searchTerm) => async (dispatch, getState) => {
  try {
    const { ships } = getState();

    if (searchTerm !== "") {
      let regexpg = new RegExp(searchTerm, "i");

      const searchResults = ships.filter((obj) => {
        return regexpg.test(obj.name);
      });

      dispatch({ type: "GET_SEARCH_RESULTS", payload: searchResults });
    } else {
      dispatch({ type: "GET_SEARCH_RESULTS", payload: ships });
    }
  } catch (error) {
    console.error();
  }
};
