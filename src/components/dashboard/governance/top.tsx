import Manufacturing from "../../../assets/environmental-manufaturing/Manufacturing.svg?react";
import Management from "../../../assets/governance-manu/Management.svg?react";
import Document from "../../../assets/governance-manu/Document.svg?react";
import Inspection from "../../../assets/governance-manu/Inspection.svg?react";
import TopRow from "@/components/elements/topRow";
import type { TopRowMetric } from "@/components/elements/topRow";

export default function GovernanceTopRow() {
  const data: TopRowMetric[] = [
    {
      label: "Board meetings",
      icon: Management,
      bg: "#DAF7C7",
      value: "5",
      delta: "positive",
    },
    {
      label: "Policies Uploaded",
      icon: Document,
      bg: "#BBDEE8",
      value: "14",
      delta: "negative",
    },
    {
      label: "Governance Compliance",
      icon: Inspection,
      value: "30%",
      bg: "#C8EAFF",
      delta: "positive",
    },
  ];
  return (
    <TopRow data={data} title='Manufacturing' icon={Manufacturing} />
  );
}
