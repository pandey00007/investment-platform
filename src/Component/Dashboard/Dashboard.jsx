import { Box, Grid, Typography } from '@mui/material'


import React from 'react'

 

export default function Dashboard() {
 
  return (
    <div className='wrapper'>
        <Box>
            <Grid container className=''>
                <Grid item xs={12} sm={12}>
                    <Typography variant='body2'>Dashboard</Typography>
                    <Typography variant='h5' component='h3'>Blog Overview</Typography>
                </Grid>
            </Grid>
            
        </Box>
        </div>
  )
}
