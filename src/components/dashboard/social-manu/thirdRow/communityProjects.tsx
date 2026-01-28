// import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { Flex } from "@chakra-ui/react";

const CommunityProjects = () => {
  const series = [
    {
      data: [40000, 22000, 10000],
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
      categories: ["Beneficiaries", "Investment (₦)", "Open grievances"],
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
    title: {
      text: "Community projects ongoing",
      align: "left",
    },
  };

  return (
    <Flex flexDirection={"column"} alignItems={"flex-start"}>
     
      <div
        style={{ width: "100%" }}
        id='community-projects-chart'
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

export default CommunityProjects;
