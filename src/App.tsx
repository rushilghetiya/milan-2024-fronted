import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./features/authentication/ProtectedRoutes";
// import DashBoard from "./pages/DashBoard";
import Register from "./pages/Register";
import { Toaster } from "@/components/ui/toaster";
import Home from "./pages/Home/Home";
import Event from "./pages/Event/Event";
import EventContainer from "./components/Event/EventContainer";
import MusicEventPage from "./components/Event/MusicEventPage";
import DashBoard from "./pages/DashBoard";
import Header from "./components/Header/Header";

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
			<Header/>
					<div className="App">
						<Routes>
							<Route element={<ProtectedRoutes />}>
								<Route path="/auth" element={<DashBoard />} />
							</Route>
								<Route path="/" element={<Home />} />
							<Route path="/event" element={<Event />} />
							<Route path="/register" element={<Register />} />
							<Route path="/event/:name" element={<EventContainer />} />
							<Route path="/event/music/:id" element={<MusicEventPage />} />
						</Routes>
					</div>
				
			</BrowserRouter>
			<Toaster />
		</QueryClientProvider>
	);
}

export default App;
