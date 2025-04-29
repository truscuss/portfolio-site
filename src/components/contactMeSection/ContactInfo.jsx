import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="shivamm9630@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91111111" Image={FiPhone} />
    </div>
  );
};

export default ContactInfo;
