import { ChakraProvider, Heading, Text, VStack } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <VStack>
        <Heading>This is a header</Heading>
        <Text>This is the entire project</Text>
      </VStack>
    </ChakraProvider>
  );
}
