import { Box, Button, Flex, Icon, Image, Input, Text } from "@chakra-ui/react";
import Tag from "../../assets/ESG360 color.png";
import { BiRightArrow } from "react-icons/bi";
// import { Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowBigRight } from "lucide-react";

export default function Footer() {
  return (
    <Flex
      flexDirection={"column"}
      bg={"#202224"}
      // alignItems={''}
      px={["1.5rem", "3rem", "10.1875rem"]}
      py={"6.71875rem"}
    >
      <Image src={Tag} alt="ESG360 Logo" maxW={"25.8125rem"} mb={"3rem"} />
      <Text fontWeight={500} fontSize={"1.125rem"} color={"#a6a6a6"}>
        Get started new try our product
      </Text>
      <Flex
        // flex={1}
        // shadow={"lg"}
        // pl={".75rem"}
        borderRadius={"full"}
        // my={".75rem"}
        bg={"transparent"}
        px={".725rem"}
        py={"0.925rem"}
        alignItems={"center"}
        maxW={["100%", "50%", "36%"]}
        border={"1px solid #a6a6a6"}
        mt={"1.875rem"}
      >
        <Input
          type="email"
          placeholder="Enter your email address"
          outline={"none"}
          color={"#a6a6a6"}
          border={"none"}
        />
        <Button p={".5rem"} bg="#2C92D5" borderRadius={"full"}>
          <Icon as={ArrowBigRight} color={"white"} />
        </Button>
      </Flex>

      <Flex alignItems={"center"} mt={["3.5rem", "3.5rem", 0]} gap={".5rem"} alignSelf={"flex-end"}>
        <Link to={"/"} style={{ color: "white" }}>
          Terms and Conditions
        </Link>
        <Box bg={"#a6a6a6"} boxSize={".25rem"} borderRadius={"full"} />
        <Link to={"/"} style={{ color: "white" }}>
          Privacy Policy
        </Link>
      </Flex>
    </Flex>
  );
}
