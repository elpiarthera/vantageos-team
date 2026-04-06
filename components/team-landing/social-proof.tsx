"use client";

import { motion } from "framer-motion";
import type { Locale } from "./team-landing-page";

const content = {
	en: {
		stat: "18 issues resolved. 28 minutes median. New feature in 38 min. 50+ signed commits. Zero regressions.",
		caption:
			"Real results from a real codebase. No demo. No sandbox. Production.",
	},
	fr: {
		stat: "18 probl\u00e8mes r\u00e9solus. 28 minutes m\u00e9diane. Nouvelle feature en 38 min. 50+ commits sign\u00e9s. Z\u00e9ro r\u00e9gressions.",
		caption:
			"Des r\u00e9sultats r\u00e9els, sur une vraie base de code. Pas de d\u00e9mo. Pas de sandbox. De la production.",
	},
};

interface SocialProofProps {
	locale: Locale;
}

export function SocialProof({ locale }: SocialProofProps) {
	const t = content[locale];

	return (
		<section className="py-16 md:py-24 bg-muted/30 border-y border-border">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					{/* Quote mark */}
					<div
						className="text-5xl font-serif leading-none mb-4 select-none text-primary"
						aria-hidden="true"
					>
						&ldquo;
					</div>

					<p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-4">
						{t.stat}
					</p>

					<p className="text-sm text-muted-foreground">{t.caption}</p>
				</motion.div>
			</div>
		</section>
	);
}
