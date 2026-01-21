import { createColumnHelper } from "@tanstack/react-table";
import { Text } from "@chakra-ui/react";
// import { type ColumnDef } from "@tanstack/react-table";


interface TargetRow {
  pillar: string;
  target_area: string;
  target_type: string;
  baseline_year: number;
  baseline_value: number;
  target_value: number;
  unit: string;
  frequency: string;
  target_year: number;
  department: string;
}

const columnHelper = createColumnHelper<TargetRow>();

export const createColumnDef = () => {
  return [
    columnHelper.accessor("pillar", {
      header: () => (
        <Text fontSize={".875rem"} fontWeight={600}>
          Pillar
        </Text>
      ),
      cell: (info) => (
        <Text fontSize={".75rem"} fontWeight={500}>
          {info.getValue()}
        </Text>
      ),
    }),

    columnHelper.accessor("target_area", {
      header: () => (
        <Text fontSize={".875rem"} fontWeight={600}>
          Target Area
        </Text>
      ),
      cell: (props) => (
        <Text fontSize={".75rem"} fontWeight={500}>
          {props.row.original.target_area}
        </Text>
      ),
    }),

    columnHelper.accessor("target_type", {
      header: () => (
        <Text fontSize={".875rem"} fontWeight={600}>
          Target Type
        </Text>
      ),
      cell: (props) => (
        <Text fontSize={".75rem"} fontWeight={500}>
          {props.row.original.target_type}
        </Text>
      ),
    }),

    columnHelper.accessor("baseline_year", {
      header: () => (
        <Text fontSize={".875rem"} fontWeight={600}>
          Baseline Year
        </Text>
      ),
      cell: (props) => (
        <Text fontSize={".75rem"} fontWeight={500}>
          {props.row.original.baseline_year}
        </Text>
      ),
    }),

    columnHelper.accessor("baseline_value", {
      header: () => (
        <Text fontSize={".875rem"} fontWeight={600}>
          Baseline Value
        </Text>
      ),
      cell: (props) => (
        <Text fontSize={".75rem"} fontWeight={500}>
          {props.row.original.baseline_value}
        </Text>
      ),
    }),

    columnHelper.accessor("target_value", {
      header: () => (
        <Text fontSize={".875rem"} fontWeight={600}>
          Target Value
        </Text>
      ),
      cell: (props) => (
        <Text fontSize={".75rem"} fontWeight={500}>
          {props.row.original.target_value}
        </Text>
      ),
    }),

    columnHelper.accessor("unit", {
      header: () => (
        <Text fontSize={".875rem"} fontWeight={600}>
          Unit
        </Text>
      ),
      cell: (props) => (
        <Text fontSize={".75rem"} fontWeight={500}>
          {props.row.original.unit}
        </Text>
      ),
    }),

    columnHelper.accessor("frequency", {
      header: () => (
        <Text fontSize={".875rem"} fontWeight={600}>
          Reporting Frequency
        </Text>
      ),
      cell: (props) => (
        <Text fontSize={".75rem"} fontWeight={500}>
          {props.row.original.frequency}
        </Text>
      ),
    }),

    columnHelper.accessor("target_year", {
      header: () => (
        <Text fontSize={".875rem"} fontWeight={600}>
          Target Year
        </Text>
      ),
      cell: (props) => (
        <Text fontSize={".75rem"} fontWeight={500}>
          {props.row.original.target_year}
        </Text>
      ),
    }),

    columnHelper.accessor("department", {
      header: () => (
        <Text fontSize={".875rem"} fontWeight={600}>
          Responsible Dept.
        </Text>
      ),
      cell: (props) => (
        <Text fontSize={".75rem"} fontWeight={500}>
          {props.row.original.department}
        </Text>
      ),
    }),
  ];
};
