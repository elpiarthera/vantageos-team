"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

// ─── Inline SVG icons ────────────────────────────────────────────────────────

function SunIcon({ className }: { className?: string }) {
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
			<circle cx="12" cy="12" r="4" />
			<line x1="12" y1="2" x2="12" y2="4" />
			<line x1="12" y1="20" x2="12" y2="22" />
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
			<line x1="2" y1="12" x2="4" y2="12" />
			<line x1="20" y1="12" x2="22" y2="12" />
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
		</svg>
	);
}

function MoonIcon({ className }: { className?: string }) {
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
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	);
}

function GlobeIcon({ className }: { className?: string }) {
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
			<circle cx="12" cy="12" r="10" />
			<line x1="2" y1="12" x2="22" y2="12" />
			<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
		</svg>
	);
}

function MenuIcon({ className }: { className?: string }) {
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
			<line x1="3" y1="6" x2="21" y2="6" />
			<line x1="3" y1="12" x2="21" y2="12" />
			<line x1="3" y1="18" x2="21" y2="18" />
		</svg>
	);
}

function XIcon({ className }: { className?: string }) {
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
			<line x1="18" y1="6" x2="6" y2="18" />
			<line x1="6" y1="6" x2="18" y2="18" />
		</svg>
	);
}

// ─── Nav links ────────────────────────────────────────────────────────────────

const navLinks = {
	en: [
		{ label: "Build App", href: "/build" },
		{ label: "Dev Team", href: "/dev" },
		{ label: "Agent Teams", href: "/teams" },
		{ label: "How It Works", href: "#how-it-works" },
		{ label: "Pricing", href: "#pricing" },
	],
	fr: [
		{ label: "Construire une App", href: "/build" },
		{ label: "\u00c9quipe Dev", href: "/dev" },
		{ label: "\u00c9quipes Agent", href: "/teams" },
		{ label: "Comment \u00e7a marche", href: "#how-it-works" },
		{ label: "Tarifs", href: "#pricing" },
	],
};

const headerContent = {
	en: {
		cta: "Book a Call",
		langLabel: "FR",
		scheduleAriaLabel: "Book a call with VantageTeam (opens in new tab)",
	},
	fr: {
		cta: "R\u00e9server un appel",
		langLabel: "EN",
		scheduleAriaLabel:
			"R\u00e9server un appel avec VantageTeam (ouvre dans un nouvel onglet)",
	},
};

interface TeamHeaderProps {
	locale: "en" | "fr";
	onLocaleChange: (locale: "en" | "fr") => void;
}

export function TeamHeader({ locale, onLocaleChange }: TeamHeaderProps) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const t = headerContent[locale];
	const links = navLinks[locale];
	const mobileMenuRef = useRef<HTMLDivElement>(null);
	const menuButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		setMounted(true);
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Escape key + focus trap for mobile menu
	useEffect(() => {
		if (!isMobileMenuOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsMobileMenuOpen(false);
				menuButtonRef.current?.focus();
				return;
			}
			if (e.key !== "Tab") return;

			const menu = mobileMenuRef.current;
			if (!menu) return;

			const focusable = menu.querySelectorAll<HTMLElement>(
				'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
			);
			const first = focusable[0];
			const last = focusable[focusable.length - 1];

			if (e.shiftKey) {
				if (document.activeElement === first) {
					e.preventDefault();
					last?.focus();
				}
			} else {
				if (document.activeElement === last) {
					e.preventDefault();
					first?.focus();
				}
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isMobileMenuOpen]);

	const toggleLocale = () => {
		onLocaleChange(locale === "en" ? "fr" : "en");
	};

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				isScrolled
					? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
					: "bg-transparent",
			)}
		>
			<nav
				aria-label={
					locale === "fr" ? "Navigation principale" : "Main navigation"
				}
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
			>
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2 group">
						<div className="size-8 rounded-lg bg-foreground flex items-center justify-center transition-transform group-hover:scale-105">
							<span className="text-background font-bold text-lg">V</span>
						</div>
						<span className="font-semibold text-lg tracking-tight">
							VantageOS <span className="text-muted-foreground">Team</span>
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-1">
						{links.map((link) =>
							link.href.startsWith("#") ? (
								<a
									key={link.href}
									href={link.href}
									className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
								>
									{link.label}
								</a>
							) : (
								<Link
									key={link.href}
									href={link.href}
									className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
								>
									{link.label}
								</Link>
							),
						)}
					</div>

					{/* Desktop CTA */}
					<div className="hidden md:flex items-center gap-2">
						{mounted && (
							<Button
								variant="ghost"
								size="sm"
								onClick={toggleTheme}
								className="size-9 p-0"
							>
								{theme === "dark" ? (
									<SunIcon className="size-4" />
								) : (
									<MoonIcon className="size-4" />
								)}
								<span className="sr-only">Toggle theme</span>
							</Button>
						)}
						<Button
							variant="ghost"
							size="sm"
							onClick={toggleLocale}
							className="gap-1.5"
						>
							<GlobeIcon className="size-4" />
							{t.langLabel}
						</Button>
						<a
							href="https://calendar.app.google/ZuvZW6KfAcMEz74C6"
							target="_blank"
							rel="noopener noreferrer"
							aria-label={t.scheduleAriaLabel}
							className={buttonVariants({ size: "sm" })}
						>
							{t.cta}
						</a>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center gap-1">
						{mounted && (
							<button
								type="button"
								className="p-2 text-muted-foreground hover:text-foreground"
								onClick={toggleTheme}
							>
								{theme === "dark" ? (
									<SunIcon className="size-5" />
								) : (
									<MoonIcon className="size-5" />
								)}
								<span className="sr-only">Toggle theme</span>
							</button>
						)}
						<button
							ref={menuButtonRef}
							type="button"
							className="p-2 -mr-2 text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-expanded={isMobileMenuOpen}
							aria-controls="mobile-menu"
						>
							<span className="sr-only">
								{isMobileMenuOpen
									? locale === "fr"
										? "Fermer le menu"
										: "Close menu"
									: locale === "fr"
										? "Ouvrir le menu"
										: "Open menu"}
							</span>
							{isMobileMenuOpen ? (
								<XIcon className="size-6" />
							) : (
								<MenuIcon className="size-6" />
							)}
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						id="mobile-menu"
						ref={mobileMenuRef}
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
					>
						<div className="px-4 py-4 space-y-1">
							{links.map((link) =>
								link.href.startsWith("#") ? (
									<a
										key={link.href}
										href={link.href}
										className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										{link.label}
									</a>
								) : (
									<Link
										key={link.href}
										href={link.href}
										className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										{link.label}
									</Link>
								),
							)}
							<div className="pt-4 space-y-2">
								<Button
									variant="outline"
									className="w-full min-h-[44px]"
									onClick={() => {
										toggleLocale();
										setIsMobileMenuOpen(false);
									}}
								>
									<GlobeIcon className="size-4 mr-2" />
									{t.langLabel}
								</Button>
								<a
									href="https://calendar.app.google/ZuvZW6KfAcMEz74C6"
									target="_blank"
									rel="noopener noreferrer"
									aria-label={t.scheduleAriaLabel}
									onClick={() => setIsMobileMenuOpen(false)}
									className={cn(
										buttonVariants(),
										"w-full min-h-[44px] justify-center",
									)}
								>
									{t.cta}
								</a>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
