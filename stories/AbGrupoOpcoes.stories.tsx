import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbGrupoOpcao, AbGrupoOpcaoProps, AbGrupoOpcoes } from '../src'

export default {
  title: 'Components/AbGrupoOpcoes',
  component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args} />

export const Default = Template.bind({})
Default.args = {
  opcoes: [
    {
      id: 1,
      titulo: 'E-book',
      corpo: 'R$ 10,00',
      rodape: '.pdf, .epub, .mob'
    },
    {
      id: 2,
      titulo: 'E-book',
      corpo: 'R$ 20,00',
      rodape: '.pdf, .epub, .mob'
    },
    {
      id: 3,
      titulo: 'E-book',
      corpo: 'R$ 30,00',
      rodape: '.pdf, .epub, .mob'
    }
  ]
} as AbGrupoOpcaoProps