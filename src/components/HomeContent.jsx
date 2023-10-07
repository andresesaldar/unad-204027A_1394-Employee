"use client"

import { Add as AddIcon } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import EmployeesTable from "./EmployeesTable";
import UpsertEmployeeDialog from "./UpsertEmployeeDialog";

export default function HomeContent({employees}) {
    const [open, setOpen] = useState(false);
  
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)
    return (
      <Fragment>
        <Stack justifyContent="space-between" direction="row" alignItems="center">
          <Typography variant='h4'>
            Tabla de empleados
          </Typography>
          <Button component="label" variant="contained" endIcon={<AddIcon />}
                  onClick={handleOpen}>
            Crear
          </Button>
        </Stack>
        <EmployeesTable employees={employees}/>
        <UpsertEmployeeDialog open={open} handleClose={handleClose}/>
      </Fragment>
    );
  }