import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FaLocationArrow } from "react-icons/fa";
import { useTranslation } from "react-i18next"; 
import "../css/cards.css";
import ScrollReveal from "scrollreveal";

const Cards = ({ heading, desc, f1, f2, img }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "200px",
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal(".cards", {
      interval: 200,
    });
    sr.reveal(".card-content", {
      interval: 300,
      origin: "left",
    });
  }, []);

  return (
    <Card
      className="cards"
      sx={{
        maxWidth: "400px",
        width: "100%",
        margin: "5px",
        marginTop: "20px",
        maxHeight: "25rem",
        borderRadius: "10px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        backgroundImage: "url(../assets/images/cool-background.png)",
      }}
    >
      <CardActionArea style={{ paddingBottom: "20px" }}>
        <CardMedia component="img" height="180" image={img} alt={heading} />
        <CardContent className="card-content">
          <Typography
            className="heading"
            gutterBottom
            variant="h5"
            style={{ fontSize: "1.3rem", fontWeight: "bolder" }}
            component="div"
          >
            {heading}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            {desc}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ paddingTop: "10px", textAlign: "right" }}
          >
            {t("features")}
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
              }}
            >
              <li
                style={{
                  fontSize: "1rem",
                  paddingRight: "10px",
                  fontWeight: "400",
                }}
              >
                {f1}
                <FaLocationArrow
                  className="rotate-icon"
                  color="00afef"
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
                  color="00afef"
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
};

export default Cards;
