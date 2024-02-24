/*eslint-disable*/
"use client";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./headerStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Images/XXIV.webp";
import useUser from "@/features/authentication/useUser";
import useLogout from "@/features/authentication/useLogout";
import { useQueryClient } from "@tanstack/react-query";

import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
	const [click, setClick] = useState(false);
	const [isTicketValid, setTicket] = useState(false);
	const handleClick = () => setClick(!click);

	const { logout, logoutLoading } = useLogout();

	const queryClient = useQueryClient();

	const [isNavbarHidden, setIsNavbarHidden] = useState(false);

	function handleGoogleLogin() {
		window.open(
			`${import.meta.env.VITE_API_URL}/users/auth/google`,
			"_self",
			"width-500, height=600"
		);
	}

	function handleLogout() {
		logout();
	}

	const { user, isAuthenticated } = useUser();

	const [direction, setDirection] = useState(-1);

	const { scrollYProgress } = useScroll();

	const [visible, setVisible] = useState(true);

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		// Check if current is not undefined and is a number
		if (typeof current === "number") {
			setDirection((d) => current! - scrollYProgress.getPrevious()!);
			if (direction < 0) {
				setVisible(true);
			} else {
				console;
				setVisible(false);
			}
		}
	});

	useEffect(() => {
		setDirection(-1);
	}, []);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{
					opacity: 1,
					y: -100,
				}}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.4,
				}}
			>
				<div className="header navbar">
					<Link to="/">
						<img className="logo" alt="logo" src={logo} />
					</Link>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li>
							<Link
								to="/"
								onClick={() => setClick(false)}
								className={location.pathname === "/" ? "activel" : ""}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/event"
								onClick={() => setClick(false)}
								className={location.pathname === "/event" ? "activel" : ""}
							>
								Events
							</Link>
						</li>
						<li>
							<Link
								to="/spotlight"
								onClick={() => setClick(false)}
								className={location.pathname === "/spotlight" ? "activel" : ""}
							>
								Spotlight
							</Link>
						</li>
						<li>
							<Link
								to="/sponsor"
								onClick={() => setClick(false)}
								className={location.pathname === "/sponsor" ? "activel" : ""}
							>
								Sponsor
							</Link>
						</li>
						<li>
							<Link
								to="/logistics"
								onClick={() => setClick(false)}
								className={location.pathname === "/logistics" ? "activel" : ""}
							>
								Schedule
							</Link>
						</li>
						<li>
							<Link
								to="/team"
								onClick={() => setClick(false)}
								className={location.pathname === "/team" ? "activel" : ""}
							>
								The Team
							</Link>
						</li>
						<li>
							<Link
								to="/faq"
								onClick={() => setClick(false)}
								className={location.pathname === "/faq" ? "activel" : ""}
							>
								FAQ
							</Link>
						</li>
						<li>
							<Link
								to="/timeline"
								onClick={() => setClick(false)}
								className={location.pathname === "/timeline" ? "activel" : ""}
							>
								Timeline
							</Link>
						</li>
						<li>
							{isAuthenticated ? (
								<div className=" cursor-pointer" onClick={handleLogout}>
									Logout
								</div>
							) : (
								<div className=" cursor-pointer" onClick={handleGoogleLogin}>
									Login
								</div>
							)}
						</li>
						<li className="glow-on-hover">
							<Link
								to={isTicketValid ? "/dashboard" : "/tickets"}
								onClick={() => setClick(false)}
							>
								{isTicketValid ? "Dashboard" : "Tickets"}
							</Link>
						</li>
					</ul>
					<div className="hamburger" onClick={handleClick}>
						{click ? (
							<FaTimes size={20} style={{ color: "#fff" }} />
						) : (
							<FaBars size={20} style={{ color: "#fff" }} />
						)}
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Header;
