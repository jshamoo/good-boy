import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "5px",
  },
  link: {
    "text-decoration": "none",
    color: "primary",
  },
});

const Dog = ({ dog }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          src={
            dog.photos.length
              ? dog.photos[0].medium
              : "http://placecorgi.com/300/400"
          }
          alt={dog.name + " 's photo"}
          height="400"
        />
        <CardContent>
          <Typography variant="h5">{dog.name}</Typography>
          <Typography variant="body1">
            {dog.gender} - {dog.age} - {dog.breeds.primary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button>
          <Link to={`/dogs/${dog.id}`} className={classes.link}>
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Dog;
