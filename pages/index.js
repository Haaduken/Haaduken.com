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
          <title>Home- Haaduken</title>
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
            <Heading mb={2}>Hi, I'm Haadi Majeed</Heading>
            <Text color={colorSecondary[colorMode]}>
              Welcome to Haaduken
              <Link color={colorSecondary[colorMode]} href="/memes">
                !
              </Link>{" "}
              I've graduated from Iowa State Engineering with a Bachelors of Science in Computer Engineering, and
              have taken the task of creating a website to learn how to properly
              do front end development. You can read more about the website in
              the blog section. Development of the site going along nicely,
              however as I continue to develop it, I have to stop and learn all
              about the new framework that I have switched to.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
