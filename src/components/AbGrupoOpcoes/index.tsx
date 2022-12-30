import React, { useState } from 'react'
import styled from 'styled-components'

interface SectionProps {
  selecionado: boolean
}

export interface AbGrupoOpcao {
  id: number
  titulo: string
  corpo: string
  rodape: string
}

export interface AbGrupoOpcaoProps {
  opcoes: AbGrupoOpcao[]
  valorPadrao?: AbGrupoOpcao | null
  onChange?: (opcao: AbGrupoOpcao) => void
}

const Section = styled.section<SectionProps>`
  width: 194px;
  height: 88px;
  background: ${(props: SectionProps) => props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFFFFF'};
  border: 1px solid;
  border-color: #EB9B00;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;
  
  header {
    color: ${(props: SectionProps) => props.selecionado ? '#FFFFFF' : '#EB9B00'};
    font-size: 12px;
    font-weight: 400;
  }
  strong {
    color: ${(props: SectionProps) => props.selecionado ? '#FFFFFF' : '#EB9B00'};
    font-weight: 700;
    font-size: 16px;
  }
  footer {
    color: ${(props: SectionProps) => props.selecionado ? '#FFFFFF' : 'rgba(0, 0, 0, 0.54)'};
    font-size: 12px;
    line-height: 18px;
  }
`

export const AbGrupoOpcoes = ({ opcoes, onChange, valorPadrao = null }: AbGrupoOpcaoProps) => {

  const [selecao, setSelecao] = useState<AbGrupoOpcao | null>(valorPadrao)

  const aoSelecionar = (opcao: AbGrupoOpcao) => {
    setSelecao(opcao)
    if (onChange) {
      onChange(opcao)
    }
  }

  return (
    <>
      {opcoes.map((opcao: AbGrupoOpcao) => (
        <Section key={opcao.id} selecionado={selecao?.id === opcao.id} onClick={() => aoSelecionar(opcao)}>
          <header>
            {opcao.titulo}
          </header>
          <div>
            <strong>
              {opcao.corpo}
            </strong>
          </div>
          <footer>
            {opcao.rodape}
            .pdf, .epub, .mob
          </footer>
        </Section>
      ))}
    </>
  )
}