import React from "react";
import Header from "./Header";

export default {
  title: "Component/Header",
  component: Header,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
