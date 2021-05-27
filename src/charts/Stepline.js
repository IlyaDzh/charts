import React from "react";
import ReactApexChart from "react-apexcharts";

const OPTIONS = {
    chart: {
        type: "line",
        toolbar: {
            tools: {
                pan: false,
                download: false
            }
        }
    },
    stroke: {
        curve: "stepline"
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#0053F1"],
    title: {
        text: "Stepline Chart",
        align: "center",
        style: {
            fontSize: "16px",
            fontWeight: 600,
            color: "#131313"
        }
    },
    markers: {
        hover: {
            sizeOffset: 4
        }
    }
};

const SERIES = [
    {
        name: "name",
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
    }
];

export const Stepline = () => (
    <div className="chart">
        <ReactApexChart options={OPTIONS} series={SERIES} type="line" />
    </div>
);
