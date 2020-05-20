/**
 * @deprecated Use the exported function `hasEffect` instead.
 */
export class ConditionEffects {
  /**
   * @deprecated Use the exported function `hasEffect` instead.
   */
  static has(condition: number, effect: ConditionEffect): boolean {
    // tslint:disable no-bitwise
    const effectBit = 1 << effect - 1;
    return (condition & effectBit) === 1;
    // tslint:enable no-bitwise
  }
}

/**
 * Determines whether or not the given `condition` value has the
 * `effect` bit set.
 *
 * @example
 * const isDazed = hasEffect(this.condition, ConditionEffect.DAZED);
 *
 * @param condition The condition stat to check.
 * @param effect The effect to determine if the condition value has or not.
 */
export function hasEffect(condition: number, effect: ConditionEffect): boolean {
  // tslint:disable no-bitwise
  return (condition & effect) > 0;
  // tslint:enable no-bitwise
}

/**
 * The values of all condition effects in the game.
 */
export enum ConditionEffect {
  NOTHING = 0,
  DEAD = 2 ** 0,
  QUIET = 2 ** 1,
  WEAK = 2 ** 2,
  SLOWED = 2 ** 3,
  SICK = 2 ** 4,
  DAZED = 2 ** 5,
  STUNNED = 2 ** 6,
  BLIND = 2 ** 7,
  HALLUCINATING = 2 ** 8,
  DRUNK = 2 ** 9,
  CONFUSED = 2 ** 10,
  STUN_IMMUNE = 2 ** 11,
  INVISIBLE = 2 ** 12,
  PARALYZED = 2 ** 13,
  SPEEDY = 2 ** 14,
  BLEEDING = 2 ** 15,
  NOT_USED = 2 ** 16,
  HEALING = 2 ** 17,
  DAMAGING = 2 ** 18,
  BERSERK = 2 ** 19,
  PAUSED = 2 ** 20,
  STASIS = 2 ** 21,
  STASIS_IMMUNE = 2 ** 22,
  INVINCIBLE = 2 ** 23,
  INVULNERABLE = 2 ** 24,
  ARMORED = 2 ** 25,
  ARMORBROKEN = 2 ** 26,
  HEXED = 2 ** 27,
  NINJA_SPEEDY = 2 ** 28,
}
