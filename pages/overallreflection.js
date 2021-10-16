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
          <title>ISU Reflection- Haaduken</title>
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
            <Heading mb={2}>Iowa State University Reflection</Heading>
            <Text color={colorSecondary[colorMode]}>
              Over my four years here at Iowa State, I have faced many
              challenges with each one resulting in growth; however, success was
              not always immediate and would take time to come to a solution I
              was satisfied with. I have taken many different courses that have
              challenged in many ways and have allowed me to grow and adapt to
              the task. As I came in as a first-year student, there were many
              things I was not aware of, such as how much college would differ
              from high school, or where I wanted to go, I just knew I wanted to
              be working with computers in one way or another. I made many
              friends and kept them all the way through thick and thin of
              classes and planning our schedules each semester together so we
              would always have each other’s backs. My adventure through ISU's
              Computer Engineering program has been vast.
              <br />
              <br />
              To elaborate a bit more on my journey as a Computer Engineer, I
              have taken a vast variety of courses that have helped me refine my
              skills and figure out what I want to do once I graduate. COMS 336
              has shown me how computers, past and present, create graphics and
              how to make my own ray tracer from scratch. Another course that
              has taught me a lot is CPRE 381 which is an advanced computer
              architecture course where we had the opportunity to gain
              experience and write straight assembly to create various programs
              to learn how it works. I thought this course specifically was
              remarkably interesting since it covers such a low-level language
              that is often overlooked by many other courses. It really opened
              my eyes to how computers work at the level right above binary, and
              how working with registers and memory directly can be used for
              different results. I think my most enjoyable course I have taken,
              though, is CPRE 281, Digital Logic, where it is entirely focused
              on Boolean algebra and working directly with PCBs to software
              creating detailed logic maps to get different results and even
              make complex programs like games or calculators. It taught me how
              software talks to hardware and how to work with various I/O
              devices such as displays, buttons, and switches.
              <br />
              <br />
              Outside of my major, I have taken up being an RA in the dorms
              since my sophomore year. I was initially positioned within Linden
              Hall, but once the semester ended and covid ramped up, the
              building was repurposed to be the quarantine zone, and thus I was
              relocated to Willow Hall, where I have been for the past year and
              a half now. In this job, I can work with many types of people, all
              of varying majors and interests. I have many responsibilities in
              this role such as maintaining peace within the building when on
              call, assisting fellow students with issues, both academically and
              socially, and working to enrich their experience at ISU while in
              the dorms.
              <br />
              <br />
              Another opportunity I have had is working for the ISEAGE Research
              Lab here on campus under Professor Douglas Jacobson. We create and
              host Cyber Defence Competitions here at ISU for a large target
              audience. We hold six every academic year, two for ISU students,
              one for Community Colleges from around Iowa, one for high
              schoolers from around Iowa, and finally the national competition
              where we invite the winners from the ISU competitions, Community
              College, along with other universities' teams to come compete.
              Being on the lab is very enjoyable as it gives a new point of view
              that just the degree did not offer. With it, I get to experience
              working with countless different applications that are often used
              in industry and knowing the ins and outs of them including
              vulnerabilities, fixes, and configuration. This is all alongside
              application development for the services that we set up. We get to
              create the systems that these applications sit on and allow them
              to connect and interact with each other to create an IoT. This is
              so competitors to come in and try to patch and secure them for
              about a month before competition day where industry professionals
              come in and try to hack into their systems in a 1 way capture the
              flag system.
              <br />
              <br />
              If I were to my undergraduate again, there are a few things I
              would want to change to better my experience. The first and most
              important one would be to find a university with a great program
              like Iowa State's, but with an administration that actually cares
              about their students. The biggest thing that comes to mind is that
              anybody who does not directly interact with students regularly has
              not even the slightest idea of what it is like. They have been out
              of the role, and so far, removed for so long, that it honestly
              does not feel like they have any idea what it is like. An example
              of such is the Department of Residence that I work for, it
              genuinely feels like anybody who does not work directly with RAs
              has zero idea what it is like. We are told to do so many tasks
              that are simply the same thing under a different mask, and should
              we fail to do one of them we get our arms twisted until we do so.
              The specific programs I have in mind when I say this would be
              Living, Learning, Leading (LLL) model, Connection Tracker, and
              EAB/Navigate. These are all the exact same thing (EAB has a little
              more), but it feels like the department just does not trust us to
              do our jobs. If that is the only thing that they are using to gage
              if we are doing our jobs, it seems absurd. Another thing I would
              look for in a university, or I guess specifically for departments,
              is to see if administration bothers to check their emails or not.
              I have countless instances where I will email somebody on
              administration and go weeks without a response, I understand if
              you have other things or are out of office, however getting a
              response so much later once the issue has passed is not very
              professional. I have learned from this myself though, when I am
              out of college, I know what it is like to be waiting for a
              response, so answering in a timely manner is extremely high on my
              priority list, as clear communication is vital and allows for low
              stress.
              <br />
              <br />
              Overall, my time at ISU has rewarding when learning and working
              with others. I have learned so much, both academically and
              professionally and will continue to grow in both regards once I
              graduate in the spring. I think I will miss the social elements of
              college, and the late-night work sessions I have had with my
              friends to get projects done, but the memories and experiences
              will stick around.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
