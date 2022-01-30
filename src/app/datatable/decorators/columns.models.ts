export class ColumnModel {
  key: string;
  order: number;
  propertyType: any;
  canSort: boolean;

  constructor(options: Partial<ColumnModel> = {}) {
    this.key = options.key;
    this.order = options.order || 0;
    this.propertyType = options.propertyType;
    this.canSort = options.canSort || false;
  }
}
