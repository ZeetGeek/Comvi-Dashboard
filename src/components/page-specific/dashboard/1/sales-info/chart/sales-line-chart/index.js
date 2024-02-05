import {
     ResponsiveContainer,
     AreaChart,
     Area,
     XAxis,
     YAxis,
     CartesianGrid,
     Tooltip,
} from "recharts";

function SalesLineChart() {
     const data = [
          { name: "2017", uv: 4000, pv: 2400, amt: 2400 },
          { name: "2018", uv: 3000, pv: 1398, amt: 2210 },
          { name: "2019", uv: 2000, pv: 9800, amt: 2290 },
          { name: "2020", uv: 2780, pv: 3908, amt: 2000 },
          { name: "2021", uv: 1890, pv: 4800, amt: 2181 },
          { name: "2022", uv: 2390, pv: 3800, amt: 2500 },
          { name: "2023", uv: 3490, pv: 4300, amt: 2100 },
     ];

     const xAxisFormatter = (tickItem) => {
          return `${tickItem}`;
     };

     const yAxisFormatter = (tickItem) => {
          return `${tickItem}`;
     };

     return (
          <>
               <div style={{ width: "100%" }}>
                    <ResponsiveContainer width="100%" height={290}>
                         <AreaChart
                              width={500}
                              height={200}
                              data={data}
                              syncId="anyId"
                              margin={{
                                   top: 0,
                                   right: 0,
                                   left: -20,
                                   bottom: 0,
                              }}
                         >
                              <defs>
                                   <linearGradient
                                        id="colorUv"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                   >
                                        <stop
                                             offset="5%"
                                             stopColor="rgba(255, 133, 72, 0.37)"
                                        />
                                        <stop
                                             offset="95%"
                                             stopColor="rgba(255, 133, 72, 0.00)"
                                        />
                                   </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis
                                   dataKey="name"
                                   style={{ fontSize: "12px" }}
                              />
                              <YAxis style={{ fontSize: "12px" }} />
                              <Tooltip />
                              <Area
                                   type="monotone"
                                   dataKey="pv"
                                   strokeWidth={3}
                                   stroke="#FF8548"
                                   fill="url(#colorUv)"
                              />
                         </AreaChart>
                    </ResponsiveContainer>
               </div>
          </>
     );
}

export default SalesLineChart;
