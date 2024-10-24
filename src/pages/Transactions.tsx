import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Badge } from '@chakra-ui/react';
import { format } from 'date-fns';

const transactions = [
  { id: 1, date: new Date(), description: 'Client Payment', amount: 1500, type: 'income' },
  { id: 2, date: new Date(), description: 'Office Supplies', amount: -250, type: 'expense' },
  { id: 3, date: new Date(), description: 'Consulting Fee', amount: 2000, type: 'income' },
];

function Transactions() {
  return (
    <Box>
      <Heading mb={6}>Transactions</Heading>
      
      <Box bg="white" borderRadius="lg" shadow="sm">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Description</Th>
              <Th>Amount</Th>
              <Th>Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((transaction) => (
              <Tr key={transaction.id}>
                <Td>{format(transaction.date, 'MM/dd/yyyy')}</Td>
                <Td>{transaction.description}</Td>
                <Td>${Math.abs(transaction.amount).toFixed(2)}</Td>
                <Td>
                  <Badge colorScheme={transaction.type === 'income' ? 'green' : 'red'}>
                    {transaction.type}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}

export default Transactions;