import { useEffect, useMemo, useState } from "react";
import DayImgs from "../../DataList/dayImgs.json";
import { useTypewriter } from "react-simple-typewriter";
import { useTransition, animated, config } from "@react-spring/web";

function Home() {
	const imgs_name = useMemo(() => {
		return DayImgs.map((img) => img.name);
	}, []);
	const imgs_url = useMemo(() => {
		return DayImgs.map((img) => img.url);
	}, []);

	const [text, helper] = useTypewriter({
		words: imgs_name,
		loop: Infinity,
		typeSpeed: 90,
		deleteSpeed: 90,
		delaySpeed: 3000,
	});

	const { isType, isDelay } = helper;

	useEffect(() => {
		if (isType && !isDelay) {
			setIndex((i) => (i + 1) % imgs_name.length);
		}
	}, [isType, isDelay, imgs_name.length]);

	const [index, setIndex] = useState(0);

	const transitions = useTransition(index, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: config.molasses,
	});

	return (
		<div>
			{transitions((style, i) => {
				return (
					<animated.div
						className="bg"
						style={{
							...style,
							backgroundImage: `url(${
								imgs_url[(i + imgs_name.length - 1) % imgs_name.length]
							})`,
						}}
					>
						<div className="bg-black/50 w-screen h-screen absolute top-0 left-0" />
						<section className="absolute z-[3] bottom-20 right-0">
							<div className="text-white text-[15rem] text-right font-bold font-['Noto Sans Tamil','montserrat',sans-serif] w-screen pr-[30px]">
								{text}
								<h3 className="text-white text-[2rem] font-['montserrat'] font-bold text-right pr-[50px] mt-[-40px]">
									<span className="text-[2.5rem]   ">14</span>th March -{" "}
									<span className="text-[2.5rem]   ">17</span>th March, 2024
								</h3>
							</div>
						</section>
					</animated.div>
				);
			})}
		</div>
	);
}

export default Home;
