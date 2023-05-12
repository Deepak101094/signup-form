import React, { useState } from "react";
import "./SignUp.css";
import { useDispatch } from "react-redux";
import { userInfo } from "../store/userSlice";

const SignUpForm = () => {
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		countryCode: "",
		mobileNumber: "",
	});

	const [formErrors, setFormErrors] = useState({});
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const hasErrors = validateForm();
		if (!hasErrors) {
			dispatch(userInfo(formValues));
			setFormValues({
				name: "",
				email: "",
				password: "",
				confirmPassword: "",
				countryCode: "",
				mobileNumber: "",
			});
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	const validateForm = () => {
		let errors = {}; // Create an empty object to hold validation errors

		if (!formValues.name) {
			errors.name = "Name is required.";
		} else if (formValues.name.split(" ").length > 2) {
			errors.name = "Only one space is allowed in the name.";
		}

		if (!formValues.email) {
			errors.email = "Email is required.";
		} else {
			const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
			const yopmailRegex = /@yopmail.com$/i;
			if (!emailRegex.test(formValues.email)) {
				errors.email = "Please enter a valid email address.";
			} else if (yopmailRegex.test(formValues.email)) {
				errors.email = "Yopmail ids are not allowed.";
			} else if (formValues.email !== formValues.email.toLowerCase()) {
				errors.email = "Email should not contain uppercase letters.";
			}
		}

		if (!formValues.password) {
			errors.password = "Password is required.";
		} else {
			const passwordRegex =
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,12}$/;
			if (!passwordRegex.test(formValues.password)) {
				errors.password =
					"Password should be 7-12 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.";
			}
		}

		if (formValues.confirmPassword !== formValues.password) {
			// If the confirm password field does not match the password field
			errors.confirmPassword = "Passwords do not match.";
		}

		if (!formValues.countryCode) {
			errors.countryCode = "Country code is required.";
		} else {
			const countryCodeRegex = /^\+?\d{1,3}$/;
			if (!countryCodeRegex.test(formValues.countryCode)) {
				errors.countryCode =
					"Please enter a valid country code with a maximum of three digits and an optional + sign.";
			}
		}

		if (!formValues.mobileNumber) {
			errors.mobileNumber = "Mobile number is required.";
		} else {
			const mobileNumberRegex = /^[1-9]\d{9,11}$/;
			if (!mobileNumberRegex.test(formValues.mobileNumber)) {
				errors.mobileNumber =
					"Please enter a valid mobile number with a minimum of 10 digits and a maximum of 12 digits, excluding 0.";
			}
		}

		setFormErrors(errors);

		return Object.keys(errors).length > 0; // Return true if there are errors
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formValues.name}
						onChange={handleChange}
					/>
					{formErrors.name && <p className='error'>{formErrors.name}</p>}
				</div>
				<div>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formValues.email}
						onChange={handleChange}
					/>
					{formErrors.email && <p className='error'>{formErrors.email}</p>}
				</div>

				<div>
					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						id='password'
						name='password'
						value={formValues.password}
						onChange={handleChange}
					/>
					{formErrors.password && (
						<p className='error'>{formErrors.password}</p>
					)}
				</div>

				<div>
					<label htmlFor='confirmPassword'>Confirm Password:</label>
					<input
						type='password'
						id='confirmPassword'
						name='confirmPassword'
						value={formValues.confirmPassword}
						onChange={handleChange}
					/>
					{formErrors.confirmPassword && (
						<p className='error'>{formErrors.confirmPassword}</p>
					)}
				</div>

				<div>
					<label htmlFor='countryCode'>Country Code:</label>
					<input
						type='tel'
						id='countryCode'
						name='countryCode'
						value={formValues.countryCode}
						onChange={handleChange}
					/>
					{formErrors.countryCode && (
						<p className='error'>{formErrors.countryCode}</p>
					)}
				</div>

				<div>
					<label htmlFor='mobileNumber'>Mobile Number:</label>
					<input
						type='tel'
						id='mobileNumber'
						name='mobileNumber'
						value={formValues.mobileNumber}
						onChange={handleChange}
					/>
					{formErrors.mobileNumber && (
						<p className='error'>{formErrors.mobileNumber}</p>
					)}
				</div>

				<button type='submit'>Submit</button>
			</form>
		</>
	);
};
export default SignUpForm;
