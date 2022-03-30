import { readdirSync, readFileSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

const packageDir = `${__dirname}/../`;
const parseJsonFile = (path) => JSON.parse(readFileSync(path).toString());

const SUID_PKG_NAMES = readdirSync(packageDir);
const SUID_VERSIONS = SUID_PKG_NAMES.reduce((result, name) => {
  const pkg = parseJsonFile(`${packageDir}/${name}/package.json`);
  result[`@suid/${name}`] = pkg.version;
  if (name === "site") {
    result["solid-js"] = pkg.peerDependencies["solid-js"];
    result["vite"] = pkg.devDependencies["vite"];
    result["vite-plugin-solid"] = pkg.devDependencies["vite-plugin-solid"];
  }
  return result;
}, {});

const basePkg = parseJsonFile(`${packageDir}/../package.json`);
SUID_VERSIONS.typescript = basePkg.devDependencies.typescript;

export default defineConfig({
  define: {
    SUID_PKG_NAMES: SUID_PKG_NAMES.map((name) => `@suid/${name}`),
    SUID_VERSIONS,
  },
  plugins: [
    {
      name: "examples",
      enforce: "pre",
      transform(code, id) {
        if (id.includes("Example") && id.endsWith(".tsx")) {
          const exportDefaultRegex = /export\s+default\s+function\s+(\w+)/;
          const matches = exportDefaultRegex.exec(code);

          if (exportDefaultRegex) {
            const [, functionName] = matches;
            const originalCode = code
              .split(/\r?\n/)
              .filter((line) => !line.trim().startsWith("// eslint-disable"))
              .join("\n");

            code = code.replace(/export\s+default\s+function/, "function");
            code += `\n${functionName}.code = ${JSON.stringify(
              originalCode
            )};\n`;
            code += `\nexport default ${functionName}`;
            return code;
          }
        }
      },
    },
    solidPlugin(),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
  esbuild: {
    keepNames: true,
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
      "@suid/types": resolve(__dirname, "../types/src"),
      "@suid/css": resolve(__dirname, "../css/src"),
      "@suid/utils": resolve(__dirname, "../utils/src"),
      "@suid/base": resolve(__dirname, "../base/src"),
      "@suid/system": resolve(__dirname, "../system/src"),
      "@suid/material": resolve(__dirname, "../material/src"),
      "@suid/icons-material": resolve(__dirname, "../icons-material/lib"),
    },
  },
});