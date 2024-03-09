import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { InicioDeSesion } from './components/InicioDeSesion/InicioDeSesion';
import React from 'react';

interface Props {
  className?: string;
}
export default memo(function App(props: Props) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <InicioDeSesion />
    </div>
  );
});

