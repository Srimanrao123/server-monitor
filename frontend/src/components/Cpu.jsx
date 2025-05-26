import React, { useEffect, useState } from 'react'
import ReactSpeedometer from "react-d3-speedometer"

function Cpu() {
    const [cpu, Setcpu] = useState(0)
    useEffect(() => {
        async function fetchCpu() {
            const res = await fetch("https://server-monitor-ve3i.onrender.com/server/1/usage")
            const data = await res.json()
            const cpu_percent = data["cpu_usage_percent"]
            Setcpu(parseInt(cpu_percent))
        }
        fetchCpu()
    }, [])

    return (
        <div className="flex flex-col items-start">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
                <h1 className="text-2xl text-center font-bold text-blue-900 mb-4">CPU Daily Usage</h1>

                <ReactSpeedometer
                    maxValue={100}
                    value={cpu}
                    needleColor="red"
                    startColor="green"
                    segments={5}
                    endColor="blue"
                    height={200}
                />
                <h1 className="text-2xl font-semibold mt-6 text-blue-700">{cpu}%</h1>
                {cpu > 50
                    ? <p className="mt-2 px-4 py-2 bg-green-200 text-green-800 rounded-lg font-medium">CPU usage is good</p>
                    : <p className="mt-2 px-4 py-2 bg-red-200 text-red-800 rounded-lg font-medium">CPU usage is below average</p>
                }
            </div>
        </div>
    )
}

export default Cpu