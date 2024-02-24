import React from "react";
import chennaiBg from "../../Assets/Images/chennai.webp";
function Home() {
	return (
		<div className="relative">
			<img  src={chennaiBg}  className="w-screen h-screen object-cover bg-no-repeat  relative"/>

			<div className="bg-black/20 w-screen h-screen absolute top-0 left-0  " />

			<h1 className="text-white text-[15rem]  font-bold text-center absolute z-[3] bottom-20 right-10 font-['tamil']" > MILAN</h1>
		</div>
	);
}

export default Home;
