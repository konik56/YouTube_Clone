import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constans";
const ChannelCard = ({ channelDetail, marginTop, fromDetail }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "fles",
        justifyContent: "center",
        alignItems: "center",
        width: "320px",
        height: "316px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link
        to={
          !fromDetail
            ? `/channel/${channelDetail?.id?.channelId}`
            : `/channel/${channelDetail?.id}`
        }
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt="channelDetail?.snippet?.title"
            sx={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              mb: 2,
              border: "8px solid #000",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
