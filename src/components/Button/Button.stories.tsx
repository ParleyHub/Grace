import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true,
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Button',
  outline: true,
};

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
  label: 'Button',
  outline: true,
  disabled: true,
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  label: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  label: 'Button',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  label: 'Button',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const fullWidth = Template.bind({});
fullWidth.args = {
  size: 'small',
  label: 'Button',
  fullWidth: true,
};
