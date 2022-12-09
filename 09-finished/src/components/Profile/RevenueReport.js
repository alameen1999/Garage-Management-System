
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
// import classes from './UserProfile.module.css';
import classes from './RevenueReport.module.css';

const RevenueReport = () => {
    const[revenueData,setRevenueData]=useState({})

    useEffect(()=>{
        const fetchMonthlySales = async () => {

            const response = await fetch(
              `http://127.0.0.1:8000/revenue/getrevenue/${sessionStorage.getItem('userID')}`
            );
            if (!response.ok) {
              throw new Error('Something went wrong!');
            }
            const responseData = await response.json();
           
            setRevenueData(responseData);
          };
          fetchMonthlySales().catch((error)=>{})
    },[])

    let labels=[]
    let values=[]
    for (var key in revenueData){
        labels.push(key);
        values.push(revenueData[key])
    }
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Sales amount",
                data:values,
                
                backgroundColor: "rgb(35, 89, 190)",
                
                
                
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





