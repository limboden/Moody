// import React from "react"
// TODO: Implement context stuff
// TODO: Import User

const Login = () => {
  // TODO: Create input variables using useState
  // TODO: Create functions to validate input
	return (
		<div className="container text-center">
			<img
				src="../../public/Moody_logo.svg"
				alt="Moody Logo"
				className="login-logo"
			/>
			<h1>Log in to Moody</h1>
			<form>
        <div className="warnings"></div>
				<div className="mb-3">
					<label htmlFor="inpUsername" className="form-label text-primary">
						Username
					</label>
					<input
						type="text"
						className="form-control"
						id="inpUsername"
						placeholder="Enter your username"
					/>
				</div>
        <div className="container">
          
        </div>
				<div className="mb-3">
					<label htmlFor="inpPassword" className="form-label text-primary">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="inpPassword"
						placeholder="Password"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Login;
