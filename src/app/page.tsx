import Link from 'next/link';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import IconInput from '@/components/application-ui/forms/IconInputComponent';
import SignIn from '@/components/application-ui/forms/SignInButton';

const mb = { marginBottom: 2 };

export default function Home() {
  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Roboto, 'Segoe UI', Arial, sans-serif",
            fontStyle: 'italic',
            fontWeight: 'bold',
            letterSpacing: '1px',
            color: '#1e88e5',
            marginBottom: mb.marginBottom,
          }}
        >
          SmartGrow
        </Typography>

        <Card sx={{ width: { md: 400, xs: 300 }, p: 3 }}>
          <CardContent>
            <Typography variant="h4" sx={[mb, { textAlign: 'center' }]}>
              Login
            </Typography>
            <IconInput
              Icon={EmailIcon}
              label={'Email'}
              type={'email'}
              placeholder="example@gmail.com"
            />

            <IconInput Icon={LockIcon} label={'Password'} type={'Password'} />

            <Link href="/my-devices">
              <Button variant="contained" fullWidth>
                Sign in
              </Button>
            </Link>

            <Typography
              variant="body2"
              sx={{ marginTop: 1, textAlign: 'center' }}
            >
              Don&#39;t have an account?{' '}
              <Link href="/sign-up" style={{ color: '#03a9f4' }}>
                Sign Up
              </Link>
            </Typography>

            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

            <SignIn />
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
