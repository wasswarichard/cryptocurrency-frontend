import { AppBar, Typography, Grid, Button } from '@mui/material';
import React, { FC } from 'react';
import './index.sass';

export interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
   return (
      <AppBar position="relative" className="appBar">
         <Grid container className="headerContainer">
            <Grid item xs={11}>
               <Typography variant="h4" data-testid="company-logo">
                  Exchange
               </Typography>
            </Grid>
            <Grid item xs={1}>
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
            </Grid>
         </Grid>
      </AppBar>
   );
};

export default Header;
