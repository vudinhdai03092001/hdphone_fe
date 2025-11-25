
'use client'
import AppHeader from "@/components/app.header";
import AppFooter from "@/components/app.footer"
const LayoutClient = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <AppHeader />
            <main>{children}</main>
            <AppFooter />
        </div>
    );
};
export default LayoutClient;