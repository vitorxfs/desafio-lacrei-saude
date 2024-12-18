export type TypographyVariant =
  | 'headline-xl'
  | 'headline-lg'
  | 'headline-base'
  | 'headline-sm'
  | 'headline-sm-highlight'
  | 'text-xl'
  | 'text-base'
  | 'text-sm'
  | 'text-xs'
  | 'text-xl-highlight'
  | 'text-base-highlight'
  | 'text-sm-highlight'
  | 'text-xs-highlight';

export type TypographyStyles = {
  'font-size': string;
  'font-weight': string;
  'line-height': string;
};

export const typography: Record<TypographyVariant, TypographyStyles> = {
  'headline-xl': {
    'font-size': '48px',
    'font-weight': 'bold',
    'line-height': '120%',
  },
  'headline-lg': {
    'font-size': '40px',
    'font-weight': 'bold',
    'line-height': '120%',
  },
  'headline-base': {
    'font-size': '32px',
    'font-weight': 'bold',
    'line-height': '120%',
  },
  'headline-sm': {
    'font-size': '24px',
    'font-weight': 'regular',
    'line-height': '150%',
  },
  'headline-sm-highlight': {
    'font-size': '24px',
    'font-weight': 'bold',
    'line-height': '150%',
  },

  'text-xl-highlight': {
    'font-size': '18px',
    'font-weight': 'bold',
    'line-height': '150%',
  },
  'text-xl': {
    'font-size': '18px',
    'font-weight': 'regular',
    'line-height': '150%',
  },
  'text-base': {
    'font-size': '16px',
    'font-weight': 'regular',
    'line-height': '150%',
  },
  'text-base-highlight': {
    'font-size': '16px',
    'font-weight': 'bold',
    'line-height': '150%',
  },
  'text-sm': {
    'font-size': '14px',
    'font-weight': 'regular',
    'line-height': '150%',
  },
  'text-sm-highlight': {
    'font-size': '14px',
    'font-weight': 'bold',
    'line-height': '150%',
  },
  'text-xs': {
    'font-size': '12px',
    'font-weight': 'regular',
    'line-height': '150%',
  },
  'text-xs-highlight': {
    'font-size': '14px',
    'font-weight': 'bold',
    'line-height': '150%',
  },
}
