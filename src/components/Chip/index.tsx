import * as React from 'react';

import './chip.scss';

export interface ChipProps {
  children: React.ReactNode;
}

export const Chip = ({ children }: ChipProps) => (
  <div className="chip">{children}</div>
);
