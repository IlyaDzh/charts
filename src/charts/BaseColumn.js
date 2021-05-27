import React from "react";
import ReactApexChart from "react-apexcharts";

const OPTIONS = {
    chart: {
        type: "bar",
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded"
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
    },
    colors: ["#F88419", "#F5F5FC", "#0053F1"],
    xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
    },
    yaxis: {
        title: {
            text: "$ (thousands)"
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands";
            }
        }
    }
};

const SERIES = [
    {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },
    {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }
];

export const BaseColumn = () => (
    <div className="chart">
        <ReactApexChart options={OPTIONS} series={SERIES} type="bar" />
    </div>
);
