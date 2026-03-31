import { NextResponse } from "next/server";

interface IntakePayload {
	name: string;
	email: string;
	company?: string;
	teams?: string[];
	challenge?: string;
	locale?: string;
}

export async function POST(request: Request) {
	try {
		const body: IntakePayload = await request.json();

		const { name, email, company, teams, challenge, locale } = body;

		if (!name?.trim() || !email?.trim()) {
			return NextResponse.json(
				{ error: "Name and email are required." },
				{ status: 400 },
			);
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: "Invalid email address." },
				{ status: 400 },
			);
		}

		// Log payload and return success. Replace with Resend / Nodemailer / Convex action in production.
		const lines = [
			`Name: ${name}`,
			`Email: ${email}`,
			company ? `Company: ${company}` : null,
			teams?.length ? `Teams: ${teams.join(", ")}` : null,
			challenge ? `Challenge: ${challenge}` : null,
			`Locale: ${locale ?? "unknown"}`,
		].filter(Boolean);

		// Log to console in dev; swap for email service in prod
		console.log("[intake-form] New lead:\n", lines.join("\n"));

		return NextResponse.json({ success: true });
	} catch {
		return NextResponse.json(
			{ error: "Internal server error." },
			{ status: 500 },
		);
	}
}
