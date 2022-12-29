import React from "react"
import styled from 'styled-components'

const StyleTag = styled.span`
  padding: 24px 32px;
  color: #FFFFFF;
  background: #EB9B00;
  font-weight: 700;
  font-size: 24px;
  display: inline-block;
  font-family: sans-serif;
`

export interface TagProps {
  texto?: string
}

export const AbTag = ({ texto }: TagProps) => {
  return (
    <StyleTag>{texto}</StyleTag>
  )
}