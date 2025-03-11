"use client";

import { Truck, PhoneCall, RefreshCcw } from "lucide-react";

export default function Features() {
  return (
    <section className="text-center py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-pink-600 uppercase mb-8">
        A Faster and Better Best to Shop
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
        <FeatureItem
          icon={<Truck size={40} color="yellow" />}
          title="Shipping"
        />
        <FeatureItem
          icon={<PhoneCall size={40} color="yellow" />}
          title="Support"
        />
        <FeatureItem
          icon={<RefreshCcw size={40} color="yellow" />}
          title="Return"
        />
      </div>
    </section>
  );
}

function FeatureItem({ icon, title }) {
  return (
    <div className="text-center max-w-xs">
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
        {icon}
      </div>
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">
        velit sagittis vehicula. Duis posuere ex in mollis iaculis. Suspendisse
        tincidunt.
      </p>
    </div>
  );
}
