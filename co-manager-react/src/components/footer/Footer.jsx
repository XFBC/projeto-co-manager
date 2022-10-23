import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="bg-slate-700 py-4 relative">
      <footer>
        <ul className="flex flex-row gap-2 text-2xl justify-center">
          <li>
            <FaFacebook className="hover:text-yellow-300 transition-shadow" />
          </li>
          <li>
            <FaInstagram className="hover:text-yellow-300 transition-shadow" />
          </li>
          <li>
            <FaLinkedin className="hover:text-yellow-300 transition-shadow" />
          </li>
        </ul>
        <div className="text-center pt-12">
          <span> Co-manager &copy; 2022</span>
        </div>
      </footer>
    </div>
  )
}
