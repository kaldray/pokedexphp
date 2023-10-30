<?php

namespace App\Services;

use App\Http\Resources\PokemonResource;
use App\Models\Pokemon;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PokemonService
{
    public function __construct(protected Pokemon $pokemon)
    {
    }

    public function getPaginatedPokemon(): AnonymousResourceCollection
    {
        return PokemonResource::collection($this->pokemon::simplePaginate(20));
    }
}
