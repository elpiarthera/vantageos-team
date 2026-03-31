"use client";

/**
 * registry.ts — client-only exports.
 * Contains real-time hooks that use convex/react (useQuery).
 * Must only be imported from Client Components.
 *
 * For server-side fetching (RSC / metadata / layout), use @/lib/registry-server.
 */

import { useQuery } from "convex/react";
import type { FunctionReference } from "convex/server";
import { makeFunctionReference } from "convex/server";
import { useMemo } from "react";

// ─── Arg shapes ───────────────────────────────────────────────────────────────

type StatusArg = { status?: "active" | "draft" | "deprecated" };
type TeamsStatusArg = { status?: "active" | "planned" | "deprecated" };

// ─── Raw registry record shapes ───────────────────────────────────────────────

export interface RegistryTeam {
	_id: string;
	name: string;
	nameEn?: string;
	nameFr?: string;
	description?: string;
	descriptionEn?: string;
	descriptionFr?: string;
	status: string;
}

export interface RegistryAgent {
	_id: string;
	name: string;
	description?: string;
	descriptionEn?: string;
	descriptionFr?: string;
	team?: string;
	status: string;
}

export interface RegistrySkill {
	_id: string;
	name: string;
	command?: string;
	description?: string;
	descriptionEn?: string;
	descriptionFr?: string;
	team?: string;
	status: string;
}

// ─── Team details shape (matches what team-grid.tsx expects) ──────────────────

export interface AgentEntry {
	name: string;
	description: string;
}

export interface SkillEntry {
	name: string;
	command: string;
	description: string;
}

export interface TeamDetail {
	agents: AgentEntry[];
	skills: SkillEntry[];
}

export interface TeamDetailsResult {
	/** Keyed by team name (e.g. "Operations") for O(1) lookup in team-grid */
	details: Record<string, TeamDetail>;
	/** Flat list of all active agent names for the ticker */
	allAgentNames: string[];
	isLoading: boolean;
}

// ─── Function references (external deployment, no generated api) ──────────────

const agentsList = makeFunctionReference<"query", StatusArg, unknown[]>(
	"agents:list",
);
const skillsList = makeFunctionReference<"query", StatusArg, unknown[]>(
	"skills:list",
);
const pluginsList = makeFunctionReference<"query", StatusArg, unknown[]>(
	"plugins:list",
);
const teamsList = makeFunctionReference<"query", TeamsStatusArg, unknown[]>(
	"teams:list",
);

// ─── Types ────────────────────────────────────────────────────────────────────

export type RegistryStats = {
	totalAgents: number;
	totalSkills: number;
	totalPlugins: number;
	totalTeams: number;
};

// ─── Client-side hook constants ───────────────────────────────────────────────

const ACTIVE_AGENTS: StatusArg = { status: "active" };
const ACTIVE_SKILLS: StatusArg = { status: "active" };
const ACTIVE_PLUGINS: StatusArg = { status: "active" };
const ACTIVE_TEAMS: TeamsStatusArg = { status: "active" };

// ─── Client-side hook (real-time via ConvexProvider) ─────────────────────────

/**
 * useRegistryStats — real-time hook that subscribes to VantageRegistry counts.
 * Returns null while loading.
 * Must be used inside <ConvexClientProvider>.
 */
export function useRegistryStats(): RegistryStats | null {
	const agents = useQuery(
		agentsList as FunctionReference<"query", "public", StatusArg, unknown[]>,
		ACTIVE_AGENTS,
	);
	const skills = useQuery(
		skillsList as FunctionReference<"query", "public", StatusArg, unknown[]>,
		ACTIVE_SKILLS,
	);
	const plugins = useQuery(
		pluginsList as FunctionReference<"query", "public", StatusArg, unknown[]>,
		ACTIVE_PLUGINS,
	);
	const teams = useQuery(
		teamsList as FunctionReference<
			"query",
			"public",
			TeamsStatusArg,
			unknown[]
		>,
		ACTIVE_TEAMS,
	);

	if (
		agents === undefined ||
		skills === undefined ||
		plugins === undefined ||
		teams === undefined
	) {
		return null;
	}

	return {
		totalAgents: agents.length,
		totalSkills: skills.length,
		totalPlugins: plugins.length,
		totalTeams: teams.length,
	};
}

// ─── useTeamDetails — real-time team/agent/skill data for team-grid ───────────

/**
 * useTeamDetails — subscribes to all active teams, agents and skills.
 * Groups agents and skills by team name and returns data keyed by team nameKey
 * so team-grid.tsx can look up details[team.nameKey] without any change to
 * the existing rendering logic.
 *
 * locale picks descriptionEn vs descriptionFr (falls back to description).
 * Returns isLoading=true while any query is still loading.
 */
export function useTeamDetails(locale: "en" | "fr"): TeamDetailsResult {
	const agents = useQuery(
		agentsList as FunctionReference<"query", "public", StatusArg, unknown[]>,
		ACTIVE_AGENTS,
	);
	const skills = useQuery(
		skillsList as FunctionReference<"query", "public", StatusArg, unknown[]>,
		ACTIVE_SKILLS,
	);

	const result = useMemo<TeamDetailsResult>(() => {
		if (agents === undefined || skills === undefined) {
			return { details: {}, allAgentNames: [], isLoading: true };
		}

		const typedAgents = agents as RegistryAgent[];
		const typedSkills = skills as RegistrySkill[];

		// Build details map keyed by team name
		const details: Record<string, TeamDetail> = {};

		for (const agent of typedAgents) {
			const key = agent.team ?? "";
			if (!key) continue;
			if (!details[key]) details[key] = { agents: [], skills: [] };
			const desc =
				locale === "fr"
					? (agent.descriptionFr ??
						agent.descriptionEn ??
						agent.description ??
						"")
					: (agent.descriptionEn ??
						agent.descriptionFr ??
						agent.description ??
						"");
			details[key].agents.push({ name: agent.name, description: desc });
		}

		for (const skill of typedSkills) {
			const key = skill.team ?? "";
			if (!key) continue;
			if (!details[key]) details[key] = { agents: [], skills: [] };
			const desc =
				locale === "fr"
					? (skill.descriptionFr ??
						skill.descriptionEn ??
						skill.description ??
						"")
					: (skill.descriptionEn ??
						skill.descriptionFr ??
						skill.description ??
						"");
			details[key].skills.push({
				name: skill.name,
				command: skill.command ?? `/${skill.name}`,
				description: desc,
			});
		}

		const allAgentNames = typedAgents.map((a) => a.name);

		return { details, allAgentNames, isLoading: false };
	}, [agents, skills, locale]);

	return result;
}
