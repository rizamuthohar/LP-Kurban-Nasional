/**
 * Types and Data Structures for Kurban Nasional Investment
 */

export interface StatItem {
  id: string;
  value: string;
  number: number;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface ProblemItem {
  id: string;
  number: string;
  title: string;
  description: string;
  impact: string;
}

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
}

export interface EcosystemNode {
  id: string;
  name: string;
  category: 'core' | 'institution' | 'partner' | 'user';
  description: string;
  metrics: string;
  isAnchor?: boolean;
}

export interface JourneyStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  feature: string;
  icon: string;
}

export interface RevenueStream {
  id: string;
  title: string;
  description: string;
  type: string;
  potential: string;
  icon: string;
}

export interface InvestmentAllocation {
  id: string;
  category: string;
  amountFormatted: string;
  amountValue: number;
  percentage: number;
  details: string;
  monthlyBreakdown?: string;
  color: string;
}

export interface RoadmapMonth {
  month: string;
  title: string;
  badge: string;
  items: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
