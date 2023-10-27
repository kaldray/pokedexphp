<?php

namespace Database\Seeders;

use App\Models\Pokemon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PokemonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Pokemon::truncate();
        $csvFile = fopen(base_path("database/data/pokemon.csv"), "r");
        $firstLine = true;
        while (($dataArray = fgetcsv($csvFile)) !== false) {
            if (!$firstLine) {
                Pokemon::create([
                    "pokedex_id" => $dataArray[0],
                    "name" => $dataArray[1],
                    "first_type" => $dataArray[2],
                    "secondary_type" =>
                        $dataArray[3] === "" ? null : $dataArray[3],
                    "hp" => $dataArray[5],
                    "attack" => $dataArray[6],
                    "defense" => $dataArray[7],
                    "sp_attack" => $dataArray[8],
                    "sp_defense" => $dataArray[9],
                    "speed" => $dataArray[10],
                    "generation" => $dataArray[11],
                    "legendary" => $dataArray[12] === "True" ? 1 : 0,
                ]);
            }
            $firstLine = false;
        }
        fclose($csvFile);
    }
}
