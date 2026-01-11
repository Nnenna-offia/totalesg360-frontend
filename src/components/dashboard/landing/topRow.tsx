import ESG from "../../../assets/dashboard/esg.png";
import Emissions from "../../../assets/dashboard/emissions.png";
import Employee from "../../../assets/dashboard/employee.png";
import Compliance from "../../../assets/dashboard/compliance.png";
import { Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import UpTrend from "../../../assets/dashboard/up-trend.svg?react";
import DownTrend from "../../../assets/dashboard/down-trend.svg?react";

export default function DashboardTopRow() {
  const data = [
    {
      label: "ESG Score",
      icon: ESG,
      value: "78/100",
      delta: "positive",
      change: 8.5,
      timeline: "Q2",
    },
    {
      label: "Total Emissions",
      icon: Emissions,
      value: "52.4 tCO₂e",
      delta: "negative",
      change: 23,
      timeline: "Q3",
    },
    {
      label: "Employee Count",
      icon: Employee,
      value: "432",
      delta: "positive",
      change: 4.5,
      timeline: "Q3",
    },
    {
      label: "Compliance Issues",
      icon: Compliance,
      value: "39%",
      delta: "negative",
      change: 2.5,
      timeline: "Q2",
    },
  ];
  return (
    <Flex alignItems={"center"} gap={"2rem"}>
      {data.map((item) => (
        <Flex
          key={item.label}
          flex={1}
          boxShadow={"md"}
          bg={"white"}
          borderRadius={"md"}
          p={"1.5rem"}
          flexDirection={"column"}
          gap={"1.95rem"}
        >
          <Flex
            alignItems={"start"}
            justifyContent={"space-between"}
            gap={".75rem"}
          >
            <Stack gap={"1rem"}>
              <Text fontSize={"1rem"} fontWeight={"600"} color={"#606060"}>
                {item.label}
              </Text>
              <Text fontSize={"1.75rem"} fontWeight={"700"} color={"#202224"}>
                {item.value}
              </Text>
            </Stack>
            <Image src={item.icon} alt={item.label} />
          </Flex>

          <Text
            fontSize={"1"}
            color={item.delta === "positive" ? "green.500" : "red.500"}
            fontWeight={"600"}
            display={"flex"}
            alignItems={"center"}
            gap={'.5rem'}
          >
            {item.delta === "positive" ? (
              <Icon as={UpTrend} />
            ) : (
              <Icon as={DownTrend} />
            )}
            {item.change}%{" "}
            <span style={{ color: "#606060", display: "inline" }}>
             {item.delta === "positive" ? "up" : "down"} from {item.timeline}
            </span>
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
