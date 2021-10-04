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
          <title>Code of Ethics</title>
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
            <Heading mb={2}>Code of Ethics Paper</Heading>
            <Text color={colorSecondary[colorMode]}>The fundamental purpose of a code of ethics in an environment is to set basic expectations for people inside and interacting with it. It seems demeaning to compare it to common sense, due to the connotation of common sense being often used as an insult. However, when boiled down to the core, they are in place for people, no matter what their position within the environment, CEO, intern and anyone between to interact equally and for the mutual benefit for all. When it comes to facing an ethical decision, they exist to help the person / persons facing the conflict with backup, something to fall back on to help base their decision without scrutiny from others. 
            <br/><br/>
            When faced with an ethical dilemma, I feel that the first step is to fully analyse the situation. This is so that all information that is present as to make a well-informed decision. It is also important that those directly and immediately involved have the same information as to prevent any misunderstandings and miscommunication to make the situation worse. Next would be damage control, is there something that can be done immediately that can lessen or prevent more from occurring worsening the situation now that there is more understanding of it? If so, then act upon it, otherwise continue with the resolution of it. 
            <br/><br/>
            During the class discussion held on canvas, classmates conversed about events this passing decade about ethically grey topics such as the Volkswagen emissions incident, an Amazon Echo’s activity during a murder, a worker’s encounter with a FERPA violation, and a few others. We mostly came to agreement on how to approach each scenario based on the Code of Ethics from the IEEE. In the case of the FERPA violation, many people agreed on the worker confronting his boss about the situation, since it was, he who had caused the issue. By sharing information with the employee, he disclosed information that was not his to disclose. We often came to a conclusion that righted the obvious wrong, however I wonder how differently it would have gone if we were given something a bit more controversial instead, where multiple perspectives could be correct, and not just one right answer. The study I personally went over was the one about the Amazon Echo and who should have the rights to the data that is recorded passively by it. The point that Amazon should own it makes some sense since it is their property and terms and conditions to use their service was signed to permit it, but at the same time the user should have free access to that which was recorded without the need of complications. 
            <br/><br/>
            Using the six virtues of ethics supplied, in regards to the Amazon Echo case, I feel that Fidelity is most applicable, as the company made it a lot more difficult to apprehend the true murderer due to a lack of evidence locked away within their system. If Amazon was more lenient and didn’t force a warrant to get the information, it would have been a lot better, for everybody involved. Another would be Integrity, as it is quite unusual that they do not freely share that recoded information with the person they got it from, even if requested for, unlike Google, who will give data as requested. In turn this can also be linked to Charity from the six virtues as Amazon could have seen this as an event that they could have resolved by simply handing over the information for the sake of justice and bring closure to a tragic incident. 

          </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
