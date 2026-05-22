import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function TopBar() {
  return (
    <div className="bg-black text-white text-sm py-2 px-6 flex justify-between items-center">
      <div className="flex gap-6">
        <a href="#" className="flex items-center gap-2">
          <FaPhoneAlt /> 9568228941
        </a>

        <a href="#" className="flex items-center gap-2">
          <FaEnvelope /> jacksteve9568@gmail.com
        </a>
      </div>

      <div className="flex gap-4">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>
    </div>
  )
}