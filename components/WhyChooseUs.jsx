export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>

          <ul className="space-y-4 text-gray-700">
            <li>✔ Modern & Responsive Website Design</li>
            <li>✔ SEO Optimized Solutions</li>
            <li>✔ Affordable Pricing</li>
            <li>✔ Fast Delivery</li>
            <li>✔ Dedicated Support</li>
          </ul>
        </div>

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Why Choose Us"
          className="rounded-xl"
        />
      </div>
    </section>
  )
}