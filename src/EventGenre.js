import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const EventGenre = ({ events }) => {

  const [data, setData] = useState([]);
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  // eslint-disable-next-line
  useEffect(() => { setData(() => getData()); }, [events]);

  function getData() {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) => summary.split(' ').includes(genre)).length
      // console.log('value', value)
        return { name: genre, value}
      });
    return data;
  }
  
return (
  <ResponsiveContainer height={400} >
    <PieChart height={400}>
      <Pie
        data={data}
        cx={'50%'}
        cy={'50%'}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label={({ name, percent, value }) => 
          value !== 0 ? `${name} ${(percent * 100).toFixed(0)}%` : null}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
  );
}
export default EventGenre;