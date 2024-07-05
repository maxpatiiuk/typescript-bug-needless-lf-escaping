# TypeScript bug: LF newlines in template strings needlessly escaped

This repository is a reproduction for a
[TypeScript bug](https://github.com/microsoft/TypeScript/issues/59150)

## Reproduction

1. Clone this repository:

   ```bash
   git clone https://github.com/maxpatiiuk/typescript-bug-needless-lf-escaping
   ```

2. Install TypeScript:

   ```bash
   npm install
   ```

3. Run the minimal reproduction:

   ```bash
   node index.js
   ```

Expected to get `\n`. Instead got `\\n`
