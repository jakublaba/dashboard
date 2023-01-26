import React, {useEffect, useState} from "react";
import ApexCharts from "apexcharts";

const SalesBarChart: React.FC = () => {
    const [chartType, setChartType] = useState<"bar" | "line">("line");
    const [timestamp, setTimestamp] = useState<"daily" | "weekly" | "monthly">(
        "daily"
    );
    const [value, setValue] = useState<"sales" | "products">("sales");

    const [chartData, setChartData] = useState([
        {
            name: "Sales",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
    ]);

    const [chart, setChart] = useState<ApexCharts | null>(null);

    useEffect(() => {
        if (!chart) {
            const options = {
                /* ApexCharts options */
                chart: {
                    type: chartType,
                    height: 250,
                    width: 500,
                },
                series: chartData,
                xaxis: {
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                    ],
                },
            };
            const newChart = new ApexCharts(
                document.querySelector("#chart"),
                options
            );
            setChart(newChart);
            newChart.render();
        }
    }, []);

    useEffect(() => {
        if (chart) {
            if (value === "products") {
                // Fetch products sold data from API or any other source
                const productsData = [10, 41, 35, 51, 49, 62, 69, 91, 148];
                setChartData([{name: "Products Sold", data: productsData}]);
            } else if (value === "sales") {
                // Fetch sales data from API or any other source
                const salesData = [10, 41, 35, 51, 49, 62, 69, 91, 148];
                setChartData([{name: "Sales", data: salesData}]);
            }
            chart.updateOptions({
                chart: {
                    type: chartType,
                    height: 250,
                    width: 500,
                },
                series: chartData,
                xaxis: {
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                    ],
                },
            });
        }
    }, [value, timestamp, chartType]);

    return (
        <div>
            <div>
                <label>Chart Type:</label>
                <select
                    onChange={(e) => setChartType(e.target.value as "bar" | "line")}
                >
                    <option value="bar">Bar</option>
                    <option value="line">Line</option>
                </select>
            </div>
            <div>
                <label>Timestamp:</label>
                <select
                    onChange={(e) =>
                        setTimestamp(e.target.value as "daily" | "weekly" | "monthly")
                    }
                >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>
            <div>
                <label>Value:</label>
                <select
                    onChange={(e) => setValue(e.target.value as "sales" | "products")}
                >
                    <option value="sales">Sales</option>
                    <option value="products">Products Sold</option>
                </select>
            </div>
            <div style={{height: "100px"}} id="chart"></div>
        </div>
    );
};
export default SalesBarChart;
