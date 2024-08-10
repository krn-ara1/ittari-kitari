import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PageTop from "@/components/pagetop/PageTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "ittari kitari",
    template: "%s | ittari kitari",
  },
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <div className="container">
          <Header />
          <div className="wrapper">
            <div className="mainAndPageTop">
              <main className="main">{children}</main>
              <PageTop />
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
