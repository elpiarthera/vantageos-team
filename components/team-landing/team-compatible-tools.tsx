"use client";

import { motion } from "framer-motion";
import type { Locale } from "./team-landing-page";

// ─── Content ─────────────────────────────────────────────────────────────────

const content = {
	en: {
		heading: "Works with your tools.",
		subtitle:
			"MCP protocol compatible. Any tool that speaks MCP can use our agents.",
		badge: "MCP Compatible",
	},
	fr: {
		heading: "Fonctionne avec vos outils.",
		subtitle:
			"Compatible protocole MCP. Tout outil parlant MCP peut utiliser nos agents.",
		badge: "Compatible MCP",
	},
};

const tools = [
	{ key: "claude-code", name: "Claude Code" },
	{ key: "cursor", name: "Cursor" },
	{ key: "codex-cli", name: "Codex CLI" },
	{ key: "windsurf", name: "Windsurf" },
	{ key: "cline", name: "Cline" },
	{ key: "roo-code", name: "Roo Code" },
	{ key: "amazon-q", name: "Amazon Q" },
	{ key: "vscode", name: "VS Code" },
	{ key: "jetbrains", name: "JetBrains" },
	{ key: "zed", name: "Zed" },
	{ key: "neovim", name: "Neovim" },
	{ key: "emacs", name: "Emacs" },
] as const;

// ─── Icon ─────────────────────────────────────────────────────────────────────

function TerminalIcon() {
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
			<polyline points="4 17 10 11 4 5" />
			<line x1="12" y1="19" x2="20" y2="19" />
		</svg>
	);
}

function PlugIcon() {
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
			<path d="M12 22v-5" />
			<path d="M9 8V2" />
			<path d="M15 8V2" />
			<path d="M18 8H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z" />
		</svg>
	);
}

// ─── Component ───────────────────────────────────────────────────────────────

interface TeamCompatibleToolsProps {
	locale: Locale;
}

export function TeamCompatibleTools({ locale }: TeamCompatibleToolsProps) {
	const t = content[locale];

	return (
		<section
			id="compatible-tools"
			className="py-16 md:py-24 bg-background"
			aria-labelledby="compatible-tools-heading"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<motion.div
					className="text-center max-w-2xl mx-auto mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					{/* Badge */}
					<div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
						<PlugIcon />
						{t.badge}
					</div>

					<h2
						id="compatible-tools-heading"
						className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
					>
						{t.heading}
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed">
						{t.subtitle}
					</p>
				</motion.div>

				{/* Tool grid */}
				<motion.div
					className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45, delay: 0.1 }}
				>
					{tools.map((tool, index) => (
						<motion.div
							key={tool.key}
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.3, delay: 0.15 + index * 0.04 }}
						>
							<ToolCard name={tool.name} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

// ─── ToolCard ─────────────────────────────────────────────────────────────────

function ToolCard({ name }: { name: string }) {
	return (
		<div className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3.5 transition-all duration-200 hover:border-foreground/20 hover:bg-card glow-on-hover">
			<span
				className="text-muted-foreground/50 transition-colors duration-200 group-hover:text-foreground/70"
				aria-hidden="true"
			>
				<TerminalIcon />
			</span>
			<span className="text-sm font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground leading-none">
				{name}
			</span>
		</div>
	);
}
