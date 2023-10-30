import react from "react";

import Layout from "@app/Pages/Layout";
import { PokemonCard } from "@app/components/PokemonCard";
import { css } from "@style-system/css";

import type { Meta, Pagination, Pokemon } from "@app/types";

type HomeProps = {
    pokemons: {
        data: Array<Pokemon>;
        links: Pagination;
        meta: Meta;
    };
};

const Home = ({ pokemons: { data } }: HomeProps) => {
    return (
        <>
            <section
                className={css({
                    mt: "5",
                    maxW: "90%",
                    mx: "auto",
                })}>
                <div
                    className={css({
                        display: "grid",
                        gap: "1rem",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 3fr))",
                        gridTemplateRows: "auto",
                        placeContent: "center",
                    })}>
                    {data.map((d) => (
                        <PokemonCard key={d.name} {...d} />
                    ))}
                </div>
            </section>
        </>
    );
};

Home.layout = (page: react.JSX.Element) => <Layout children={page} />;

export default Home;
