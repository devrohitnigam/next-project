export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <a href="#" className="text-2xl font-bold text-blue-600">
        Rohit Web Solutions
      </a>

      <ul className="hidden md:flex gap-6 font-medium">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>

        <li className="group relative">
          <a href="#">Services</a>

          <ul className="absolute hidden group-hover:block bg-white shadow-lg p-4 w-52 top-6 left-0">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">SEO Services</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Ecommerce Solutions</a></li>
            <li><a href="#">Website Maintenance</a></li>
          </ul>
        </li>

        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      <a
        href="#"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        Free Audit
      </a>
    </nav>
  )
}