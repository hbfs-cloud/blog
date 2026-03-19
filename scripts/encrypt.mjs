import { execSync } from "child_process";
import { readdirSync, statSync } from "fs";
import { join } from "path";

const DIST = "dist";
const PASSWORD = process.env.STATICRYPT_PASSWORD || "tss!##123";

function findHtml(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
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

const fileList = htmlFiles.map(f => `"${f}"`).join(" ");

// Pass password via STATICRYPT_PASSWORD env var to avoid shell escaping issues
execSync(
  `npx staticrypt ${fileList} -d "${DIST}" --short --template-color-primary "#0f172a" --template-color-secondary "#3b82f6" --template-title "Market Watch" --template-instructions "Entrez le mot de passe pour accéder au contenu." --template-button "Déverrouiller" --remember 30`,
  { stdio: "inherit", shell: true, env: { ...process.env, STATICRYPT_PASSWORD: PASSWORD } }
);

console.log(`Done! ${htmlFiles.length} files encrypted.`);
