import {Box, Container, Stack, Typography} from '@mui/material';
import SwapForm from '../components/SwapForm';
import {StyledProblemContainer} from "../../../core/components/ProblemContainers.styles.tsx";
import * as React from "react";

const SwapContainer = () => {
    return (
        <StyledProblemContainer className="problem-container">
            <Stack direction="column" gap={2}>
                <Box className="problem-content">
                    <Box className="problem-content-title">
                        <Typography variant="h6">Problem 2: Fancy Form</Typography>
                    </Box>
                </Box>
                <Box className="problem-content-description">
                    <Typography variant="body1" className="font-bold">
                        Users can:
                    </Typography>
                    <Typography variant="body1">
                        1. Select tokens to send and receive
                        <br />
                        2. Enter amount to send, and auto-calculate amount to receive (based on live exchange rates)
                        <br />
                        3. See token icons and names
                        <br />
                        4. Validate form before confirming
                    </Typography>
                </Box>
                <Box className="problem-content-description">
                    <SwapForm />
                </Box>
            </Stack>
        </StyledProblemContainer>

    )
};

export default SwapContainer;