import React, { useEffect, useState } from 'react'

function Server_list() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function serverlist() {
            const res = await fetch("https://server-monitor-ve3i.onrender.com/servers")
            const data1 = await res.json()
            setData(data1)
        }
        serverlist()
    }, [])

    return (
        <div className="overflow-x-auto mt-8">
            <h1 className="text-2xl font-bold text-blue-800 mb-4 tracking-wide drop-shadow">
            Active Servers
        </h1>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
                <thead>
                    <tr className="bg-blue-200 text-blue-900">
                        <th className="px-4 py-2 font-semibold">Servers</th>
                        <th className="px-4 py-2 font-semibold">Ip Address</th>
                        <th className="px-4 py-2 font-semibold">Location</th>
                        <th className="px-4 py-2 font-semibold">Created</th>
                        <th className="px-4 py-2 font-semibold">Tag</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, idx) => (
                        <tr key={idx} className="hover:bg-blue-50 transition">
                            <td className="border px-4 py-2 text-blue-900 font-medium">{item["name_of_server"]}</td>
                            <td className="border px-4 py-2 text-gray-700">{item["ip_address"]}</td>
                            <td className="border px-4 py-2 text-green-800">{item["location"]}</td>
                            <td className="border px-4 py-2 text-purple-700">{item["created_at"]}</td>
                            <td className="border px-4 py-2 text-pink-700 font-semibold">{item["tag"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Server_list