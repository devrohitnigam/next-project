export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
      }}
    >
      <div className="bg-black/60 w-full h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-6">
            Build Your Digital Presence With Rohit Web Solutions
          </h1>

          <p className="text-lg mb-6 max-w-2xl">
            We create modern websites, SEO strategies, and digital solutions
            that help businesses grow online.
          </p>

          <a
            href="#"
            className="bg-blue-600 px-6 py-3 rounded-lg text-white"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}