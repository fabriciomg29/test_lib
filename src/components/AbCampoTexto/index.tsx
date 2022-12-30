import React from "react"
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`

const Label = styled.label`
  color: background: rgba(0, 47, 82, 1);
  padding-left: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 4px;
`

const Campo = styled.input`
  box-sizing: border-box;
  padding: 10px 24px;
  border: 1px solid #002F52;
  border-radius: 24px;
  gap: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(164, 164, 164, 1);
`

export interface CampoTextoProps {
  label: string
  value: string
  type?: 'text' | 'email' | 'password' | 'date'
  placeholder?: string
  onChange: (value: string) => void
}

export const AbCampoTexto = ({ label, value, onChange, type, placeholder }: CampoTextoProps) => {
  return (
    <Container>
      <Label>
        {label}
      </Label>
      <Campo
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </Container>
  )
}