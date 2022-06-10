import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import CardListPage from './containers/CardListPage';

function App() {
  return(
	<BrowserRouter>
	<Navbar/>
	<Routes>
		<Route path='/' element={<Navigate replace to="/login"/>}/>
		<Route path='/news' element={<CardListPage/>}/>
		<Route path='/profile' element={<Profile/>}/>
	</Routes>
	<AppRouter/>
	</BrowserRouter>
  );
}

export default App;
