"use client";

import { SessionProvider } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

interface ClientProvidersProps {
  children: ReactNode;
  messages?: any;
  locale?: string;
}

export function ClientProviders({ children, messages, locale }: ClientProvidersProps) {
  return (
    <SessionProvider>
      <NextIntlClientProvider messages={messages} locale={locale}>
        {children}
      </NextIntlClientProvider>
    </SessionProvider>
  );
}
