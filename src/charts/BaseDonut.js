import React from "react";
import ReactApexChart from "react-apexcharts";

const OPTIONS = {
    chart: {
        type: "donut"
    },
    colors: ["#F88419", "#0053F1", "#f7a6a4", "#c4e26f"]
};

const SERIES = [44, 55, 41, 17];

export const BaseDonut = () => (
    <div className="chart">
        <ReactApexChart options={OPTIONS} series={SERIES} type="donut" />
    </div>
);
