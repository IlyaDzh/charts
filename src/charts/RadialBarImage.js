import React from "react";
import ReactApexChart from "react-apexcharts";

import image from "../images/user.svg";

const OPTIONS = {
    chart: {
        type: "radialBar"
    },
    colors: ["#0053F1"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 15,
                size: "70%",
                image: image,
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false
            },
            dataLabels: {
                name: {
                    show: false,
                    color: "#fff"
                },
                value: {
                    show: true,
                    color: "#333",
                    offsetY: 70,
                    fontSize: "22px"
                }
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Volatility"]
};

const SERIES = [58];

export const RadialBarImage = () => (
    <div className="chart">
        <ReactApexChart options={OPTIONS} series={SERIES} type="radialBar" />
    </div>
);
