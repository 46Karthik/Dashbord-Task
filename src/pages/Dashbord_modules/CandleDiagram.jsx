import React from 'react';
import Chart from 'react-apexcharts';

const ApplicationsInfoChart = () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const data = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000];
  const shuffledData = shuffleArray([...data]);

  const chartOptions = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#247bcb'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    fill: {
      opacity: 1,
    },
  };

  const chartSeries = [
    {
      name: 'Received Applications',
      data: shuffledData,
    },
  ];

  return (
    <>
    <div class='flex h-16'>
<h3 class='text-xl  text-left text-black  font-bold'>Application's Info</h3>
<div class='flex ml-9' >
<div class="box  bg-[#277acc] mt-1 p-1 h-3 mr-2"></div>
<div class="">Received</div>
<div class="box ml-3 bg-[#426281]  mt-1 p-1 h-3 mr-2"></div>
<div class="">Processed</div>
</div>
<div class="relative inline-block text-left">
  <div className='ml-12'>
    <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Month
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  </div>
    </div>
<div>

  
</div>
     <Chart
      options={chartOptions}
      series={chartSeries}
      type="bar"
      // height={200}
      height={200}
      // width={650}
      // width={540}
      width={"100%"}
    />
    
    </>
   
  );
};

export default ApplicationsInfoChart;
