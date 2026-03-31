"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "./team-landing-page";

const TEAMS = [
	{ en: "Content & Copywriting", fr: "Contenu & Rédaction" },
	{ en: "Social Media", fr: "Réseaux sociaux" },
	{ en: "SEO & Blog", fr: "SEO & Blog" },
	{ en: "Email Marketing", fr: "Email Marketing" },
	{ en: "Sales & CRM", fr: "Ventes & CRM" },
	{ en: "Customer Support", fr: "Support client" },
	{ en: "Research & Intelligence", fr: "Veille & Intelligence" },
	{ en: "Data & Analytics", fr: "Données & Analyse" },
	{ en: "Operations & Automation", fr: "Opérations & Automatisation" },
	{ en: "HR & Recruiting", fr: "RH & Recrutement" },
	{ en: "Finance & Reporting", fr: "Finance & Reporting" },
	{ en: "Development", fr: "Développement" },
	{ en: "Design & Creative", fr: "Design & Création" },
	{ en: "Strategy & Planning", fr: "Stratégie & Planification" },
	{ en: "Legal & Compliance", fr: "Juridique & Conformité" },
	{ en: "Project Management", fr: "Gestion de projet" },
];

const labels = {
	en: {
		title: "Get started",
		subtitle:
			"Tell us a little about yourself. We will follow up within 24 hours.",
		name: "Name",
		namePlaceholder: "Your name",
		email: "Email",
		emailPlaceholder: "you@company.com",
		company: "Company",
		companyPlaceholder: "Your company (optional)",
		teams: "Teams of interest",
		teamsPlaceholder: "Select teams (optional)",
		challenge: "What is your biggest challenge?",
		challengePlaceholder: "Describe your situation in a few words (optional)",
		submit: "Send",
		sending: "Sending…",
		successTitle: "Message received.",
		successBody: "We'll be in touch within 24 hours.",
		errorBody: "Something went wrong. Please try again.",
		close: "Close",
	},
	fr: {
		title: "Commencer",
		subtitle:
			"Dites-nous quelques mots sur vous. Nous vous recontactons sous 24 heures.",
		name: "Nom",
		namePlaceholder: "Votre nom",
		email: "Email",
		emailPlaceholder: "vous@entreprise.fr",
		company: "Entreprise",
		companyPlaceholder: "Votre entreprise (optionnel)",
		teams: "Équipes d'intérêt",
		teamsPlaceholder: "Sélectionnez des équipes (optionnel)",
		challenge: "Quel est votre plus grand défi\u00a0?",
		challengePlaceholder:
			"Décrivez votre situation en quelques mots (optionnel)",
		submit: "Envoyer",
		sending: "Envoi…",
		successTitle: "Message reçu.",
		successBody: "Nous vous contactons sous 24 heures.",
		errorBody: "Une erreur est survenue. Veuillez réessayer.",
		close: "Fermer",
	},
};

interface IntakeFormProps {
	locale: Locale;
	isOpen: boolean;
	onClose: () => void;
}

type Status = "idle" | "sending" | "success" | "error";

export function IntakeForm({ locale, isOpen, onClose }: IntakeFormProps) {
	const t = labels[locale];
	const [status, setStatus] = useState<Status>("idle");
	const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
	const [teamsOpen, setTeamsOpen] = useState(false);
	const firstFocusRef = useRef<HTMLInputElement>(null);

	// Reset state when modal opens
	useEffect(() => {
		if (isOpen) {
			setStatus("idle");
			setSelectedTeams([]);
			setTeamsOpen(false);
			const timer = setTimeout(() => {
				firstFocusRef.current?.focus();
			}, 50);
			return () => clearTimeout(timer);
		}
	}, [isOpen]);

	// Handle Escape key and body scroll lock
	useEffect(() => {
		if (!isOpen) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [isOpen, onClose]);

	const toggleTeam = (teamName: string) => {
		setSelectedTeams((prev) =>
			prev.includes(teamName)
				? prev.filter((item) => item !== teamName)
				: [...prev, teamName],
		);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("sending");

		const form = e.currentTarget;
		const data = {
			name: (form.elements.namedItem("name") as HTMLInputElement).value,
			email: (form.elements.namedItem("email") as HTMLInputElement).value,
			company: (form.elements.namedItem("company") as HTMLInputElement).value,
			teams: selectedTeams,
			challenge: (form.elements.namedItem("challenge") as HTMLTextAreaElement)
				.value,
			locale,
		};

		try {
			const res = await fetch("/api/intake", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!res.ok) throw new Error("Failed");
			setStatus("success");
		} catch {
			setStatus("error");
		}
	};

	if (!isOpen) return null;

	const teamNames = TEAMS.map((team) => (locale === "en" ? team.en : team.fr));

	const inputClass = cn(
		"w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
		"placeholder:text-muted-foreground",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
		"disabled:cursor-not-allowed disabled:opacity-50",
	);

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
			role="dialog"
			aria-modal="true"
			aria-labelledby="intake-form-title"
		>
			{/* Invisible backdrop button — click outside to close */}
			<button
				type="button"
				aria-label={t.close}
				className="absolute inset-0 w-full h-full cursor-default"
				onClick={onClose}
				tabIndex={-1}
			/>
			<div
				className={cn(
					"relative w-full max-w-lg bg-card border border-border rounded-xl shadow-xl",
					"max-h-[90vh] overflow-y-auto",
					"animate-in fade-in-0 zoom-in-95 duration-200",
				)}
			>
				{/* Header */}
				<div className="flex items-start justify-between p-6 pb-4">
					<div>
						<h2 id="intake-form-title" className="text-xl font-semibold">
							{t.title}
						</h2>
						<p className="text-sm text-muted-foreground mt-1">{t.subtitle}</p>
					</div>
					<button
						type="button"
						onClick={onClose}
						aria-label={t.close}
						className="ml-4 mt-0.5 shrink-0 rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					>
						<X className="size-4" aria-hidden="true" />
					</button>
				</div>

				{/* Success state */}
				{status === "success" ? (
					<div className="px-6 pb-6 text-center space-y-3">
						<p className="text-lg font-semibold">{t.successTitle}</p>
						<p className="text-muted-foreground">{t.successBody}</p>
						<Button onClick={onClose} className="mt-4 min-h-touch">
							{t.close}
						</Button>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
						{/* Name */}
						<div className="space-y-1.5">
							<label htmlFor="intake-name" className="text-sm font-medium">
								{t.name}
								<span className="text-destructive ml-1" aria-hidden="true">
									*
								</span>
							</label>
							<input
								ref={firstFocusRef}
								id="intake-name"
								name="name"
								type="text"
								required
								aria-required="true"
								placeholder={t.namePlaceholder}
								className={inputClass}
								disabled={status === "sending"}
							/>
						</div>

						{/* Email */}
						<div className="space-y-1.5">
							<label htmlFor="intake-email" className="text-sm font-medium">
								{t.email}
								<span className="text-destructive ml-1" aria-hidden="true">
									*
								</span>
							</label>
							<input
								id="intake-email"
								name="email"
								type="email"
								required
								aria-required="true"
								placeholder={t.emailPlaceholder}
								className={inputClass}
								disabled={status === "sending"}
							/>
						</div>

						{/* Company */}
						<div className="space-y-1.5">
							<label htmlFor="intake-company" className="text-sm font-medium">
								{t.company}
							</label>
							<input
								id="intake-company"
								name="company"
								type="text"
								placeholder={t.companyPlaceholder}
								className={inputClass}
								disabled={status === "sending"}
							/>
						</div>

						{/* Teams multi-select */}
						<div className="space-y-1.5">
							<span id="teams-label" className="text-sm font-medium block">
								{t.teams}
							</span>
							<div className="relative">
								<button
									type="button"
									onClick={() => setTeamsOpen((o) => !o)}
									disabled={status === "sending"}
									aria-expanded={teamsOpen}
									aria-haspopup="listbox"
									aria-labelledby="teams-label"
									className={cn(
										"w-full text-left rounded-md border border-input bg-background px-3 py-2 text-sm",
										"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
										"disabled:cursor-not-allowed disabled:opacity-50",
										selectedTeams.length === 0 && "text-muted-foreground",
									)}
								>
									{selectedTeams.length === 0
										? t.teamsPlaceholder
										: selectedTeams.join(", ")}
								</button>
								{teamsOpen && (
									<div
										role="listbox"
										aria-multiselectable="true"
										aria-labelledby="teams-label"
										className={cn(
											"absolute z-10 mt-1 w-full rounded-md border border-border bg-card shadow-lg",
											"max-h-48 overflow-y-auto",
										)}
									>
										{teamNames.map((teamName) => {
											const selected = selectedTeams.includes(teamName);
											return (
												<button
													key={teamName}
													type="button"
													role="option"
													aria-selected={selected}
													onClick={() => toggleTeam(teamName)}
													className={cn(
														"flex w-full items-center gap-2 px-3 py-2 text-sm text-left",
														"hover:bg-muted transition-colors",
														selected && "bg-primary/5 font-medium",
													)}
												>
													<span
														className={cn(
															"size-3.5 rounded-sm border border-border flex items-center justify-center shrink-0",
															selected && "bg-primary border-primary",
														)}
														aria-hidden="true"
													>
														{selected && (
															<svg
																viewBox="0 0 8 8"
																className="size-2.5 fill-primary-foreground"
																aria-hidden="true"
																focusable="false"
															>
																<path
																	d="M1.5 4L3 5.5L6.5 2"
																	stroke="currentColor"
																	strokeWidth="1.5"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	fill="none"
																/>
															</svg>
														)}
													</span>
													{teamName}
												</button>
											);
										})}
									</div>
								)}
							</div>
						</div>

						{/* Challenge textarea */}
						<div className="space-y-1.5">
							<label htmlFor="intake-challenge" className="text-sm font-medium">
								{t.challenge}
							</label>
							<textarea
								id="intake-challenge"
								name="challenge"
								rows={3}
								placeholder={t.challengePlaceholder}
								className={cn(
									"w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
									"placeholder:text-muted-foreground resize-none",
									"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
									"disabled:cursor-not-allowed disabled:opacity-50",
								)}
								disabled={status === "sending"}
							/>
						</div>

						{/* Error */}
						{status === "error" && (
							<p className="text-sm text-destructive" role="alert">
								{t.errorBody}
							</p>
						)}

						{/* Submit */}
						<Button
							type="submit"
							className="w-full min-h-touch"
							disabled={status === "sending"}
						>
							{status === "sending" ? t.sending : t.submit}
						</Button>
					</form>
				)}
			</div>
		</div>
	);
}
