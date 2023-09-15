import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { FetchFromAPI } from "../utils/fetchFromAPI";
import { Video } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { SearchTerm } = useParams();

  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${SearchTerm}`)
      .then((data) => setVideos(data.items))
  }, [SearchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for: <span style={{ color: "#FC1503" }}>{SearchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Video videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;