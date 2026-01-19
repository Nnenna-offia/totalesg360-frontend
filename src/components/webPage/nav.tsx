import { useState } from "react";
import {
  Button,
  Flex,
  Image,
  VStack,
  Link as ChakraLink,
  Icon,
  // CloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Tag from "../../assets/TotalESG 360.png";
import {  MenuIcon } from "lucide-react";
// import { menuAnatomy } from "@chakra-ui/react/anatomy";
import { IoClose } from "react-icons/io5";

export default function Nav() {
  const links = [
    { label: "Home", path: "/" },
    { label: "Product", path: "#product" },
    { label: "Contact Us", path: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      as="nav"
      w="100%"
      px={{ base: "1.5rem", md: "7.8125rem" }}
      py="1.25rem"
      justifyContent="space-between"
      alignItems="center"
      // position="sticky"
      top={0}
      // bg="white"
      zIndex={50}
      // boxShadow="sm"
    >
      <Flex
        // bg={"red"}
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        {" "}
        {/* Logo */}
        <Link to="/">
          <Image src={Tag} alt="ESG360 Logo" maxW="12rem" />
        </Link>
        {/* Desktop Links */}
        <Flex
          gap="2.5rem"
          display={{ base: "none", md: "flex" }}
          alignItems="center"
        >
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.path}
              className="nav-link"
              style={{
                color: index === 0 ? "#191A15" : "#A6A6A6",
                fontWeight: 600,
              }}
            >
              {link.label}
            </a>
          ))}
        </Flex>
        {/* Desktop Actions */}
        <Flex
          gap="1.25rem"
          alignItems="center"
          // bg={"red"}
          justifySelf={"flex-end"}
          display={{ base: "none", md: "flex" }}
        >
          <Link
            to="/login"
            className="nav-link"
            style={{ color: "#A6A6A6", fontWeight: 600 }}
          >
            Login
          </Link>
          <Button
            bg="#2C92D5"
            color="white"
            borderRadius="4px"
            px="1.5rem"
            py="0.5rem"
            fontWeight="600"
            _hover={{ bg: "#1f76b8" }}
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>

      {/* Mobile Hamburger */}
      <Flex position={"relative"}>
        <Icon
          aria-label="Open menu"
          as={isOpen ? IoClose : MenuIcon}
          display={{ base: "flex", md: "none" }}
          onClick={() => setIsOpen(!isOpen)}
          cursor="pointer"
          // variant="ghost"
        />

        {/* Mobile Drawer */}
        {isOpen && (
          <VStack
            position={"absolute"}
            top={".5rem"}
            // right={0}
            right={["-.5rem", "-1.5rem", "7.8125rem"]}
            gap="1.5rem"
            bg={"white"}
            px={"3rem"}
            py={"2rem"}
            boxShadow="md"
            borderRadius="8px"
            mt="1rem"
            display={["flex", "flex", "none"]}
          >
            {links.map((link) => (
              <ChakraLink
                className="nav-link"
                key={link.label}
                href={link.path}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </ChakraLink>
            ))}
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button bg={"transparent"} className="nav-link" w="full">
                Login
              </Button>
            </Link>
            <Button
              bg="#2C92D5"
              color="white"
              w="full"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Button>
          </VStack>
        )}
      </Flex>
      {/* Mobile Hamburger */}
    </Flex>
  );
}
