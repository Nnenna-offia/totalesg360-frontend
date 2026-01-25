import Manufacturing from "../../../assets/environmental-manufaturing/Manufacturing.svg?react";
import Staff from "../../../assets/social/Staff.svg?react";
import Gender from "../../../assets/social/Gender.svg?react";
import Training from "../../../assets/social/Training.svg?react";
import TopRow from "@/components/elements/topRow";
import type { TopRowMetric } from "@/components/elements/topRow";

export default function SocialTopRow() {
  const data: TopRowMetric[] = [
    {
      label: "Total Employees",
      icon: Staff,
      bg: "#DAF7C7",
      value: "1,345",
      delta: "positive",
    },
    {
      label: "Male/Female Ratio",
      icon: Gender,
      bg: "#BBDEE8",
      value: "45% / 55%",
      delta: "negative",
    },
    {
      label: "Training Goals",
      icon: Training,
      value: "73%",
      bg: "#C8EAFF",
      delta: "positive",
    },
  ];
  return (
    <TopRow data={data} title='Manufacturing' icon={Manufacturing} />
  );
}
