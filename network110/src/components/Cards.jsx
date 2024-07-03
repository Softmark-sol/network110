import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Cards() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "5px",
        marginTop: "20px",
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvF_5PMGWFfQu-fzYEOnYIBEzTFZnhAnZLw&s"
          alt="card"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div">
            Internet Cable Extension
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary">
            Hidden internal extension without
            breaking.
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ textAlign: "left" }}>
            Features:
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
              }}>
              <li
                style={{
                  marginLeft: 40,
                  fontSize: "1rem",
                }}>
                Seamless extension
              </li>
              <li
                style={{
                  marginLeft: 40,
                  fontSize: "1rem",
                }}>
                Minimal disruption
              </li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
