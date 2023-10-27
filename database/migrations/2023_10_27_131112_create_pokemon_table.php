<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Enums\PokemonsTypes;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("pokemon", function (Blueprint $table) {
            $table->id();
            $table->unsignedMediumInteger("pokedex_id")->index();
            $table->string("name")->index();
            $table->enum("first_type", [PokemonsTypes::values()]);
            $table
                ->enum("secondary_type", PokemonsTypes::values())
                ->nullable(true);
            $table->unsignedSmallInteger("attack");
            $table->unsignedSmallInteger("defense");
            $table->unsignedSmallInteger("sp_attack");
            $table->unsignedSmallInteger("hp");
            $table->unsignedSmallInteger("sp_defense");
            $table->unsignedSmallInteger("speed");
            $table->unsignedSmallInteger("generation");
            $table->boolean("legendary");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("pokemon");
    }
};
