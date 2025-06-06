import type {Metadata} from "next";
import {Space_Grotesk, Funnel_Sans} from "next/font/google";
import "@/app/globals.css";
import {ToastContainer, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeNav from "@/app/_components/Home/HomeNav";

const spaceGrotesk = Space_Grotesk({
        subsets: ["latin"],
        display: "swap",
        weight: ["300", "400", "500", "600", "700"]
    }
);

const funnelSans = Funnel_Sans({
        subsets: ["latin"],
        display: "swap",
        weight: ["300", "400", "500", "600", "700", "800"]
    }
)

export const metadata: Metadata = {
    title: {
        template: "%s | SENV",
        default: "SENV"
    },
    description: "Generated by uploadpg next app",
};

const HomeLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="en">
        <body
            className={`${spaceGrotesk.className} ${funnelSans.className} h-dvh w-full relative antialiased dark-bg text-[#FFFDF6] `}
        >
        <HomeNav/>

            <main className="h-[calc(100%-4.5rem)] overflow-y-auto overflow-x-hidden scrollbar-hide">
                {children}
            </main>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </body>
        </html>
    )
}
export default HomeLayout
