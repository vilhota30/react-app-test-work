export const selectAuth = (state) => {
    const auth = state.auth;
    return auth;
};
export const selectUser = (state) => state.auth.username;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectError = (state) => state.auth.error;

export const getUser = (state) => state.auth.username;

export const getUserImage = (state) => state.auth.profilePic;

export const selectRegistrationSuccessful = ({ auth }) =>
  auth.registrationSuccessful;

export const selectlogoutSuccessful = ({ auth }) => auth.logoutSuccessful;

export const userInfo = (state) => state.auth;