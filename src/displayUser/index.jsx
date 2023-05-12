import { useSelector } from "react-redux";
import "./DisplayUsers.css";

function DisplayUsers() {
	const userInfo = useSelector((state) => state.users);
	console.log(userInfo, "users");

	return (
		<div className='table-container'>
			<h3>User Info</h3>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Password</th>
						<th>ConfirmPassword</th>
						<th>CountryCode</th>
						<th>Mobile Number</th>
					</tr>
				</thead>
				<tbody>
					{userInfo.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.password}</td>
							<td>{user.confirmPassword}</td>
							<td>{user.countryCode}</td>
							<td>{user.mobileNumber}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default DisplayUsers;
