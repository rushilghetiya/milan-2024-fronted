export default function Auth() {
	function handleGoogleLogin() {
		window.open(
			`${import.meta.env.VITE_API_URL}/auth/google`,
			"_self",
			"width-500, height=600"
		);
	}

	return (
		<div className="w-full h-full flex items-center justify-center">
			<button
				className=" px-4 py-2 shadow-inner shadow-md shadow-emerald-300 text-white font-semibold transition-all duration-500 active:bg-green-400"
				onClick={handleGoogleLogin}
			>
				<img src="/7123025_logo_google_g_icon.svg" />
				<h2 className=" text-[1.5rem] font-bold text-cyan-500">Google Login</h2>
			</button>
		</div>
	);
}
