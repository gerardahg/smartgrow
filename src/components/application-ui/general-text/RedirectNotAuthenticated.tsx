'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

//Este componente es para redireccionar usuarios si no se encuentran con una sesión iniciada
const RedirectNotAuthenticated = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status == 'unauthenticated') {
      router.push('/sign-in');
    }
  }, [status, router]);

  return null;
};

export default RedirectNotAuthenticated;
