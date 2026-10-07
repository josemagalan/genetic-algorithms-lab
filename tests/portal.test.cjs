'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { messages, tools, resolveLanguage, toolHref } = require('../js/content.js');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

test('every visible text and accessible label exists in both languages', () => {
  assert.deepEqual(Object.keys(messages.es).sort(), Object.keys(messages.en).sort());
  const keys = [...html.matchAll(/data-i18n(?:-aria)?="([^"]+)"/g)].map((match) => match[1]);
  assert.ok(keys.length > 50);
  for (const key of keys) {
    for (const lang of ['es', 'en']) assert.ok(typeof messages[lang][key] === 'string' && messages[lang][key].trim(), lang + ': ' + key);
  }
});

test('a shared URL wins over saved preferences; invalid values use a supported fallback', () => {
  assert.equal(resolveLanguage('?lang=en', 'es', 'es-ES'), 'en');
  assert.equal(resolveLanguage('?lang=es', 'en', 'en-GB'), 'es');
  assert.equal(resolveLanguage('?lang=fr', 'en', 'es-ES'), 'en');
  assert.equal(resolveLanguage('', null, 'en-US'), 'en');
  assert.equal(resolveLanguage('', 'fr', 'fr-FR'), 'es');
  assert.equal(resolveLanguage('', null, null), 'es');
});

test('all application and Moodle destinations preserve the selected language', () => {
  for (const tool of tools) {
    for (const lang of ['es', 'en']) {
      for (const page of [undefined, 'moodle']) {
        const url = new URL(toolHref(tool, lang, page));
        assert.equal(url.origin, 'https://josemagalan.github.io');
        assert.equal(url.pathname, '/' + tool + '/');
        const hash = new URLSearchParams(url.hash.slice(1));
        assert.equal(hash.get('lang'), lang);
        assert.equal(hash.get('page'), page || null);
      }
    }
  }
  assert.throws(() => toolHref('unknown', 'es'));
  assert.throws(() => toolHref('selection-ga', 'fr'));
  assert.throws(() => toolHref('selection-ga', 'es', 'unknown'));
});

test('the page remains navigable with JavaScript disabled and uses existing destinations', () => {
  for (const tool of tools) {
    assert.ok(html.includes('href="https://josemagalan.github.io/' + tool + '/#lang=es"'));
    assert.ok(html.includes('href="https://github.com/josemagalan/' + tool + '"'));
    assert.ok(html.includes('href="https://josemagalan.github.io/' + tool + '/#page=moodle&amp;lang=es"'));
  }
  assert.equal((html.match(/class="tool-card /g) || []).length, 3);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, new Set(ids).size);
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]), match[1]);
});

test('all local scripts, styles, icons and logos exist; no CDN is required', () => {
  const files = [...html.matchAll(/(?:src|href)="((?:css|js|img)\/[^\"]+)"/g)].map((match) => match[1]);
  for (const file of files) assert.ok(fs.existsSync(path.join(root, file.split('?')[0])), file);
  assert.equal(files.filter((file) => file.endsWith('.png')).length, 4);
  assert.ok(!html.includes('https://cdn.'));
});

test('EvoTraveller and Shiny keep their canonical app and source URLs in both languages', () => {
  for (const url of ['https://evotraveller.streamlit.app/', 'https://github.com/jismartin/evotraveller',
    'https://josemagalan.shinyapps.io/SelectionMechanisms/', 'https://github.com/josemagalan/SelectionMechanisms']) {
    assert.ok(html.includes('href="' + url + '"'), url);
  }
  assert.equal((html.match(/data-resource="/g) || []).length, 2);
  // These apps do not share the operator tools' language hash contract.
  assert.ok(!html.includes('streamlit.app/#lang='));
  assert.ok(!html.includes('shinyapps.io/SelectionMechanisms/#lang='));
});

test('published and accepted papers remain distinct; the accepted paper has no invented DOI or download', () => {
  const published = html.match(/<article[^>]+data-publication-status="published"[\s\S]*?<\/article>/)[0];
  const accepted = html.match(/<article[^>]+data-publication-status="accepted"[\s\S]*?<\/article>/)[0];
  assert.ok(published.includes('https://doi.org/10.1007/978-3-031-82334-3_2'));
  assert.ok(published.includes('2025'));
  assert.ok(accepted.includes('Visualizing Selection Pressure'));
  assert.ok(accepted.includes('CIO 2026'));
  assert.ok(!accepted.includes('doi.org'));
  assert.ok(!html.includes('.docx'));
  assert.ok(!html.includes('.pdf'));
  for (const language of ['es', 'en']) {
    assert.notEqual(messages[language].publishedStatus, messages[language].acceptedStatus);
    assert.ok(messages[language].acceptedNote);
  }
});
