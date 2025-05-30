import Link from 'next/link';

import { useTranslations } from 'next-intl';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Divider from '@mui/material/Divider';

import IconInput from '@/components/application-ui/forms/IconInputComponent';
import SignIn from '@/components/application-ui/forms/SignInButton';
import ManualSignIn from '@/components/application-ui/forms/ManualSignInComponent';
import Container from '@mui/material/Container';
import RedirectAuthenticated from '@/components/application-ui/general-text/RedirectAuthenticated';
import SmartGrowTitleComponent from '@/components/application-ui/general-text/SmartGrowTitleComponent';

const mb = { marginBottom: 2 };

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <RedirectAuthenticated />
      <Container
        maxWidth="lg"
        sx={{
          minHeight: '100dvh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Link href="/">
          <SmartGrowTitleComponent />
        </Link>

        <Card
          sx={{
            maxWidth: 450,
            width: '100%',
            p: { xs: 2, sm: 3 },
            boxShadow: 'none',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <CardContent>
            <Typography variant="h4" sx={[mb, { textAlign: 'center' }]}>
              {t('login')}
            </Typography>
            <IconInput
              Icon={EmailIcon}
              label={t('email')}
              type={'email'}
              placeholder="example@gmail.com"
              dispatchType="credential/setEmail"
            />

            <IconInput
              Icon={LockIcon}
              label={t('password')}
              type={'Password'}
              dispatchType="credential/setPassword"
            />

            <ManualSignIn />

            <Typography
              variant="body2"
              sx={{ marginTop: 1, textAlign: 'center' }}
            >
              {t('noAccount')}{' '}
              <Link href="/sign-up" style={{ color: '#03a9f4' }}>
                {t('signUp2')}
              </Link>
            </Typography>

            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

            <SignIn />
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
