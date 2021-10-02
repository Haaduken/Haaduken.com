import { Flex, Heading, Stack, Text, useColorMode } from "@chakra-ui/react";

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
              I am Haadi Majeed, a senior at Iowa State University majoring in
              Computer Engineering. I have done a good number of projects, both
              for courses and on the side, which can be found both on my GitHub
              and also on the portfolio tab of the site as well. Also, if you
              wish to contact me, there is a email button that can be found at
              the bottom of each page on this site!
            </Text>
            <br />
            <Text color={colorSecondary[colorMode]}>
              Along side my studies, I work as an RA in the on-campus dorms for
              the past 2 years in tandem with working on a cyber security
              research lab on campus called ISEAGE. Both offer their own
              challenges on a day to day basis, but rewarding nontheless.
            </Text>
            <br />
            <Text color={colorSecondary[colorMode]}>
              This current semester at Iowa State is my second to last one, and
              I have signed up for quite a few interesting courses, such as
              Advanced Computer Algorithims, Computer Graphics, and Senior
              Design Part 1. You will be able to find more of the information
              and code for these projects as the semester draws to an end, they
              are set to private to respect the university's academic policies.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
