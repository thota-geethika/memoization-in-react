import React from 'react'
import { memo } from 'react';

function Child() {
    console.log("rendering");
  return (
    <div>
      <h3>Hello</h3>
    </div>
  )
}

export default memo(Child);
