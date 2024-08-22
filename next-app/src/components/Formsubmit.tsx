'use client';

import React from "react";
import { useFormStatus } from "react-dom";

const FormSubmit:React.FC = () => {
    const {pending} = useFormStatus();

    return (
        <div>
            {pending ? <p>pending.... submit</p> : <p>no pending</p>}
        </div>
    )
}

export default FormSubmit;