import React from "react";
import Dog from "./Dog";
import { Grid, Typography } from "@material-ui/core";

const Results = ({ dogs }) => (
  <>
    {!dogs.length ? (
      <Typography variant="h5">No Dogs Found 🐶</Typography>
    ) : (
      <Typography variant="h5">Look at these good boys 💖</Typography>
    )}
    <Grid className="results" container>
      {dogs.map((dog) => (
        <Grid key={dog.id} item>
          <Dog dog={dog} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default Results;
