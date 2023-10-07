"use client";

import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Fragment, useState } from "react";

export default function UpsertEmployeeForm ({handleChange}) {
    const [employee, setEmployee] = useState({
        code: "",
        name: "",
        lastName: "",
        type: "",
        address: "",
        phone: ""
    });

    const handleFieldChange = (event, field) => {
        const newEmployee = {...employee, [field]: event.target.value};
        setEmployee(newEmployee);
        handleChange(newEmployee);
    }

    return (
        <Fragment>
            <TextField
                autoFocus
                margin="dense"
                id="code"
                label="Código"
                type="number"
                fullWidth
                variant="standard"
                value={employee["code"]}
                onInput={e => handleFieldChange(e, "code")}
            />
            <TextField
                margin="dense"
                id="name"
                label="Nombre"
                type="text"
                fullWidth
                variant="standard"
                value={employee["name"]}
                onInput={e => handleFieldChange(e, "name")}
            />
            <TextField
                margin="dense"
                id="lastName"
                label="Apellido"
                type="text"
                fullWidth
                variant="standard"
                value={employee["lastName"]}
                onInput={e => handleFieldChange(e, "lastName")}
            />
            <FormControl fullWidth margin="dense" variant="standard">
                <InputLabel id="type-label">Tipo</InputLabel>
                <Select
                    labelId="type-label"
                    id="type"
                    label="Tipo"
                    value={employee["type"]}
                    onChange={e => handleFieldChange(e, "type")}
                >
                    <MenuItem value={""} disabled>Seleccione...</MenuItem>
                    <MenuItem value={"USER"}>Usuario</MenuItem>
                </Select>
            </FormControl>
            <TextField
                margin="dense"
                id="address"
                label="Dirección"
                type="text"
                fullWidth
                variant="standard"
                value={employee["address"]}
                onInput={e => handleFieldChange(e, "address")}
            />
            <TextField
                margin="dense"
                id="phone"
                label="Teléfono"
                type="tel"
                fullWidth
                variant="standard"
                value={employee["phone"]}
                onInput={e => handleFieldChange(e, "phone")}
            />
        </Fragment>
    );
}