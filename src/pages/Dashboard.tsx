import { Box, Grid, Heading, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
];

function Dashboard() {
  return (
    <Box>
      <Heading mb={6}>Financial Dashboard</Heading>
      
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={8}>
        <Stat p={4} bg="white" borderRadius="lg" shadow="sm">
          <StatLabel>Total Revenue</StatLabel>
          <StatNumber>$22,500</StatNumber>
          <StatHelpText>Year to date</StatHelpText>
        </Stat>
        
        <Stat p={4} bg="white" borderRadius="lg" shadow="sm">
          <StatLabel>Expenses</StatLabel>
          <StatNumber>$15,200</StatNumber>
          <StatHelpText>Year to date</StatHelpText>
        </Stat>
        
        <Stat p={4} bg="white" borderRadius="lg" shadow="sm">
          <StatLabel>Net Profit</StatLabel>
          <StatNumber>$7,300</StatNumber>
          <StatHelpText>Year to date</StatHelpText>
        </Stat>
      </Grid>

      <Box bg="white" p={6} borderRadius="lg" shadow="sm">
        <Heading size="md" mb={4}>Revenue Trend</Heading>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#3182ce" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}

export default Dashboard;