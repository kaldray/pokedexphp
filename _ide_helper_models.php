<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Pokemon
 *
 * @property int $id
 * @property int $pokedex_id
 * @property string $name
 * @property string $first_type
 * @property string|null $secondary_type
 * @property int $attack
 * @property int $defense
 * @property int $sp_attack
 * @property int $hp
 * @property int $sp_defense
 * @property int $speed
 * @property int $generation
 * @property int $legendary
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon query()
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon whereAttack($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon whereDefense($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon whereFirstType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon whereGeneration($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon whereHp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon whereLegendary($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon wherePokedexId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon whereSecondaryType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon whereSpAttack($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon whereSpDefense($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon whereSpeed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Pokemon whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	class IdeHelperPokemon {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property mixed $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	class IdeHelperUser {}
}

