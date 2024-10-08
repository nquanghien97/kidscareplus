

import { vi } from 'date-fns/locale';

const days = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
const months = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
export const locale = {
  ...vi, // Extend the enUS locale to keep the required structure
  localize: {
    ...vi.localize,
    month: (n: number) => months[n],
    day: (n: number) => days[n],
  },
  formatLong: {
    ...vi.formatLong,
    date: () => 'dd/MM/yyyy',
  },
};
