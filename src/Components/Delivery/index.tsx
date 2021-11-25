import { Box, MenuItem, Select, Typography } from "@material-ui/core";
import React from "react";


export function Delivery(){
    return(
        <Box p={4}>
            <Typography variant="body1"mt={2} p={2}>
                Selecione o método de transporte
                </Typography>
        <Select
          
          label="Selecione o método de transporte">
          
          <MenuItem value={10}>Correios</MenuItem>
          <MenuItem value={20}>Amazon</MenuItem>
          <MenuItem value={30}>Transportadora do Tio Francisco</MenuItem>
        </Select>
        </Box>

    )
    
}