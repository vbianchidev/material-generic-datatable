import 'reflect-metadata';
import { ColumnModel } from "./columns.models";
import { TableModel } from "./table.models";

export const tableSymbol = Symbol("column");

export function Column(options: Partial<ColumnModel> = {}) {

  return function(target: any, propertyKey: string) {
    if (!target[tableSymbol]) {
      target[tableSymbol] = new TableModel();
    }
    
    options.key = options.key || propertyKey;

    const propType = Reflect.getMetadata('design:type', target, propertyKey);
    options.propertyType = propType.name;

    const columnOptions = new ColumnModel(options);
    target[tableSymbol].addColumn(columnOptions);
  };
}
