export type Pokemon = {
    pokedex_id: string;
    name: string;
    first_type: string;
    secondary_type: string | null;
    attack: number;
    defense: number;
    sp_attack: number;
    hp: number;
    sp_defense: number;
    speed: number;
    generation: number;
    legendary: number;
};

export type Pagination = {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
};

export type Meta = {
    current_page: number;
    from: number;
    path: string;
    per_page: number;
    to: number;
};
