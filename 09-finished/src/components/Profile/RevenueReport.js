
import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
// import classes from './UserProfile.module.css';
import classes from './RevenueReport.module.css';

const RevenueReport = () => {
    const labels = ["January", "February", "March", "April", "May", "June","july","August"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "My First dataset",
                
                backgroundColor: "rgb(35, 89, 190)",
                borderColor: "rgb(255, 99, 132)",
                data: [240, 101, 500, 2, 200, 30, 450,100,25],
            },
        ],
    };
    return (
        <div className={classes.profile}>
            <div className={classes.bar_chart}>
            <canvas id="chart"></canvas>
            <Bar data={data} />
            </div>
        </div>

    );
};

export default RevenueReport;





