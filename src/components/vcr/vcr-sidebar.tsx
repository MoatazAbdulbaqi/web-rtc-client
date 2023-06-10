import { Dispatch, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isChat: boolean;
}

export const VCRSidebar: React.FC<Props> = ({ isOpen, setIsOpen, isChat }) => {
  return (
    <aside
      className={`${
        isOpen ? "max-w-[30%]": "max-w-0"
      } h-screen overflow-hidden bg-white w-[25%]`}
      style={{ transition: "0.5s" }}
    >
      <div className="flex justify-between items-center w-full">
        <h5>{isChat ? "Chat" : "Participants"}</h5>
        <button onClick={() => setIsOpen(false)}>X</button>
      </div>
    </aside>
  );
};

export default VCRSidebar;
