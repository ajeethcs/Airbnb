import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import PieChartWrapper from "../components/PieChart/PieChartWrapper";
import { PieChartViewer } from "../components";

const meta: Meta<typeof PieChartWrapper> = {
  component: PieChartViewer,
  title: "Marbella/PieChart",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof PieChartWrapper>;

const params = {
  type: 1,
  userId: 0,
  teamId: 2,
  periodType: 1,
  clinicId: 0,
  reportType: 1,
};

export const Default: Story = (args) => <PieChartWrapper params={params} />;

Default.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
