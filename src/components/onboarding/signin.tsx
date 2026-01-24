import {
  Box,
  Stack,
  Text,
  Image,
  Heading,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import Logo from "../../assets/esglogo_and_tagline.png";
import { useNavigate } from "react-router-dom";

export default function SIgnIn() {
  const navigate = useNavigate();
  return (
    <Box display={"flex"}>
      <Box position={"relative"} bg={"#2D94C9"} w={"100vw"}>
        <Box
          bg={"white"}
          px={"6rem"}
          h={"42vh"}
          alignItems={"flex-end"}
          display={"flex"}
          pb={"2.6575rem"}
        >
          {" "}
          <Image src={Logo} alt='ESG Logo' />
        </Box>{" "}
        <Stack
          h={"58vh"}
          mx={"6rem"}
          w={"full"}
          // maxW={"34.0625rem"}
          pt={"3.125rem"}
          color={"white"}
          gap={"2.5rem"}
          fontSize={"1.25rem"}
        >
          <Text w={"34.0625rem"}>
            Manage ESG Reporting. Without the Stress. ESG reporting doesn’t have
            to be complex or time-consuming. ESG 360 helps organizations
            collect, manage, and report Environmental, Social, and Governance
            data in one secure platform — with built-in AI to reduce manual work
            and errors.
          </Text>
          <Text w={"34.0625rem"}>
            Designed for
            <b> Manufacturing, Oil & Gas, and Financial Institutions,</b>
            ESG 360 works for Nigerian regulatory requirements and international
            reporting standards.
          </Text>
        </Stack>
      </Box>
      <Box
        position={"absolute"}
        bg={"white"}
        h={"49.4375rem"}
        w={"39.375rem"}
        top={"50%"}
        transform={"translateY(-50%)"}
        right={"3.5625rem"}
        borderRadius='lg'
        border={"1.08375rem solid #8BC7FF33"}
      >
        <form
          method='post'
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            padding: "4.6875rem 1.985rem",
          }}
        >
          <Heading fontWeight={500} mb={"1.25rem"} fontSize={"2rem"}>
            Welcome Back{" "}
          </Heading>
          <Stack
            gap={".5rem"}
            display={"flex"}
            flexDirection={"column"}
            w={"full"}
          >
            <label
              htmlFor='email'
              style={{
                color: "#606778",
                fontWeight: 500,
                fontSize: ".75rem",
              }}
            >
              Email{" "}
            </label>

            <Input
              border={"1px solid #CAD0DB"}
              color={"#7B8499"}
              fontWeight={500}
              fontSize={".875rem"}
              borderRadius={"md"}
              type='email'
              name='email'
              placeholder='JohnDoe@companyname.com'
              _placeholder={{
                color: "#7B8499",
                fontWeight: 500,
                fontSize: ".875rem",
              }}
            />
          </Stack>{" "}
          <Stack gap={".5rem"} w={"full"}>
            <label
              htmlFor='password'
              style={{
                color: "#606778",
                fontWeight: 500,
                fontSize: ".75rem",
              }}
            >
              Password{" "}
            </label>
            <Input
              border={"1px solid #CAD0DB"}
              color={"#7B8499"}
              fontWeight={500}
              fontSize={".875rem"}
              borderRadius={"md"}
              type='password'
              name='password'
              placeholder='Must be at least 8 characters.'
              _placeholder={{
                color: "#7B8499",
                fontWeight: 500,
                fontSize: ".875rem",
              }}
            />
          </Stack>{" "}
     
          <Flex flexDirection={"column"} alignItems={"flex-end"} gap={".5rem"}>
            <Button
              bg='#12141A '
              px={"1.5rem"}
              py={"1rem"}
              borderRadius={".25rem"}
              color='white'
              fontWeight={500}
              w={"full"}
              fontSize={".875rem "}
              type='submit'
              onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              Continue
            </Button>{" "}
            <Text fontWeight={500} fontSize={".75rem"}>
              No account yet? 
              <a
                style={{
                  color: "#12141A",
                  fontWeight: "600",
                  borderBottom: "1px solid #12141A",
                }}
                href='/signup'
              >
                Sign Up{" "}
              </a>{" "}
            </Text>
          </Flex>
        </form>
      </Box>
    </Box>
  );
}
