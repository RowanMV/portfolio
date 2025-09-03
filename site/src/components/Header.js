export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#233648] px-10 py-4 sticky top-0 z-10 bg-[#111a22]/80 backdrop-blur-sm">
      <div className="flex items-center gap-4 text-white">
        <div className="size-6 text-[#1173d4]">
          <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M12.3521 22.0623L12 21.9377L11.6479 22.0623C6.2974 23.906,2 21.35,2 15.5185V7.63231C2 6.13681,3.13681 4.9205,4.62933 4.79375L11.6479 4.21838C11.8703 4.20055,12.1297 4.20055,12.3521 4.21838L19.3707 4.79375C20.8632 4.9205,22 6.13681,22 7.63231V15.5185C22 21.35,17.7026 23.906,12.3521 22.0623Z" 
              stroke="currentColor" 
              strokeWidth="1.5"
            />
            <path 
              d="M9.5 13.75L14.5 10.25" 
              opacity="0.4" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <h1 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
          Aero Portfolio
        </h1>
      </div>
      <nav className="flex items-center gap-6">
        <a className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal" href="#projects">
          Projects
        </a>
        <a className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal" href="#skills">
          Skills
        </a>
        <a className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal" href="#contact">
          Contact
        </a>
        <div 
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDl-OzbQJlGhLpmCSSCSx_v-KJq9xeq8FWYx5NAyLmBsePyFSPTEq3OV2NgBib9jtNeqXMtbU2vOt2snSe1QS0tenBSrdPB-KQDvy92zovMofiP8mTLdLK-rr8dNkYCNEa9oe0dO0jg_5DSJB83No8abYJPYhCO_hsboSMKQcpdM8eRYxy4QXrw-M8fh8GplKn6Bv3vUF0rcqkkKyCmLlay0HdteesDHcrTjbrIv4a6-pba1rnolm16RiKg1lQ0IQTNXRbkZUGMVb8")'
          }}
        />
      </nav>
    </header>
  );
}
