import React from 'react';
import { Typography, Link } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {"Copyright © "}
            <Link color="inherit" href="https://github.com/bahyusanciko" target="_blank"> Bahyu Sanciko < GitHub fontSize="small"/></Link> 
            {new Date().getFullYear()} {"."}
        </Typography>
    );
}