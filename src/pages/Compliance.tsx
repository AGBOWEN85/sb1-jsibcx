import { Box, Heading, Alert, AlertIcon, VStack, Text, Progress } from '@chakra-ui/react';

function Compliance() {
  return (
    <Box>
      <Heading mb={6}>Compliance Dashboard</Heading>

      <Alert status="success" mb={6}>
        <AlertIcon />
        Your business is currently compliant with all major regulations
      </Alert>

      <VStack spacing={6} align="stretch">
        <Box p={5} bg="white" borderRadius="lg" shadow="sm">
          <Heading size="md" mb={4}>Tax Compliance</Heading>
          <Text mb={2}>Tax Filing Status: Up to date</Text>
          <Progress value={100} colorScheme="green" mb={4} />
          <Text color="gray.600">Next filing due: April 15, 2024</Text>
        </Box>

        <Box p={5} bg="white" borderRadius="lg" shadow="sm">
          <Heading size="md" mb={4}>Financial Records</Heading>
          <Text mb={2}>Record Keeping Status: Complete</Text>
          <Progress value={100} colorScheme="green" mb={4} />
          <Text color="gray.600">Last audit: January 15, 2024</Text>
        </Box>

        <Box p={5} bg="white" borderRadius="lg" shadow="sm">
          <Heading size="md" mb={4}>Regulatory Requirements</Heading>
          <Text mb={2}>Compliance Score: 98%</Text>
          <Progress value={98} colorScheme="green" mb={4} />
          <Text color="gray.600">All major requirements met</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default Compliance;