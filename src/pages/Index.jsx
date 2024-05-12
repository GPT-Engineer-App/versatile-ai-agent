import { Box, Button, Container, Heading, IconButton, Image, Stack, Text, VStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun, FaRocket, FaCogs, FaDatabase, FaLock } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" w="full">
          <Heading as="h1" size="xl">
            AI Agent Dashboard
          </Heading>
          <IconButton aria-label="Toggle theme" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
        </Stack>
        <Box bg={bgColor} p={5} borderRadius="lg" w="full">
          <VStack spacing={5}>
            <Text fontSize="2xl" fontWeight="bold" color={textColor}>
              Multi-Function AI Agent
            </Text>
            <Text fontSize="md" color={textColor}>
              A secure and versatile AI agent that automates repetitive tasks across various industries.
            </Text>
            <Image src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE1NTQ5NDE0fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Stack direction="row" spacing={4}>
              <Button leftIcon={<FaCogs />} colorScheme="blue">
                Configure
              </Button>
              <Button leftIcon={<FaDatabase />} colorScheme="green">
                Data Management
              </Button>
              <Button leftIcon={<FaLock />} colorScheme="red">
                Security Settings
              </Button>
            </Stack>
          </VStack>
        </Box>
        <Box bg={bgColor} p={5} borderRadius="lg" w="full">
          <VStack spacing={5}>
            <Text fontSize="2xl" fontWeight="bold" color={textColor}>
              Core Functionalities
            </Text>
            <Stack direction="column" spacing={2}>
              <Text fontSize="lg" color={textColor}>
                Email Processing
              </Text>
              <Text fontSize="lg" color={textColor}>
                CRM System Integration
              </Text>
              <Text fontSize="lg" color={textColor}>
                Web Automation
              </Text>
              <Text fontSize="lg" color={textColor}>
                Onboarding Automation
              </Text>
              <Text fontSize="lg" color={textColor}>
                Reporting and Analytics
              </Text>
            </Stack>
          </VStack>
        </Box>
        <Box bg={bgColor} p={5} borderRadius="lg" w="full">
          <VStack spacing={5}>
            <Text fontSize="2xl" fontWeight="bold" color={textColor}>
              Advanced Features
            </Text>
            <Stack direction="column" spacing={2}>
              <Text fontSize="lg" color={textColor}>
                Self-Learning Capabilities
              </Text>
              <Text fontSize="lg" color={textColor}>
                Intent Recognition
              </Text>
              <Text fontSize="lg" color={textColor}>
                Proactive Assistance
              </Text>
            </Stack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
