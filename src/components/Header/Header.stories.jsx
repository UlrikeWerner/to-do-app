import React from "react";
import Header from "./Header";

export default {
  title: "Component/Header",
  component: Header,
  argTypes: {
    text,
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
