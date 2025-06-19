import * as React from "react";
import type {SumCalculationFormProps, SumCalculationFormType} from "../misc/types.ts";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from "@mui/material";
import {FIELDS, schema} from "./SumCalculationForm.schema.tsx";


const SumCalculationForm: React.FC<SumCalculationFormProps> = ({ handleCalculation }) => {
    const {
        control,
        handleSubmit,
        register,
        formState: { errors, isValid, touchedFields, dirtyFields },
        reset,
    } = useForm<SumCalculationFormType>({
        mode: 'all',
        delayError: 700,
    });

    const onSumCalculation = (data: SumCalculationFormType) => {
        if (isValid && handleCalculation) {
            handleCalculation(data[FIELDS.NUM]);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSumCalculation)} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Controller
                name={FIELDS.NUM}
                control={control}
                rules={{
                    required: 'Value is required',
                    min: { value: 1, message: 'Value must be greater than 0' },
                }}
                render={({ field, fieldState  }) => (
                    <TextField
                        {...field}
                        type="number"
                        variant="outlined"
                        label="Enter a number to calculate"
                        size="small"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        onChange={(e) => {
                            const parsed = Number(e.target.value);
                            field.onChange(Number.isNaN(parsed) ? '' : parsed); // ✅ safely convert
                        }}
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                        sx={{ width: 400 }}
                    />
                )}
            />
            <Button type="submit" variant="contained" color="primary">
                Calculate
            </Button>
        </form>
    );
};

export default SumCalculationForm;