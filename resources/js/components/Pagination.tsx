import react from "react";
import { css } from "@style-system/css";
import { Link } from "@inertiajs/react";

import type { Pagination } from "@app/types";

export const Paginate = ({ next, prev }: Pagination) => {
    const disableNavigationEvent = (
        e: react.MouseEvent<HTMLAnchorElement>,
        page: string | null,
    ): void => {
        if (page === null) {
            e.preventDefault();
        }
    };

    return (
        <>
            <div
                className={css({
                    mt: "3rem",
                    display: "flex",
                    justifyContent: "space-around",
                    flexDir: "row",
                    alignItems: "center",
                })}>
                <Link
                    onClick={(e) => disableNavigationEvent(e, prev)}
                    className={css({
                        p: "1rem",
                        bgColor: "secondary",
                        color: "#000",
                        textAlign: "center",
                        borderRadius: ".5rem",
                        border: "1px solid #000",
                        _disabled: {
                            opacity: ".5",
                            cursor: "not-allowed",
                            pointerEvents: "none",
                        },
                        _hover: {
                            filter: "brightness(85%)",
                            textDecoration: "underline",
                        },
                        _active: {
                            filter: "brightness(85%)",
                        },
                    })}
                    href={prev ?? ""}
                    disabled={prev === null}>
                    Previous
                </Link>
                <Link
                    onClick={(e) => disableNavigationEvent(e, next)}
                    className={css({
                        p: "1rem",
                        bgColor: "secondary",
                        color: "#000",
                        textAlign: "center",
                        borderRadius: ".5rem",
                        border: "1px solid currentColor",
                        _disabled: {
                            opacity: ".5",
                            cursor: "not-allowed",
                            pointerEvents: "none",
                        },
                        _hover: {
                            filter: "brightness(85%)",
                            textDecoration: "underline",
                        },
                        _active: {
                            filter: "brightness(85%)",
                        },
                    })}
                    href={next ?? ""}
                    disabled={next === null}
                    aria-disabled={next === null}>
                    Next
                </Link>
            </div>
        </>
    );
};
