import { Box, Heading, VStack, Button, Text } from '@chakra-ui/react';
import { FiDownload } from 'react-icons/fi';

function Reports() {
  return (
    <Box>
      <Heading mb={6}>Financial Reports</Heading>
      
      <VStack spacing={4} align="stretch">
        <Box p={5} bg="white" borderRadius="lg" shadow="sm">
          <Heading size="md" mb={2}>Income Statement</Heading>
          <Text color="gray.600" mb={4}>Monthly summary of revenue, expenses, and profit</Text>
          <Button leftIcon={<FiDownload />} colorScheme="blue">
            Download Report
          </Button>
        </Box>

        <Box p={5} bg="white" borderRadius="lg" shadow="sm">
          <Heading size="md" mb={2}>Balance Sheet</Heading>
          <Text color="gray.600" mb={4}>Current assets, liabilities, and equity</Text>
          <Button leftIcon={<FiDownload />} colorScheme="blue">
            Download Report
          </Button>
        </Box>

        <Box p={5} bg="white" borderRadius="lg" shadow="sm">
          <Heading size="md" mb={2}>Cash Flow Statement</Heading>
          <Text color="gray.600" mb={4}>Detailed analysis of cash movements</Text>
          <Button leftIcon={<FiDownload />} colorScheme="blue">
            Download Report
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default Reports;