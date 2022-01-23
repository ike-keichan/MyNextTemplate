import { Story } from "@storybook/react";

import { Select } from "./index";
import { SelectProps } from "./types";

export default {
  component: Select,
  title: "atoms/Select",
};

const Component: Story<SelectProps> = ({ options }) => (
  <Select options={options} />
);

export const Base = Component.bind({});

Base.args = {
  options: [
    { id: "1", value: "", label: "選択肢1" },
    { id: "2", value: "", label: "選択肢2" },
    { id: "3", value: "", label: "選択肢3" },
  ],
};
