import { execSync } from "child_process";
import { readdirSync, statSync } from "fs";
import { join, dirname } from "path";

const DIST = "dist";
const PASSWORD = process.env.STATICRYPT_PASSWORD;
if (!PASSWORD) {
  console.error("ERROR: STATICRYPT_PASSWORD env var is required");
  process.exit(1);
}

function findHtml(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (full.startsWith(join(DIST, "_astro"))) continue;
    if (statSync(full).isDirectory()) {
      files.push(...findHtml(full));
    } else if (full.endsWith(".html")) {
      files.push(full);
    }
  }
  return files;
}

const htmlFiles = findHtml(DIST);
console.log(`Encrypting ${htmlFiles.length} HTML files...`);

// Encrypt each file in-place: output to its own directory
for (const file of htmlFiles) {
  const dir = dirname(file);
  execSync(
    `npx staticrypt "${file}" -d "${dir}" --short --template-color-primary "#0f172a" --template-color-secondary "#3b82f6" --template-title "Market Watch" --template-instructions "Entrez le mot de passe." --template-button "Déverrouiller" --remember 30`,
    { stdio: "inherit", shell: true, env: { ...process.env, STATICRYPT_PASSWORD: PASSWORD } }
  );
}

console.log(`Done! ${htmlFiles.length} files encrypted.`);
