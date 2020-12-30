import {
  ChakraProvider,
  Box,
  Grid,
  Text,
  Avatar,
  Image,
  Icon,
  Fade,
  Button,
  Link,
} from "@chakra-ui/react";

import { FaDiscord } from "react-icons/fa";

export default function PlaylistCard({ title, creator, discord }) {
  return (
    <Box
      maxWidth="250px"
      minHeight="200px"
      maxHeight="200px"
      backgroundColor="#6A6F7D"
      padding={5}
      borderRadius={5}
      _hover={{ bg: "#4B4F59", cursor: "pointer" }}
    >
      <Grid templateRows="1fr 1fr" gap={2}>
        <Grid templateColumns="70px 150px" alignItems="center">
          <Image src="/kanye.jpg" boxSize="60px" />
          <Grid templateRows="1fr 1fr" gap={2}>
            <Text fontSize="md" isTruncated color="#D2D2D2">
              {creator}
            </Text>
            <>
              <Grid templateColumns="20px 1fr" alignItems="center" gap={2}>
                <Icon as={FaDiscord} color="#7289DA" />
                <Text fontSize="sm" isTruncated color="#D2D2D2">
                  {discord}
                </Text>
              </Grid>
            </>
          </Grid>
        </Grid>
        <Text fontSize="md" isTruncated noOfLines={3}>
          {title}
        </Text>
      </Grid>
    </Box>
  );
}
