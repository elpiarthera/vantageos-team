import { TeamLandingPage } from "@/components/team-landing/team-landing-page";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TeamLandingPage initialLocale={locale as "en" | "fr"} />;
}
