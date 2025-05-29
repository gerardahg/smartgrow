'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

//Este componente es para redireccionar usuarios si ya se encuentran con una sesión iniciada
const RedirectAuthenticated = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status == 'authenticated') {
      router.push('/my-devices');
    }
  }, [status, router]);

  return null;
};

export default RedirectAuthenticated;
