export interface Asset {
  id?: number;
  code: string;
  name: string;
  category: string;
  serialNumber: string;
  location: string;
  purchaseDate: string;
  purchaseValue: number;
  status: 'AVAILABLE' | 'ASSIGNED' | 'MAINTENANCE' | 'RETIRED';
}
