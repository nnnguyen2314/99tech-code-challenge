import * as React from "react";
import ReactECharts from 'echarts-for-react';
import type {PerformanceComparisonDataType, SumCalculationBenchmarkProps} from "../misc/types.ts";
import {
    Stack,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
} from '@mui/material';
import {statusColor} from "../misc/consts.ts";

const SumCalculationBenchmark: React.FC<SumCalculationBenchmarkProps> = ({ benchmarkData }) => {
    const benchmarkChartOption = {
        title: {
            text: 'Benchmark (ms)',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            formatter: (params: any) =>
                `${params[0].name}: ${params[0].value.toFixed(6)} ms`,
        },
        xAxis: {
            type: 'category',
            data: benchmarkData.map((d) => d.calculationMethod),
            axisLabel: {
                align: 'center',
                rich: {
                    bold: {
                        fontWeight: 'bold',
                    },
                    normal: {
                        fontWeight: 'normal',
                    },
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#b1b1b1',
                    width: 1,
                },
            },
        },
        yAxis: {
            type: 'value',
            name: 'Time (ms)',
            min: 0,
        },
        series: [
            {
                name: 'Time',
                type: 'bar',
                data: benchmarkData.map((d) => d.calculationTime),
                itemStyle: {
                    color: '#2C66BC',
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: ({ value }: any) => `${value.toFixed(10)} ms`,
                },
                barWidth: '30%',
                barGap: '10%',
                emphasis: {
                    disabled: true,
                },
            },
        ],
    };

    const performanceComparison: PerformanceComparisonDataType[] = [
        {
            method: 'A – Math Formula',
            timeComplexity: 'O(1)',
            memoryUsage: 'None',
            speed: 'Fastest',
            speedColor: 'success',
            readability: 'Clear',
            readabilityColor: 'success',
            suitability: 'Best for all use cases',
            pros: '- Uses the well-known arithmetic series formula.\n- Fastest possible method: constant time O(1) regardless of input size.\n- No loops or recursion.'
        },
        {
            method: 'B – Loop',
            timeComplexity: 'O(n)',
            memoryUsage: 'Constant',
            speed: 'Very good',
            speedColor: 'success',
            readability: 'Clear',
            readabilityColor: 'success',
            suitability: 'Reliable in any context',
            pros: '- Clear and readable.\n- Slightly slower than O(1) due to iteration, but still performs very well for typical frontend use cases.'
        },
        {
            method: 'ES6 – Array.reduce',
            timeComplexity: 'O(n)',
            memoryUsage: 'Array of size n',
            speed: 'Slower',
            speedColor: 'warning',
            readability: 'Clean',
            readabilityColor: 'success',
            suitability: 'Avoid for large n (>10⁵)',
            pros: '- Modern, clean syntax.\n- Very readable for developers familiar with functional JS.'
        },
    ]

    return (
        <Stack direction="column" gap={2}>
            <ReactECharts option={benchmarkChartOption} style={{ height: 300 }} />
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Method</strong></TableCell>
                            <TableCell><strong>Time Complexity</strong></TableCell>
                            <TableCell><strong>Memory Usage</strong></TableCell>
                            <TableCell><strong>Speed</strong></TableCell>
                            <TableCell><strong>Readability</strong></TableCell>
                            <TableCell><strong>Suitability</strong></TableCell>
                            <TableCell><strong>Pros</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {performanceComparison.map((row) => (
                            <TableRow key={row.method}>
                                <TableCell>{row.method}</TableCell>
                                <TableCell>{row.timeComplexity}</TableCell>
                                <TableCell>{row.memoryUsage}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={row.speed}
                                        color={statusColor[row.speedColor]}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        label={row.readability}
                                        color={statusColor[row.readabilityColor]}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <span>{row.suitability}</span>
                                </TableCell>
                                <TableCell>
                                    <pre>{row.pros}</pre>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
};

export default SumCalculationBenchmark;