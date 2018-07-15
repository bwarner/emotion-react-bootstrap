import React from 'react';

export default function decorator(story) {
  return (
    <div>
      <div
        style={{
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
