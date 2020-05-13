import React from "react";
import {
  Dialog,
  DialogTitle,
  Button,
  Grid,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "margin-bottom": 15,
  },
});
const ConfirmDialog = (props) => {
  const { dog, open, onClose } = props;
  const classes = useStyles();
  return (
    <Dialog open={open}>
      <DialogTitle>Would you like to adopt {dog.name}?</DialogTitle>
      <Grid container justify="center" spacing={1} className={classes.root}>
        <Grid item>
          <Button
            size="medium"
            color="secondary"
            variant="outlined"
            href={dog.url}
            target="blank"
            onClick={onClose}
          >
            Yes
          </Button>
        </Grid>
        <Grid item>
          <Button
            size="medium"
            color="secondary"
            variant="outlined"
            onClick={onClose}
          >
            No
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ConfirmDialog;
