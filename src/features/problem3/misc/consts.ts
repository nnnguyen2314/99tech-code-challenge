import type {IssueTable} from "./types.ts";

export const issueTables: IssueTable[] = [
    {
        title: 'Logic / Computation Inefficiencies',
        subtitle: '💡 Issue',
        rows: [
            {
                type: 'error',
                issue: 'getPriority() recomputed multiple times',
                explanation:
                    "It's a pure function but used repeatedly inside `.filter()` and `.sort()` — inefficient, especially on large arrays.",
            },
            {
                type: 'error',
                issue: 'Logic in `.filter()` is confusing and possibly incorrect',
                explanation:
                    'Using undeclared `lhsPriority`, and confusing nested conditionals. May not return expected balances.',
            },
            {
                type: 'error',
                issue: '`formattedBalances` computed but never used',
                explanation:
                    'Wasted computation. Instead, `sortedBalances` is mapped again (instead of `formattedBalances`) in `rows`.',
            },
            {
                type: 'error',
                issue: '`key={index}` used in `.map()`',
                explanation:
                    'Bad practice in React – leads to unstable keys on re-render. Use a stable key like `currency`.',
            },
            {
                type: 'error',
                issue: 'Recalculating `usdValue` inline',
                explanation:
                    'Inline calculations inside render methods reduce readability and reusability.',
            },
        ],
    },
    {
        title: 'Structural',
        subtitle: '⚠️ Anti-pattern',
        rows: [
            {
                type: 'warning',
                issue: '`useMemo` on `.filter().sort()`',
                explanation:
                    'Memoization is good, but unnecessary here unless `balances` is large and changes frequently. Also, the logic is buggy.',
            },
            {
                type: 'warning',
                issue: 'Type misuse in `sortedBalances.map(...)`',
                explanation:
                    "The mapped result doesn't actually conform to `FormattedWalletBalance`, but the type is cast as such.",
            },
            {
                type: 'error',
                issue: 'Unused `formattedBalances`',
                explanation: "You create it but then don’t use it.",
            },
        ],
    },
];