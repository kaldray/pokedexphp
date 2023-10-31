import { css } from "@style-system/css";
import type { Pokemon } from "@app/types";

export const PokemonCard = ({ pokedex_id, name }: Pokemon) => {
    const getPokemonSprites = ({
        pokedex_id,
        name,
    }: {
        pokedex_id: string;
        name: string;
    }): string => {
        if (name.includes("Mega") && name.endsWith("X")) {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex_id}-mega-x.png`;
        }
        if (name.includes("Mega") && name.endsWith("Y")) {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex_id}-mega-y.png`;
        }
        if (name.includes("Mega") && !name.startsWith("Mega")) {
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
                    transition: "all .1s linear",
                    _hover: {
                        transform: "scale(1.4)",
                        transition: "all .1s linear",
                    },
                    _motionReduce: {
                        _hover: {
                            transition: "none",
                            transform: "scale(1)",
                        },
                    },
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
