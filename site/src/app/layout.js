import "./globals.css";

export const metadata = {
  title: 'Portfolio Website',
  description: 'Personal portfolio website showcasing projects and skills',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;