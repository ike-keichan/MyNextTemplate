import { Story } from "@storybook/react";

import { Button } from "./index";
import { ButtonProps } from "./types";

export default {
  component: Button,
  title: "atoms/Button",
};

const Component: Story<ButtonProps> = (args) => <Button>{args}</Button>;

export const Base = Component.bind({});

Base.args = {
  children: "ボタン文言",
};
