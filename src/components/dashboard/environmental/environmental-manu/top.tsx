import {
  Button,
  Flex,
  Icon,
  Input,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import Manufacturing from "../../../../assets/environmental-manufaturing/Manufacturing.svg?react";
import { BiExport } from "react-icons/bi";
import Lightening from "../../../../assets/environmental-manufaturing/Lightning Bolt.svg?react";
import UpTrend from "../../../../assets/dashboard/up-trend.svg?react";
import DownTrend from "../../../../assets/dashboard/down-trend.svg?react";
import Cloud from "../../../../assets/environmental-manufaturing/CO2.svg?react";
import Water from "../../../../assets/environmental-manufaturing/Water.svg?react";

export default function EnvironmentalTopRow() {
  const data = [
    {
      label: "Total Energy Consumed",
      icon: Lightening,
      value: "1,250k",
      unit: "kWh",
      delta: "positive",
    },
    {
      label: "Total Emissions",
      icon: Cloud,
      value: "8,504",
      unit: "tCO₂e",
      delta: "negative",
    },
    {
      label: "Total Water Usage",
      icon: Water,
      value: "300k",
      unit: "m³",
      delta: "positive",
    },
  ];
  return (
    <Flex alignItems={"center"} gap={"2rem"}>
      <Box
        p={"1.375rem"}
        bg={"white"}
        boxShadow={"md"}
        borderRadius={"md"}
        flex={1}
      >
        <Flex alignItems={"center"} gap={".625rem"}>
          <Box bg={"#C9EAFF"} p="1rem" borderRadius={"1rem"}>
            <Icon as={Manufacturing} />
          </Box>{" "}
          <Flex flexDirection={"column"} gap={0}>
            <Text fontSize={".875rem"} fontWeight={"500"} color={"#606060"}>
              Sector:{" "}
            </Text>
            <Text fontSize={"1.75rem"} fontWeight={"700"} color={"#202224"}>
              Manufacturing{" "}
            </Text>
          </Flex>
        </Flex>

        <Text
          mt={".375rem"}
          color={"#5F8AA6"}
          fontWeight={600}
          fontSize={".75rem"}
        >
          Last Updated: 2 hours ago
        </Text>
        <Flex gap={".375rem"}>
          <Input
            placeholder="January 2025 - June 2025"
            border={"1px solid #2A2F3B"}
          />
          <Button
            bg={"transparent"}
            color={"#2A2F3B"}
            border={"1px solid #2A2F3B"}
          >
            <Icon as={BiExport} />
            Export Report
          </Button>
        </Flex>
      </Box>
      <Flex
        boxShadow={"md"}
        bg={"white"}
        gap={"2rem"}
        borderRadius={"md"}
        p={"1.75rem"}
      >
        {data.map((item) => (
          <Flex
            key={item.label}
            //   flex={1}
            //   boxShadow={"md"}
            //   bg={"white"}
            //   borderRadius={"md"}
            //   p={"1.5rem"}
            flexDirection={"column"}
            gap={"1rem"}
          >
            <Flex
              alignItems={"center"}
              // justifyContent={"space-between"}
              gap={".75rem"}
            >
              <Box bg={"#C9EAFF"} p="1rem" borderRadius={"1rem"}>
                <Icon as={item.icon} />
              </Box>

              <Stack gap={0}>
                <Text fontSize={"1.25rem"} fontWeight={"800"} color={"#333333"}>
                  {item.value}
                </Text>
                <Text fontSize={"1rem"} fontWeight={"800"} color={"#333333"}>
                  ({item.unit})
                </Text>
              </Stack>
              {/* <Image src={item.icon} alt={item.label} /> */}
            </Flex>

            <Text
              fontSize={".8rem"}
              fontWeight={"600"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              maxW={"90%"}
              gap={".2rem"}
              color={"#616161ff"}
            >
              {item.label}
              {item.delta === "positive" ? (
                <Stack gap={0}>
                  <Icon as={UpTrend} />
                  <Text fontSize={".7rem"}>Up</Text>
                </Stack>
              ) : (
                <Stack gap={0}>
                  <Icon as={DownTrend} />
                  <Text fontSize={".7rem"}>Down</Text>
                </Stack>
              )}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
