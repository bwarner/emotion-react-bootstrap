import React from 'react';
import { extractCritical, renderStylesToString } from 'emotion-server';
import { renderToString } from 'react-dom/server';
import { hydrate } from 'emotion';

export default function decorator(story) {
  console.log(
    'renderStylesToString ',
    renderStylesToString(renderToString(story())),
  );
  const { ids, html, css } = extractCritical(renderToString(story()));
  console.log('html ', html);
  console.log('css ', css);
  console.log('hydrated ', hydrate(ids));

  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: css,
        }}
      />
      <h1>Wrapper</h1>
      {story()}
    </div>
  );
}
