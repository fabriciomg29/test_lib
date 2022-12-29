import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbTag, TagProps } from '../src'

export default {
  title: 'Components/AbTag',
  component: AbTag
} as ComponentMeta<typeof AbTag>

const Template: ComponentStory<typeof AbTag> = (args) => <AbTag {...args} />

export const Primario = Template.bind({})
Primario.args = {
  texto: "Android"
} as TagProps