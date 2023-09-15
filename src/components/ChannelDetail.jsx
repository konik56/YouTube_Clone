import React from "react";
import { useState, useEffect } from "react";
import { FetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Video, ChannelCard } from "./";
const ChannelDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [videos, setVideos] = useState([]);
  const [channelDetail, setchannelDetail] = useState();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await FetchFromAPI(`channels?part=snippet&id=${id}`);

      setchannelDetail(data?.items[0]);

      const videosData = await FetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(1,1,1,1) 0%, rgba(255,11,11,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        {console.log(channelDetail,"- detail")}
        <ChannelCard channelDetail={channelDetail} marginTop={"-110px"} fromDetail/>
      </Box>
      <Box sx={{ width: "90%", margin: "auto" }}>
      {console.log(channelDetail,"- video")}

        <Video videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
