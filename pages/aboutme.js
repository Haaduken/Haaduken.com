import {
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import Container from "../components/Container";
import Head from "next/head";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <>
      <Container>
        <Head>
          <title>About Me- Haaduken</title>
        </Head>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={2}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading mb={2}>About Me</Heading>
            <Text color={colorSecondary[colorMode]}>
              I am Haadi Majeed, and I have recently graduated from Iowa State University with a Bachelors in Computer Engineering. I have done a good number of projects, both 
              for courses and on the side to learn and develop solutions to problems I've seen or had, some of which can be found both on my GitHub (Most coursework is currently hidden to respect my university's academic honesty policy)
              and also highlights of a few on the portfolio tab of this site as
              well. Also, if you wish to contact me, there is a email button
              that can be found at the bottom of each page on this site!
            </Text>
            <br />
            <Text color={colorSecondary[colorMode]}>
              Along side my studies, I work as an RA in the on-campus dorms for
              the past 2 years in tandem with working on a cyber security
              research lab on campus called ISEAGE
              <Link
                color={colorSecondary[colorMode]}
                href="https://www.youtube.com/watch?v=M5V_IXMewl4"
              >
                .
              </Link>{" "}
              Both offer their own challenges on a day to day basis, but
              rewarding nonetheless.
            </Text>
            <br />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Text color={colorSecondary[colorMode]}>
              I've recently completed my final semester at ISU, and have excitedly accepted an offer at John Deere working on embedded systems. Along with that I have begun working on a NAS system for my friends and family, a personal VPN, and trying to get some computer upgrades as well.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
