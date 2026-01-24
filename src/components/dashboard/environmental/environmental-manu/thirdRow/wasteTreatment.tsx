// import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { Flex, Text } from "@chakra-ui/react";

const WasteTreatment = () => {
  const series = [
    {
      data: [40000, 22000, 10000, 28000, 16000],
    },
  ];
  const options: ApexOptions = {
    chart: {
      // height: 156,
      // width: 300,
      type: "bar",
      // background: "yellow",
      offsetX: -30,
      offsetY: 0,
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
        columnWidth: "25%",
        //   distributed: true,
        borderRadiusApplication: "end", // rounds the top of bars only
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["Total", "Hazard", "Recycle", "LandFill", "Incinerated"],
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
  };

  return (
    <Flex flexDirection={"column"} alignItems={"flex-start"}>
      <Text fontSize={"1rem"} fontWeight={"500"} color={"#606060"}>
        Waste Treatment{" "}
      </Text>
      <div
        style={{ width: "100%" }}
        id='electrical-chart'
      >
        <ReactApexChart
          options={options}
          series={series}
          type='bar'
          // height={250}
        />
      </div>
      {/* <div id="html-dist"></div> */}
    </Flex>
  );
};

export default WasteTreatment;
