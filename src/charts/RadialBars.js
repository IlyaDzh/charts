import React from "react";
import ReactApexChart from "react-apexcharts";

const OPTIONS = {
    chart: {
        type: "radialBar"
    },
    colors: ["#0053F1"],
    plotOptions: {
        radialBar: {
            hollow: {
                size: "70%"
            }
        }
    },
    labels: ["Excellent"]
};

const SERIES = [58];

export const RadialBars = () => (
    <div className="chart">
        <ReactApexChart options={OPTIONS} series={SERIES} type="radialBar" />
    </div>
);
