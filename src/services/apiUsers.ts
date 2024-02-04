import { getCurrentUserApi, registerUserApi } from "@/APIs/users";
import { UserRegisterProps } from "@/features/authentication/useRegister";

export async function getCurrentUser() {
	const response = await fetch(getCurrentUserApi, {
		credentials: "include",
	});
	const data = await response.json();

	return data;
}

export async function registerUser(user: UserRegisterProps) {
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
}
