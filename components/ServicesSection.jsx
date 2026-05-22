const services = [
  'Web Development',
  'SEO Services',
  'Digital Marketing',
  'UI/UX Design',
  'Ecommerce Solutions',
  'Website Maintenance',
]

export default function ServicesSection() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{service}</h3>

              <p className="text-gray-600 mb-4">
                Professional and reliable solutions tailored to your business.
              </p>

              <a href="#" className="text-blue-600 font-semibold">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}