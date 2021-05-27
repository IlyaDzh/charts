import React from "react";
import ReactApexChart from "react-apexcharts";

const OPTIONS = {
    chart: {
        type: "area",
        zoom: false,
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: "straight",
        width: 3
    },
    colors: ["#0053F1"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
        }
    },
    title: {
        text: "Used storage (last 90 days)",
        align: "center",
        style: {
            fontSize: "16px",
            fontWeight: 600,
            color: "#131313"
        }
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    },
    yaxis: {
        title: {
            text: "TeraBytes",
            style: {
                fontSize: "14px",
                fontWeight: 600,
                color: "#131313"
            }
        }
    }
};

const SERIES = [
    {
        name: "TB",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
];

export const BaseLine = () => (
    <div className="chart">
        <ReactApexChart options={OPTIONS} series={SERIES} type="area" />
    </div>
);
