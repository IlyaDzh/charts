import React from "react";
import ReactApexChart from "react-apexcharts";

const OPTIONS = {
    chart: {
        type: "area",
        stacked: true,
        events: {
            selection: function (chart, e) {
                console.log(new Date(e.xaxis.min));
            }
        },
        toolbar: {
            tools: {
                pan: false,
                download: false
            }
        }
    },
    colors: ["#F88419", "#F5F5FC", "#0053F1"],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: "smooth"
    },
    fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8
        }
    },
    legend: {
        position: "top",
        horizontalAlign: "left"
    },
    xaxis: {
        type: "datetime"
    }
};

const SERIES = [
    {
        name: "South",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: "North",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 20
        })
    },
    {
        name: "Central",
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 15
        })
    }
];

function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([baseval, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}

export const AreaStacked = () => (
    <div className="chart">
        <ReactApexChart options={OPTIONS} series={SERIES} type="area" />
    </div>
);
