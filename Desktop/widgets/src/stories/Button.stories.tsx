import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TrendLineViewer from "../components/LineGraph/TrendLineViewer";
import { Provider } from "react-redux";
import store from "../Redux/Store/store";

const meta: Meta<typeof TrendLineViewer> = {
  component: TrendLineViewer,
  title: "Marbella/TrendLineViewer",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TrendLineViewer>;

export const Button1: Story = (args) => (
    <Provider store={store}>
      <TrendLineViewer/>
    </Provider>
);

Button1.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};

