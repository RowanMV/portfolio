export default function Contact() {
  return (
    <section className="py-16" id="contact">
      <div className="max-w-xl mx-auto px-10">
        <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">
          Get In Touch
        </h2>
        <form className="flex flex-col gap-6">
          <label className="flex flex-col">
            <p className="text-white text-sm font-medium leading-normal pb-2">
              Email
            </p>
            <input 
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[#1173d4] border border-[#324d67] bg-[#192633] h-12 placeholder:text-[#92adc9] px-4 text-base font-normal leading-normal" 
              placeholder="your.email@example.com" 
              type="email"
            />
          </label>
          <label className="flex flex-col">
            <p className="text-white text-sm font-medium leading-normal pb-2">
              Message
            </p>
            <textarea 
              className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[#1173d4] border border-[#324d67] bg-[#192633] min-h-36 placeholder:text-[#92adc9] p-4 text-base font-normal leading-normal" 
              placeholder="Your message"
            />
          </label>
          <div className="flex justify-end">
            <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-[#1173d4] hover:bg-[#0e5fa9] transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
