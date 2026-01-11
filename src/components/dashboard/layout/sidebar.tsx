import { Box, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import Logo from "../../../assets/esglogo_and_tagline.png";
// import { ReactComponent as EnvironmentalIcon } from "../../../assets/sidebar/environmental.svg";
import EnvironmentalIcon from "../../../assets/sidebar/environmental.svg?react";
import EnvironmentalActive from "../../../assets/sidebar/environmental-active.svg?react";
import DashboardIcon from "../../../assets/sidebar/dashboard.svg?react";
import DashboardIconActive from "../../../assets/sidebar/dashboard-active.svg?react";
import SocialIcon from "../../../assets/sidebar/social.svg?react";
import SocialActive from "../../../assets/sidebar/social-active.svg?react";
import GovernanceIcon from "../../../assets/sidebar/governance.svg?react";
import GovernanceActive from "../../../assets/sidebar/governance-active.svg?react";
import DataIcon from "../../../assets/sidebar/data.svg?react";
import DataActive from "../../../assets/sidebar/data-active.svg?react";
import Settings from "../../../assets/settings.svg?react";
import Logout from "../../../assets/logout.svg?react";
import { Link, useLocation } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import GreenApp from "../../../assets/sidebar/app.png";
import Sphera from "../../../assets/sidebar/sphera.png";
import Workiva from "../../../assets/sidebar/workiva.png";

export default function Sidebar() {
  const location = useLocation();
  const sidebarItems = [
    {
      label: "dashboard",
      path: "/dashboard",
      icon: DashboardIcon,
      activeIcon: DashboardIconActive,
    },
    {
      label: "environmental",
      path: "/environmental",
      icon: EnvironmentalIcon,
      activeIcon: EnvironmentalActive,
    },
    {
      label: "social",
      path: "/social",
      icon: SocialIcon,
      activeIcon: SocialActive,
    },
    {
      label: "governance",
      path: "/governance",
      icon: GovernanceIcon,
      activeIcon: GovernanceActive,
    },
    {
      label: "data",
      path: "/data",
      icon: DataIcon,
      activeIcon: DataActive,
    },
  ];
  const activeBg = "#2C92D5";
  const activeText = "white";

  const data = ["Environmental", "Social", "Governance"];

  const IntegrateApps = [
    { name: "Green App", logo: GreenApp },
    { name: "Sphera", logo: Sphera },
    { name: "Workiva", logo: Workiva },
  ];
  return (
    <Box as="aside" h="100vh" w={"full"} pt={"4rem"}>
      <Image src={Logo} alt="ESG Logo" px={"2rem"} />

      <Stack gap={4} py={"1.4375rem"} borderBlockEnd={".6px solid #E0E0E0"}>
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.path;
          const IconComponent = isActive ? item.activeIcon : item.icon;

          return (
            <Link
              key={item.label}
              to={item.path}
              style={{ textDecoration: "none" }}
            >
              <Box position="relative">
                {/* Left indicator */}
                <Box
                  position="absolute"
                  left={0}
                  top={0}
                  bottom={0}
                  w=".5rem"
                  bg={activeBg}
                  borderRadius="0 .25rem .25rem 0"
                  opacity={isActive ? 1 : 0}
                  transition=" 0.1s ease"
                  _groupHover={{ opacity: 1 }}
                />

                <Flex
                  role="group"
                  align="center"
                  gap=".625rem"
                  mx="2.75rem"
                  py=".75rem"
                  px={isActive ? "1.2rem" : ".2rem"}
                  borderRadius="md"
                  bg={isActive ? activeBg : "transparent"}
                  color={isActive ? activeText : "#202224"}
                  transition="all .5s ease"
                  // _hover={{
                  //   bg: "#b6d4f1ff",
                  //   // color: activeText,
                  // }}
                  _hover={
                    !isActive ? { bg: "#b6d4f1ff", px: " 1.2rem" } : undefined
                  }
                >
                  <Icon
                    as={IconComponent}
                    boxSize={6}
                    transition="all 2s ease"
                  />

                  <Text
                    textTransform="capitalize"
                    fontWeight={isActive ? "700" : "600"}
                    fontSize=".875rem"
                    transition="all 2s ease"
                  >
                    {item.label}
                  </Text>
                </Flex>
              </Box>
            </Link>
          );
        })}
      </Stack>

      <Stack
        gap={4}
        py={"1.4375rem"}
        px={"2.5rem"}
        borderBlockEnd={".6px solid #E0E0E0"}
      >
        {data.map((item) => (
          <Flex
            key={item}
            fontSize={".75rem"}
            color={"gray.500"}
            fontWeight={"700"}
            align="center"
            gap={2}
          >
            <Icon as={BiPlus} />
            <Text>{`Add ${item} Data`}</Text>
          </Flex>
        ))}
        <Stack mt={".5rem"} gap={2}>
          <Text fontSize={".75rem"} color={"gray.500"} fontWeight={"700"}>
            Integrate Apps
          </Text>
          <Flex gap={".5rem"}>
            {" "}
            {IntegrateApps.map((app) => (
              // <Flex key={app.name} align="center" gap={3} cursor="pointer" _hover={{bg: "#f0f0f0", borderRadius: "md", px: "0.5rem"}}>
              <Image w={"fit"} src={app.logo} key={app.name} alt={app.name} />
              // <Text fontSize={".875rem"} fontWeight={"500"}>{app.name}</Text>
              // </Flex>
            ))}
          </Flex>
        </Stack>
      </Stack>

      <Stack
        gap={"2.5rem"}
        py={"2.25rem"}
        px={"2.5rem"}
        // borderBlockEnd={".6px solid #E0E0E0"}
      >
        <Flex alignItems={"center"} gap={".25rem"}>
          <Icon as={Settings} />
          <Text fontSize={".875rem"} fontWeight={"600"}>
            Settings
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={".25rem"}>
          <Icon as={Logout} />
          <Text fontSize={".875rem"} fontWeight={"600"}>
            Logout
          </Text>
        </Flex>
      </Stack>

      <Image src={Logo} alt="ESG Logo" px={"3.6875rem"} />
    </Box>
  );
}
