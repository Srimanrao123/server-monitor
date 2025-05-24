import React from 'react'
import Cpu  from './Cpu'
import Ram_usage from './Ram_usage'
import SeverityDonutChart from './Severity'
import Server_list from './Server_list'

function Dashboard() {
  return (
    <div className='bg-blue-100 h-screen p-0 m-0'>
      <h1 className='text-4xl font-bold text-blue-800 mb-8 mt-4 ml-4 tracking-wide drop-shadow-lg'>Dashboard</h1>
            <div className="flex flex-col gap-8 px-4 md:flex-row md:justify-center md:items-start">

      <Cpu/>
       <SeverityDonutChart />
       
      <Ram_usage/>
      </div>
     
      <Server_list/>

    </div>
    
  )
}

export default Dashboard