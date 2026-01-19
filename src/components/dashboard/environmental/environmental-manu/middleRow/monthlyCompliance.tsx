import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { Box, Flex, Icon } from "@chakra-ui/react";
import Policies from "../../../../../assets/dashboard/document.svg?react";
import Board from "../../../../../assets/dashboard/board.svg?react";
import Audit from "../../../../../assets/dashboard/audit.svg?react";

export default function MonthlyCompliance() {
  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false, // removes the hamburger menu
      },
    },

    tooltip: {
      enabled: false, // disables hover tooltips
    },
    grid: {
      show: false,
      padding: { right: 0, top: 0, bottom: 0 }, // remove extra chart padding
    },
    colors: ["#2C92D5"],

    plotOptions: {
      bar: {
        borderRadius: 5,
        borderRadiusApplication: "end",
        horizontal: true,
        barHeight: "50%",
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        offsetX: 0,
        offsetY: 0,
        style: {
          cssClass: "my-xaxis-label",
        },
      },
    },
    yaxis: {
      labels: {
        offsetX: 0,
        offsetY: 0,
        style: {
          cssClass: "my-xaxis-label",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

const displayData = [
    { icon: Policies, label: "Policies Updated", value: '5/7' },
    { icon: Board, label: "Mandatory Board Seats", value: '5/5' },
    { icon: Audit, label: "Audits this Quarter", value: '0/2' },
  ];

  return (
    <Box>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />

<Flex justifyContent={"space-between"} mt={"1rem"}> 
        {displayData.map((item) => (
          <Flex key={item.label} flexDirection={'column'} alignItems={"center"} >
            <Icon as={item.icon} />
            <Flex flexDirection={'column'} alignItems={"center"} maxW={'4rem'} mt={".4rem"}>
              <Box fontSize={"1.25rem"} fontWeight={"700"} >
                {item.value}
                </Box>
                <Box textAlign={'center'} fontSize={".75rem"} mt={'.4rem'} fontWeight={"600"} color={"#717171"}>
                {item.label}
                </Box>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
