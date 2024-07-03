import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FaLocationArrow } from "react-icons/fa";
import "../css/cards.css";

export default function Cards({ heading, desc, f1, f2, img }) {
  return (
    <Card
      className="cards"
      sx={{
        maxWidth: "400px",
        width: "100%",
        margin: "5px",
        marginTop: "20px",
        maxHeight: "25rem",
      }}
    >
      <CardActionArea style={{ paddingBottom: "20px" }}>
        <CardMedia component="img" height="180" image={img} alt={heading} />
        <CardContent className="card-content">
          <Typography
            className="heading"
            gutterBottom
            variant="h5"
            style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            component="div"
          >
            {heading}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {desc}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ paddingTop: "10px",         textAlign: "right"
            }}
          >
            سمات:
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
              }}
            >
              <li
                style={{
                  fontSize: ".9rem",
                  paddingRight: "10px",
                }}
              >
                {f1}
                <FaLocationArrow
                  className="rotate-icon"
                  color="6132f1"
                  size={18}
                  style={{ paddingLeft: "5px" }}
                />
              </li>
              <li
                style={{
                  fontSize: ".9rem",
                  paddingRight: "10px",
                }}
              >
                {f2}
                <FaLocationArrow
                  className="rotate-icon"
                  color="6132f1"
                  size={18}
                  style={{ paddingLeft: "5px" }}
                />
              </li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
