<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PokemonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "pokedex_id" => $this->pokedex_id,
            "name" => $this->name,
            "first_type" => $this->first_type,
            "secondary_type" => $this->secondary_type,
            "attack" => $this->attack,
            "defense" => $this->defense,
            "sp_attack" => $this->sp_attack,
            "hp" => $this->hp,
            "sp_defense" => $this->sp_defense,
            "speed" => $this->speed,
            "generation" => $this->generation,
            "legendary" => $this->legendary,
        ];
    }
}
