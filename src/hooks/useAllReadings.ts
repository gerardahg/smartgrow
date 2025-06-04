'use client';
import { useEffect, useState } from 'react';

import { DailyAverage } from '@/lib/types/reading';

const useAllReadings = (reference: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [reading, setReading] = useState<DailyAverage[] | null>(null);

  useEffect(() => {
    const fetchReadings = async () => {
      try {
        const res = await fetch(`/api/reading/${reference}/avg`, {
          cache: 'no-store',
        });
        if (!res.ok) {
          throw new Error(`unexpected error fetching readings: ${res.status}`);
        }

        const data: DailyAverage[] = await res.json();
        setReading(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('An unexpected error occured')
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchReadings();
  }, [reference]);

  return { isLoading, error, reading };
};

export default useAllReadings;
