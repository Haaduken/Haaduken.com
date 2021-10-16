import {
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import Container from "../components/Container";
import Head from "next/head";
import MDXComponents from "../components/MDXComponents";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  const colorThird = {
    dark: "gray.400",
    light: "gray.700",
  };
  return (
    <>
      <Container>
        <Head>
          <title>Portfolio- Haaduken</title>
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
            <Heading mb={2}>Portfolio</Heading>
            <Text color={colorSecondary[colorMode]}>
              Since starting college, I have worked on many projects, both
              personal and for various courses. I wanted to take this chance to
              reflect on them and display both what I learned and what came out
              of the bigger projects. As I progress through college, I was
              trying to figure out exactly what I wanted to do in the work
              force, and my personal projects are a great representation of my
              learning and exploration for my future.
              <br />
              With that in mind, I am currently interested in artifical
              intelligence and machine learning, however I am still very early
              in my learning for the subject with plans to take a course on it
              this upcoming spring semester. I am also interested in application
              development and full stack.
              <br />
              You can also download my resume by clicking just below this if you
              want to see most of this information in a more condensed form.
              Note that some information has been removed for my privacy, if you
              would like a completed one, please send me an email using the
              button at the bottom of the page
              <br />
              <br />
            </Text>
            <Link _hover={{ textDecoration: "none" }} href="/static/resume.pdf">
              <Button>Resume Download</Button>
            </Link>
            <Divider mt="1em" mb="-2em" borderColor={colorThird[colorMode]} />
            <MDXComponents.h2>Projects</MDXComponents.h2>

            <MDXComponents.h3>Senior Design</MDXComponents.h3>
            <Text color={colorSecondary[colorMode]}>
              I am currently enrolled in the first part of senior design, and
              with it comes many challenges. Our overall task is to create a web
              application that works on most standard browsers along with an
              algorithim to determine the best orientation of cables of varying
              quantities and diameters.This is so the user can find the smallest
              possible bore size when placing cables underground. Since we are
              still on the first semester of this course, we have not done much
              development, but instead we are communicating with our client,
              Alliant Energy, to clarify and establish our tasks to get the
              project rolling in the next semester. As we are still early in the
              project planning cycle, roles are not set in stone, but currently
              I am set to be QA Engineering on the project. Further updates to
              the project will be posted as it continues through the semester.
            </Text>

            <MDXComponents.h3>Personal Website</MDXComponents.h3>
            <Text color={colorSecondary[colorMode]}>
              This website has been quite a project as well. I have had the AWS
              instance that it sits on since August 2020. The initial purpose
              was to act as a VPN for personal use via openVPN. This AWS box
              would eventually evolve into this very website, as in early
              January of this year I would buy the domain and set a new goal to
              learn how to set up a website and create one from scratch. It
              started as just writing static HTML and CSS within, before
              evolving into being React based around the middle of April. I
              spent many hours reading the documentation for it along side
              watching video tutorials on the content to gain a better
              understanding.
              <br />
              <br />
              This project is still in the works, with new additions coming in
              as I develop and complete them. As it stands though, I learned a
              lot about how to get a website going from scratch, make it from
              the ground up, and properly maintain it. Another fun part I
              learned about in the process was how to use Docker with the AWS
              instance running the site through a docker instance right now.
            </Text>

            <MDXComponents.h3>A Shell in C</MDXComponents.h3>
            <Text color={colorSecondary[colorMode]}>
              This project was completed in Computer Engineering 308, Operating
              Systems, in my spring 2021 semester. The objective was to create a
              realistic shell similar to those you would find on any instance of
              Linux, of course the nature to make the shell do everything a
              standard shell could would be a bit out of scope for the course,
              so it is able to do all base functions such as navigating through
              directories or executing files. I think the coolest part of the
              project was the ability to forward unknown commands to the real
              shell for that to execute instead. The code is currently private
              on my github to respect the university's academic honesty policy,
              however will become public on a future date.
            </Text>
            <MDXComponents.h3>A Raytracer in C++</MDXComponents.h3>
            <Text color={colorSecondary[colorMode]}>
              I personally really enjoyed working on this project, I am
              currently enrolled in Computer Science 336, Computer Graphics. In
              it, we are learning how computers render images and scenes via
              raytracing engines. This project specifically, the task was to
              create our own raytracer piece by piece. It began with just a
              simple ray caster that would shoot a single ray per projected
              pixel to display a sphere in 3D space. This would be labeled as a
              rudimentary "ray-caster". This would continue to evolve into a
              proper raytracer. The most recent component added to the project
              are various material properties that can be added to spheres.
              Another component that was added is triangles, yes literally, and
              these are used (currently) as the floor for the renders. The
              project is still in development as I am stil in the course,
              however I plan on uploading some images that are rendered that I
              think are cool as it continues in the blog section of the site.
            </Text>
          </Flex>
          <Divider mt="1em" borderColor={colorThird[colorMode]} />
          <MDXComponents.h2>Internship at EMC Insurance</MDXComponents.h2>
          <Text color={colorSecondary[colorMode]}>
            This internship took place over the summer of 2021 from May to
            August and would have me working as a full stack developer. I worked
            with a small team remotely to rebuild software that was to be
            archived and moved to legacy. Meeting daily with our scrum master
            for stand-up, we would then go about our tasks that were usually
            self-assigned from the task board. Along with this I would give the
            presentations to demo and explain the week's progress to the product
            manager and teams that are working in parallel. I throughly enjoyed
            working for EMC and my team taught me a lot, both at a professional
            level, and a technical level. I only had rough ideas on how to give
            proper business presentations to product owners / managers, however
            I got a lot of expereince first-hand on what it is like to be in
            one, as I witnessed one at the end of every sprint the team
            finished.
          </Text>
          <Divider mt="1em" borderColor={colorThird[colorMode]} />
          <MDXComponents.h2>Code of Ethics Paper</MDXComponents.h2>
          <Text color={colorSecondary[colorMode]}>
            A topic that came up multiple times was the ethical boundries of
            technology and companies behind them, I have personally written a
            paper concerning this topic and that can be found by{" "}
            <Link color="#0645AD" href="/codeofethics">
              clicking here.
            </Link>
          </Text>
          <Divider mt="1em" borderColor={colorThird[colorMode]} />
          <MDXComponents.h2>General Education Paper</MDXComponents.h2>
          <Text color={colorSecondary[colorMode]}>
            Being at ISU for 4 years has let me take a diversity of other
            courses outside of my degree, I invite you to read my reflection of
            them by{" "}
            <Link color="#0645AD" href="/generalreflection">
              clicking here.
            </Link>
          </Text>

          <Divider mt="1em" borderColor={colorThird[colorMode]} />
          <MDXComponents.h2>Cummulative Reflection Paper</MDXComponents.h2>
          <Text color={colorSecondary[colorMode]}>
            I also have taken the time to reflect on my overall academic
            expereince here at ISU and you can read that reflection by{" "}
            <Link color="#0645AD" href="/overallreflection">
              clicking here.
            </Link>
          </Text>
        </Stack>
      </Container>
    </>
  );
}
