import * as yup from 'yup';

export enum FIELDS {
    NUM = 'num',
}

export const schema = yup.object({
    [FIELDS.NUM]: yup
        .number('Please enter a number')
        .required('Please enter a number')
        .min(1),
});
