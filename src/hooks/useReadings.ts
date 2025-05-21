'use client';
import { useEffect, useState } from 'react';

import Reading from '@/lib/types/reading';

const useReadings = (reference: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [reading, setReading] = useState<Reading | null>(null);

  useEffect(() => {
    const fetchReading = async () => {
      try {
        const res = await fetch(`/api/reading/${reference}/latest`, {
          cache: 'no-store',
        });
        if (!res.ok) {
          throw new Error(`unexpected error fetching readings: ${res.status}`);
        }

        const data: Reading = await res.json();
        setReading(data);
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

  return { isLoading, error, reading };
};

export default useReadings;
