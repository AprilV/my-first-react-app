import React from "react";
import NewComponent from "./NewComponent";
import Button from '@mui/material/Button';

function CombinedComponent () {

    return (
        <div><NewComponent/>
        <Button variant="text">Text</Button></div>
    )
}

export default CombinedComponent