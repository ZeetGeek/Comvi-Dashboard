import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
     { name: "Group A", value: 400 },
     { name: "Group B", value: 300 },
     { name: "Group C", value: 300 },
     { name: "Group D", value: 200 },
     { name: "Group E", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#E2362F"];

const Example = () => {
     return (
          <PieChart width={294} height={294}>
               <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={145} 
                    innerRadius={100} 
                    fill="#8884d8"
                    dataKey="value"
               >
                    {data.map((entry, index) => (
                         <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                         />
                    ))}
               </Pie>
          </PieChart>
     );
};

export default Example;
