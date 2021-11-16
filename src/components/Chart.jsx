import React from "react";
import Chart from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Tokens in treasury", 50],
  ["Tokens in public wallets", 20],
  ["Tokens in development fund", 30]
];

const options = {
  title: "Total Volume",
  titleTextStyle: {
    color: "#FFFFFF",
    fontSize: '20',
    bold: true
  },
  pieHole: 0.7,
  legend: "none",
  pieSliceText: "none",
  backgroundColor: "#17181E",
  borderRadius: '5px',
  legend: {
    alignment: 'center',
    position: 'bottom',
    maxLines: 10,
    textStyle: {
      color: "#FFFFFF",
    }
  }
};

export default function CustomChart() {
    return (
      <>
        <Chart
          chartType="PieChart"
          width="100%"
          height="100%"
          data={data}
          options={options}
        />
      </>
    );
}
