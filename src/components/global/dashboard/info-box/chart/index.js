"use client";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

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
            <div className="w-[200px] h-[80px] -mr-[20px]">
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}>
                        <defs>
                            {/* light gradient */}
                            <linearGradient
                                id="lightGreenGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="rgba(21, 202, 184, 0.40)"
                                />
                                <stop
                                    offset="95%"
                                    stopColor="rgba(21, 202, 184, 0.01)"
                                />
                            </linearGradient>

                            {/* light red  */}
                            <linearGradient
                                id="redGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1">
                                <stop
                                    offset="0%"
                                    stopColor="rgba(226, 54, 47, 0.40)"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="rgba(226, 54, 47, 0.01)"
                                />
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
