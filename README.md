# TypeScript bug: LF newlines in template strings needlessly escaped

## Reproduction

Install TypeScript:

```bash
npm install
```

Run the minimal reproduction:

```bash
node index.js
```

Expected to get `\n`. Instead got `\\n`
