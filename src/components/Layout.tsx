import { Box, Flex, Stack, Link, Text, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FiHome, FiDollarSign, FiFileText, FiShield } from 'react-icons/fi';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Flex h="100vh">
      <Box w="250px" bg="gray.800" color="white" p={5}>
        <Stack spacing={5}>
          <Text fontSize="xl" fontWeight="bold" mb={6}>
            FinanceManager
          </Text>
          <Link as={RouterLink} to="/" display="flex" alignItems="center" py={2}>
            <Icon as={FiHome} mr={3} />
            Dashboard
          </Link>
          <Link as={RouterLink} to="/transactions" display="flex" alignItems="center" py={2}>
            <Icon as={FiDollarSign} mr={3} />
            Transactions
          </Link>
          <Link as={RouterLink} to="/reports" display="flex" alignItems="center" py={2}>
            <Icon as={FiFileText} mr={3} />
            Reports
          </Link>
          <Link as={RouterLink} to="/compliance" display="flex" alignItems="center" py={2}>
            <Icon as={FiShield} mr={3} />
            Compliance
          </Link>
        </Stack>
      </Box>
      <Box flex="1" p={8} bg="gray.50">
        {children}
      </Box>
    </Flex>
  );
}

export default Layout;