import React from "react";
import ReactApexChart from "react-apexcharts";

import image from "../images/user.svg";

const OPTIONS = {
    chart: {
        type: "radialBar",
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: "16px",
                    color: undefined,
                    offsetY: 120
                },
                value: {
                    offsetY: 76,
                    fontSize: "22px",
                    color: undefined,
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            }
        }
    },
    colors: ["#0053F1"],
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        }
    },
    stroke: {
        dashArray: 4
    },
    labels: ["Almost There"]
};

const SERIES = [350];

export const RadialGauge = () => (
    <div className="chart">
        <ReactApexChart options={OPTIONS} series={SERIES} type="radialBar" />
    </div>
);
