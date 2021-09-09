import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  label: 'Button',
  disabled: true,
};

export const DefaultOutline = Template.bind({});
DefaultOutline.args = {
  label: 'Button',
  outline: true,
};

export const DefaultOutlineDisabled = Template.bind({});
DefaultOutlineDisabled.args = {
  label: 'Button',
  outline: true,
  disabled: true,
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  label: 'Button',
};

export const InfoDisabled = Template.bind({});
InfoDisabled.args = {
  type: 'info',
  label: 'Button',
  disabled: true,
};

export const InfoOutline = Template.bind({});
InfoOutline.args = {
  type: 'info',
  label: 'Button',
  outline: true,
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  label: 'Button',
};

export const SuccessDisabled = Template.bind({});
SuccessDisabled.args = {
  type: 'success',
  label: 'Button',
  disabled: true,
};

export const SuccessOutline = Template.bind({});
SuccessOutline.args = {
  type: 'success',
  label: 'Button',
  outline: true,
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  label: 'Button',
};

export const WarningDisabled = Template.bind({});
WarningDisabled.args = {
  type: 'warning',
  label: 'Button',
  disabled: true,
};

export const WarningOutline = Template.bind({});
WarningOutline.args = {
  type: 'warning',
  label: 'Button',
  outline: true,
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  label: 'Button',
};

export const ErrorDisabled = Template.bind({});
ErrorDisabled.args = {
  type: 'error',
  label: 'Button',
  disabled: true,
};

export const ErrorOutline = Template.bind({});
ErrorOutline.args = {
  type: 'error',
  label: 'Button',
  outline: true,
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
