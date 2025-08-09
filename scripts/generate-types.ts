import { compileFromFile } from "json-schema-to-typescript";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

async function main() {
  const schemas = [
    {
      in: join(process.cwd(), "docs/JSON_Schemas/plan.schema.json"),
      out: join(process.cwd(), "src/types/plan.d.ts"),
    },
    {
      in: join(process.cwd(), "docs/JSON_Schemas/recipe.schema.json"),
      out: join(process.cwd(), "src/types/recipe.d.ts"),
    },
    {
      in: join(process.cwd(), "docs/JSON_Schemas/shopping_list.schema.json"),
      out: join(process.cwd(), "src/types/shopping_list.d.ts"),
    },
  ];

  for (const { in: inputPath, out: outputPath } of schemas) {
    const ts = await compileFromFile(inputPath, {
      bannerComment:
        "/** AUTO-GENERATED FILE. DO NOT EDIT MANUALLY. Generated from JSON Schema */",
      style: {
        singleQuote: true,
      },
      unknownAny: false,
      strictIndexSignatures: true,
    });
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, ts);
    console.log(`Generated: ${outputPath}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
