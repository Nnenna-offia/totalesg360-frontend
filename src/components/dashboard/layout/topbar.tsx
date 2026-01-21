import { Box, Flex, Icon, Image, Input } from "@chakra-ui/react";
import SearchIcon from "../../../assets/search.svg?react";
import BellIcon from "../../../assets/bell.svg?react";
import Avatar from "../../../assets/avatar.png";

export default function Topbar() {
  return (
    <Box
      boxShadow={"md"}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      px="2.25rem"
      w={"100%"}
      gap={'6rem'}
      py={".25rem"}
      justifyContent={"space-between"}
    >
      <Flex
        flex={1}
        shadow={"md"}
        pl={".75rem"}
        borderRadius={"md"}
        my={".75rem"}
        bg={"#fcfcfc"}
        pr={".25rem"}
        py={"0.65625rem"}
        alignItems={"center"}
      >
        <Icon as={SearchIcon} />
        <Input
          type="text"
          placeholder="Search here..."
          outline={"none"}
          color={"#667185"}
          border={"none"}
        />
      </Flex>

      <Flex alignItems={"center"} gap={'.75rem'}>
        <Box py={".625rem"} px={".8rem"} bg={"#F0F2F5"} borderRadius={"100%"}>
          {" "}
          <Icon as={BellIcon} />
        </Box>{" "}
        <Image
          src={Avatar}
          alt="User Avatar"
        //   ml={"2rem"}
        //   w={"2.5rem"}
        //   h={"2.5rem"}
          borderRadius={"100%"}
        />
      </Flex>
    </Box>
  );
}
