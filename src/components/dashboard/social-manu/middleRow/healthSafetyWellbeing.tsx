import { Box } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

export default function HealthSafetyWellbeing() {
  const series: ApexAxisChartSeries = [
    {
      name: "Jan",
      data: [45, 52, 38, 24, 33, 26],
    },
    {
      name: "Feb",
      data: [35, 41, 62, 42, 13, 18],
    },
    {
      name: "Mar",
      data: [87, 57, 74, 99, 75, 38],
    },
    {
      name: "Apr",
      data: [37, 50, 54, 39, 15, 58],
    },
    {
      name: "May",
      data: [23, 33, 45, 32, 34, 52],
    },
    {
      name: "Jun",
      data: [12, 17, 27, 18, 29, 14],
    },
  ];

  const options: ApexOptions = {
    chart: {
    //   height: 350,
      type: "line",
      toolbar: {
        show: false, // 👈 disables the menu
      },
      zoom: {
        enabled: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1],
      curve: "smooth",
      //   dashArray: [0, 8, 5],
    },
    title: {
      align: "left",
    },
    legend: {
      show: true,
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },

    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val ;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
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
    // legend: {
    //   position: "top", // 👈 move to top
    //   horizontalAlign: "center", // "left" | "center" | "right"
    //   // markers: {
    //   //   radius: 2, // optional: square-ish boxes
    //   // },
    // },

    xaxis: {
      categories: ["LTIFR", "TRIR", "Fatalities", "Near Miss", "No incident"],
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

    colors: ["#3CC3DF", "#FF928A", "#6FD195", "#537FF1", "#FFAE4C", "#8979FF"],
  };

  return (
    <Box>
      {" "}
      <ReactApexChart
        options={options}
        series={series}
        type='line'
        // height={350}
      />
    </Box>
  );
}
