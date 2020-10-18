import { WeaponClass } from './weapon-class.enum';

export interface Weapon {
    name: string;
    strength: number;
    dexterity: number;
    intelligence: number;
    faith: number;
    weaponClass: WeaponClass;
}
