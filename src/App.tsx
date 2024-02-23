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
import Header from "./components/Header/Header";
import { ParallaxProvider } from "react-scroll-parallax";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

function App() {
	return (
		<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<ParallaxProvider>
					<div className="App">
						<Header />
						<Routes>
							<Route element={<ProtectedRoutes />}>
								<Route path="/" element={<Home />} />
							</Route>
							<Route path="/event" element={<Event />} />
							<Route path="/register" element={<Register />} />
							<Route path="/event/:name" element={<EventContainer />} />
							<Route path="/event/music/:id" element={<MusicEventPage />} />
						</Routes>
					</div>
				</ParallaxProvider>
			</BrowserRouter>
			<Toaster />
		</QueryClientProvider>
			</BrowserRouter>
	);
}

export default App;
