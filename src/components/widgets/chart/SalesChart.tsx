import React, {useEffect, useState} from "react";
import ApexCharts from "apexcharts";
import {Stack} from "@mui/material";
import DropdownMenu from "./DropdownMenu";
import languages from "../../../redux/lang/languages";
import {useSelector} from "react-redux";
import {langSelector} from "../../../redux/lang/langSlice";

const SalesBarChart: React.FC = () => {
    const lang = useSelector(langSelector);
    const [chartType, setChartType] = useState<"bar" | "line">("line");
    const [timestamp, setTimestamp] = useState<"daily" | "weekly" | "monthly">(
        "daily"
    );
    const [value, setValue] = useState<"sold" | "profit">("profit");

    const [chartData, setChartData] = useState([
        {
            name: "Sales",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        }
    ]);

    const [chart, setChart] = useState<ApexCharts | null>(null);

    useEffect(() => {
        if (!chart) {
            const options = {
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

            const render = async () => await newChart.render();

            render()
                .then(() => console.log("Chart rendered successfully"));
        }
    }, [chart, chartType, chartData]);

    useEffect(() => {
        if (chart) {
            if (value === "sold") {
                const soldAmountData = [10, 41, 35, 51, 49, 62, 69, 91, 148];
                setChartData([{name: "Products sold", data: soldAmountData}]);
            } else {
                const salesData = [31, 55, 99, 17, 32, 42, 96, 69, 101];
                setChartData([{name: "Profit", data: salesData}]);
            }
            chart.updateOptions({
                chart: {
                    type: chartType,
                    height: 250,
                    width: 500,
                },
                series: chartData,
                xaxis: {
                    categories: languages.get(lang)!.widgets.chart.months,
                },
            }).then(() => console.log("Chart updated successfully"));
        }
    }, [value, timestamp, chartType, chart, chartData]);

    return (
        <div>
            <Stack
                spacing={14.5}
                direction={"row"}
            >
                <DropdownMenu
                    type={"type"}
                    options={languages.get(lang)!.widgets.chart.dropdowns.get("type")!}
                    parentDispatch={setChartType}
                />
                <DropdownMenu
                    type={"time"}
                    options={languages.get(lang)!.widgets.chart.dropdowns.get("time")!}
                    parentDispatch={setTimestamp}
                />
                <DropdownMenu
                    type={"values"}
                    options={languages.get(lang)!.widgets.chart.dropdowns.get("values")!}
                    parentDispatch={setValue}
                />
            </Stack>
            <div style={{height: "100px"}} id="chart"></div>
        </div>
    );
};
export default SalesBarChart;
