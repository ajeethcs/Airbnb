import React from "react";
import { ResponsiveLine } from "@nivo/line";
import styled from "styled-components";

const ChartContainer = styled.div`
  height: 360px;
`;
const TooltipContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-bottom: 5px;
`;
const TooltipName = styled.div`
  padding: 0 16px;
`;

export const TruncatedLabel = ({ label }) => {
  const truncatedLabel =
    label.length > 10 ? label.substring(0, 10) + "..." : label;
  return <tspan dy=".35em">{truncatedLabel}</tspan>;
};

function LineChart(props) {
  function numFormatter(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  }

  return (
    <ChartContainer>
      <ResponsiveLine
        data={props.chartData}
        margin={{
          top: 30,
          right: 160,
          bottom: 70,
          left: 50,
        }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          //   stacked: true,
          min: "auto",
          max: "auto",
        }}
        minY="auto"
        maxY="auto"
        stacked={true}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          // legend: "count",
          // legendOffset: -40,
          // legendPosition: "middle"
          format: (value) => `${numFormatter(value)}`,
        }}
        enableGridX={false}
        yFormat={(value) =>
          `${Number(value).toLocaleString("en-US", {
            minimumFractionDigits: 0,
          })}`
        }
        pointSize={5.5}
        lineWidth={2.5}
        // dotSize={10}
        // dotColor="inherit:darker(0.3)"
        // dotBorderWidth={1}
        // dotBorderColor="#ffffff"
        // enableDotLabel={true}
        // dotLabel="y"
        // dotLabelYOffset={-12}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        enableSlices="x"
        legends={[
          {
            anchor: "top-right",
            direction: "column",
            justify: false,
            translateX: 160,
            translateY: 0,
            itemsSpacing: 5,
            itemDirection: "left-to-right",
            itemWidth: 120,
            itemHeight: 15,
            itemOpacity: 1,
            symbolSize: 8,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        sliceTooltip={({ slice }) => {
          return (
            <div
              style={{
                background: "white",
                padding: "12px",
                border: "1px solid #ccc",
              }}
            >
              {/* <div>x: {slice.id}</div> */}
              {slice.points
                .sort((a, b) => b.data.y - a.data.y)
                .map((point) => (
                  <TooltipContainer key={point.id}>
                    <div
                      style={{
                        background: point.serieColor,
                        height: "10px",
                        width: "10px",
                        // padding: "0 3px 0 0",
                      }}
                    ></div>
                    <TooltipName>{point.serieId}</TooltipName>
                    <div>
                      <strong>{point.data.yFormatted}</strong>
                    </div>
                  </TooltipContainer>
                ))}
            </div>
          );
        }}
      />
    </ChartContainer>
  );
}

export default LineChart;
