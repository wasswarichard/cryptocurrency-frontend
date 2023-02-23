import { AppBar, Typography, Grid, Button } from '@mui/material';
import React, { FC } from 'react';
import './index.sass';
import { useAuth } from '../../ProtectedRoutes';

export interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
   const isAuth = useAuth();
   return (
      <AppBar position="relative" className="appBar">
         <Grid container className="headerContainer">
            <Grid item xs={11}>
               <Typography variant="h4" data-testid="company-logo">
                  Exchange
               </Typography>
            </Grid>
            <Grid item xs={1}>
               {isAuth && (
                  <Button
                     variant="outlined"
                     color="success"
                     size="large"
                     onClick={() => {
                        localStorage.removeItem('authentication');
                        window.location.reload();
                     }}
                  >
                     LogOut
                  </Button>
               )}
            </Grid>
         </Grid>
      </AppBar>
   );
};

export default Header;
