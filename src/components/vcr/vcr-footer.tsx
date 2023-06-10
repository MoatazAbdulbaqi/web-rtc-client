import CameraOffIcon from "../../icons/camera-off-md";
import CameraOnIcon from "../../icons/camera-on-md";
import MicOffIcon from "../../icons/mic-off-md";
import MicOnIcon from "../../icons/mic-on-md";
import ChatIcon from "../../icons/chat-md";
import LeaveIcon from "../../icons/leave-md";
import ShareScreenIcon from "../../icons/share-sm";
import RaiseHandIcon from "../../icons/raise-hand-sm";
import SettingsIcon from "../../icons/settings-md";
import ParticipantsIcon from "../../icons/people-md";


interface Props {
  handleCamControl: () => void;
  handleMicControl: () => void;
  handleChatControl: () => void;
  handleParticipantsControl: () => void;
  handleScreenShare: () => void;
  handleOpenSetting: () => void;
  handleRaiseHand: () => void;
  handleLeave: () => void;
  isCamOff: boolean;
  isMuted: boolean;
  isShareScreen: boolean;
  isChatFocus: boolean;
  isParticipantsFocus: boolean;
  isRaiseHand: boolean;
}

export const VCRFooter: React.FC<Props> = ({
  handleCamControl,
  handleMicControl,
  handleChatControl,
  handleRaiseHand,
  handleOpenSetting,
  handleParticipantsControl,
  handleScreenShare,
  handleLeave,
  isCamOff,
  isMuted,
  isShareScreen,
  isChatFocus,
  isParticipantsFocus,
  isRaiseHand,
}) => {
  return (
    <div className="flex justify-between items-center gap-3 max-w-[700px] mx-auto pt-5">
      <div
        className={`font-md text-white ${
          isCamOff ? "bg-red-600" : "bg-gray-900"
        } w-14 h-14 rounded-full cursor-pointer flex justify-center items-center`}
        onClick={() => handleCamControl()}
      >
        {isCamOff ? <CameraOffIcon /> : <CameraOnIcon />}
      </div>

      <div
        className={`font-md text-white ${
          isMuted ? "bg-red-600" : "bg-gray-900"
        } w-14 h-14 rounded-full cursor-pointer flex justify-center items-center`}
        onClick={() => handleMicControl()}
      >
        {isMuted ? <MicOffIcon /> : <MicOnIcon />}
      </div>
      <button
        className={`w-14 h-14 rounded-full cursor-pointer flex justify-center items-center  bg-gray-900 hover:ring-2 hover:ring-blue-800 focus:ring-2 focus:ring-blue-900 ${
          isChatFocus ? "text-green-700" : "text-white"
        }`}
        onClick={() => handleChatControl()}
      >
        <ChatIcon />
      </button>
      <button
        className={`w-14 h-14 rounded-full cursor-pointer flex justify-center items-center  bg-gray-900 hover:ring-2 hover:ring-blue-800 focus:ring-2 focus:ring-blue-900 ${
          isRaiseHand ? "text-green-700" : "text-white"
        }`}
        onClick={() => handleRaiseHand()}
      >
        <RaiseHandIcon />
      </button>
      <button
        className={`w-14 h-14 rounded-full cursor-pointer flex justify-center items-center  bg-gray-900 hover:ring-2 hover:ring-blue-800 focus:ring-2 focus:ring-blue-900 ${
          isParticipantsFocus ? "text-green-700" : "text-white"
        }`}
        onClick={() => handleParticipantsControl()}
      >
        <ParticipantsIcon />
      </button>
      <button
        className={`w-14 h-14 rounded-full cursor-pointer flex justify-center items-center  bg-gray-900 hover:ring-2 hover:ring-blue-800 focus:ring-2 focus:ring-blue-900 ${
          isShareScreen ? "text-green-700" : "text-white"
        }`}
        onClick={() => 
          handleScreenShare()
        }
      >
        <ShareScreenIcon />
      </button>
      <button
        className="w-14 h-14 rounded-full cursor-pointer flex justify-center items-center text-white bg-gray-900 hover:ring-2 hover:ring-blue-800 focus:ring-2 focus:ring-blue-900"
        onClick={() => {
          handleOpenSetting();
        }}
      >
        <SettingsIcon />
      </button>
      <div
        className="font-md text-white bg-red-600 w-14 h-14 rounded-full cursor-pointer flex justify-center items-center"
        onClick={() => {
          handleLeave();
        }}
      >
        <LeaveIcon />
      </div>
    </div>
  );
};

export default VCRFooter;
