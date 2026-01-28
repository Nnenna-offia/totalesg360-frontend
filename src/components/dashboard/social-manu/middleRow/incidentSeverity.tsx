import { Box } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

export default function IncidentSeverity() {
  const series: ApexAxisChartSeries = [
    {
      name: "Incident severity",
      data: [45, 52, 38, 24, 33, 26],
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
    //   text: "Page Statistics",
      align: "left",
    },
    legend: {
      show: true,
    },
    markers: {
      size: 3, // size of the dot
      hover: {
        sizeOffset: 3, // grows when hovered
      },
      shape: "circle", // "circle" | "square" | "diamond" | "triangleUp" | "triangleDown"
      strokeWidth: 2, // optional: thickness of border around dot
      strokeColors: "#8979FF", // optional: border color
    },

    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val;
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
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
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

    colors: ["#8979FF"],
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
