import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbBotao, BotaoProps } from '../src'

export default {
  title: 'Components/AbBotao',
  component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args} />

export const Primario = Template.bind({})
Primario.args = {
  texto: 'Botão Primário',
  tipo: 'primario'
} as BotaoProps

export const Secundario = Template.bind({})
Secundario.args = {
  texto: 'Botão Secudario',
  tipo: 'secundario'
} as BotaoProps