import react from "react";

import Layout from "@app/Pages/Layout";
import { PokemonCard } from "@app/components/PokemonCard";
import { css } from "@style-system/css";
import { Paginate } from "@app/components/Pagination";
import { Search } from "@app/components/Search";

import type { Meta, Pagination, Pokemon } from "@app/types";

type HomeProps = {
    pokemons: {
        data: Array<Pokemon>;
        links: Pagination;
        meta: Meta;
    };
};

const Home = ({ pokemons: { data, links } }: HomeProps) => {
    return (
        <>
            <section
                className={css({
                    my: "3rem",
                    maxW: "90%",
                    mx: "auto",
                })}>
                <Search />
                <div
                    className={css({
                        display: "grid",
                        gap: "3rem",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 3fr))",
                        gridTemplateRows: "auto",
                        placeContent: "center",
                    })}>
                    {data.map((d) => (
                        <PokemonCard key={d.name} {...d} />
                    ))}
                </div>
                <Paginate {...links} />
            </section>
        </>
    );
};

Home.layout = (page: react.JSX.Element) => <Layout children={page} />;

export default Home;
