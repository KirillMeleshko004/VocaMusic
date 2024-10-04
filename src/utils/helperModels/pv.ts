export type Pv = {
  id: number;
  author: string;
  disabled: boolean;
  pvType: 'Original' | 'Reprint' | 'Other';
  name: string;
  pvId: string;
  service: 'Youtube' | undefined;
  thumbUrl: string;
  url: string;
};
