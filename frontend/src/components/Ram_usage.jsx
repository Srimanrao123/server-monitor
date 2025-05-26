import React from 'react'
import { Line } from 'react-chartjs-2'
import { useState, useEffect } from 'react'
import 'chart.js/auto'

function Ram_usage() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://server-monitor-ve3i.onrender.com/ram_usage/1`)
      const json = await res.json()

      setData(json)
    }
    fetchData()
  }, [])


  const chartData = {
    labels: data.map(item => new Date(item[1]).toLocaleString()),
    datasets: [
      {
        label: 'RAM Usage (%)',
        data: data.map(item => item[0]),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }

  return (
    <div className="bg-white w-[50vw] rounded-xl p-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">RAM Usage Over Time</h2>
      <Line data={chartData} />
    </div>
  )
}

export default Ram_usage