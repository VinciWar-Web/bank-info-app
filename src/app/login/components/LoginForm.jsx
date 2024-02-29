"use client"

import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import Link from 'next/link'

export const LoginForm = () => {

    const [users, setUsers] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(users, password)
    }

    
    return (
        <>
            <TextField
                sx={{ 
                    marginBottom: '20px', 
                    width: '100%',
                }}
                error={false}
                id="user"
                label="Usuario"
                variant="outlined"
                helperText="Ingresa un usuario válido"
                onChange={ (e) => setUsers(e.target.value) }
            />

            <TextField
                sx={{ 
                    marginBottom: '20px',
                    width: '100%', 
                }}
                error={false}
                id="password"
                label="Contraseña"
                variant="outlined"
                type="password"
                helperText="Ingresa una contraseña válida"
                onChange={ (e) => setPassword(e.target.value) }
            />

            <Button
                sx={{
                    marginBottom: '20px'
                }} 
                size="large" 
                variant="contained"
                onClick={ handleSubmit }
            >
                Ingresar
            </Button>

            <Link 
                style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    textAlign: 'center'
                }}
                href="/register"
            >
                Crear una nueva cuenta
            </Link>
        </>
    )
}
