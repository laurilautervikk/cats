//import react from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

//id, url, width, height
export default function CatCard(data) {
  const classes = useStyles();

  return (
    <div className="card">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.url}
            title="Cat photo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cat
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.width}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.height}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Add to Favorites
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
