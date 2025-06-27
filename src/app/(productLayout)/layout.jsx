
import "../globals.css";
import { CartProvider } from "@/context/cartContext";
import { SearchProvider } from "../../components/SearchContext";
import Header from "@/components/common/header";
import CategoryNavbar from "@/components/common/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <SearchProvider>
          <CartProvider>
            <Header />
            <CategoryNavbar />
            <div />
            <div>{children}</div>
          </CartProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
