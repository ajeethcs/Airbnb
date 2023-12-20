import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TrendLineWrapper } from "../components/LineGraph";
import { Provider } from "react-redux";
import store from "../Redux/Store/store";

const meta: Meta<typeof TrendLineWrapper> = {
  component: TrendLineWrapper,
  title: "Marbella/TrendLineViewer",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TrendLineWrapper>;

const params = {
  type: 1,
  teamId: 2,
  isSpeciality: false,
  periodType: 2,
  clinicId: 0,
  userId: 0,
};

export const Default: Story = (args) => (
  <div>
    <TrendLineWrapper params={params} />
  </div>
);

Default.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
