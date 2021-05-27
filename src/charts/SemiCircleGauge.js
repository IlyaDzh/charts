import React from "react";
import ReactApexChart from "react-apexcharts";

import image from "../images/user.svg";

const OPTIONS = {
    chart: {
        type: "radialBar",
        offsetY: -20,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#e7e7e7",
                strokeWidth: "97%",
                margin: 5
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    offsetY: -2,
                    fontSize: "22px"
                }
            }
        }
    },
    colors: ["#0053F1"],
    grid: {
        padding: {
            top: -10
        }
    },
    labels: ["Average Results"]
};

const SERIES = [76];

export const SemiCircleGauge = () => (
    <div className="chart">
        <ReactApexChart options={OPTIONS} series={SERIES} type="radialBar" />
    </div>
);
