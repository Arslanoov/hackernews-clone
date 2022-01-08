import {
  columnsCount,
  colStartName,
  colEndName,
} from 'components/styled/vars/grid';

export const gridColumns = (padding: string) =>
  `grid-template-columns: [start] minmax(${padding}, 1fr)
  repeat(${columnsCount}, ${colStartName} 1fr ${colEndName})
  [end] minmax(${padding}, 1fr);`;
