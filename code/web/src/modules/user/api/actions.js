// Imports
import axios from "axios";
import { query, mutation } from "gql-query-builder";
import cookie from "js-cookie";

// App Imports
import { routeApi } from "../../../setup/routes";

// Actions Types
export const LOGIN_REQUEST = "AUTH/LOGIN_REQUEST";
export const LOGIN_RESPONSE = "AUTH/LOGIN_RESPONSE";
export const SET_USER = "AUTH/SET_USER";
export const LOGOUT = "AUTH/LOGOUT";
export const SET_STYLE = "AUTH/SET_STYLE";

// Actions - A new action will be created here to set the styleSurveyCompleted to true or false depending on whether or not a user has completed a survey
// A new Survey component will be created to display when the styleSurveyCompleted is false

// Set a user after login or using localStorage token
export function setUser(token, user) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }

  return { type: SET_USER, user };
}

// Login a user using credentials
export function login(userCredentials, isLoading = true) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
      isLoading,
    });

    return axios
      .post(
        routeApi,
        query({
          operation: "userLogin",
          variables: userCredentials,
          fields: ["user {name, email, role}", "token"],
        })
      )
      .then((response) => {
        let error = "";

        if (response.data.errors && response.data.errors.length > 0) {
          error = response.data.errors[0].message;
        } else if (response.data.data.userLogin.token !== "") {
          const token = response.data.data.userLogin.token;
          const user = response.data.data.userLogin.user;

          dispatch(setUser(token, user));

          loginSetUserLocalStorageAndCookie(token, user);
        }
        dispatch({
          type: LOGIN_RESPONSE,
          error,
        });
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_RESPONSE,
          error: "Please try again",
        });
      });
  };
}

// export function createPosts(values, callback) {

//   return dispatch => { //return function
//     return axios.post(`${API}/posts`,values,{headers}) //return post request response
//     .then((data) => { //pass data in as a parameter, call the callback, dispatch the action.
//         callback();

//       dispatch({
//         type: CREATE_POST,
//         payload: data
//       })
//     })
//   }
// }

export function setStyle(surveyResults) {
  let stylePreference = surveyResults;
  // return dispatch => {
  //   dispatch({
  //     type: LOGIN_REQUEST,
  //     style: null
  //   })
  return (dispatch) => {
    return axios
      .post(
        routeApi,
        mutation({
          operation: "addStyleToUser",
          variables: { surveyResults },
          fields: ["id", "name", "email", "style"],
        })
      )
      .then((response) => {
        // console.log('surveyResults', surveyResults)
        console.log("response:", response);
        // console.log("response.body:", response.body);
        console.log("response.data", response.data.data.addStyleToUser.style);
        if (response.data.data.addStyleToUser.style) {
          stylePreference = response.data.data.addStyleToUser.style;
          console.log("in if statement of axios post request for set style");
          console.log("stylepref", stylePreference);
          return dispatch({
            type: SET_STYLE,
            stylePreference,
          });
        }
      })
      .catch((error) => console.log(error));
  };
}

// Set user token and info in localStorage and cookie
export function loginSetUserLocalStorageAndCookie(token, user) {
  // Update token
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("user", JSON.stringify(user));

  // Set cookie for SSR
  cookie.set("auth", { token, user }, { path: "/" });
}

// Register a user
export function register(userDetails) {
  return (dispatch) => {
    return axios.post(
      routeApi,
      mutation({
        operation: "userSignup",
        variables: userDetails,
        fields: ["id", "name", "email"],
      })
    );
  };
}

// Log out user and remove token from localStorage
export function logout() {
  return (dispatch) => {
    logoutUnsetUserLocalStorageAndCookie();

    dispatch({
      type: LOGOUT,
    });
  };
}

// Unset user token and info in localStorage and cookie
export function logoutUnsetUserLocalStorageAndCookie() {
  // Remove token
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("user");

  // Remove cookie
  cookie.remove("auth");
}

// Get user gender
export function getGenders() {
  return (dispatch) => {
    return axios.post(
      routeApi,
      query({
        operation: "userGenders",
        fields: ["id", "name"],
      })
    );
  };
}
