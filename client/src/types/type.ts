import { ReactNode } from 'react';

export type TextStyleT = {
  size?: string;
  color?: string;
  weight?: '300' | '500' | '700';
};

export interface Props {
  children: ReactNode;
}

export type IconStyle = {
  width: number;
  height: number;
  color: string;
};