import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

import Container from '../components/Container'

export default function Index() {
  const {colorMode} = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <>
      <Container>
        <Head>
          <title>Home- Haaduken</title>
        </Head>
        <Stack
          as="main"
          spacing={8}
          justifyContent='center'
          alignItems='flex-start'
          m='0 auto 4rem auto'
          maxWidth='700px'
          px={2}
        >
          <Flex
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            maxWidth='700px'
          >
          <Heading mb={2}>Portfolio</Heading>
          <Text color={colorSecondary[colorMode]}>Since starting college, I have worked on many projects, both personal and for various courses. I wanted to take this chance to reflect on them and display both what I learned and what came out of the bigger projects.</Text>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}
