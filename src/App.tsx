import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./features/authentication/ProtectedRoutes";
import DashBoard from "./pages/DashBoard";
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import { Toaster } from "@/components/ui/toaster";
import Home from "./pages/Home/Home";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<ProtectedRoutes />}>
						<Route path="/" element={<Home />} />
					</Route>
					<Route path="/auth" element={<Auth />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
			<Toaster />
		</QueryClientProvider>
	);
}

export default App;
