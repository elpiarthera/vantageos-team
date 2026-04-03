import { setRequestLocale } from "next-intl/server";
import { TeamsPage } from "@/components/teams/teams-page";

type Props = {
	params: Promise<{ locale: string }>;
};

export default async function TeamsRoute({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	return <TeamsPage locale={locale as "en" | "fr"} />;
}
