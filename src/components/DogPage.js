import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getADog } from "../petFinder";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import ConfirmDialog from "./ConfirmDialog";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  root: {
    "margin-top": "100px",
  },
  main: {
    margin: "10px",
  },
  img: {
    "border-radius": "5%",
    "object-fit": "contain",
  },
  content: {
    padding: 10,
  },
}));

const DogPage = () => {
  let { id } = useParams();
  const [dog, setDog] = useState(null);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    getADog(id).then((resp) => {
      setDog(resp.animal);
    });
  }, []);

  if (!dog) {
    return <p>Loading</p>;
  }
  return (
    <Card className={classes.root}>
      <Grid container className={classes.main}>
        <Grid item xs={12}>
          <Typography variant="h2"> Meet {dog.name}</Typography>
        </Grid>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            src={
              dog.photos.length
                ? dog.photos[0].large
                : "http://placecorgi.com/300/300"
            }
            alt={dog.name + " 's photo"}
            width="600"
            className={classes.img}
          />
        </Grid>
        <Grid item xs={8} className={classes.content}>
          <CardContent>
            <Typography>
              <PetsIcon /> {dog.gender} - {dog.age} - {dog.breeds.primary}
            </Typography>
            <Typography>
              <LocationOnIcon />
              {dog.contact.address.city}, {dog.contact.address.state}
            </Typography>
            <Typography>{dog.description || "No description"}</Typography>
          </CardContent>
          <CardActions>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => setOpen(true)}
            >
              Adopt {dog.name}
            </Button>
          </CardActions>
        </Grid>
      </Grid>
      <ConfirmDialog dog={dog} open={open} onClose={() => setOpen(false)} />
    </Card>
  );
};

// export default DogPage;

export default function DogPageWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DogPage {...props} />
    </ErrorBoundary>
  );
}
