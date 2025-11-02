import "dotenv/config"
import fs from "node:fs/promises";
import path from "path";
import fm from "front-matter";
import { dbQueryRow } from "../app/db.server";

const CONTENT_DIR = path.join(process.cwd(), "app", "content");

interface FrontMatterAttributes {
    type: 'post' | 'link';
    title: string;
    publishedAt: string;
    description?: string;
    externalUrl?: string;
    source?: string;
    tags?: string[];
}

async function getMarkdownFilePaths(dir: string): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const filePromises = entries.map(async (entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            return getMarkdownFilePaths(fullPath);
        } else if (entry.isFile() && entry.name.endsWith(".md")) {
            return [fullPath];
        }
        return [];
    });

    const nestedFiles = await Promise.all(filePromises);
    return nestedFiles.flat();
}

async function seed() {
    console.log("🌱 Starting to seed content...");

    const filePaths = await getMarkdownFilePaths(CONTENT_DIR);

    if (filePaths.length === 0) {
        console.log("No markdown files found in app/content. Exiting.");
        return;
    }

    console.log(`Found ${filePaths.length} markdown files to process.`);

    for (const filePath of filePaths) {
        const filename = path.basename(filePath);
        console.log(`Processing ${filename}...`);

        const fileContent = await fs.readFile(filePath, "utf-8");
        const { attributes } = fm<FrontMatterAttributes>(fileContent);

        const match = filename.match(/^(.*?)(?:\.(en|es))?\.md$/);
        if (!match) {
            console.warn(`- Skipping ${filename}: could not parse slug and lang.`);
            continue;
        }

        const slug = match[1];
        const lang = match[2] || null;

        if (attributes.type === 'post') {
            if (!lang) {
                console.warn(`- Skipping post ${filename}: Posts must have a language in their filename.`);
                continue;
            }

            const sql = `
                            INSERT INTO "content" (slug, lang, type, title, description, "published_at", tags, updated_at)
                            VALUES ($1, $2, 'post', $3, $4, $5, $6, CURRENT_TIMESTAMP)
                            ON CONFLICT (slug, lang) WHERE lang IS NOT NULL DO UPDATE SET
                            title = EXCLUDED.title,
                            description = EXCLUDED.description,
                            "published_at" = EXCLUDED."published_at",
                            tags = EXCLUDED.tags,
                            updated_at = CURRENT_TIMESTAMP
                            RETURNING id_content;
                        `;
            const values = [slug, lang, attributes.title, attributes.description, attributes.publishedAt, attributes.tags || []];
            const result = await dbQueryRow<{ id_content: number }>(sql, values);
            console.log(`✅ Upserted post with ID: ${result.id_content}`);

        } else if (attributes.type === 'link') {
            const sql = `
                            INSERT INTO "content" (slug, lang, type, title, "external_url", source, "published_at", tags, updated_at)
                            VALUES ($1, NULL, 'link', $2, $3, $4, $5, $6, CURRENT_TIMESTAMP)
                            ON CONFLICT (slug) WHERE lang IS NULL DO UPDATE SET
                            title = EXCLUDED.title,
                            "external_url" = EXCLUDED."external_url",
                            source = EXCLUDED.source,
                            "published_at" = EXCLUDED."published_at",
                            tags = EXCLUDED.tags,
                            updated_at = CURRENT_TIMESTAMP
                            RETURNING id_content;
                        `;
            const values = [slug, attributes.title, attributes.externalUrl, attributes.source, attributes.publishedAt, attributes.tags || []];
            const result = await dbQueryRow<{ id_content: number }>(sql, values);
            console.log(`🔗 Upserted link with ID: ${result.id_content}`);
        }
    }

    console.log("🌳 Seeding complete!");
}

seed().catch((e) => {
    console.error("Seeding failed:");
    console.error(e);
    process.exit(1);
});