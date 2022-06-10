import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router/routing";
import { logOutAction } from "../store/auth/auth.actions";

const Navbar:FC = () => {
	const router = useNavigate()
	const {currentUser} = useTypedSelector(state => state.auth);

	return (
		<div>
			<div>
					<div>
					{currentUser
					?
					<button onClick={()=> logOutAction()} key={1}>LOGOUT</button>
					:
					<button  onClick={()=> router(RouteNames.LOGIN)} key={1}>LOGIN</button>
					}
					</div>
			</div>
		</div>
	)
}

export default Navbar;
