import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Male from "../../../../assets/dashboard/male-icon.svg?react";
import Female from "../../../../assets/dashboard/female-icon.svg?react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

export default function WorkforceComposition() {
  const series: ApexAxisChartSeries = [
    {
      name: "Full Time",
      data: [44, 55, 57],
    },
    {
      name: "Part Time",
      data: [76, 85, 10],
    },
   
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false, // 👈 disables the menu
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
        borderRadiusApplication: "end",
        dataLabels: {
          position: "top", // 👈 this is the key
        },
      },
    },
    legend: {
      position: "top", // 👈 move to top
      horizontalAlign: "center", // "left" | "center" | "right"
      // markers: {
      //   radius: 2, // optional: square-ish boxes
      // },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Permanent", "Contract", "Outsourced"],
      labels: {
        style: {
          cssClass: "my-xaxis-label",
        },
      },
    },
    yaxis: {
      title: {
        // text: "$ (thousands)",
      },
      labels: {
        style: {
          cssClass: "my-xaxis-label",
        },
      },
    },
    fill: {
      opacity: 1,
    },

    colors: ["#2C92D5", "#88D0FF"],
  };

  return (
    <Box>
      {" "}
      <Box display={"flex"} gap={"3rem"} alignItems={"center"} mb={"1rem"}>
        <Flex alignItems={"center"} gap={"1rem"}>
          <Icon as={Male} />
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
      {/* <Box bg={'red'} w={'100%'} minH={'10rem'}> */}
        <ReactApexChart
        options={options}
        series={series}
        type='bar'
        // height={350}
      />
    </Box>
  );
}
