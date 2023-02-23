import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PageNotFound } from './components';
import Transactions from './pages/Transactions/Transactions';
import React, { FC } from 'react';
import LogIn from './pages/LogIn/LogIn';
import ProtectedRoutes from './ProtectedRoutes';
import SignUp from './pages/SignUp/SignUp';

export interface IRoutePathsProps {}

const RoutePaths: FC<IRoutePathsProps> = () => {
   return (
      <Router>
         <Routes>
            <Route element={<ProtectedRoutes />}>
               <Route path="/" element={<Transactions />} />
            </Route>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>
      </Router>
   );
};

export default RoutePaths;
