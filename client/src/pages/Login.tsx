// import React from "react"
// TODO: Implement context stuff
// TODO: Import User
// import User from "../interfaces/User";

import { useState } from "react";

const Login = () => {
	// input variables using useState
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [warning, setWarning] =useState('');
	// validate input

	function onUsernameChange(e:any) {
		if (e.target.value == '')
			setWarning(warning + '\nYour username is empty');
		else setWarning('');
		
		setUsername(e.target.value);
	}
	function onPasswordChange(e:any) {
		if (e.target.value == '')
			setWarning(warning +'\nYour password is empty');
		else setWarning('');
		setPassword(e.target.value);
	}
	function submit() {

	}

	return (
		<div className="container text-center vh-100 pt-5">
			<img
				src="../../public/Moody_logo.svg"
				alt="Moody Logo"
				className="login-logo"
			/>
			<h1>Log in to Moody</h1>
			<form>
				<div className="warnings">{warning}</div>
				<div className="mb-3">
					<label htmlFor="inpUsername" className="form-label text-primary">
						Username
					</label>
					<input
						type="text"
						className="form-control"
						id="inpUsername"
						placeholder="Enter your username"
						value={username}
						onChange={onUsernameChange}
					/>
				</div>
				<div className="container"></div>
				<div className="mb-3">
					<label htmlFor="inpPassword" className="form-label text-primary">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="inpPassword"
						placeholder="Password"
						value={password}
						onChange={onPasswordChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary" onClick={submit}>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
