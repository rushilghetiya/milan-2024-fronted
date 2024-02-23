/* eslint-disable @typescript-eslint/no-explicit-any */
<<<<<<< HEAD
import {
	getCurrentUserApi,
	logoutUserApi,
	registerUserApi,
} from "@/APIs/users";
=======
import { getCurrentUserApi, registerUserApi } from "@/APIs/users";
>>>>>>> e202cbe3becb867f888da2c608b53b9156e3240f
import { UserRegisterProps } from "@/features/authentication/useRegister";

export async function getCurrentUser() {
	try {
		const response = await fetch(getCurrentUserApi, {
			credentials: "include",
		});
		const data = await response.json();

		return data;
	} catch (error: any) {
		return error.response.data;
	}
<<<<<<< HEAD
}

export async function logoutUser() {
	try {
		const response = await fetch(logoutUserApi, {
			credentials: "include",
			method: "GET",
		});
		const data = await response.json();

		return data;
	} catch (error: any) {
		return error.response.data;
	}
=======
>>>>>>> e202cbe3becb867f888da2c608b53b9156e3240f
}

export async function registerUser(user: UserRegisterProps) {
	try {
		const response = await fetch(registerUserApi, {
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(user),
		});
		const data = await response.json();

		return data;
	} catch (error: any) {
		return error.response.data;
	}
<<<<<<< HEAD
}
=======
}
>>>>>>> e202cbe3becb867f888da2c608b53b9156e3240f
