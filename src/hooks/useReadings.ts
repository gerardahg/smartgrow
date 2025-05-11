'use client';
import { useEffect, useState } from 'react';

import Reading from '@/lib/types/reading';

const useReadings = (reference: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [readings, setReadings] = useState<Reading[] | null>(null);

  useEffect(() => {
    const fetchReading = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/reading/${reference}`,
          { cache: 'no-store' }
        );
        if (!res.ok) {
          throw new Error(`unexpected error fetching readings: ${res.status}`);
        }

        const data: Reading[] = await res.json();
        console.log(data);
        setReadings(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('An unexpected error occured')
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchReading();
  }, [reference]);

  return { isLoading, error, readings };
};

export default useReadings;
