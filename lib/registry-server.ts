/**
 * registry-server.ts — server-only exports.
 * Safe to import in Server Components, RSC layouts, and metadata functions.
 * NO convex/react imports. NO useQuery. NO client hooks.
 */

import { ConvexHttpClient } from "convex/browser";
import type { FunctionReference } from "convex/server";
import { makeFunctionReference } from "convex/server";

// ─── Arg shapes ──────────────────────────────────────────────────────────────

type StatusArg = { status?: "active" | "draft" | "deprecated" };
type TeamsStatusArg = { status?: "active" | "planned" | "deprecated" };

// ─── Function references ─────────────────────────────────────────────────────

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

// ─── Server-side fetch (RSC / metadata / layout) ──────────────────────────────

const REGISTRY_URL = process.env.NEXT_PUBLIC_CONVEX_URL ?? "";

/**
 * fetchRegistryStats — server-side one-shot fetch for RSC and metadata.
 * Does NOT subscribe to real-time updates.
 * Falls back to zero counts on error so the page always renders.
 */
export async function fetchRegistryStats(): Promise<RegistryStats> {
	if (!REGISTRY_URL) {
		return { totalAgents: 0, totalSkills: 0, totalPlugins: 0, totalTeams: 0 };
	}

	const client = new ConvexHttpClient(REGISTRY_URL);

	try {
		const [agents, skills, plugins, teams] = await Promise.all([
			client.query(
				agentsList as FunctionReference<
					"query",
					"public",
					StatusArg,
					unknown[]
				>,
				{ status: "active" },
			),
			client.query(
				skillsList as FunctionReference<
					"query",
					"public",
					StatusArg,
					unknown[]
				>,
				{ status: "active" },
			),
			client.query(
				pluginsList as FunctionReference<
					"query",
					"public",
					StatusArg,
					unknown[]
				>,
				{ status: "active" },
			),
			client.query(
				teamsList as FunctionReference<
					"query",
					"public",
					TeamsStatusArg,
					unknown[]
				>,
				{ status: "active" },
			),
		]);

		return {
			totalAgents: agents.length,
			totalSkills: skills.length,
			totalPlugins: plugins.length,
			totalTeams: teams.length,
		};
	} catch {
		return { totalAgents: 0, totalSkills: 0, totalPlugins: 0, totalTeams: 0 };
	}
}
