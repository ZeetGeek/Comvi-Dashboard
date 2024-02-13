"use client";

import { ResponsiveContainer, AreaChart, Area } from "recharts";

function DashboardInfoLineChart({ chart_data, type }) {
    const data = chart_data;

    const xAxisFormatter = (tickItem) => {
        return `${tickItem}`;
    };

    const yAxisFormatter = (tickItem) => {
        return `${tickItem}`;
    };

    return (
        <>
            <div className="w-full h-[80px]">
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}>
                        <defs>
                            {/* light gradient */}
                            <linearGradient id="lightGreenGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="rgba(21, 202, 184, 0.40)" />
                                <stop offset="95%" stopColor="rgba(21, 202, 184, 0.00)" />
                            </linearGradient>

                            {/* light red  */}
                            <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="rgba(226, 54, 47, 0.40)" />
                                <stop offset="100%" stopColor="rgba(226, 54, 47, 0.01)" />
                            </linearGradient>
                        </defs>
                        <Area
                            type="monotone"
                            dataKey="pv"
                            strokeWidth={3}
                            stroke={` ${type === "increment" ? "#15CAB8" : "#E2362F"} `}
                            fill={`url(${type === "increment" ? "#lightGreenGradient" : "#redGradient"})`}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default DashboardInfoLineChart;
