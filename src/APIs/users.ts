const VAR = import.meta.env.VITE_API_URL;

export const getCurrentUserApi = `${VAR}/users/auth/current`;

export const registerUserApi = `${VAR}/users/auth/register`;
