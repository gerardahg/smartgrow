'use client';

import { useState, useEffect } from 'react';
import { Device } from '@/types/device';

/**
 * Custom hook to fetch devices data
 * @returns {Object} The devices data and loading state
 */
export function useDevices() {
  const [devices, setDevices] = useState<Device[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('http://localhost:3000/api/devices');

        if (!res.ok) {
          throw new Error(`Failed to fetch devices: ${res.status}`);
        }

        const data: Device[] = await res.json();
        setDevices(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('An unknown error occurred')
        );
        console.error('Error fetching devices:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDevices();
  }, []);

  // Function to manually refetch the devices
  const refetch = async () => {
    try {
      // Don't set loading state for refetches to avoid UI flicker
      const res = await fetch('http://localhost:3000/api/devices', {
        // Add cache: 'no-store' to ensure fresh data
        cache: 'no-store',
        // Add a timestamp to bust cache
        headers: {
          pragma: 'no-cache',
          'cache-control': 'no-cache',
          'x-timestamp': Date.now().toString(),
        },
      });
      console.log(await res.json());

      if (!res.ok) {
        throw new Error(`Failed to fetch devices: ${res.status}`);
      }

      const data: Device[] = await res.json();
      setDevices(data);
      setError(null); // Clear any previous errors on successful refetch
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('An unknown error occurred')
      );
      console.error('Error refetching devices:', err);
    }
  };

  return { devices, isLoading, error, refetch };
}
