import assert from 'node:assert/strict';
import { runxDocs as docs } from '@x12i/runx-docs';

const books = docs.listBooks();
const useCases = docs.listUseCases();
assert(Array.isArray(books));
assert(Array.isArray(useCases));
assert(books.length + useCases.length > 0, 'The knowledge package should contain documentation');
console.log('Books:', books.map(book => ({ id: book.id, title: book.title })));
console.log('Use cases:', useCases.slice(0, 5).map(item => ({ id: item.id, title: item.title })));
if (useCases.length > 0) {
  const markdown = docs.getUseCaseMarkdown(useCases[0].id);
  assert.equal(typeof markdown, 'string');
  assert(markdown.length > 0);
  console.log('\nFirst use-case guide:\n' + markdown.slice(0, 1200));
}
