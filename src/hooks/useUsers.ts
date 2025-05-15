import { useState } from 'react';
import { useSelector } from 'react-redux';
import { signIn } from 'next-auth/react';

import { z } from 'zod';

import { RootState } from '@/store/store';

const schema = z.object({ email: z.string().email() });

export default function useUsers() {
  const { email, password, name } = useSelector(
    (state: RootState) => state.credential
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const register = async () => {
    if (!email || !password || !name) {
      setError('Name, email or password missing');
      return;
    }

    const isEmail = schema.safeParse({ email });
    if (!isEmail.success) {
      setError('Invalid email format');
      return;
    }

    console.log('a');
    try {
      setLoading(true);
      const res = await fetch('api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to register user');
      }

      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/my-devices',
      });
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unexpected error');
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { error, register, loading };
}
