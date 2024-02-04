import { Outlet, useNavigate } from "react-router-dom";
import useUser from "./useUser";
import React, { useEffect } from "react";
const UserContext = React.createContext({});

const ProtectedRoutes = () => {
	const navigate = useNavigate();
	const { isLoading, user } = useUser();

	useEffect(() => {
		if (!isLoading) {
			if (!user) {
				navigate("/auth");
			} else {
				if (user.success === false) {
					if (user.message_code === "GOOGLE_LOGIN_REQUIRED") {
						navigate("/auth");
					} else if (user.message_code === "USER_NOT_FOUND") {
						navigate("/register");
					}
				}
			}
		}
	}, [isLoading, navigate, user]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!isLoading && user.success === true)
		return (
			<UserContext.Provider value={user}>
				<Outlet />
			</UserContext.Provider>
		);
};

const useUserContext = () => {
	const context = React.useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUserContext must be used within a UserProvider");
	}
	return context;
};

export { useUserContext, ProtectedRoutes };
