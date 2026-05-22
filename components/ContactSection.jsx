export default function ContactSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

          <p className="mb-4">📞 9568228941</p>
          <p className="mb-4">📧 jacksteve9568@gmail.com</p>
          <p className="mb-4">📍 Sector 62 Noida, UP, India</p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}