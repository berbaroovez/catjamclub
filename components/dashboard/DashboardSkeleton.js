import React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  Link,
  Text,
  Avatar,
} from "@chakra-ui/react";
const DashboardSkeleton = ({ children }) => (
  <ChakraProvider resetCSS>
    <Box height="100vh" backgroundColor="#2F3D6D">
      <Grid
        templateColumns="repeat(1, 1fr)"
        gap={6}
        mb={16}
        w="full"
        backgroundColor="#636774"
        borderBottomRadius="10px"
      >
        <Grid
          templateColumns="repeat(2, 100px)"
          alignItems="center"
          justifyContent="space-between"
          maxWidth="1250px"
          width="full"
          px={8}
          pt={4}
          pb={4}
          margin="0 auto"
        >
          <Link fontSize="lg" fontWeight="bold" color="#ffffff">
            catJAM
          </Link>
          <Grid templateColumns="repeat(2, 1fr)" gap={3} alignItems="center">
            <Text fontWeight="bold" color="#ffffff">
              Options
            </Text>
            <Avatar size="sm" />
          </Grid>
        </Grid>
      </Grid>
      <Text color="#ffffff" fontWeight="bold" fontSize="xl">
        <Grid margin="0 auto" maxWidth="1250px" px={8}>
          <Text fontSize="3xl" fontWeight="bold" color="#ffffff" mb={8}>
            🦸‍♂️ Hello, Berbaroovez
          </Text>
          {children}
        </Grid>
      </Text>
    </Box>
  </ChakraProvider>
);
export default DashboardSkeleton;
