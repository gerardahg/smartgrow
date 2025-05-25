'use server';
import { cookies } from 'next/headers';

//Código tomado de https://github.com/amannn/next-intl/blob/main/examples/example-app-router-without-i18n-routing
const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || 'es';
}

//En nuestro caso locale es ingles o español
export async function setUserLocale(locale: 'es' | 'en') {
  (await cookies()).set(COOKIE_NAME, locale);
}
