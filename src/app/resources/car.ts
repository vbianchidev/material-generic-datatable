import { autoserializeAs } from "cerializr";
import { Column } from "../datatable/decorators/columns";

export class Car {
  @autoserializeAs(Number)
  id: number;

  @autoserializeAs(String)
  @Column({
    order: 1,
    canSort: true,
  })
  model: string;

  @autoserializeAs(String)
  @Column()
  maker: string;
  
  @autoserializeAs(Number)
  @Column({
    canSort: true,
  })
  year: number;
}
