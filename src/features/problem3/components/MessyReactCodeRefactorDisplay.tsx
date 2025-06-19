import {StyledProblemContainer} from "../../../core/components/ProblemContainers.styles.tsx";
import {Box, Grid, Stack, Typography} from "@mui/material";
import * as React from "react";
import CodeIssueAnalyzing from "./CodeIssueAnalyzing.tsx";
import { issueTables } from '../misc/consts';
const MessyReactCodeRefactorDisplay = () => {

    return (
        <StyledProblemContainer>
            <Stack direction="column" gap={2}>
                <Box className="problem-content">
                    <Box className="problem-content-title">
                        <Typography variant="h6">Problem 3: Messy React</Typography>
                    </Box>
                    <Box className="problem-content-description">
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography className="font-bold" color="#204886">
                                    Messy Code
                                </Typography>
                                <Box
                                    component="pre"
                                    sx={{
                                        backgroundColor: '#D4E1FB',
                                        padding: 2,
                                        borderRadius: 1,
                                        overflowX: 'auto',
                                        whiteSpace: 'pre-wrap',
                                        fontFamily: 'monospace',
                                        fontSize: '0.875rem',
                                    }}
                                >
                                    <code>
                                        {
                                            'interface WalletBalance {\n' +
                                            '  currency: string;\n' +
                                            '  amount: number;\n' +
                                            '}\n' +
                                            'interface FormattedWalletBalance {\n' +
                                            '  currency: string;\n' +
                                            '  amount: number;\n' +
                                            '  formatted: string;\n' +
                                            '}\n' +
                                            '\n' +
                                            'interface Props extends BoxProps {\n' +
                                            '\n' +
                                            '}\n' +
                                            'const WalletPage: React.FC<Props> = (props: Props) => {\n' +
                                            '  const { children, ...rest } = props;\n' +
                                            '  const balances = useWalletBalances();\n' +
                                            '  const prices = usePrices();\n' +
                                            '\n' +
                                            '\tconst getPriority = (blockchain: any): number => {\n' +
                                            '\t  switch (blockchain) {\n' +
                                            '\t    case \'Osmosis\':\n' +
                                            '\t      return 100\n' +
                                            '\t    case \'Ethereum\':\n' +
                                            '\t      return 50\n' +
                                            '\t    case \'Arbitrum\':\n' +
                                            '\t      return 30\n' +
                                            '\t    case \'Zilliqa\':\n' +
                                            '\t      return 20\n' +
                                            '\t    case \'Neo\':\n' +
                                            '\t      return 20\n' +
                                            '\t    default:\n' +
                                            '\t      return -99\n' +
                                            '\t  }\n' +
                                            '\t}\n' +
                                            '\n' +
                                            '  const sortedBalances = useMemo(() => {\n' +
                                            '    return balances.filter((balance: WalletBalance) => {\n' +
                                            '\t\t  const balancePriority = getPriority(balance.blockchain);\n' +
                                            '\t\t  if (lhsPriority > -99) {\n' +
                                            '\t\t     if (balance.amount <= 0) {\n' +
                                            '\t\t       return true;\n' +
                                            '\t\t     }\n' +
                                            '\t\t  }\n' +
                                            '\t\t  return false\n' +
                                            '\t\t}).sort((lhs: WalletBalance, rhs: WalletBalance) => {\n' +
                                            '\t\t\tconst leftPriority = getPriority(lhs.blockchain);\n' +
                                            '\t\t  const rightPriority = getPriority(rhs.blockchain);\n' +
                                            '\t\t  if (leftPriority > rightPriority) {\n' +
                                            '\t\t    return -1;\n' +
                                            '\t\t  } else if (rightPriority > leftPriority) {\n' +
                                            '\t\t    return 1;\n' +
                                            '\t\t  }\n' +
                                            '    });\n' +
                                            '  }, [balances, prices]);\n' +
                                            '\n' +
                                            '  const formattedBalances = sortedBalances.map((balance: WalletBalance) => {\n' +
                                            '    return {\n' +
                                            '      ...balance,\n' +
                                            '      formatted: balance.amount.toFixed()\n' +
                                            '    }\n' +
                                            '  })\n' +
                                            '\n' +
                                            '  const rows = sortedBalances.map((balance: FormattedWalletBalance, index: number) => {\n' +
                                            '    const usdValue = prices[balance.currency] * balance.amount;\n' +
                                            '    return (\n' +
                                            '      <WalletRow \n' +
                                            '        className={classes.row}\n' +
                                            '        key={index}\n' +
                                            '        amount={balance.amount}\n' +
                                            '        usdValue={usdValue}\n' +
                                            '        formattedAmount={balance.formatted}\n' +
                                            '      />\n' +
                                            '    )\n' +
                                            '  })\n' +
                                            '\n' +
                                            '  return (\n' +
                                            '    <div {...rest}>\n' +
                                            '      {rows}\n' +
                                            '    </div>\n' +
                                            '  )\n' +
                                            '}'
                                        }
                                    </code>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography className="font-bold" color="#204886">
                                    Optimized Code
                                </Typography>
                                <Box
                                    component="pre"
                                    sx={{
                                        backgroundColor: '#C3E7CD',
                                        padding: 2,
                                        borderRadius: 1,
                                        overflowX: 'auto',
                                        whiteSpace: 'pre-wrap',
                                        fontFamily: 'monospace',
                                        fontSize: '0.875rem',
                                    }}
                                >
                                    <code>
                                        {'import { Box, BoxProps } from \'@mui/material\';\n' +
                                            'import React, { useMemo } from \'react\';\n' +
                                            'import { useWalletBalances, usePrices } from \'./hooks\';\n' +
                                            'import WalletRow from \'./WalletRow\';\n' +
                                            '\n' +
                                            'interface WalletBalance {\n' +
                                            '  currency: string;\n' +
                                            '  amount: number;\n' +
                                            '  blockchain: string;\n' +
                                            '}\n' +
                                            'interface Props extends BoxProps {}\n' +
                                            '\n' +
                                            'const BLOCKCHAIN_PRIORITY: Record<string, number> = {\n' +
                                            '  Osmosis: 100,\n' +
                                            '  Ethereum: 50,\n' +
                                            '  Arbitrum: 30,\n' +
                                            '  Zilliqa: 20,\n' +
                                            '  Neo: 20,\n' +
                                            '};\n' +
                                            '\n' +
                                            'const getPriority = (blockchain: string): number => {\n' +
                                            '  return BLOCKCHAIN_PRIORITY[blockchain] ?? -99;\n' +
                                            '};\n' +
                                            '\n' +
                                            'export const WalletPage: React.FC<Props> = ({ ...rest }) => {\n' +
                                            '  const balances = useWalletBalances();\n' +
                                            '  const prices = usePrices();\n' +
                                            '\n' +
                                            '  const displayedBalances = useMemo(() => {\n' +
                                            '    return balances\n' +
                                            '      .filter(balance => getPriority(balance.blockchain) > -99 && balance.amount > 0)\n' +
                                            '      .sort((a, b) => getPriority(b.blockchain) - getPriority(a.blockchain));\n' +
                                            '  }, [balances]);\n' +
                                            '\n' +
                                            '  return (\n' +
                                            '    <Box {...rest}>\n' +
                                            '      {displayedBalances.map(balance => {\n' +
                                            '        const usdValue = prices[balance.currency] * balance.amount;\n' +
                                            '        const formatted = balance.amount.toFixed(4); // e.g., 4 decimal places\n' +
                                            '\n' +
                                            '        return (\n' +
                                            '          <WalletRow\n' +
                                            '            key={balance.currency} // use stable key\n' +
                                            '            amount={balance.amount}\n' +
                                            '            usdValue={usdValue}\n' +
                                            '            formattedAmount={formatted}\n' +
                                            '          />\n' +
                                            '        );\n' +
                                            '      })}\n' +
                                            '    </Box>\n' +
                                            '  );\n' +
                                            '};'}
                                    </code>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box className="problem-content">
                    <Box className="problem-content-title">
                        <Typography variant="h6">Solution Explanation</Typography>
                    </Box>
                    <Box className="problem-content-description">
                        {issueTables.map((table, index) => (
                            <CodeIssueAnalyzing key={index} {...table} />
                        ))}
                    </Box>
                </Box>
            </Stack>
        </StyledProblemContainer>
    )
};

export default MessyReactCodeRefactorDisplay;