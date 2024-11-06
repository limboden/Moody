// import React from "react"
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="">
			<Link to={"/"}>
				<img
					src="../../public/favicon.svg"
					alt="Moody Logo"
					className="header-logo"
				/>
			</Link>
		</div>
	);
};

export default Header;
