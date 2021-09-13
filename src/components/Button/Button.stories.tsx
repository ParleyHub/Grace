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
  variant: 'info',
  label: 'Button',
};

export const InfoDisabled = Template.bind({});
InfoDisabled.args = {
  variant: 'info',
  label: 'Button',
  disabled: true,
};

export const InfoOutline = Template.bind({});
InfoOutline.args = {
  variant: 'info',
  label: 'Button',
  outline: true,
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  label: 'Button',
};

export const SuccessDisabled = Template.bind({});
SuccessDisabled.args = {
  variant: 'success',
  label: 'Button',
  disabled: true,
};

export const SuccessOutline = Template.bind({});
SuccessOutline.args = {
  variant: 'success',
  label: 'Button',
  outline: true,
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  label: 'Button',
};

export const WarningDisabled = Template.bind({});
WarningDisabled.args = {
  variant: 'warning',
  label: 'Button',
  disabled: true,
};

export const WarningOutline = Template.bind({});
WarningOutline.args = {
  variant: 'warning',
  label: 'Button',
  outline: true,
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  label: 'Button',
};

export const ErrorDisabled = Template.bind({});
ErrorDisabled.args = {
  variant: 'error',
  label: 'Button',
  disabled: true,
};

export const ErrorOutline = Template.bind({});
ErrorOutline.args = {
  variant: 'error',
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
