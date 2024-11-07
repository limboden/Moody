// import React from "react"
// TODO: Implement context stuff
// TODO: Import User
// import User from "../interfaces/User";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
	// input variables using useState
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [warning, setWarning] = useState("");
	// validate input

	function onUsernameChange(e: any) {
		if (e.target.value == "") setWarning("Your username is empty");
		else setWarning("");

		setUsername(e.target.value);
	}
	function onPasswordChange(e: any) {
		if (e.target.value == "") setWarning("Your password is empty");
		else setWarning("");
		setPassword(e.target.value);
	}
	function onPasswordConfirmChange(e: any) {
		if (e.target.value == "")
			setWarning("Your confirm password is empty");
		else setWarning("");
		setPasswordConfirm(e.target.value);
	}
	function submit() {}

	return (
		<div className="container text-center pt-5 vh-100">
			<h1>Welcome to</h1>
			<img src="Moody_text_colored.svg" alt="Moody Logo" className="w-25"/>
			<form>
				<div className="warnings mb-4">{warning}</div>

				<div className="row mb-3 justify-content-center">
					<div className="col-3">
						<label htmlFor="inpUsername" className="form-label">
							Username
						</label>
					</div>
					<div className="col-7">
						<input
							type="text"
							className="form-control"
							id="inpUsername"
							placeholder="Enter your username"
							value={username}
							onChange={onUsernameChange}
						/>
					</div>
				</div>
				<div className="row mb-3 justify-content-center">
					<div className="col-3">
						<label htmlFor="inpPassword" className="form-label">
							Password
						</label>
					</div>
					<div className="col-7">
						<input
							type="password"
							className="form-control"
							id="inpPassword"
							placeholder="Password"
							value={password}
							onChange={onPasswordChange}
						/>
					</div>
				</div>
				<div className="row mb-3 justify-content-center">
					<div className="col-3">
						<label htmlFor="inpPasswordConfirm" className="form-label">
							Confirm Password
						</label>
					</div>
					<div className="col-7">
						<input
							type="password"
							className="form-control"
							id="inpPasswordConfirm"
							placeholder="Password"
							value={passwordConfirm}
							onChange={onPasswordConfirmChange}
						/>
					</div>
				</div>
				<div className="row mb-3 justify-content-center">
					Already have an account?
					<Link to="/login">Login here</Link>
				</div>
				<div className="row justify-content-center">
					<button
						type="submit"
						className="btn btn-primary col-3"
						onClick={submit}
					>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
