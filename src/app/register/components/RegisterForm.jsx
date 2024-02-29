"use client"

import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import Link from 'next/link'

export const RegisterForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, password)
    }

    
    return (
        <>
            <TextField
                sx={{ 
                    marginBottom: '20px', 
                    width: '100%',
                }}
                error={false}
                id="name"
                label="Nombre completo"
                variant="outlined"
                helperText="Ingresa un nombre válido"
                onChange={ (e) => setName(e.target.value) }
            />

            <TextField
                sx={{ 
                    marginBottom: '20px', 
                    width: '100%',
                }}
                error={false}
                id="email"
                label="Correo electronico"
                variant="outlined"
                helperText="Ingresa un Correo electronico válido"
                onChange={ (e) => setEmail(e.target.value) }
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
                Registrar
            </Button>

            <Link 
                style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    textAlign: 'center'
                }}
                href="/login"
            >
                Iniciar sesión
            </Link>
        </>
    )
}
