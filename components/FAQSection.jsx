const faqs = [
  {
    question: 'How long does website development take?',
    answer: 'Usually between 1-3 weeks depending on project size.',
  },
  {
    question: 'Do you provide SEO services?',
    answer: 'Yes, we provide complete SEO optimization services.',
  },
  {
    question: 'Can you redesign existing websites?',
    answer: 'Absolutely! We can redesign and improve existing websites.',
  },
]

export default function FAQSection() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}