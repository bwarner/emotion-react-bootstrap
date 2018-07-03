import React from 'react';
import {extractCritical} from 'emotion-server';
import {renderToString} from 'react-dom/server';

export default function decorator(story) {
  const { css } = extractCritical(renderToString(story()));

  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: css,
        }}
      />
      <div style={{
        height: '100%',
        minHeight: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flexAlign: 'center',
      }}
      >
          {story()}
      </div>
    </div>
  );
}
