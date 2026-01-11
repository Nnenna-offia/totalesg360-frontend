import Male from "../../../../assets/dashboard/male-icon.svg?react";
import Female from "../../../../assets/dashboard/female-icon.svg?react";
import Employee from "../../../../assets/dashboard/employee-icon.svg?react";
import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";

export default function EmployeeCards() {
  const series = [75, 25];
  const options = {
    chart: {
      type: "donut" as const,
    },

    dataLabels: {
      enabled: false, // remove numbers on slices
    },

    tooltip: {
      enabled: false, // remove hover popup
    },

    legend: {
      show: false,
    },

    stroke: {
      width: 0, // remove white separator line
    },

    colors: ["#2C92D5", "#545454"], // first slice, second slice

    plotOptions: {
      pie: {
        donut: {
          size: "45%", // control donut thickness
        },
      },
    },

    responsive: [
      {
        breakpoint: 480,
      },
    ],
  };

  return (
    <Box>
      <Box display={"flex"} gap={"3rem"} alignItems={"center"} mb={"1rem"}>
        <Flex alignItems={"center"} gap={"1rem"}>
          <Icon as={Male}  />
          <Box>
            <Text fontSize={"2rem"} fontWeight={"600"}>
              200
            </Text>
            <Text fontSize={"0.75rem"}>Male Employees</Text>
          </Box>
        </Flex>

        <Flex alignItems={"center"} gap={"1rem"}>
          <Icon as={Female} />
          <Box>
            <Text fontSize={"2rem"} fontWeight={"600"}>
              320
            </Text>
            <Text fontSize={"0.75rem"}>Female Employees</Text>
          </Box>
        </Flex>
      </Box>

      <Grid templateColumns={"1fr 1.5fr"} border={"2px solid #2C92D5"}>
        <Box
          display={"flex"}
          //   flexDirection={"column"}
          alignItems={"center"}
          //   justifyContent={"center"}
          gap={".7rem"}
          px={"1.25rem"}
          py={".55rem"}
          bg={" #2C92D5"}
        >
          <Icon as={Employee} />
          <Text fontSize={"1.25rem"} fontWeight={"600"} color={"white"}>
            New Hires
          </Text>
        </Box>

        <Box
          display={"flex"}
          //   flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          padding={"1rem"}
          gap={'.5rem'}
        >
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width={100}
          />
          <Box>
            <Text fontSize={"2rem"} color={"#2C92D5"} fontWeight={"600"}>
              75%
            </Text>
            <Text fontSize={"0.75rem"}>For the quarter</Text>
          </Box>{" "}
        </Box>
      </Grid>
    </Box>
  );
}
