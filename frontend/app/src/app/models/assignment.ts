export interface Assignment {
  id?: number;
  assignedAt: string;
  returnedAt?: string | null;
  notes: string;
  asset?: any;
  employee?: any;
}
