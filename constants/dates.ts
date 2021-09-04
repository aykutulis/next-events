import moment from 'moment';

export const YEARS = [2021, 2022];
export const MONTHS = moment.months().map((m, i) => ({ value: i + 1, text: m }));
export const DEFAULT_YEAR = '2021';
export const DEFAULT_MONTH_VALUE = '1';
