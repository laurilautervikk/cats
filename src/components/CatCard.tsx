//import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface ICats {
  id: string;
  url: string;
  width: number;
  height: number;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CatCard({
  id,
  url,
  width,
  height,
}: ICats): JSX.Element {
  const classes = useStyles();

  return (
    <div className="card">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={url} title="Cat photo" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cat
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {width}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {height}
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

//-----------------------

// interface ICats {
//   id: string;
//   url: string;
//   width: number;
//   height: number;
// }

// export default function Card({ id, url, width, height }: ICats): JSX.Element {
//   return (
//     <div className="card">
//       <h3>{id}</h3>
//       <p>
//         <img src={url} alt="" />
//       </p>
//       <p>{width}</p>
//       <p>{height}</p>
//     </div>
//   );
// }
