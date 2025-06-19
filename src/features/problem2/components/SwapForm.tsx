import {
    Box,
    Button,
    MenuItem,
    TextField,
    Typography,
    CircularProgress,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import useTokenPrices from '../hooks/useTokenPrices';
import { useMemo, useState } from 'react';
import type {SwapFormValues} from "../misc/types.ts";

const SwapForm = () => {
    const { prices, loading } = useTokenPrices();
    const [message, setMessage] = useState<string>('');

    const { control, handleSubmit, watch } = useForm<SwapFormValues>({
        defaultValues: {
            fromAmount: 0,
            fromToken: '',
            toToken: '',
        },
    });

    const [toAmount, setToAmount] = useState<number>(0);

    const fromAmount = watch('fromAmount');
    const fromToken = watch('fromToken');
    const toToken = watch('toToken');

    const tokenOptions = useMemo(() => prices.map(p => p.currency), [prices]);

    const onCalculate = () => {
        const fromPrice = prices.find(p => p.currency === fromToken)?.price || 0;
        const toPrice = prices.find(p => p.currency === toToken)?.price || 0;
        if (fromPrice > 0 && toPrice > 0 && fromAmount > 0) {
            setToAmount((fromAmount * fromPrice) / toPrice);
            setMessage(`Swapped ${fromAmount} ${fromToken} → ${toToken}`);
        } else {
            setToAmount(0);
            setMessage('');
        }
    };

    const onSubmit = (data: SwapFormValues) => {
        setMessage('');
        onCalculate();
    };

    return (
        <Box>
            {loading ? (
                <CircularProgress />
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box display="flex" flexDirection="row" gap={2}>
                        <Controller
                            name="fromAmount"
                            control={control}
                            rules={{ required: true, min: 0.01 }}
                            render={({ field }) => (
                                <TextField label="Amount to send" type="number" {...field} fullWidth />
                            )}
                        />
                        <Controller
                            name="fromToken"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <TextField select label="From Token" {...field} fullWidth>
                                    {tokenOptions.map(token => (
                                        <MenuItem key={token} value={token}>
                                            {token}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )}
                        />
                        <Controller
                            name="toToken"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <TextField select label="To Token" {...field} fullWidth>
                                    {tokenOptions.map(token => (
                                        <MenuItem key={token} value={token}>
                                            {token}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )}
                        />
                        <TextField
                            label="Amount to receive"
                            value={toAmount.toFixed(6)}
                            disabled
                            fullWidth
                        />
                        <Button variant="contained" type="submit" sx={{ minWidth: 150 }}>
                            Confirm Swap
                        </Button>
                    </Box>
                    <Typography color="#7F1A17">{message}</Typography>
                </form>
            )}
        </Box>
    );
};

export default SwapForm;