import { Box } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";


interface ApexChartContext {
  el: HTMLElement;
  w: {
    globals: {
      series: number[];
      labels: string[];
      seriesAngles: [number, number][];
      centerX: number;
      centerY: number;
      pieRadius: number;
    };
  };
}


export default function EnergyConsumption() {
  const series = [68, 22, 10];

  // function drawLeaderLines(chartCtx: any) {
  //   const svg: SVGSVGElement | null = chartCtx.el.querySelector("svg");
  //   if (!svg) return;

  //   // remove old lines & labels
  //   svg
  //     .querySelectorAll(".leader-line, .leader-label")
  //     .forEach((el) => el.remove());

  //   const { series, labels, pieAngles, center, radius } = chartCtx.w.globals;

  //   const cx = center.x;
  //   const cy = center.y;

  //   series.forEach((_: number, i: number) => {
  //     const start = pieAngles[i][0];
  //     const end = pieAngles[i][1];

  //     const angle = (start + end) / 2;
  //     const rad = (angle * Math.PI) / 180;

  //     const x1 = cx + radius * Math.cos(rad);
  //     const y1 = cy + radius * Math.sin(rad);

  //     const x2 = cx + (radius + 20) * Math.cos(rad);
  //     const y2 = cy + (radius + 20) * Math.sin(rad);

  //     const line = document.createElementNS(
  //       "http://www.w3.org/2000/svg",
  //       "line"
  //     );

  //     line.setAttribute("x1", x1.toString());
  //     line.setAttribute("y1", y1.toString());
  //     line.setAttribute("x2", x2.toString());
  //     line.setAttribute("y2", y2.toString());
  //     line.setAttribute("stroke", "#999");
  //     line.setAttribute("stroke-width", "1");
  //     line.setAttribute("class", "leader-line");

  //     svg.appendChild(line);

  //     const text = document.createElementNS(
  //       "http://www.w3.org/2000/svg",
  //       "text"
  //     );

  //     text.setAttribute("x", (x2 + (x2 > cx ? 6 : -6)).toString());
  //     text.setAttribute("y", y2.toString());
  //     text.setAttribute("text-anchor", x2 > cx ? "start" : "end");
  //     text.setAttribute("font-size", "12");
  //     text.setAttribute("fill", "#333");
  //     text.setAttribute("class", "leader-label");
  //     text.textContent = labels[i];

  //     svg.appendChild(text);
  //   });
  // }

  function drawLeaderLines(chartCtx: ApexChartContext) {
    // console.log("drawLeaderLines fired", chartCtx.w.globals);

    const svg: SVGSVGElement | null = chartCtx.el.querySelector("svg");
    if (!svg) return;

    // cleanup
    svg
      .querySelectorAll(".leader-line, .leader-label")
      .forEach((el) => el.remove());

    const { series, labels } = chartCtx.w.globals;
    const seriesAngles = chartCtx.w.globals.seriesAngles;
    const centerX = chartCtx.w.globals.centerX;
    const centerY = chartCtx.w.globals.centerY;
    const pieRadius = chartCtx.w.globals.pieRadius;

    series.forEach((_: number, i: number) => {
      const start = seriesAngles[i][0];
      const end = seriesAngles[i][1];

      const angle = (start + end) / 2;
      const rad = (angle * Math.PI) / 180;

      const x1 = centerX + pieRadius * Math.cos(rad);
      const y1 = centerY + pieRadius * Math.sin(rad);

      const x2 = centerX + (pieRadius + 24) * Math.cos(rad);
      const y2 = centerY + (pieRadius + 24) * Math.sin(rad);

      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );

      line.setAttribute("x1", String(x1));
      line.setAttribute("y1", String(y1));
      line.setAttribute("x2", String(x2));
      line.setAttribute("y2", String(y2));
      line.setAttribute("stroke", "#444");
      line.setAttribute("stroke-width", "1.2");
      line.setAttribute("class", "leader-line");

      svg.appendChild(line);

      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text",
      );

      text.setAttribute("x", String(x2 + (x2 > centerX ? 6 : -6)));
      text.setAttribute("y", String(y2));
      text.setAttribute("text-anchor", x2 > centerX ? "start" : "end");
      text.setAttribute("dominant-baseline", "middle");
      text.setAttribute("font-size", "12");
      text.setAttribute("fill", "#222");
      text.setAttribute("class", "leader-label");
      text.textContent = labels[i];

      svg.appendChild(text);
    });
  }


  const options: ApexOptions = {
    chart: {
      type: "donut",
      // events: {
      //   mounted: drawLeaderLines,
      //   updated: drawLeaderLines,
      // },
      events: {
        mounted: (ctx) => setTimeout(() => drawLeaderLines(ctx), 0),
        updated: (ctx) => setTimeout(() => drawLeaderLines(ctx), 0),
      },
    },

    labels: ["Solar", "Grid", "Generator"],

    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    legend: { show: false },
    stroke: { width: 0 },

    colors: ["#2C92D5", "#32556C", "#66C2FF"],

    plotOptions: {
      pie: {
        donut: {
          size: "80%",
        },
      },
    },
  };

  return (
    <Box color={'red'}>
      <ReactApexChart options={options} series={series} type='donut' />
    </Box>
  );
}
