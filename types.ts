import { ReactNode } from 'react';

export interface PricingCardProps {
  title: string;
  priceHighlight: string;
  installmentHighlight: string;
  note: string;
  buttonText: string;
  detailsContent: ReactNode;
  isRecommended?: boolean;
}

export interface BulletPointProps {
  text: string;
}
