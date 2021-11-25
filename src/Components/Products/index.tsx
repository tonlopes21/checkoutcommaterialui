import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
export function Products(){

    return(
        <Box p={4}>
            <Paper elevation={3}>
                <Typography variant="body1" p={2}>
                Macbook Pro 32GB
                </Typography>
            </Paper>
            <Paper elevation={3}>
            <Typography variant="body1"mt={2} p={2}>
                Teclado Mecânico Keychron k2
                </Typography>              
            </Paper>
            <Paper elevation={3}>
            <Typography variant="body1"mt={2} p={2}>
                Cadeira Gamer
                </Typography>              
            </Paper>
        </Box>
    );
}