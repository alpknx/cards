import LoginForm from "../components/LoginForm";
import Profile from "../components/Profile";
import CardListPage from "../containers/CardListPage";

export interface Route {
	path: string;
	element: React.ElementType;
}

export enum RouteNames {
	MAIN = '/',
	LOGIN = '/login',
	NEWS = '/news',
	PROFILE = '/profile'
}

export const publicRoutes: Route[] = [
	{path: RouteNames.LOGIN, element: LoginForm}
]

export const privateRoutes: Route[] = [
	{path: RouteNames.PROFILE, element: Profile},
	{path: RouteNames.NEWS, element: CardListPage}
]
