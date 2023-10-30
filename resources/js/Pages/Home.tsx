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
        <section
            className={css({
                display: "grid",
                mt: "5",
                gap: "1rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 3fr))",
                gridTemplateRows: "auto",
                placeContent: "center",
                maxW: "90%",
                mx: "auto",
            })}>
            {data.map((d) => (
                <PokemonCard key={d.name} {...d} />
            ))}
        </section>
    );
};

Home.layout = (page: react.JSX.Element) => <Layout children={page} />;

export default Home;
