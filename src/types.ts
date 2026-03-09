export interface Campaign {
  id: string;
  name: string;
  status: string;
}

export interface Analytics {
  campaignId: string;
  metric: string;
  value: number;
}
