const VAR = import.meta.env.VITE_API_URL;

export const getCurrentUserApi = `${VAR}/auth/current`;

export const registerUserApi = `${VAR}/auth/register`;
