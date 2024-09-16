"use client";
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';


export default function Chart({data}) {
    const [activeIndex, setActiveIndex] = useState(-1);
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nom" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="age" fill={activeIndex === 0 ? "gold" : "red"}
          onMouseEnter={() => setActiveIndex(1)}
          onMouseDown={() => setActiveIndex(-1)}
          activeBar={<Rectangle fill='blue' stroke='purple'/>}
          />
        </BarChart>
      </ResponsiveContainer>
      <p>zoely</p>
    );
  }
