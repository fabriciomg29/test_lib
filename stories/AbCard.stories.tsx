import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbCard } from '../src'

export default {
  title: 'Components/AbCard',
  component: AbCard
} as ComponentMeta<typeof AbCard>

const Template: ComponentStory<typeof AbCard> = () => {
  return (
    <AbCard>
      <h1>Olá eu sou um card</h1>
    </AbCard>
  )
}

export const Primario = Template.bind({})