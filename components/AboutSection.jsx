export default function AboutSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          alt="About"
          className="rounded-xl"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6">About Us</h2>

          <p className="text-gray-600 mb-4">
            Rohit Web Solutions helps startups and businesses build strong
            digital brands through professional websites and online marketing.
          </p>

          <p className="text-gray-600">
            We focus on quality, performance, SEO optimization, and customer
            satisfaction.
          </p>
        </div>
      </div>
    </section>
  )
}