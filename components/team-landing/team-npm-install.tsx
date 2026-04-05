"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Locale } from "./team-landing-page";

// ─── Content ─────────────────────────────────────────────────────────────────

const content = {
	en: {
		heading: "One command to get started.",
		subtitle:
			"Install the npm package. Works with Claude Code, Cursor, Codex CLI, and 9 more MCP-compatible tools.",
		tagline: "MIT License \u2022 Self-hosted \u2022 No vendor lock-in",
		copied: "Copied!",
		copy: "Copy",
	},
	fr: {
		heading: "Une seule commande pour commencer.",
		subtitle:
			"Installez le package npm. Fonctionne avec Claude Code, Cursor, Codex CLI, et 9 autres outils compatibles MCP.",
		tagline:
			"Licence MIT \u2022 Auto-h\u00e9berg\u00e9 \u2022 Aucun verrouillage fournisseur",
		copied: "Copi\u00e9\u00a0!",
		copy: "Copier",
	},
};

const INSTALL_CMD = "npx vantageos-team init";

// ─── Icons ────────────────────────────────────────────────────────────────────

function CopyIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className="size-4 shrink-0"
		>
			<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
			<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
		</svg>
	);
}

function CheckIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className="size-4 shrink-0"
		>
			<polyline points="20 6 9 17 4 12" />
		</svg>
	);
}

function PackageIcon() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className="size-5 shrink-0"
		>
			<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
			<path d="M12 22V12" />
			<path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7" />
			<path d="m7.5 4.27 9 5.15" />
		</svg>
	);
}

// ─── Component ───────────────────────────────────────────────────────────────

interface TeamNpmInstallProps {
	locale: Locale;
}

export function TeamNpmInstall({ locale }: TeamNpmInstallProps) {
	const t = content[locale];
	const [copied, setCopied] = useState(false);

	function handleCopy() {
		navigator.clipboard.writeText(INSTALL_CMD).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	}

	return (
		<section
			id="install"
			className="py-16 md:py-24 bg-muted/30 border-y border-border"
			aria-labelledby="install-heading"
		>
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45 }}
					className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground mb-6"
				>
					<PackageIcon />
					npm
				</motion.div>

				{/* Heading */}
				<motion.h2
					id="install-heading"
					className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45, delay: 0.05 }}
				>
					{t.heading}
				</motion.h2>

				{/* Subtitle */}
				<motion.p
					className="text-muted-foreground text-lg leading-relaxed mb-10"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45, delay: 0.1 }}
				>
					{t.subtitle}
				</motion.p>

				{/* Terminal block */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45, delay: 0.15 }}
					className="relative mx-auto max-w-xl"
				>
					<div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
						{/* Terminal title bar */}
						<div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/40">
							<span
								className="size-2.5 rounded-full bg-destructive/60"
								aria-hidden="true"
							/>
							<span
								className="size-2.5 rounded-full bg-muted-foreground/30"
								aria-hidden="true"
							/>
							<span
								className="size-2.5 rounded-full bg-muted-foreground/30"
								aria-hidden="true"
							/>
						</div>

						{/* Command line */}
						<div className="flex items-center justify-between gap-4 px-5 py-4">
							<div className="flex items-center gap-2 min-w-0">
								<span
									className="text-muted-foreground/50 select-none shrink-0 font-mono text-sm"
									aria-hidden="true"
								>
									$
								</span>
								<code className="font-mono text-sm sm:text-base text-foreground truncate">
									{INSTALL_CMD}
								</code>
							</div>

							<button
								type="button"
								onClick={handleCopy}
								aria-label={copied ? t.copied : t.copy}
								className="flex items-center gap-1.5 shrink-0 rounded-lg border border-border bg-muted/60 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-150 hover:border-foreground/20 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
							>
								{copied ? <CheckIcon /> : <CopyIcon />}
								<span className="hidden sm:inline">
									{copied ? t.copied : t.copy}
								</span>
							</button>
						</div>
					</div>
				</motion.div>

				{/* Tagline */}
				<motion.p
					className="mt-6 text-xs text-muted-foreground/70"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.25 }}
				>
					{t.tagline}
				</motion.p>
			</div>
		</section>
	);
}
