<?php

namespace App\Http\Controllers;

use App\Services\PokemonService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct(protected PokemonService $pokemonService)
    {
    }

    public function index()
    {
        $pokemonList = $this->pokemonService->getPaginatedPokemon();
        return Inertia::render("Home", [
            "pokemons" => $pokemonList,
        ]);
    }

    public function show(string $name)
    {
        $pokemonList = $this->pokemonService->searchPokemon($name);
        return Inertia::render("Home", [
            "pokemons" => $pokemonList,
        ]);
    }
}
