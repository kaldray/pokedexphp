import { type PropsWithChildren } from "react";
import type { Pokemon } from "@app/types";
import { css } from "@style-system/css";

export const PokemonCard = ({
    pokedex_id,
    name,
    children,
}: Pokemon & PropsWithChildren) => {
    const getPokemonSprites = ({
        pokedex_id,
        name,
    }: {
        pokedex_id: string;
        name: string;
    }): string => {
        if (
            name.toLowerCase().includes("mega") &&
            name.toLowerCase().includes("x")
        ) {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex_id}-mega-x.png`;
        }
        if (
            name.toLowerCase().includes("mega") &&
            name.toLowerCase().includes("y")
        ) {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex_id}-mega-y.png`;
        }
        if (name.toLowerCase().includes("mega")) {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex_id}-mega.png`;
        }
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex_id}.png`;
    };

    return (
        <>
            <div
                className={css({
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDir: "column",
                })}>
                <div>
                    <img
                        className={css({
                            maxW: "96px",
                        })}
                        src={getPokemonSprites({ pokedex_id, name })}
                        alt={name}
                        loading={"lazy"}
                    />
                </div>
                <p>{name}</p>
            </div>
        </>
    );
};
