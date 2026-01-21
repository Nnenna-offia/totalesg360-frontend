import { Box, Button, Flex, Grid, Icon, Image, Text } from "@chakra-ui/react";
import Nav from "./nav";
import HeroImage from "../../assets/landingPage/heroImage.png";
import PlayIcon from "../../assets/landingPage/Play.svg?react";
import BoardRoom from "../../assets/landingPage/Board Room 1.png";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import Bullseye from "../../assets/landingPage/bullseye.svg?react";
import Chart from "../../assets/landingPage/chart.svg?react";
import Doc from "../../assets/landingPage/report.svg?react";
import Search from "../../assets/landingPage/search.svg?react";
import Manufacturing from "../../assets/landingPage/Manufacturing company.png";
import OilandGas from "../../assets/landingPage/Oil & Gas Company.png";
import Bank from "../../assets/landingPage/Bank.png";
import Laptop from "../../assets/landingPage/laptop.png";
import { Check } from "lucide-react";
import Footer from "./footer";
// import { MdCheckCircleOutline } from "react-icons/md";

export default function LandingPage() {
  interface StarRatingProps {
    rating: number; // e.g. 3.5
    maxRating?: number; // default 5
  }
  function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
    const stars = Array.from({ length: maxRating }, (_, i) => {
      const starNumber = i + 1;
      if (rating >= starNumber)
        return <Icon as={FaStar} key={i} color='#FFD700' />;
      if (rating >= starNumber - 0.5)
        return <Icon as={FaStarHalfAlt} key={i} color='#FFD700' />;
      return <Icon as={FaRegStar} key={i} color='#FFD700' />;
    });
    return <Flex>{stars}</Flex>;
  }

  const ratings = [
    { rating: 5, company: "databricks" },
    { rating: 4.8, company: "Chainalysis" },
  ];

  const features = [
    {
      icon: Bullseye,
      text: "Set ESG goals and targets",
    },
    { icon: Chart, text: "Collect monthly ESG Data" },
    { icon: Doc, text: "Generate regulator ready report" },
    { icon: Search, text: "Track Compliance and Permits" },
  ];

  const sectors = [
    {
      image: Manufacturing,
      label: "Manufacturing",
      text: "Emissions, waste, water, permits",
    },
    {
      image: OilandGas,
      label: "Oil & Gas",
      text: "Flaring, spills, host communities, local content",
    },
    {
      image: Bank,
      label: "Banking & FIs",
      text: "ESG risk, disclosures, sustainable finance",
    },
  ];

  const keyFeatures = [
    "Goal & Target Setting ",
    "Monthly ESG Reporting",
    "Real-Time Dashboards",
    "Compliance & Permit Tracking",
    "Automated Reports (ISSB, NGX, SEC, CBN)",
    "AI Insights to flag risks and gaps early",
  ];

  return (
    <Box w={"100dvw"} bg='white'>
      <Box bg='radial-gradient(circle, #ffffffff 0%, #b6e1fdff 70%)'>
        <Nav />
        <Grid
          pt={"4rem"}
          pb={"2rem"}
          px={["1.5rem", "3rem", "7.8125rem"]}
          alignItems={"center"}
          gridTemplateColumns={{
            base: "1fr",
            lg: "1fr 1fr",
          }}
          gridTemplateRows={["repeat(2, auto)", null, "auto"]}
        >
          <Flex flexDirection={"column"} gap={"2.6875rem"}>
            <Box gap={"0.625rem"} w={"90%"}>
              <Text fontWeight={700} fontSize={"6.25rem"} color={"#191A15"}>
                ESG 360
              </Text>
              <Text
                fontWeight={700}
                w={"fit-content"}
                // bg={'red'}
                fontSize={"2.5rem"}
                color={"#191A15"}
              >
                Reporting Made Simple, Compliant & Actionable
              </Text>
              <Box w='full'>
                <svg
                  viewBox='0 0 100 10'
                  preserveAspectRatio='none'
                  width='100%'
                  height='30'
                >
                  <path
                    d='M0 10 Q50 0 100 10'
                    stroke='#2C92D5'
                    strokeWidth='2'
                    fill='none'
                  />
                </svg>
              </Box>
            </Box>

            <Text fontWeight={500} fontSize={"1.25rem"} color={"#000000"}>
              One platform to track Environmental, Social, and Governance
              performance, built for Nigerian and African enterprises, aligned
              with global standards.
            </Text>
            <Flex>
              <Button
                bg={"#2C92D5"}
                px={"1.875rem"}
                fontWeight={500}
                fontSize={"1.125rem"}
                py={"1.25rem"}
                borderRadius={"full"}
              >
                Get Started
              </Button>
              <Button
                color={"#191A15"}
                fontWeight={500}
                fontSize={"1.125rem"}
                bg={"transparent"}
              >
                <Icon as={PlayIcon} /> Request a Demo
              </Button>
            </Flex>
          </Flex>
          <Box>
            {" "}
            <Image
              alignSelf={"center"}
              justifySelf={"end"}
              src={HeroImage}
              alt='Hero Image'
            />
          </Box>{" "}
        </Grid>
      </Box>

      <Flex
        px={"5.5rem"}
        justifyContent={"space-around"}
        py={"2.40625rem"}
        alignItems={"center"}
        // bg={'red'}
        gap={"7.3125rem"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Image src={BoardRoom} alt='Boardroom Image' />
        <Flex flexDirection={"column"}>
          <Text fontSize={"3.125rem"} color={"#191a15"} fontWeight={600}>
            ESG is now mandatory
            <span
              style={{
                fontSize: "1.875rem",
                display: "block",
                marginTop: "1rem",
              }}
            >
              but managing it is still manual
            </span>
          </Text>
          <Flex
            fontWeight={500}
            fontSize={"1.125rem"}
            color={"#a6a6a6"}
            flexDirection={"column"}
            mt={"1.375rem"}
          >
            <Text>Most organisations struggle with:</Text>
            <ul
              style={{
                fontWeight: 500,
                fontSize: "1.125rem",
                color: "#a6a6a6",
                listStyleType: "disc",
                marginLeft: "1.1rem",
              }}
            >
              <li>Fragmented ESG data across departments</li>
              <li>Manual spreadsheets and late submissions</li>
              <li>Complex Nigerian and global regulations</li>
              <li>Poor visibility into ESG risks and performance</li>
            </ul>{" "}
            <Text> ESG 360 fixes this.</Text>
          </Flex>
          <Flex gap={"5rem"} mt={"4rem"} w={"fit-content"} mx={"auto"}>
            {ratings.map((item) => (
              <Flex key={item.company} flexDirection={"column"}>
                <StarRating rating={item.rating} />
                <Text fontSize={"1.125rem"} fontWeight={700}>
                  {item.rating}{" "}
                  <span style={{ fontWeight: 400 }}>/ 5 rating</span>
                </Text>
                <Text fontWeight={700} fontSize={"1.125rem"} color={"#a6a6a6"}>
                  {item.company}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Box
        id='product'
        // bg={'red'}
        px={["1.5rem", "3rem", "7.8125rem"]}
      >
        <Text fontWeight={700} fontSize={"1.75rem"}>
          What ESG360 does
        </Text>
        <Text fontWeight={500} fontSize={"1.25rem"} color={"#A6A6A6"}>
          ESG 360 helps organisations:
        </Text>
        <Grid
          gridTemplateColumns={{ base: "1fr", lg: "repeat(4, 1fr)" }} // mobile → tablet → desktop
          gap={{ base: "3.125rem", lg: 0 }}
          py={"2.0625rem"}
        >
          {features.map((feature) => (
            <Flex
              key={feature.text}
              // flexDirection={"column"}
              alignItems={"center"}
              gap={"0.25rem"}
              //   bg={"red"}
            >
              <Icon as={feature.icon} boxSize={"3.75rem"} />
              <Text fontSize={"1.25rem"} fontWeight={500}>
                {feature.text}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Box>

      <Box
        mt={"3.875rem"}
        bg={"linear-gradient(180deg, #2C92D5 0%, #174C6F 100%)"}
        py={"3.875rem"}
        px={["1.5rem", "3rem", "7.5625rem"]}
      >
        <Text
          fontWeight={700}
          fontSize={"3.125rem"}
          color={"white"}
          mt={"3.75rem"}
          mb={"2.875rem"}
        >
          Designed for High-Impact Sectors
        </Text>
        <Flex
          justifyContent={"space-between"}
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: "3.125rem", lg: 0 }}
          // bg={"red"}
        >
          {sectors.map((sector) => (
            <Flex
              key={sector.label}
              maxW={{ base: "100%", lg: "25%" }}
              //   bg={"red"}
              position={"relative"}
            >
              <Image
                src={sector.image}
                alt={sector.label}
                objectFit={"cover"}
                w={"100%"}
                minH={"17.0625rem"}
                zIndex={10}
              />
              <Box
                position={"absolute"}
                top='0'
                p='1.5rem'
                left={0}
                right={0}
                h={"full"}
                zIndex={50}
                gap={0}
                // bg={'red'}
                bg={
                  "linear-gradient(180deg, rgba(196, 196, 196, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%)"
                }
              >
                <Text
                  fontWeight={700}
                  fontSize={"1.825rem"}
                  color={"white"}
                  zIndex={50}
                >
                  {sector.label}
                </Text>
                <Text
                  fontWeight={700}
                  fontSize={"1.25rem"}
                  color={"white"}
                  maxW={"15rem"}
                  zIndex={50}
                >
                  {sector.text}
                </Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Box>

      <Box py={["3rem", "5rem", "7rem"]} px={["1.5rem", "3rem", "7.5625rem"]}>
        <Flex
          gap={{ base: "3.5rem", lg: "1rem" }}
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
        >
          <Box>
            <Text fontWeight={700} fontSize={"3rem"}>
              Key Features
            </Text>
            <Text fontSize={"1.5rem"} fontWeight={500}>
              Everything You Need — Nothing You Don’t
            </Text>
            <Flex flexDirection={"column"} gap={"1rem"} mt={"2rem"}>
              {keyFeatures.map((feature) => (
                <Flex key={feature} gap={"1rem"} alignItems={"center"}>
                  <Box p={".5rem"} bg='#2C92D5' borderRadius={"full"}>
                    {" "}
                    <Icon as={Check} color={"white"} />
                  </Box>
                  <Text
                    // key={feature}
                    fontSize={"1.125rem"}
                    fontWeight={500}
                    //   color={"#606060"}
                  >
                    {feature}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Box>
          <Box>
            <Image src={Laptop} w={["full", "full", null]} alt='Laptop Image' />
          </Box>
        </Flex>

        <Text
          fontWeight={500}
          mt={"6.375rem"}
          w={"85%"}
          mx={"auto"}
          fontSize={"1.875rem"}
          textAlign={"center"}
        >
          ESG 360 is a smart platform where organisations set ESG goals, submit
          monthly data, and track performance — all in one place.
        </Text>
      </Box>

      <Footer />
    </Box>
  );
}
