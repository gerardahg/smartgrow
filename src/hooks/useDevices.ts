'use client';

import { useState, useEffect } from 'react';

import { Device } from '@/lib/types/device';

export function useDevices() {
  const [devices, setDevices] = useState<Device[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('smartgrow.vercel.app/api/devices');

        if (!res.ok) {
          throw new Error(`Failed to fetch devices: ${res.status}`);
        }

        const data: Device[] = await res.json();
        setDevices(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('An unknown error occurred')
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchDevices();
  }, []);

  const refetch = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('smartgrow.vercel.app/api/devices', {
        cache: 'no-store',
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch devices: ${res.status}`);
      }

      const data: Device[] = await res.json();
      setDevices(data);
      setError(null);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('An unknown error occurred')
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { devices, isLoading, error, refetch };
}
