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
            <Text color={colorSecondary[colorMode]}>Over my four years here at Iowa State, I have faced many challenges with each one resulting in growth; however, success was not always immediate and would take time to come to a solution I was satisfied with. I have taken many different courses that have challenged in various ways and have allowed me to grow and adapt to the task. As I came in as a freshman, there were many things I was not aware of, such as how much college would differ from high school, or where I wanted to go, I just knew I wanted to be working with computers in one way or another. I made many friends and kept them all the way through thick and thin of classes and planning our schedules each semester together so we would always have each other’s backs. My adventure through ISU's Computer Engineering program has been vast.  
            <br/><br/>
            To elaborate a bit more on my journey as a Computer Engineer, I have taken a vast variety of courses that have helped me refine my skills and figure out what I want to do once I graduate. COMS 336 has shown me how computers, past and present, create graphics and how to make my own ray tracer from scratch.
            <br/><br/>
            Outside of my major, I have taken up being an RA in the dorms since my sophomore year. I was initially positioned within Linden Hall, but once the semester ended and covid ramped up, the building was repurposed to be the quarantine zone, and thus I was relocated to Willow Hall, where I have been for the past year and a half now. In this job, I can work with many types of people, all varying majors, and interests. I have many responsibilities in this role such as maintaining peace within the building when on call, assisting fellow students with issues, both academically and socially, and working to enrich their experience at ISU while in the dorms.
            <br/><br/>
            Another opportunity I have had is working for the ISEAGE Research Lab here on campus under Professor Douglas Jacobson. We create and host Cyber Defence Competitions here at ISU for a large target audience. We hold six every academic year, two for ISU students, one for Community Colleges from around Iowa, one for high schoolers from around Iowa, and finally the national competition where we invite the winners from the ISU competitions, Community College, and other universities' teams to come compete. Being on the lab is very enjoyable as it gives a new point of view that just the degree did not offer. With it, I get to experience working with many different applications that are often used in industry and knowing the ins and outs of them including vulnerabilities, fixes, and configuration. This is all alongside application development for the services that we set up. We get to create the systems that these applications sit on and allow them to connect and interact with each other to create an IoT. This is so competitors to come in and try to patch and secure them for about a month before competition day where industry professionals come in and try to hack into their systems in a 1 way capture the flag system.
            <br/><br/>
            If I were to my undergrad again, there are a few things I would want to change to better my experience. The first and most important one would be to find a university with a great program like Iowa State's, but with an administration that actually cares about their students. The biggest thing that comes to mind is that anybody who does not directly interact with students regularly has not even the slightest idea of what it is like. They have been out of the role, and so far removed for so long, that it honestly does not feel like they have any idea what it is like. An example of such is the Department of Residence that I work for, </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
