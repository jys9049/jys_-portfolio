import { PropsWithChildren } from 'react';

export interface ITypography extends PropsWithChildren {
  variant?: IVariant;
}

type IVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'subtitle4'
  | 'subtitle5'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'caption1'
  | 'caption2'
  | 'caption3'
  | 'caption4'
  | 'caption5'
  | 'buttonL'
  | 'buttonM'
  | 'buttonS';
