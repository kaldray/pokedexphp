import { type PropsWithChildren } from "react";
import { Navbar } from "@app/components/Navbar";
import { css } from "@style-system/css";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <main className={css({ width: "full", minHeight: "full" })}>
                {children}
            </main>
        </>
    );
}
