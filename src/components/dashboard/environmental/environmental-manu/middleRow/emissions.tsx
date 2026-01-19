import ReactApexChart from "react-apexcharts";
import { type ApexOptions } from "apexcharts";
import { Flex, Text } from "@chakra-ui/react";

const Scope2Emissions = () => {
  const data = [10, 41, 45, 51, 34, 23];
  const maxValue = Math.max(...data);
  const maxIndex = data.indexOf(maxValue);

  const BAR_OFFSET = 5;

  const series: ApexOptions["series"] = [
    {
      name: "Emissions",
      type: "line",
      data,
    },
    {
      name: "Highest",
      type: "column",
      data: data.map((v, i) => (i === maxIndex ? v + BAR_OFFSET : null)),
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 117,
      width:"100%",
      type: "line",
      zoom: { enabled: false },
      toolbar: { show: false },
      offsetX: -20,
    //   background: 'red'
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },

    stroke: {
      curve: "smooth",
      width: [1, 0], // line visible, bar has no stroke
    },

    colors: ["#2C92D5", "#e1f0fdff"], // line, bar

    plotOptions: {
      bar: {
        columnWidth: "50%",
        borderRadius: 10,
      },
    },

    grid: {
      show: false,
      padding: { right: 0, top: 0, bottom: 0 },
    },

    // title: {
    //   text: "Scope 2 Emissions",
    //   align: "left",
    //   style: {
    //     fontSize: "16px",
    //     color: "#606060",
    //     fontWeight: "600",
    //   },
    // },

    legend: {
      show: false,
    },

    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          cssClass: "my-xaxis-label",
        },
      },
    },

    yaxis: {
      labels: {
        style: {   
          cssClass: "my-xaxis-label",
        },
      },
    },
    markers: {
      size: 0,
      discrete: [
        {
          seriesIndex: 0, // line series
          dataPointIndex: maxIndex,
          size: 4,
          fillColor: "#e1f0fdff",
          strokeColor: "#2C92D5",
        },
      ],
    },
  };

  return (
    <Flex flexDirection={"column"} alignItems={"flex-start"}>
      <Text fontSize={"1rem"} fontWeight={"500"} color={"#606060"}>
        Scope 2 Emissions (electricity)
      </Text>
      <div id="emissions-chart">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={250}
        />
      </div>
    </Flex>
  );
};

export default Scope2Emissions;
