import { useState,useEffect } from "react";
import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const SeverityDonutChart = () => {
        const[low,setlow]=useState(0)
        const[medium,setmedium]=useState(0)
        const[critical,setcritical]=useState(0)


    useEffect(() => {
            async function fetchCpu() {
                const res = await fetch("http://127.0.0.1:8000/server/1")
                const data = await res.json()
                setlow(parseInt(data["low"]))
                setmedium(parseInt(data["medium"]))
                setcritical(parseInt(data["critical"]))

                
            }
            fetchCpu()
        }, [])



  const chartData = [
    { name: "Critical", value: critical, color: "#5A01A7" },
    { name: "Low", value: low, color: "green" },
    { name: "Medium", value: medium, color: "#26C6DA" }
  ];

  return (
    <div className="bg-white rounded-xl" style={{ width: 300, height: 250 }}>
      <h2 className="text-2xl text-center font-bold text-blue-900 mb-4">Severity</h2>
      <PieChart width={300} height={200}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend
          verticalAlign="middle"
          layout="vertical"
          align="right"
          iconType="circle"
        />
      </PieChart>
    </div>
  );
};

export default SeverityDonutChart;
