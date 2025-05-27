import { useState } from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';

export const useCreateDevice = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { name, reference } = useSelector((state: RootState) => state.device);

  const create = async () => {
    try {
      setIsLoading(true);
      if (!name || !reference) {
        throw new Error('A name and reference is required');
      }

      const res = await fetch('/api/devices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          reference: reference,
        }),
      });

      if (!res.ok) {
        throw new Error(`Failed to create devices: ${res.status}`);
      }

      setError(null);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('An unknown error occurred')
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, create };
};
