import { setRequestLocale } from "next-intl/server";
import { DevPage } from "@/components/dev/dev-page";

type Props = {
	params: Promise<{ locale: string }>;
};

export default async function DevRoute({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	return <DevPage locale={locale as "en" | "fr"} />;
}
