import React, { useMemo } from "react";
import VCRVideo from "./vcr-video";

interface Props {
  videos: { isMyVideo: boolean; source: MediaStream }[];
}

const VCRBodyComponent: React.FC<Props> = ({videos}) => {
  const displayThisMuchVideos = videos.length >= 10 ? 9 : videos.length;
  const videoWidth = useMemo(() => {
    const totalVideosNumber= Math.min(10, videos.length);
    const MIN_WIDTH = 200;
    const MIN_VIDEOS_PER_ROW = 6;
    const MAX_VIDEOS_PER_COLUMN = 3;
    let videosPerRow = Math.min(MIN_VIDEOS_PER_ROW, totalVideosNumber);
    let videoWidth = `${100 / videosPerRow}%`;

    for (let i = MIN_VIDEOS_PER_ROW; i <= MAX_VIDEOS_PER_COLUMN; i++) {
      if (totalVideosNumber <= i * i) {
        videosPerRow = i;
        videoWidth = `${100 / videosPerRow}%`;
        break;
      }
    }
    if (totalVideosNumber === 1) {
      videoWidth = '48%';
    } else if (totalVideosNumber === 2) {
      videoWidth = '48%';
    } else if (totalVideosNumber > 2 && totalVideosNumber < MIN_VIDEOS_PER_ROW) {
      videoWidth = `${80 / totalVideosNumber}%`;
    }
    if (videosPerRow * MIN_WIDTH < 100 && videoWidth === '48%') {
      videoWidth = `${Math.min(45, 100 / videosPerRow)}%`;
    }

    return videoWidth;
  },[videos.length])

  const rederedVideos = useMemo(()=>videos
  .filter((_, idx) => idx < displayThisMuchVideos),[videos,displayThisMuchVideos])

  return (
    <div
      className={`md:grid-5 gap-3 pt-4 vid flex flex-col md:flex-row items-stretch md:items-center flex-wrap justify-evenly  max-h-[70%]`}
    >
      {React.Children.toArray(
        rederedVideos
          .map((el) => (
            <VCRVideo videoWidth={videoWidth} {...el} />
          ))
      )}
      {
        videos.length >= 10 ? (
          <div className="rounded-xl overflow-hidden min-w-[125px] min-h-[125px] py-4 flex justify-center items-center bg-gray-900" style={{width:videoWidth}}>
            <div className="rounded-full w-24 h-24 bg-gray-700 flex justify-center items-center">
              <span className="text-white">+{videos.length - displayThisMuchVideos} others</span>
            </div>
          </div>
        ) : null
      }
    </div>
  );
};
export const VCRBody = React.memo(VCRBodyComponent)

