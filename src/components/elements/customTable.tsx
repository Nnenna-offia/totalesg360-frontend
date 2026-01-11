import {
  useReactTable,
  type ColumnDef,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import { Box } from "@chakra-ui/react";

// Utility for initials
export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

// Generic Table component
interface CustomTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

export function CustomTable<T extends object>({ data, columns }: CustomTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
 <Box as="table" w="100%">
  <thead style={{ backgroundColor: "#F7FAFC" }}>
    {table.getHeaderGroups().map((headerGroup) => (
      <tr key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <th key={header.id} style={{ padding: "0.75rem", textAlign: "left" }}>
            {flexRender(header.column.columnDef.header, header.getContext())}
          </th>
        ))}
      </tr>
    ))}
  </thead>
  <tbody>
    {table.getRowModel().rows.map((row) => (
      <tr key={row.id} style={{ borderTop: "1px solid #E2E8F0" }}>
        {row.getVisibleCells().map((cell) => (
          <td key={cell.id} style={{ padding: "0.75rem" }}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</Box>

  );
}
