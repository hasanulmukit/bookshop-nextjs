import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: (
        <Image
          src="/icons/fast_delivery.png"
          alt="Fast Delivery Icon"
          width={48}
          height={48}
          className="mb-4"
        />
      ),
      title: "Fast Delivery",
      desc: "Quick and reliable shipping for all orders.",
    },
    {
      icon: (
        <Image
          src="/icons/support.png"
          alt="24/7 Support Icon"
          width={48}
          height={48}
          className="mb-4"
        />
      ),
      title: "24/7 Support",
      desc: "Our support team is always here to help.",
    },
    {
      icon: (
        <Image
          src="/icons/best_deals.png"
          alt="Best Deals Icon"
          width={48}
          height={48}
          className="mb-4"
        />
      ),
      title: "Best Deals",
      desc: "Competitive prices and special offers.",
    },
    {
      icon: (
        <Image
          src="/icons/secure_payment.png"
          alt="Secure Payment Icon"
          width={48}
          height={48}
          className="mb-4"
        />
      ),
      title: "Secure Payment",
      desc: "All transactions are encrypted and secure.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-md rounded-xl p-6 text-center shadow-lg"
          >
            {service.icon}
            <h3 className="font-bold text-xl mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
