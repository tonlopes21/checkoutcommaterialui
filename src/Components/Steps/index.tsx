import React, { useState } from "react"
import { Step, StepLabel, Stepper, Box, Alert } from "@material-ui/core"
import Button from "@material-ui/core/Button";
import { Products } from "../Products/index";
import { Delivery } from "../Delivery/index";
import { Payment } from "../Payment";


export function Steps (){
    const[currentStep, setCurrentStep] = useState(0);

    function next(){
        setCurrentStep(currentStep + 1);
    }
    function back (){
        setCurrentStep(currentStep - 1);
    }
    
    
    
    return(

        <Box sx={{width: "100%"}}>
            <Stepper activeStep={currentStep}>
                <Step>                
              <StepLabel>Produtos</StepLabel>
              </Step> 
              <Step>
              <StepLabel>Método de Entrega</StepLabel>
              </Step>
              <Step>
              <StepLabel>Pagamento</StepLabel>
              </Step>
            </Stepper>         
            
            {currentStep === 0 && <Products/>} 
            {currentStep === 1 && <Delivery/>}
            {currentStep === 2 && <Payment/>}
            
            {currentStep === 3 ? (<Alert severity="success">
                Compra efetuada com sucesso!</Alert>) :
            (
            <>
            <Button onClick={back}>Voltar</Button>
                <Button onClick={next}>Próximo</Button>
                </>
                
                )}   
            

        </Box>
    )
}

//Se o currentstep for igual a 0, mostre "produtcts."
