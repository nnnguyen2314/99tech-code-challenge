import type { NumSumCalcResultType } from '../misc/types.ts';
import {useState} from "react";

const useNumberSumCalculation = () => {
    const [results, setResults] = useState<NumSumCalcResultType[]>([]);

    // Sum by Math Formula
    const sum_to_n_a = (n: number) => {
        return (n * (n + 1)) / 2;
    };

    // Sum by Loop
    const sum_to_n_b = (n: number) => {
        let sum = 0;
        for (let i = 1; i <= n; i++) sum += i;
        return sum;
    };

    // Sum by ES6 reduce
    const sum_to_n_c = (n: number) => {
        return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, val) => acc + val, 0);
    }

    const executeCalculationWithTimeMeasure = (label: string, calculationFn: (n: number) => number, n: number): NumSumCalcResultType => {
        const start = performance.now();
        console.time(label);
        const result = calculationFn(n);
        console.timeEnd(label);
        const end = performance.now();
        return {
            calculationMethod: label,
            calculationResult: result,
            calculationTime: parseFloat((end - start).toFixed(10)),
            calculationFunc: calculationFn.toString(),
        };
    };

    const executeSumCalculation = (num: number) => {
        setResults([
            executeCalculationWithTimeMeasure('Use Math Formula', sum_to_n_a, num),
            executeCalculationWithTimeMeasure('Use Loop', sum_to_n_b, num),
            executeCalculationWithTimeMeasure('Use ES6 Reduce', sum_to_n_c, num),
        ]);
    };

    return { results, executeSumCalculation };
};

export default useNumberSumCalculation;