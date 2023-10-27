<?php

namespace App\Enums;

enum PokemonsTypes: string
{
    case Grass = "Grass";
    case Fire = "Fire";
    case Water = "Water";
    case Electric = "Electric";
    case Psychic = "Psychic";
    case Normal = "Normal";
    case Fighting = "Fighting";
    case Rock = "Rock";
    case Ground = "Ground";
    case Ice = "Ice";
    case Bug = "Bug";
    case Poison = "Poison";
    case Flying = "Flying";
    case Ghost = "Ghost";
    case Steel = "Steel";
    case Dark = "Dark";
    case Dragon = "Dragon";
    case Fairy = "Fairy";

    public static function values(): array
    {
        return array_column(self::cases(), "value");
    }
}
