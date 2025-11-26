
'use client'
import AppHeader from "@/components/app.header";
import AppFooter from "@/components/app.footer"
import { Inter } from "next/font/google";
// font chữ 
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const LayoutClient = ({ children }: { children: React.ReactNode }) => {
    return (
        //thêm font chữ
        <div className={inter.className}>
            <AppHeader />
            <main>{children}</main>
            <AppFooter />
        </div>
    );
};
export default LayoutClient;