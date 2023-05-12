import React from "react";
import SignUpForm from "./auth/SignUp";
import "./App.css";
import DisplayUsers from "./displayUser";

function App() {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<SignUpForm />
			<DisplayUsers /> {/* for display the User Info in the table*/}
		</div>
	);
}

export default App;
