import useNumberSumCalculation from '../hooks/useNumberSumCalculation.ts';
import SumCalculationForm from '../components/SumCalculationForm.tsx';
import SumCalculationBenchmark from '../components/SumCalculationBenchmark.tsx';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import TerminalIcon from '@mui/icons-material/Terminal';

import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    List,
    ListItem, ListItemIcon, ListItemText,
    ListSubheader,
    Stack,
    Typography
} from "@mui/material";
import * as React from "react";
import {StyledProblemContainer} from "../../../core/components/ProblemContainers.styles.tsx";

const SumCalculation = () => {
    const { results, executeSumCalculation } = useNumberSumCalculation();

    return (
        <StyledProblemContainer className="problem-container">
            <Stack direction="column" gap={2}>
                <Box className="problem-content">
                    <Box className="problem-content-title">
                        <Typography variant="h6">Problem 1: Three ways to sum to n</Typography>
                    </Box>
                    <Box className="problem-content-description">
                        <Stack direction="column" gap={1}>
                            <Box sx={{ padding: '15px 0' }}>
                                <SumCalculationForm handleCalculation={executeSumCalculation} />
                            </Box>
                            {results.length > 0 && (
                                <Card>
                                    <CardHeader title="Results" className="font-bold" />
                                    <Divider />
                                    <CardContent>
                                        <List>
                                            {results.map((res, index) => {
                                                return (
                                                    <>
                                                        {index > 0 && <Divider />}
                                                        <ListSubheader key={index} sx={{ padding: '10px 0' }}>
                                                            <Typography className="font-bold" color="#204886">
                                                                {`${index + 1}. Solution ${index + 1}: ${res.calculationMethod}:`}
                                                            </Typography>
                                                        </ListSubheader>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutlineIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary={`Sum: ${res.calculationResult}`} />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <AlarmOnIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary={`Time: ${res.calculationTime} ms`} />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <TerminalIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary={(
                                                                <Box
                                                                    component="pre"
                                                                    sx={{
                                                                        backgroundColor: '#f5f5f5',
                                                                        padding: 2,
                                                                        borderRadius: 1,
                                                                        overflowX: 'auto',
                                                                        whiteSpace: 'pre-wrap',
                                                                        fontFamily: 'monospace',
                                                                        fontSize: '0.875rem',
                                                                    }}
                                                                >
                                                                    <code>{res.calculationFunc}</code>
                                                                </Box>
                                                            )}/>
                                                        </ListItem>
                                                    </>
                                                )
                                            })}
                                        </List>
                                    </CardContent>
                                    <Divider />
                                    <CardContent>
                                        <SumCalculationBenchmark benchmarkData={results}/>
                                    </CardContent>
                                    <Divider />
                                    <CardContent>
                                        <Typography variant="h6" className="font-extrabold">Code location:</Typography>
                                        <Box
                                            component="pre"
                                            sx={{
                                                backgroundColor: '#f5f5f5',
                                                padding: 2,
                                                borderRadius: 1,
                                                overflowX: 'auto',
                                                whiteSpace: 'pre-wrap',
                                                fontFamily: 'monospace',
                                                fontSize: '0.875rem',
                                            }}
                                        >
                                            <code>/src/features/problem1/hooks/useNumberSumCalculation.ts</code>
                                        </Box>
                                    </CardContent>
                                </Card>
                            )}
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </StyledProblemContainer>
    );
};

export default SumCalculation;