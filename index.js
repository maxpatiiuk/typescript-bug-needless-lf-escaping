import ts from 'typescript';

// LF new line is needlessly escaped:
const expression = ts.factory.createNoSubstitutionTemplateLiteral('\n');

const printer = ts.createPrinter();
const printed = printer.printNode(
  ts.EmitHint.Unspecified,
  expression,
  ts.createSourceFile('index.ts', '', ts.ScriptTarget.Latest)
);

// Expected \n
// Received \\n
console.log(printed);
if (printed === '`\n`') console.log('Correct');
else if (printed === '`\\n`') console.error('Incorrect');
