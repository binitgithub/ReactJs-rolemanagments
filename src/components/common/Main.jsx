import React from 'react';
import PieChart from '../common/PieChart';
import IncomeVsExpensesChart from '../common/IncomeVsExpensesChart';

const Main = () => {
  return (
    <main className="p-6 bg-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Statistic Cards */}
            {[
              { title: 'Total Users', value: '1,234', subtitle: 'Updated just now', color: 'blue' },
              { title: 'Sales', value: '$12,345', subtitle: 'Last 24 hours', color: 'green' },
              { title: 'Performance', value: '87%', subtitle: 'Compared to last week', color: 'yellow' },
              { title: 'Notifications', value: '5', subtitle: 'Pending alerts', color: 'red' },
            ].map((card) => (
              <div key={card.title} className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-${card.color}-500`}>
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                <p className={`mt-2 text-3xl font-bold text-${card.color}-600`}>{card.value}</p>
                <p className="mt-2 text-sm text-gray-500">{card.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Additional Analytics Section */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              <ul className="mt-4 space-y-4">
                {[
                  { action: 'User logged in', time: '2 hours ago' },
                  { action: 'New sale', time: '5 hours ago' },
                  { action: 'System update', time: '1 day ago' },
                ].map((activity) => (
                  <li key={activity.action} className="flex items-center justify-between">
                    <span>{activity.action}</span>
                    <span className="text-gray-500">{activity.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">System Health</h3>
              <p className="mt-4 text-lg text-gray-600">All systems operational.</p>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Uptime: <span className="font-bold text-green-600">99.98%</span></p>
                <p className="text-sm text-gray-500">Response Time: <span className="font-bold text-blue-600">250ms</span></p>
              </div>
            </div>
          </div>
          
          {/*Data Analytics*/}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md"><IncomeVsExpensesChart/></div>
          <div className="bg-white p-6 rounded-lg shadow-md"><PieChart/></div>
          </div>
        </main>
  )
}

export default Main