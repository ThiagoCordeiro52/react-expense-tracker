import { Item } from '../../types/Item';
import { TableColumn, TableLine } from './styles';

type TableItemProps = {
  item: Item;
};

export function TableItem({ item }: TableItemProps) {
  return (
    <TableLine>
      <TableColumn>...</TableColumn>
      <TableColumn>{item.category}</TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>{item.value}</TableColumn>
    </TableLine>
  );
}
