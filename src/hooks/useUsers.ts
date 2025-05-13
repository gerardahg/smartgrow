import { useState } from 'react';
import { useSelector } from 'react-redux';

import bcrypt from 'bcrypt';

import { RootState } from '@/store/store';

export function useUsers() {
  const { email, password, name } = useSelector(
    (state: RootState) => state.credential
  );
  const [error, setError] = useState<String | null>(null);
  const [response, setResponse] = useState(false);

  const login = async () => {
    try {
      const data = await fetch(`/api/users/${email}`);
      const user = await data.json();
      const passwordVerified = await bcrypt.compare(password, user.password);

      if (passwordVerified) setResponse(true);
      else setError('Invalid credentials');
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unexpected error');
      setError(error.message);
    }
  };

  const register = async () => {
    try {
      const data = await fetch('api/users', {
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

      if (!data.ok) {
        throw new Error('Failed to register user');
      }

      setResponse(true);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unexpected error');
      setError(error.message);
    }
  };

  return { error, response, login, register };
}
