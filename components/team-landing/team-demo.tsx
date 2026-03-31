"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "./team-landing-page";

const content = {
	en: {
		title: "See it in action",
		subtitle: "One email. Minutes later, the work is done.",
		clientLabel: "You",
		clientMessage:
			"Can you analyze our top 3 competitors and create a comparison report?",
		processingSteps: [
			"Strategy team analyzing competitors...",
			"Research team gathering pricing data...",
			"Content team formatting report...",
		],
		resultLabel: "VantageOS Team",
		resultMessage:
			"Done. Competitor report ready: 3 companies analyzed, pricing comparison table, positioning gaps identified, 5 recommended actions.",
		verifiedBadge: "Reviewed by Laurent before delivery",
		deliveredLabel: "Delivered to your inbox",
	},
	fr: {
		title: "Voyez par vous-même",
		subtitle: "Un email. Quelques minutes plus tard, le travail est fait.",
		clientLabel: "Vous",
		clientMessage:
			"Pouvez-vous analyser nos 3 principaux concurrents et créer un rapport comparatif ?",
		processingSteps: [
			"Équipe stratégie en cours d'analyse...",
			"Équipe recherche collecte les données tarifaires...",
			"Équipe contenu met en forme le rapport...",
		],
		resultLabel: "VantageOS Team",
		resultMessage:
			"Terminé. Rapport concurrentiel prêt : 3 entreprises analysées, tableau comparatif des prix, écarts de positionnement identifiés, 5 actions recommandées.",
		verifiedBadge: "Vérifié par Laurent avant livraison",
		deliveredLabel: "Livré dans votre boîte mail",
	},
};

interface TeamDemoProps {
	locale: Locale;
}

export function TeamDemo({ locale }: TeamDemoProps) {
	const t = content[locale];
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });
	const [processingStep, setProcessingStep] = useState(0);
	const [showProcessing, setShowProcessing] = useState(false);
	const [showResult, setShowResult] = useState(false);
	const [showBadge, setShowBadge] = useState(false);
	const [started, setStarted] = useState(false);

	useEffect(() => {
		if (!isInView || started) return;
		setStarted(true);

		const t1 = setTimeout(() => setShowProcessing(true), 900);
		const t2 = setTimeout(() => setProcessingStep(1), 1700);
		const t3 = setTimeout(() => setProcessingStep(2), 2500);
		const t4 = setTimeout(() => {
			setShowProcessing(false);
			setShowResult(true);
		}, 3400);
		const t5 = setTimeout(() => setShowBadge(true), 4000);

		return () => {
			clearTimeout(t1);
			clearTimeout(t2);
			clearTimeout(t3);
			clearTimeout(t4);
			clearTimeout(t5);
		};
	}, [isInView, started]);

	return (
		<section
			ref={ref}
			aria-label={t.title}
			className="py-16 md:py-24 bg-muted/30"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center max-w-2xl mx-auto mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
						{t.title}
					</h2>
					<p className="text-lg text-muted-foreground">{t.subtitle}</p>
				</motion.div>

				<div className="max-w-2xl mx-auto">
					<div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm card-glow">
						{/* Client bubble */}
						<motion.div
							className="flex items-end gap-3 justify-end mb-6"
							initial={{ opacity: 0, x: 20 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.4, ease: "easeOut" }}
						>
							<div className="flex flex-col items-end gap-1 max-w-[85%] sm:max-w-[75%]">
								<span className="text-xs text-muted-foreground font-medium px-1">
									{t.clientLabel}
								</span>
								<div className="bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-4 py-3 text-sm leading-relaxed">
									{t.clientMessage}
								</div>
							</div>
							<div
								aria-hidden
								className="size-8 rounded-full bg-muted border border-border flex items-center justify-center text-xs font-semibold text-muted-foreground shrink-0 mb-5"
							>
								{t.clientLabel[0]}
							</div>
						</motion.div>

						{/* Processing indicator */}
						{showProcessing && (
							<motion.div
								className="flex items-start gap-3 mb-6"
								initial={{ opacity: 0, x: -16 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, ease: "easeOut" }}
							>
								<div
									aria-hidden
									className="size-8 rounded-full bg-chart-1/20 border border-chart-1/30 flex items-center justify-center shrink-0 mt-5"
								>
									<span className="text-xs font-bold text-chart-1">V</span>
								</div>
								<div className="flex flex-col gap-1 max-w-[85%] sm:max-w-[75%]">
									<span className="text-xs text-muted-foreground font-medium px-1">
										VantageOS Team
									</span>
									<div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 text-sm">
										<div className="flex items-center gap-2">
											<ProcessingDots />
											<span
												key={processingStep}
												className="text-muted-foreground"
											>
												{t.processingSteps[processingStep]}
											</span>
										</div>
									</div>
								</div>
							</motion.div>
						)}

						{/* Result bubble */}
						{showResult && (
							<motion.div
								className="flex items-start gap-3 mb-4"
								initial={{ opacity: 0, x: -16 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4, ease: "easeOut" }}
							>
								<div
									aria-hidden
									className="size-8 rounded-full bg-chart-1/20 border border-chart-1/30 flex items-center justify-center shrink-0 mt-5"
								>
									<span className="text-xs font-bold text-chart-1">V</span>
								</div>
								<div className="flex flex-col gap-1 max-w-[85%] sm:max-w-[75%]">
									<span className="text-xs text-muted-foreground font-medium px-1">
										{t.resultLabel}
									</span>
									<div
										className="relative rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed border border-chart-1/25 bg-chart-1/8"
										style={{
											background: "oklch(from var(--chart-1) l c h / 0.08)",
										}}
									>
										<span className="font-medium">{t.resultMessage}</span>
										<div
											aria-hidden
											className="absolute inset-0 rounded-2xl rounded-bl-sm pointer-events-none"
											style={{
												boxShadow:
													"0 0 24px oklch(from var(--chart-1) l c h / 0.12)",
											}}
										/>
									</div>
								</div>
							</motion.div>
						)}

						{/* Verified badge */}
						{showBadge && (
							<motion.div
								className="flex justify-center mt-6"
								initial={{ opacity: 0, y: 8 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.35, ease: "easeOut" }}
							>
								<div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs text-muted-foreground">
									<svg
										aria-hidden="true"
										className="size-3.5 text-chart-2 shrink-0"
										viewBox="0 0 16 16"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm11.78-2.22a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 3.47-3.47a.75.75 0 0 1 1.06 0Z"
											clipRule="evenodd"
										/>
									</svg>
									{t.verifiedBadge}
								</div>
							</motion.div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

function ProcessingDots() {
	return (
		<span aria-hidden className="flex gap-0.5 items-center shrink-0">
			{[0, 1, 2].map((i) => (
				<motion.span
					key={i}
					className="size-1.5 rounded-full bg-muted-foreground/60 block"
					animate={{ opacity: [0.3, 1, 0.3] }}
					transition={{
						duration: 1.2,
						repeat: Number.POSITIVE_INFINITY,
						delay: i * 0.2,
						ease: "easeInOut",
					}}
				/>
			))}
		</span>
	);
}
