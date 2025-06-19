export type NumSumCalcResultType = {
    calculationMethod: string;
    calculationTime: number;
    calculationResult: number;
    calculationFunc: string;
};

export type SumCalculationFormType = {
    num: number
};

export type SumCalculationFormProps = {
    handleCalculation: (value: number) => void;
};

export type SumCalculationBenchmarkProps = {
    benchmarkData: NumSumCalcResultType[];
};

export type PerformanceComparisonDataType = {
    method: string;
    timeComplexity: string;
    memoryUsage: string;
    speed: string;
    speedColor: 'success' | 'warning' | 'error';
    readability: string;
    readabilityColor: 'success' | 'warning' | 'error';
    suitability: string;
    pros: string;
};