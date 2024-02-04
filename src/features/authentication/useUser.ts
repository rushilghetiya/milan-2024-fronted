import { getCurrentUser } from "@/services/apiUsers";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
	const { isLoading, data: user } = useQuery({
		queryKey: ["user"],
		queryFn: () => getCurrentUser(),
	});

	const isAuthenticated = user?.success;

	return {
		isLoading,
		user,
		isAuthenticated,
	};
};

export default useUser;
