"use client";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UpsertEmployeeForm from "./UpsertEmployeeForm";

export default function UpsertEmployeeDialog ({open, handleClose}) {
    const [employee, setEmployee] = useState();
    const router = useRouter();

    const onSubmit = (e) => {
        e.preventDefault();
        createEmployee();
        handleClose();
    }

    const createEmployee = () => {
        fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/employees`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(employee)
            })
            .finally((e) => router.refresh());
    }

    const handleChange = (changed) => {
        setEmployee(changed);
    }

    return <Dialog open={open} onClose={handleClose}>
        <form onSubmit={onSubmit}>
            <DialogTitle>Crear empleado</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Ingrese la información del empleado.
                </DialogContentText>
                <UpsertEmployeeForm handleChange={handleChange}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="inherit" type="cancel">Cancelar</Button>
                <Button color="primary" type="submit" disabled={!employee}>Crear</Button>
            </DialogActions>
        </form>
      </Dialog>
}