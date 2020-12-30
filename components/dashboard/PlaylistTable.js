import React from "react";
import { Box, Grid, Link, Text } from "@chakra-ui/react";
import PlaylistCard from "./PlaylistCard";

const PlaylistTable = () => {
  return (
    <>
      <Grid backgroundColor="#636774" borderRadius="10px" pt={2}>
        <Text fontWeight="bold" color="white" ml={8}>
          Your playlists
        </Text>
        <Grid
          templateColumns="repeat(4, 250px)"
          gap={5}
          padding={4}
          justifyContent="space-evenly"
        >
          <PlaylistCard
            title="widepeepoHardo asdasdas das sd"
            creator="berbaroovez"
            discord="discord.gg/stanz"
          />
          <PlaylistCard
            title="widepeepoHardo "
            creator="berbaroovez"
            discord="discord.gg/stanz"
          />
          <PlaylistCard
            title="widepeepoHardo "
            creator="berbaroovez"
            discord="discord.gg/stanz"
          />
          <PlaylistCard
            title="widepeepoHardo "
            creator="berbaroovez"
            discord="discord.gg/stanz"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PlaylistTable;
