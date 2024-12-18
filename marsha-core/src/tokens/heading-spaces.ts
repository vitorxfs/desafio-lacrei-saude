export type HeadingVariant =
  | 'headline-xl'
  | 'headline-lg'
  | 'headline-base'
  | 'headline-sm-highlight';

export type HeadingSpace = {
  gap: string;
  'margin-bottom': string;
}

export const headingSpaces: Record<HeadingVariant, HeadingSpace> = {
  'headline-xl': {
    gap: '12px',
    'margin-bottom': '24px',
  },
  'headline-lg': {
    gap: '11px',
    'margin-bottom': '24px',
  },
  'headline-base': {
    gap: '10px',
    'margin-bottom': '25px',
  },
  'headline-sm-highlight': {
    gap: '13px',
    'margin-bottom': '21px',
  },
}
