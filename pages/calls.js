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
          <title>Calls- Haaduken</title>
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
          <Heading mb={2}>Duty Phone Calls Recieved</Heading>
          <Text color={colorSecondary[colorMode]}>Part of my job as a Community Advisor (CA or also RA) is to be on call for the building I am located in. I tend to get more calls on my nights than my colleagues, so I began graphing it all.</Text>
          <iframe width="600" height="371" seamless frameBorder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR2jBaegHT_RfOVYY2BHP93Dpr5EI1GQZihDYYjV_rgzQrTM9r27FmnrNWzvdR2kUFSGdX6i9l_BGw5/pubchart?oid=1800042730&amp;format=interactive"></iframe>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}
