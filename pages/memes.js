import Head from 'next/head'
import { 
  useColorMode, 
  Heading, 
  Flex, 
  Stack, 
  List, 
  ListItem, 
  IconButton, 
  Text, 
  Link 
}  from '@chakra-ui/react'
import { Launch } from '@material-ui/icons'
import Container from '../components/Container'
import { memes } from '../data/memes'

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
          <title>Memes- Haaduken</title>
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
          <Heading mb={2}>Memes?</Heading>
          <Text color={colorSecondary[colorMode]}>You've stumbled upon a page not so easily found.<br></br>This is a collection of memes I often use or have used frequently in the past.</Text>
          <List w="100%">
            {memes.map((meme) => (
              <>
                <ListItem py={2}>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center" fontWeight={100}>
                      <Flex alignItems="center" fontWeight={100}>
                        <Text fontSize="2xl" mr="0.5em">
                          {meme.icon}
                        </Text>
                        <Text
                          fontWeight={400}
                          fontSize="lg"
                          lineHeight="shorter"
                          w={["3em", "5em", "8em"]}
                        >
                          {meme.name}
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex>
                      {meme.hasOwnProperty("source") ? (
                        <Link
                          _hover={{ textDecoration: "none" }}
                          href={meme.source}
                          isExternal
                        >
                          <IconButton
                            aria-label="Youtube"
                            size="lg"
                            color="blue.500"
                            variant="ghost"
                          >
                              <Launch fontSize="small"/>
                          </IconButton>
                        </Link>
                      ) : null}
                    </Flex>
                  </Flex>
                </ListItem>
              </>
            ))}
          </List>          
          </Flex>
        </Stack>
      </Container>
    </>
  )
}
