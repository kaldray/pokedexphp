import React from "react";
import { css } from "@style-system/css";
import { router } from "@inertiajs/react";
import { debounce } from "@app/utils";

export const Search = () => {
    const searchPokemonByName = (
        e: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        if (e.target.value === "") {
            router.get(`/`, {}, { only: ["pokemons"], preserveState: true });
        } else {
            router.get(
                `/search/${e.target.value}`,
                {},
                { preserveState: true, only: ["pokemons"] },
            );
        }
    };

    return (
        <>
            <section
                className={css({
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: "2rem",
                })}>
                <form>
                    <label
                        htmlFor={"search"}
                        className={css({ display: "block" })}>
                        <input
                            id={"search"}
                            type={"search"}
                            placeholder={"pikachu"}
                            onChange={debounce(searchPokemonByName, 300)}
                            className={css({
                                borderRadius: ".5rem",
                                borderColor: "primary",
                                borderWidth: "1px",
                                p: ".5rem",
                            })}
                        />
                    </label>
                </form>
            </section>
        </>
    );
};
