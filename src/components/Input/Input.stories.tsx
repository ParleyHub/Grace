import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Username',
};

export const Small = Template.bind({});
Small.args = {
  inputSize: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  inputSize: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  inputSize: 'large',
};

export const WithButton = Template.bind({});
WithButton.args = {
  buttonLabel: 'Search',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};
