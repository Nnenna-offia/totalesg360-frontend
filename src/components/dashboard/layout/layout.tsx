import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

export default function Layout() {
  return (
    <Flex flexDirection={"row"} w="100vw">
      {/* Fixed side */}
      <Flex boxShadow={"xl"}   w={"16%"} zIndex={10}>
        {" "}
        <Sidebar />
      </Flex>

      <Box flex={1} zIndex={1} bg="#fcfcfc">
        <Topbar />
        <Box mx={"3.125rem"} mt={'2.375rem'}>
          <Outlet />
        </Box>{" "}
      </Box>
    </Flex>
  );
}
