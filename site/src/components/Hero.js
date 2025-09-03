export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center">
      <div 
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 mb-6 border-4 border-[#233648]" 
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLL4cXvD5yW3ZWUnuBM1UeKYd7hUzCL8FsoLGZd9yGafD2CClb5-e2H7xMvsX-fWi8LcPkWpYjtJyg-D8L2j_gsCZbLh-nNS8cQwd1LSRPNPqiGp6I_KsOKCX8DbTKAdwCjqV2MlkBHQxHEKIPR0NESJuOMnO3NX4RUQ9JGqpdH9b_yCu3zN_rPFMI9UwAPQHIu-9QE_qT42tEiTzZmNaOL_56h0HGShvzxq9eaFTXTn6RwOXjTT9T-FTf1yOuT9qpyg1e_vnfcM8")'
        }}
      />
      <h2 className="text-white text-4xl font-bold leading-tight tracking-[-0.015em]">
        Rowan Vedangi
      </h2>
      <p className="text-[#92adc9] text-lg font-normal leading-normal mt-2">
        3rd Year Aerospace Engineering Student (MEng)
      </p>
      <p className="text-[#92adc9] text-base font-normal leading-normal mt-4 max-w-2xl">
        Aspiring aerospace engineer with a passion for innovation and
        problem-solving. Currently pursuing a degree in Aerospace
        Engineering at Imperial College London, with a focus on
        software development and numerical methods.
      </p>
    </section>
  );
}
