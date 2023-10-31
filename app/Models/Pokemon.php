<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * @mixin IdeHelperPokemon
 */
class Pokemon extends Model
{
    use HasFactory;
    public function getPokemonByName(string $name): Pokemon|Builder
    {
        return Pokemon::where("name", "LIKE", "%" . $name . "%");
    }
}
