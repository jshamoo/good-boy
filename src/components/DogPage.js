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
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles((theme) => ({
  root: {
    "margin-top": "100px",
  },
  main: {
    margin: "20px",
  },
  img: {
    "border-radius": "5%",
  },
}));

const DogPage = () => {
  let { id } = useParams();
  const [dog, setDog] = useState(null);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    getADog(id).then((resp) => {
      console.log(resp.animal);
      setDog(resp.animal);
    });
  }, []);

  if (!dog) {
    return <img src="/loading.gif" />;
  }
  return (
    <Card className={classes.root}>
      <Grid container className={classes.main}>
        <Grid item xs={12}>
          <Typography variant="h2"> Meet {dog.name}</Typography>
        </Grid>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            src={
              dog.photos.length
                ? dog.photos[0].large
                : "http://placecorgi.com/400/400"
            }
            alt={dog.name + " 's photo"}
            height="400"
            className={classes.img}
          />
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Typography>
              <PetsIcon /> {dog.gender} - {dog.age} - {dog.breeds.primary}
            </Typography>
            <Typography>
              <LocationOnIcon />
              {dog.contact.address.city}, {dog.contact.address.state}
            </Typography>
            <Typography>
              <DescriptionIcon />
              {dog.description || "No description"}
            </Typography>
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
