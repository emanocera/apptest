import React from 'react';
import {default as TextFieldBase} from "@material-ui/core/TextField";

const TextField =({variant, ...rest})=>{
    return(
        <TextFieldBase 
            variant={variant == null ? "outlined" : variant}
            size="medium"
            {...rest}
        />
           
    )
}

export default TextField