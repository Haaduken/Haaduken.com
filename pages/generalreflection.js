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
          <title>Gen Ed Reflection- Haaduken</title>
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
            <Heading mb={2}>General Education Reflection</Heading>
            <Text color={colorSecondary[colorMode]}>
              My time here at Iowa State has been spent behind many computer
              screens for countless hours, however I have taken a good number of
              courses beyond my major as well. I am glad to have taken them as
              they have helped broaden my horizons significantly. I have made it
              a personal goal to take a variety of courses as to learn as much
              as I can in topics that have piqued my interest even remotely.
              <br />
              <br />
              One of the first course I took here at ISU, (quite literally, 8 AM
              as a first semester first year student) was how Mass Media and
              Journalism effects society and how its delivery can dramatically
              change the outcome. It was remarkably interesting, and I still
              remember the professor's burning enthusiasm for the course. We
              covered many topics and focused on how simply changing the format
              that it was presented in could dramatically change who would end
              up looking at it. For example, things with too many graphics would
              often be overlooked by older readers as they were looking for more
              content, but massive walls of text would be completely ignored by
              more youthful audiences who as so used to always get all
              information in a super condensed form. This was interesting for
              me, as in the future when I am in the industry, drafting reports
              on various tasks, depending on my audience I will have to format
              my writings to keep it condensed yet informative. This is to allow
              for as much clarity as possible when trying to convey the message.
              <br />
              <br />
              Another interesting course I have had the opportunity to take is
              on the history of the USSR and early Russian history. This course
              would cover how the USSR was formed and the major events that
              would eventually lead to its fall and the rise of modern-day
              Russia. Learning how World War 1 and 2 along with the Cold War
              went from their point of view was extremely fascinating as we
              typically only learn about it from the American point of view.
              Especially for the Cold War, it was really a revelation how bad it
              was for the citizens and anyone who was not higher up in the
              social structure. Learning the views that the citizens at the time
              had been amazing, so many wished to leave the area but could not
              under threat of the government.
              <br />
              <br />
              The last course I wanted to talk about is from the Architecture
              department, History of American Cities. This course would delve
              into the history of large cities in early American History and how
              diverse groups of people who inhabited those areas influenced what
              the architecture would look like to even this day. This course
              truly showed me how carefully planning can lead to impressive
              results as shown by in-depth city master plans. In contrast it has
              shown me how disastrous improper planning can be as cities have
              critically failed due to major oversights and poor choices. It
              completely changed how I go about projects and how I will not even
              start them without fully figuring out what should be completed and
              how.
              <br />
              <br />
              As it stands, I still have a couple of general education courses
              to take this upcoming semester, and I have been carefully trying
              to figure out which I want to take. I have been thinking a history
              course similar to the Russian one but maybe for a different region
              of the world, or maybe another one for the environments’
              destruction and how we need to correct it before irreparable
              damage. Either way, I am glad to have so many options to broaden
              my horizons and better understand things beyond my major.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
