//https://next-intl.dev/docs/getting-started/app-router/without-i18n-routing
import { getRequestConfig } from 'next-intl/server';

import { getUserLocale } from './locale';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
