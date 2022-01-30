import { ColumnModel } from "./columns.models";

export class TableModel {
  columns: ColumnModel[] = [];

  addColumn(column: ColumnModel) {
    this.columns = [...this.columns, column];
  }
}
