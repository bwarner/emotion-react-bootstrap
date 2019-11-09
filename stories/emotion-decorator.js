import React from 'react';
// eslint-disable-next-line emotion/no-vanilla
import { cache } from 'emotion';
import { CacheProvider } from '@emotion/core';

export default function decorator(story) {
  return (
    <CacheProvider value={cache}>
      <div>
        <div
          style={{
            height: '100%',
            minHeight: 600,
            minWidth: 320,
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
    </CacheProvider>
  );
}
