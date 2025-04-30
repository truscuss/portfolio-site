import { HiOutlineMail } from "react-icons/hi";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white text-xl">
      <SingleInfo text="shivamm9630@gmail.com" Image={HiOutlineMail} />
    </div>
  );
};

export default ContactInfo;
