import React from "react";
import { Box } from "@material-ui/system"; 
import { TextField } from "@material-ui/core";
import { Stack } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";

export function Payment (){
    return(
        <Card 
        sx={{
            margin: 2,
            padding: 2,
        }}
        >
            <Container
            sx={{
                display: "flex",
                justifyContent: "center",

            }}
            >
            <Stack
                component="form"
                sx={{
                    width: "50vw",
                }}
                spaccing={2}
                noValidate
                autoComplete="off"
        >
            <TextField
            type="number"
            label="Número do Cartão"
            variant="standard"
            />
            <TextField label = "Nome" variant ="standard" />
            <TextField label = "Validade" variant ="standard" />
            <TextField type = "Number" label="CVV" variant ="standard" />

            </Stack>
            </Container>
            </Card>


                )

}