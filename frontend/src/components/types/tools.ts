export interface ToolType {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export type ToolInput = Omit<ToolType, 'id'>;
