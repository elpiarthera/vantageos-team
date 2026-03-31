import { setRequestLocale } from "next-intl/server";
import { TeamLandingPage } from "@/components/team-landing/team-landing-page";
import { fetchRegistryStats } from "@/lib/registry-server";

type Props = {
	params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	const initialStats = await fetchRegistryStats();

	return (
		<TeamLandingPage
			initialLocale={locale as "en" | "fr"}
			initialStats={initialStats}
		/>
	);
}
