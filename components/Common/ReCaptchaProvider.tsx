'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function ReCaptchaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // Only render the provider if a key is configured
  if (!recaptchaKey) {
    console.warn('reCAPTCHA site key not configured. Forms will not have CAPTCHA protection.');
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
