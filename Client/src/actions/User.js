import axios from "axios";
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });
    const { data } = await axios.post(
      "/api/v1/user/login-user",
      {
        email,
        password,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: "loginSuccess",
      payload: data.user,
      message: data.message,
    });
  } catch (error) {
    dispatch({ type: "loginFailure", payload: error.response.data.message });
  }
};
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get("/api/v1/user/my-profile");

    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadUserFailure", payload: error.response.data.message });
  }
};
export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });
    const { data } = await axios.post(
      "/api/v1/user/register-user",
      {
        name,
        email,
        password,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: "registerSuccess",
      payload: data.user,
      message: data.message,
    });
  } catch (error) {
    dispatch({
      type: "registerFailure",
      payload: error.response.data.message,
    });
  }
};
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });

    await axios.get("/api/v1/user/logout-user");

    dispatch({ type: "logoutSuccess" });
  } catch (error) {
    dispatch({ type: "logoutFailure", payload: error.response.data.message });
  }
};
