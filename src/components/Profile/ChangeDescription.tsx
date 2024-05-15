import { useState } from "react";
import { MdDescription } from "react-icons/md";
import MotionButton from "../ui/MotionButton";
import DialogComplete from "../ui/DialogComplete";
import { Textarea } from "../ui/textarea";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useUpdateDescMutation } from "@/redux-cake/user-slices/userSlice";
import LoaderSmall from "../ui/LoaderSmall";

export default function ChangeDescription() {
  const { data } = useCurrentUser();
  const [text, setText] = useState(data?.desc);
  const [updateDesc, { isLoading }] = useUpdateDescMutation();

  function onClickHandler() {
    updateDesc({ desc: text });
  }
  return (
    <DialogComplete
      text="Description"
      desc="Change your description"
      clickHandler={onClickHandler}
      btnText="Save"
      content={
        <Textarea value={text} onChange={(e) => setText(e.target.value)} />
      }
    >
      <MotionButton
        className="flex gap-2 w-full lg:w-fit"
        initial={{ scale: 0.9, opacity: 0.1 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9 }}
        disabled={isLoading}
      >
        {isLoading ? <LoaderSmall /> : <MdDescription />}
        Change Description
      </MotionButton>
    </DialogComplete>
  );
}
