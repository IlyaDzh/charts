import React from "react";
import ReactApexChart from "react-apexcharts";

const OPTIONS = {
    chart: {
        height: 350,
        type: "area",
        toolbar: {
            tools: {
                pan: false,
                download: false
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: "smooth"
    },
    colors: ["#F88419", "#0053F1"],
    xaxis: {
        type: "datetime",
        categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z"
        ]
    },
    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm"
        }
    }
};

const SERIES = [
    {
        name: "Product A",
        data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
        name: "Product B",
        data: [11, 32, 45, 32, 34, 52, 41]
    }
];

export const BaseArea = () => (
    <div className="chart">
        <ReactApexChart options={OPTIONS} series={SERIES} type="area" />
    </div>
);
