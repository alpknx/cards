import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { logInSuccessAction } from "../store/auth/auth.actions";

const LoginForm:FC = () => {
	const dispatch = useDispatch();
   const [currentUser, setCurrentUser] = useState({username:'', password:''})

	const updateField = (e: any) => {
		setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
	};

	const submit = () => {
		dispatch(logInSuccessAction(currentUser))
	}

	return (
		<div>
			<form onSubmit={submit}>
				<label>
					Username:
					<input value={currentUser.username} name='username' onChange={updateField} />
				</label>
				<br/>
				<label>
					Password:
					<input value={currentUser.password} name='password' onChange={updateField} />
				</label>
				<br/>
				<button>Submit</button>
			</form>
		</div>
	)
}

export default LoginForm;
