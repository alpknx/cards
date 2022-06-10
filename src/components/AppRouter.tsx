import { Navigate, Route, Routes } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { privateRoutes, publicRoutes } from '../router/routing';

const AppRouter = () => {
  const { currentUser } = useTypedSelector((state) => state.auth);
  return currentUser ? (
    <Routes>
      {privateRoutes.map((route) => {
        return <Route key={route.path} path={route.path} element={<route.element />} />;
      })}
      <Route path={'/login'} element={<Navigate replace to='/profile' />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return <Route key={route.path} path={route.path} element={<route.element />} />;
      })}
      <Route path={'/'} element={<Navigate replace to='/login' />} />
    </Routes>
  );
};

export default AppRouter;
