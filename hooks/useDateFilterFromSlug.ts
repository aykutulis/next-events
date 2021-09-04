import { useMemo } from 'react';

import { MONTHS, YEARS } from '../constants';

interface DateFilter {
  yearFilter?: number;
  monthFilter?: number;
}

export const useDateFilterFromSlug = (slug: string | string[] | undefined): DateFilter => {
  const dateFilter = useMemo<DateFilter>(() => {
    if (!slug || !Array.isArray(slug) || !YEARS.includes(+slug[0]) || !MONTHS.some((m) => m.value === +slug[1])) {
      return {
        yearFilter: undefined,
        monthFilter: undefined,
      };
    }

    return {
      yearFilter: parseInt(slug[0]),
      monthFilter: parseInt(slug[1]),
    };
  }, [slug]);

  return dateFilter;
};
