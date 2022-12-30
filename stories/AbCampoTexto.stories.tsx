import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbCampoTexto, CampoTextoProps } from '../src'

export default {
  title: 'Components/AbCampoTexto',
  component: AbCampoTexto,
  argTypes: {
    label: {
        control: 'text'
    }
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbCampoTexto>

const Template: ComponentStory<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args} />

export const Default = Template.bind({})
Default.args = {
  // label: 'E-mail',
  // value: '',
  // onChange: () => alert('1'),
  // type: 'email',
  // placeholder: 'email@gmail.com'
  label: 'Uma label interessante',
} as CampoTextoProps