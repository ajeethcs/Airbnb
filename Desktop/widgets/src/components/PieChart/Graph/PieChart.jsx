import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ResponsivePie } from "@nivo/pie";

const PieChartContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 10px;
`;

const PieChart = ({ data }) => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    if (data) {
      const obj = data.map((item) => {
        return { id: item.name, value: parseInt(item.percentage) };
      });
      setInfo(obj);
    }
  }, [data]);

  return (
    <PieChartContainer>
      <ResponsivePie
        data={info}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        colors={[
          "#46bc8a",
          "#00a2e8",
          "#a349a4",
          "#8dd3c7",
          "#ffffb3",
          "#bebada",
          "#a6d854",
        ]}
        cornerRadius={3}
        // startAngle={0}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLabel={(e) => `${e.value}%`}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        // legends={[
        //   {
        //     anchor: "right",
        //     direction: "column",
        //     justify: false,
        //     translateX: -51,
        //     translateY: 0,
        //     itemWidth: 100,
        //     itemHeight: 20,
        //     itemsSpacing: 8,
        //     symbolSize: 20,
        //     itemDirection: "left-to-right",
        //   },
        // ]}
      />
    </PieChartContainer>
  );
};

export default PieChart;
