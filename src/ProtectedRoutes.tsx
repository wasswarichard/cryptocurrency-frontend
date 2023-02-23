import { Outlet, Navigate } from 'react-router-dom';

const useAuth = () => {
   const authentication = localStorage.getItem('authentication');
   // @ts-ignore
   const user = JSON.parse(authentication);
   return user && user.loggedIn;
};
const ProtectedRoutes = () => {
   const isAuth = useAuth();
   return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
