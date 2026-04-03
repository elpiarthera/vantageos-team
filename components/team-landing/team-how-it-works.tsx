"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Locale } from "./team-landing-page";

// ─── Inline SVG icons ────────────────────────────────────────────────────────

function ClipboardIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<rect x="9" y="2" width="6" height="4" rx="1" />
			<path d="M9 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-3" />
			<path d="M9 12h6M9 16h4" />
		</svg>
	);
}

function HammerIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<path d="M15 12l-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9" />
			<path d="M17.64 15L22 10.64" />
			<path d="m2 2 6 6" />
			<path d="M2.5 8.5L8 3l5.5 5.5-5.5 5.5z" />
		</svg>
	);
}

function RocketIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
			<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
			<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
			<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
		</svg>
	);
}

function TrendingUpIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
			<polyline points="16 7 22 7 22 13" />
		</svg>
	);
}

function SendIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<line x1="22" y1="2" x2="11" y2="13" />
			<polygon points="22 2 15 22 11 13 2 9 22 2" />
		</svg>
	);
}

function RouteIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<circle cx="6" cy="19" r="3" />
			<path d="M9 19h8.5c.4 0 .9-.1 1.3-.5l1.5-1.5a2.12 2.12 0 0 0 0-3l-3-3a2.12 2.12 0 0 0-3 0L12 13" />
			<path d="M6 16V7" />
			<circle cx="6" cy="4" r="3" />
		</svg>
	);
}

function CheckCircleIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
			<polyline points="22 4 12 14.01 9 11.01" />
		</svg>
	);
}

function BrainIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
			<path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
		</svg>
	);
}

// ─── Types ───────────────────────────────────────────────────────────────────

type FlowKey = "build" | "team";

interface Step {
	number: string;
	Icon: React.FC<{ className?: string }>;
	title: string;
	description: string;
	color: string;
	bgColor: string;
}

// ─── Content ─────────────────────────────────────────────────────────────────

const content = {
	en: {
		title: "How It Works",
		subtitle:
			"Whether you need an app built or an ongoing team — here is the process.",
		tabs: {
			build: "Build My App",
			team: "Ongoing Team",
		},
		buildSteps: [
			{
				number: "01",
				Icon: ClipboardIcon,
				title: "PRD Workshop",
				description:
					"We run a 60-minute workshop to define your product. Requirements, user flows, tech stack, timeline. You leave with a clear build plan.",
				color: "text-chart-1",
				bgColor: "bg-chart-1/10",
			},
			{
				number: "02",
				Icon: HammerIcon,
				title: "We Build",
				description:
					"AI agents write the code under senior tech supervision. Weekly check-ins. You see progress every week, not just at the end.",
				color: "text-chart-2",
				bgColor: "bg-chart-2/10",
			},
			{
				number: "03",
				Icon: RocketIcon,
				title: "You Launch",
				description:
					"Production-ready deploy. You own 100% of the code, the repo, the infra. Full handoff documentation included.",
				color: "text-chart-4",
				bgColor: "bg-chart-4/10",
			},
			{
				number: "04",
				Icon: TrendingUpIcon,
				title: "Revenue Share",
				description:
					"We take a small revenue share for 2 years instead of charging full agency rates. We win when you win.",
				color: "text-chart-5",
				bgColor: "bg-chart-5/10",
			},
		] as Step[],
		teamSteps: [
			{
				number: "01",
				Icon: SendIcon,
				title: "You send a task",
				description:
					"By email, Telegram, or Google Meet transcript. No special app. No login. No platform.",
				color: "text-chart-1",
				bgColor: "bg-chart-1/10",
			},
			{
				number: "02",
				Icon: RouteIcon,
				title: "The right team handles it",
				description:
					"Laurent receives your request, understands the context, and assigns it to specialized agents.",
				color: "text-chart-2",
				bgColor: "bg-chart-2/10",
			},
			{
				number: "03",
				Icon: CheckCircleIcon,
				title: "You receive the result",
				description:
					"Reviewed by Laurent before delivery. Ready to use. Delivered by email or to your Google Drive.",
				color: "text-chart-4",
				bgColor: "bg-chart-4/10",
			},
			{
				number: "04",
				Icon: BrainIcon,
				title: "Your team gets smarter",
				description:
					"Every interaction enriches your AI team's memory. Month 2 results are better than Month 1.",
				color: "text-chart-5",
				bgColor: "bg-chart-5/10",
			},
		] as Step[],
		buildEmphasis:
			"Production-quality, not prototypes. Full code ownership. Revenue-share model keeps our incentives aligned.",
		teamEmphasis:
			"Human-in-the-loop: Every deliverable is reviewed by a C-level tech executive before reaching you.",
	},
	fr: {
		title: "Comment \u00e7a fonctionne",
		subtitle:
			"Que vous ayez besoin d\u2019une app construite ou d\u2019une \u00e9quipe en continu \u2014 voici le processus.",
		tabs: {
			build: "Construire mon app",
			team: "\u00c9quipe en continu",
		},
		buildSteps: [
			{
				number: "01",
				Icon: ClipboardIcon,
				title: "Atelier PRD",
				description:
					"Nous animons un atelier de 60 minutes pour d\u00e9finir votre produit. Exigences, parcours utilisateurs, stack technique, calendrier. Vous repartez avec un plan de construction clair.",
				color: "text-chart-1",
				bgColor: "bg-chart-1/10",
			},
			{
				number: "02",
				Icon: HammerIcon,
				title: "Nous construisons",
				description:
					"Les agents IA \u00e9crivent le code sous supervision tech senior. Points hebdomadaires. Vous voyez l\u2019avancement chaque semaine, pas seulement \u00e0 la fin.",
				color: "text-chart-2",
				bgColor: "bg-chart-2/10",
			},
			{
				number: "03",
				Icon: RocketIcon,
				title: "Vous lancez",
				description:
					"D\u00e9ploiement pr\u00eat pour la production. Vous poss\u00e9dez 100\u00a0% du code, du r\u00e9p\u00f4t, de l\u2019infra. Documentation de transfert compl\u00e8te incluse.",
				color: "text-chart-4",
				bgColor: "bg-chart-4/10",
			},
			{
				number: "04",
				Icon: TrendingUpIcon,
				title: "Partage des revenus",
				description:
					"Nous prenons une petite part des revenus pendant 2 ans plut\u00f4t que de facturer des tarifs agence complets. Nous gagnons quand vous gagnez.",
				color: "text-chart-5",
				bgColor: "bg-chart-5/10",
			},
		] as Step[],
		teamSteps: [
			{
				number: "01",
				Icon: SendIcon,
				title: "Vous envoyez une t\u00e2che",
				description:
					"Par email, Telegram ou compte-rendu Google Meet. Pas d'outil sp\u00e9cial. Pas de connexion.",
				color: "text-chart-1",
				bgColor: "bg-chart-1/10",
			},
			{
				number: "02",
				Icon: RouteIcon,
				title: "L'\u00e9quipe appropri\u00e9e s'en charge",
				description:
					"Laurent re\u00e7oit votre demande, comprend le contexte, et la confie aux agents sp\u00e9cialis\u00e9s.",
				color: "text-chart-2",
				bgColor: "bg-chart-2/10",
			},
			{
				number: "03",
				Icon: CheckCircleIcon,
				title: "Vous recevez le r\u00e9sultat",
				description:
					"Revu par Laurent avant envoi. Pr\u00eat \u00e0 utiliser. Livr\u00e9 par email ou dans votre Google Drive.",
				color: "text-chart-4",
				bgColor: "bg-chart-4/10",
			},
			{
				number: "04",
				Icon: BrainIcon,
				title: "Votre \u00e9quipe s'am\u00e9liore",
				description:
					"Chaque interaction enrichit la m\u00e9moire de votre \u00e9quipe IA. Les r\u00e9sultats du mois 2 sont meilleurs que ceux du mois 1.",
				color: "text-chart-5",
				bgColor: "bg-chart-5/10",
			},
		] as Step[],
		buildEmphasis:
			"Qualit\u00e9 production, pas des prototypes. Propri\u00e9t\u00e9 totale du code. Le mod\u00e8le de partage des revenus aligne nos int\u00e9r\u00eats.",
		teamEmphasis:
			"Humain dans la boucle\u00a0: chaque livrable est revu par un dirigeant tech C-level avant de vous parvenir.",
	},
};

interface TeamHowItWorksProps {
	locale: Locale;
}

export function TeamHowItWorks({ locale }: TeamHowItWorksProps) {
	const [flow, setFlow] = useState<FlowKey>("build");
	const t = content[locale];

	const activeSteps = flow === "build" ? t.buildSteps : t.teamSteps;
	const emphasis = flow === "build" ? t.buildEmphasis : t.teamEmphasis;

	return (
		<section id="how-it-works" className="py-16 md:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center max-w-3xl mx-auto mb-10"
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

				{/* Flow tabs */}
				<motion.div
					className="flex justify-center mb-10"
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.1 }}
				>
					<div className="inline-flex gap-1 rounded-xl border border-border bg-card p-1">
						{(["build", "team"] as FlowKey[]).map((key) => (
							<button
								key={key}
								type="button"
								onClick={() => setFlow(key)}
								className={cn(
									"px-5 py-2 rounded-lg text-sm font-medium transition-all",
									flow === key
										? "bg-primary text-primary-foreground shadow-sm"
										: "text-muted-foreground hover:text-foreground",
								)}
							>
								{key === "build" ? t.tabs.build : t.tabs.team}
							</button>
						))}
					</div>
				</motion.div>

				<div className="relative">
					{/* Connection line */}
					<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{activeSteps.map((step, index) => {
							const { Icon } = step;
							return (
								<motion.div
									key={step.number}
									className="relative"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.15 }}
								>
									<div className="relative bg-background p-8 rounded-2xl border border-border text-center">
										{/* Step number badge */}
										<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-background border border-border rounded-full font-mono text-sm font-medium">
											{step.number}
										</div>

										{/* Icon */}
										<div
											className={`size-16 rounded-2xl ${step.bgColor} flex items-center justify-center mx-auto mb-6 mt-2`}
										>
											<Icon className={`size-8 ${step.color}`} />
										</div>

										{/* Content */}
										<h3 className="text-xl font-semibold mb-3">{step.title}</h3>
										<p className="text-muted-foreground">{step.description}</p>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>

				{/* Emphasis */}
				<motion.div
					className="text-center mt-16 p-6 rounded-xl bg-primary/5 border border-primary/20 max-w-2xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					<p className="text-lg font-medium">{emphasis}</p>
				</motion.div>
			</div>
		</section>
	);
}
