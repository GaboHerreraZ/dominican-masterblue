import "./globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"] });

const locales = ["en", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: any;
  params: any;
}) {
  let messages;
  const defaultLocale = locales.includes(locale) ? locale : "es";
  console.log(defaultLocale);
  messages = (await import(`../../../messages/${defaultLocale}.json`)).default;

  return (
    <html className={`${inconsolata.className} scroll-smooth`} lang={locale}>
      <body className=" ">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
