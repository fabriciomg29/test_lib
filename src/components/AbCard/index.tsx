import React, { ReactNode } from "react"
import styled from 'styled-components'

const Card = styled.button`
  background-color: #FFFFFF;
  padding: 24px 24px;
  border: 0px solid #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
`

export interface CardProps {
  children?: ReactNode
}

export const AbCard = ({ children }: CardProps) => {
  return (
    <Card>{children}</Card>
  )
}