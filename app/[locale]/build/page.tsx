import { setRequestLocale } from "next-intl/server";
import { BuildPage } from "@/components/build/build-page";

type Props = {
	params: Promise<{ locale: string }>;
};

export default async function Build({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	return <BuildPage initialLocale={locale as "en" | "fr"} />;
}
