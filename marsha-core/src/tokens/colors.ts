export const primitiveColors = {
  'emerald-10': '#DFF2ED',
  'emerald-20': '#B2DFD0',
  'emerald-30': '#80CAB1',
  'emerald-40': '#4FB494',
  'emerald-50': '#4FB494',
  'emerald-60': '#018762',
  'emerald-70': '#017F5C',
  'emerald-80': '#007756',
  'emerald-90': '#014C37',
  'emerald-100': '#014C37',

  'purple-10': '#F9F3FF',
  'purple-20': '#D9C4EE',
  'purple-30': '#BF9CE2',
  'purple-40': '#A674D7',
  'purple-50': '#8C4DCC',
  'purple-60': '#7333B2',
  'purple-70': '#7B37BF',
  'purple-80': '#59288B',
  'purple-90': '#401D63',
  'purple-100': '#26113B',
  'purple-110': '#0D0614',
}

export type BackgroundColor =
  | 'background-default'
  | 'background-highlight'
  | 'background-accent-lighter'
  | 'background-accent-light'
  | 'background-accent-medium'
  | 'background-accent-base'
  | 'background-accent-dark'
  | 'background-accent-darker';

export const backgroundColors: Record<BackgroundColor, string> = {
  'background-default': '#ffffff',
  'background-highlight': '#F9F3FF',
  'background-accent-lighter': '#DFF2ED',
  'background-accent-light': '#B2DFD0',
  'background-accent-medium': '#4FB494',
  'background-accent-base': '#018762',
  'background-accent-dark': '#007756',
  'background-accent-darker': '#014C37',
}

export type ForegroundColor =
  | 'foreground-default'
  | 'foreground-default-medium'
  | 'foreground-default-dark'
  | 'foreground-accent-lighter'
  | 'foreground-accent-light'
  | 'foreground-accent-medium'
  | 'foreground-accent-base'
  | 'foreground-accent-dark'
  | 'foreground-accent-darker';

export const foregroundColors: Record<ForegroundColor, string> = {
  'foreground-default': '#CFCFCF',
  'foreground-default-medium': '#515151',
  'foreground-default-dark': '#131313',
  'foreground-accent-lighter': '#DFF2ED',
  'foreground-accent-light': '#B2DFD0',
  'foreground-accent-medium': '#4FB494',
  'foreground-accent-base': '#018762',
  'foreground-accent-dark': '#007756',
  'foreground-accent-darker': '#014C37',
}

export type TextColor =
  | 'text-heading'
  | 'text-body'
  | 'text-helper'
  | 'text-accent'
  | 'text-info'
  | 'text-info-dark'
  | 'text-warning'
  | 'text-invert'
  | 'text-error'
  | 'text-success'
  | 'text-hover'
  | 'text-pressed';

export const textColors: Record<TextColor, string> = {
  'text-heading': '#131313',
  'text-body': '#2d2d2d',
  'text-helper': '#404040',
  'text-accent': '#018762',
  'text-info': '#4D8ACB',
  'text-info-dark': '#28588A',
  'text-warning': '#963D1D',
  'text-invert': '#ffffff',
  'text-error': '#BC1C1C',
  'text-success': '#298A46',
  'text-hover': '#007756',
  'text-pressed': '#014C37',
}

export type Gradient =
  | 'gradient-lacrei'
  | 'gradient-header'
  | 'gradient-simbolo'
  | 'gradient-rosa';

export const gradients: Record<Gradient, Array<string>> = {
  'gradient-lacrei': ['#018383', '#014687'],
  'gradient-header': ['#F5FFFB', '#FFFFFF'],
  'gradient-simbolo': ['#008392', '#00BC86'],
  'gradient-rosa': ['#DF1098', '#BA17E2'],
};
