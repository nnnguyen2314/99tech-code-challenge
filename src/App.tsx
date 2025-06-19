import './App.css'
import SumCalculation from "./features/problem1/containers/SumCalculation.tsx";
import {Box, Container, Stack, Typography} from "@mui/material";
import type {TabItem} from "./core/components/customTabs/CustomTabs.tsx";
import CustomTabs from "./core/components/customTabs/CustomTabs.tsx";
import SwapContainer from "./features/problem2/containers/SwapContainer.tsx";
import MessyReactCodeRefactorDisplay from "./features/problem3/components/MessyReactCodeRefactorDisplay.tsx";

function App() {
    const tabs: TabItem[] = [
        {
            label: 'Problem 1',
            component: <SumCalculation />,
            active: true,
        },
        {
            label: 'Problem 2',
            component: <SwapContainer />,
            active: true,
        },
        {
            label: 'Problem 3',
            component: <MessyReactCodeRefactorDisplay />,
            active: true,
        }
    ];
    return (
        <Stack direction="column" gap={2}>
            <Box>
              <Typography variant="h4" className="font-extrabold" sx={{ marginBottom: '10px' }}>Welcome to the Coding Challenge</Typography>
            </Box>
            <CustomTabs
                defaultIndex={0}
                tabs={tabs}
            />
        </Stack>
    )
}

export default App
