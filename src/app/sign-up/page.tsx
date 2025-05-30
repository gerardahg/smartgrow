import Link from 'next/link';
import { useTranslations } from 'next-intl';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import IconInput from '@/components/application-ui/forms/IconInputComponent';
import Register from '@/components/application-ui/forms/RegisterComponent';
import Container from '@mui/material/Container';
import SmartGrowTitleComponent from '@/components/application-ui/general-text/SmartGrowTitleComponent';

const mb = { marginBottom: 2 };

export default function Signup() {
  const t = useTranslations();
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          minHeight: '100vh',
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
              {t('register')}
            </Typography>

            <IconInput
              Icon={AccountCircleIcon}
              label={t('name')}
              type={'text'}
              dispatchType="credential/setName"
            />

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

            <Register />

            <Typography
              variant="body2"
              sx={{ marginTop: 1, textAlign: 'center' }}
            >
              {t('account')}{' '}
              <Link href="/sign-in" style={{ color: '#03a9f4' }}>
                {t('signIn2')}
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
