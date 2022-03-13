import { Grid, Typography as Item } from '@mui/material';
import React from 'react';

export const Header: React.FC = (): JSX.Element => {
    return(
        <Grid container>
            <Grid item>
                <Item>BraveHub</Item>
            </Grid>
            <Grid item>
                <Item>BraveHub</Item>
            </Grid>
        </Grid>
    )
}