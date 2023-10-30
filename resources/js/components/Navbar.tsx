import { hstack } from "@style-system/patterns";

export const Navbar = () => {
    return (
        <>
            <nav
                className={hstack({
                    background: "primary",
                    padding: ".5rem",
                    justifyContent: "center",
                })}>
                <img src="/pokedex.png" alt="Pokedex" height={48} width={48} />
            </nav>
        </>
    );
};
