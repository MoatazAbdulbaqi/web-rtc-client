import { useEffect, useRef } from "react";

interface Props {
  source: MediaStream;
  videoWidth:string;
  isMyVideo?: boolean;
}

const VCRVideo: React.FC<Props> = ({ source, videoWidth, isMyVideo }) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (ref && ref.current) {
      if ("srcObject" in ref.current) {
        ref.current.srcObject = source;
      } else {
        // @ts-ignore
        ref.current.src = URL.createObjectURL(source as unknown as MediaSource);
      }
    }
  });


  return (
    <div className="rounded-xl overflow-hidden min-w-[125px] min-h-[125px] bg-zinc-600" style={{width:videoWidth}}>
      <video ref={ref} autoPlay muted={isMyVideo} />
    </div>
  );
};

export default VCRVideo;
