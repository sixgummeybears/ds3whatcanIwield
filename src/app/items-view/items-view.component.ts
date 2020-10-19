import { Component, OnInit } from '@angular/core';
import { ItemFilter } from './models/item-filter.model';
import { WeaponClass } from './models/weapon-class.enum';
import { Weapon } from './models/weapon.model';

@Component({
  selector: 'app-items-view',
  templateUrl: './items-view.component.html',
  styleUrls: ['./items-view.component.css']
})
export class ItemsViewComponent implements OnInit {
  matchedDaggers: Weapon[];
  matchedStraightSwords: Weapon[];
  matchedGreatswords: Weapon[];
  matchedUltraGreatswords: Weapon[];
  matchedCurvedSwords: Weapon[];
  matchedKatanas: Weapon[];
  matchedCurvedGreatswords: Weapon[];
  matchedPiercingSwords: Weapon[];
  matchedAxes: Weapon[];
  matchedGreataxes: Weapon[];
  matchedHammers: Weapon[];
  matchedGreatHammers: Weapon[];
  matchedFists: Weapon[];
  matchedSpears: Weapon[];
  matchedHalberds: Weapon[];
  matchedReapers: Weapon[];
  matchedWhips: Weapon[];
  matchedBows: Weapon[];
  matchedGreatbows: Weapon[];
  matchedCrossbows: Weapon[];
  matchedStaves: Weapon[];
  matchedFlames: Weapon[];
  matchedTalismans: Weapon[];
  matchedChimes: Weapon[];

  strength: number = 1;

  showResults: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showResults = false;
  }

  applyFilter(filterCriteria: ItemFilter): void {
    this.matchedDaggers = this.filterWeapons(this.daggers, filterCriteria);
    this.matchedStraightSwords = this.filterWeapons(this.straightSwords, filterCriteria);
    this.matchedGreatswords = this.filterWeapons(this.greatswords, filterCriteria);
    this.matchedUltraGreatswords = this.filterWeapons(this.ultraGreatswords, filterCriteria);
    this.matchedCurvedSwords = this.filterWeapons(this.curvedSwords, filterCriteria);
    this.matchedKatanas = this.filterWeapons(this.katanas, filterCriteria);
    this.matchedCurvedGreatswords = this.filterWeapons(this.curvedGreatswords, filterCriteria);
    this.matchedPiercingSwords = this.filterWeapons(this.piercingSwords, filterCriteria);
    this.matchedAxes = this.filterWeapons(this.axes, filterCriteria);
    this.matchedGreataxes = this.filterWeapons(this.greataxes, filterCriteria);
    this.matchedHammers = this.filterWeapons(this.hammers, filterCriteria);
    this.matchedGreatHammers = this.filterWeapons(this.greatHammers, filterCriteria);
    this.matchedFists = this.filterWeapons(this.fists, filterCriteria);
    this.matchedSpears = this.filterWeapons(this.spears, filterCriteria);
    this.matchedHalberds = this.filterWeapons(this.halberds, filterCriteria);
    this.matchedReapers = this.filterWeapons(this.reapers, filterCriteria);
    this.matchedWhips = this.filterWeapons(this.whips, filterCriteria);
    this.matchedBows = this.filterWeapons(this.bows, filterCriteria);
    this.matchedGreatbows = this.filterWeapons(this.greatbows, filterCriteria);
    this.matchedCrossbows = this.filterWeapons(this.crossbows, filterCriteria);
    this.matchedStaves = this.filterWeapons(this.staves, filterCriteria);
    this.matchedFlames = this.filterWeapons(this.pyroFlames, filterCriteria);
    this.matchedTalismans = this.filterWeapons(this.talismans, filterCriteria);
    this.matchedChimes = this.filterWeapons(this.chimes, filterCriteria);

    this.strength = filterCriteria.strength;

    this.showResults = true;
  }

  private filterWeapons(weapons: Weapon[], filter: ItemFilter): Weapon[] {
    return weapons.filter( (weapon: Weapon) => {
      let strength = filter.strength;
      if (filter.twoHanded) {
        strength = strength * 1.5;
      }
      return (weapon.strength <= strength) && 
             (weapon.dexterity <= filter.dexterity) &&
             (weapon.intelligence <= filter.intelligence) &&
             (weapon.faith <= filter.faith);
    })
    .sort((a, b) => {return a.name.localeCompare(b.name)});
  }


  // All the weapons/spells

  private daggers: Weapon[] = [
    // Daggers
    {
      name: "Parrying Dagger",
      strength: 5,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Dagger
    },
    {
      name: "Harpe",
      strength: 8,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Dagger
    },
    {
      name: "Dagger",
      strength: 5,
      dexterity: 9,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Dagger
    },
    {
      name: "Brigand Twindaggers",
      strength: 10,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Dagger
    },
    {
      name: "Scholar's Candlestick",
      strength: 7,
      dexterity: 0,
      intelligence: 0,
      faith: 16,
      weaponClass: WeaponClass.Dagger
    },
    {
      name: "Bandit's Knife",
      strength: 6,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Dagger
    },
    {
      name: "Handmaid's Dagger",
      strength: 4,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Dagger
    },
    {
      name: "Mail Breaker",
      strength: 7,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Dagger
    },
    {
      name: "Corvian Greatknife",
      strength: 12,
      dexterity: 16,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Dagger
    },
    {
      name: "Tailbone Short Sword",
      strength: 8,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Dagger
    },
    {
      name: "Rotten Ghru Dagger",
      strength: 10,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Dagger
    },
    {
      name: "Murky Hand Scythe",
      strength: 6,
      dexterity: 11,
      intelligence: 11,
      faith: 11,
      weaponClass: WeaponClass.Dagger
    },
    {
      name: "Aquamarine Dagger",
      strength: 5,
      dexterity: 14,
      intelligence: 18,
      faith: 0,
      weaponClass: WeaponClass.Dagger
    }];
    // STRAIGHT SWORDS

    private straightSwords: Weapon[] = [
    {
      name: "Long Sword",
      strength: 10,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Sunlight Straight Sword",
      strength: 12,
      dexterity: 12,
      intelligence: 0,
      faith: 16,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Broken Straight Sword",
      strength: 8,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Broadsword",
      strength: 10,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Astora Straight Sword",
      strength: 10,
      dexterity: 10,
      intelligence: 0,
      faith: 12,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Lothric Knight Sword",
      strength: 11,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Irithyll Straight Sword",
      strength: 12,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Shortsword",
      strength: 8,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Cleric's Candlestick",
      strength: 8,
      dexterity: 12,
      intelligence: 0,
      faith: 12,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Barbed Straight Sword",
      strength: 11,
      dexterity: 11,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Dark Sword",
      strength: 16,
      dexterity: 15,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Gotthard Twinswords",
      strength: 12,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Lothric's Holy Sword",
      strength: 10,
      dexterity: 18,
      intelligence: 0,
      faith: 14,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Anri's Straight Sword",
      strength: 10,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Morion Blade",
      strength: 12,
      dexterity: 17,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Valorheart",
      strength: 12,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.StraightSword
    },
    {
      name: "Ringed Knight Straight Sword",
      strength: 17,
      dexterity: 15,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.StraightSword
    }]
    // Greatswords
    private greatswords: Weapon[] = [
    {
      name: "Claymore",
      strength: 16,
      dexterity: 13,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Greatsword
    },
    {
      name: "Bastard Sword",
      strength: 16,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Greatsword
    },
    {
      name: "Hollowslayer Greatsword",
      strength: 14,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Greatsword
    },
    {
      name: "Executioner's Greatsword",
      strength: 19,
      dexterity: 13,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Greatsword
    },
    {
      name: "Black Knight Sword",
      strength: 20,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Greatsword
    },
    {
      name: "Flamberge",
      strength: 15,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Greatsword
    },
    {
      name: "Wolf Knight's Greatsword",
      strength: 24,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Greatsword
    },
    {
      name: "Wolnir's Holy Sword",
      strength: 13,
      dexterity: 13,
      intelligence: 0,
      faith: 13,
      weaponClass: WeaponClass.Greatsword
    },
    {
      name: "Greatsword of Judgement",
      strength: 17,
      dexterity: 15,
      intelligence: 12,
      faith: 0,
      weaponClass: WeaponClass.Greatsword
    },
    {
      name: "Moonlight Greatsword",
      strength: 16,
      dexterity: 11,
      intelligence: 26,
      faith: 0,
      weaponClass: WeaponClass.Greatsword
    },
    {
      name: "Storm Ruler",
      strength: 0,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Greatsword
    },
    {
      name: "Firelink Greatsword",
      strength: 20,
      dexterity: 10,
      intelligence: 10,
      faith: 10,
      weaponClass: WeaponClass.Greatsword
    },
    {
      name: "Twin Prince's Greatsword",
      strength: 22,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Greatsword
    },
    {
      name: "Drakeblood Greatsword",
      strength: 18,
      dexterity: 16,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Greatsword
    },
    {
      name: "Onyx Blade",
      strength: 14,
      dexterity: 12,
      intelligence: 15,
      faith: 15,
      weaponClass: WeaponClass.Greatsword
    },
    {
      name: "Gael's Greatsword",
      strength: 19,
      dexterity: 13,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Greatsword
    }
  ];
  // Ultra Greatswords
  private ultraGreatswords: Weapon[] = [
    {
      name: "Zweihander",
      strength: 19,
      dexterity: 11,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.UltraGreatsword
    },
    {
      name: "Greatsword",
      strength: 28,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.UltraGreatsword
    },
    {
      name: "Farron Greatsword",
      strength: 18,
      dexterity: 20,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.UltraGreatsword
    },
    {
      name: "Fume Ultra Greatsword",
      strength: 50,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.UltraGreatsword
    },
    {
      name: "Profaned Greatsword",
      strength: 22,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.UltraGreatsword
    },
    {
      name: "Black Knight Ultra Greatsword",
      strength: 30,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.UltraGreatsword
    },
    {
      name: "Cathedral Knight Greatsword",
      strength: 26,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.UltraGreatsword
    },
    {
      name: "Lorian's Greatsword",
      strength: 26,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.UltraGreatsword
    },
    {
      name: "Lothric Knight Greatsword",
      strength: 24,
      dexterity: 16,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.UltraGreatsword
    },
    {
      name: "Astora Greatsword",
      strength: 16,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.UltraGreatsword
    },
    {
      name: "Ringed Knight Paired Greatswords",
      strength: 40,
      dexterity: 15,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.UltraGreatsword
    }
  ];
  // Curved Swords
  private curvedSwords: Weapon[] = [
    {
      name: "Scimitar",
      strength: 7,
      dexterity: 13,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedSword
    },
    {
      name: "Pontiff Knight Curved Sword",
      strength: 12,
      dexterity: 18,
      intelligence: 10,
      faith: 0,
      weaponClass: WeaponClass.CurvedSword
    },
    {
      name: "Falchion",
      strength: 9,
      dexterity: 13,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedSword
    },
    {
      name: "Sellsword Twinblades",
      strength: 10,
      dexterity: 16,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedSword
    },
    {
      name: "Warden Twinblades",
      strength: 10,
      dexterity: 16,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedSword
    },
    {
      name: "Shotel",
      strength: 9,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedSword
    },
    {
      name: "Dancer's Enchanted Swords",
      strength: 12,
      dexterity: 20,
      intelligence: 9,
      faith: 9,
      weaponClass: WeaponClass.CurvedSword
    },
    {
      name: "Storm Curved Sword",
      strength: 14,
      dexterity: 20,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedSword
    },
    {
      name: "Carthus Curved Sword",
      strength: 15,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedSword
    },
    {
      name: "Carthus Shotel",
      strength: 12,
      dexterity: 19,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedSword
    },
    {
      name: "Rotten Ghru Curved Sword",
      strength: 10,
      dexterity: 13,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedSword
    },
    {
      name: "Painting Guardian's Curved Sword",
      strength: 7,
      dexterity: 19,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedSword
    },
    {
      name: "Crescent Moon Sword",
      strength: 10,
      dexterity: 16,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedSword
    },
    {
      name: "Follower Sabre",
      strength: 9,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedSword
    },
    {
      name: "Demon's Scar",
      strength: 0,
      dexterity: 16,
      intelligence: 17,
      faith: 17,
      weaponClass: WeaponClass.CurvedSword
    }
  ];
  //Katanas
  private katanas: Weapon[] = [
    {
      name: "Darkdrift",
      strength: 10,
      dexterity: 28,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Katana
    },{
      name: "Washing Pole",
      strength: 18,
      dexterity: 20,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Katana
    },{
      name: "Uchigatana",
      strength: 11,
      dexterity: 16,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Katana
    },{
      name: "Chaos Blade",
      strength: 16,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Katana
    },{
      name: "Black Blade",
      strength: 18,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Katana
    },{
      name: "Onikiri and Ubadachi",
      strength: 13,
      dexterity: 25,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Katana
    },{
      name: "Bloodlust",
      strength: 11,
      dexterity: 24,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Katana
    },{
      name: "Frayed Blade",
      strength: 11,
      dexterity: 40,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Katana
    }
  ];
  //Curved Greatswords
  private curvedGreatswords: Weapon[] = [
    {
      name: "Murakumo",
      strength: 20,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedGreatsword
    },{
      name: "Carthus Curved Greatsword",
      strength: 18,
      dexterity: 22,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedGreatsword
    },{
      name: "Exile Greatsword",
      strength: 24,
      dexterity: 16,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedGreatsword
    },{
      name: "Old Wolf Curved Sword",
      strength: 19,
      dexterity: 25,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedGreatsword
    },{
      name: "Harald Curved Greatsword",
      strength: 22,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.CurvedGreatsword
    }
  ];
  // Piercing Swords
  private piercingSwords: Weapon[] = [
    {
      name: "Estoc",
      strength: 10,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.PiercingSword
    },
    {
      name: "Rapier",
      strength: 7,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.PiercingSword
    },{
      name: "Crystal Sage's Rapier",
      strength: 13,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.PiercingSword
    },{
      name: "Irithyll Raiper",
      strength: 10,
      dexterity: 16,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.PiercingSword
    },{
      name: "Ricard's Rapier",
      strength: 8,
      dexterity: 20,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.PiercingSword
    },{
      name: "Crow Quills",
      strength: 9,
      dexterity: 16,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.PiercingSword
    }
  ];
  // Axes
  private axes: Weapon[] = [
    {
      name: "Battle Axe",
      strength: 12,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Axe
    },{
      name: "Hand Axe",
      strength: 9,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Axe
    },{
      name: "Thrall Axe",
      strength: 8,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Axe
    },{
      name: "Dragonslayer's Axe",
      strength: 18,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Axe
    },{
      name: "Butcher's Knife",
      strength: 24,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Axe
    },{
      name: "Brigand Axe",
      strength: 14,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Axe
    },{
      name: "Winged Knight Twinaxes",
      strength: 20,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Axe
    },{
      name: "Eleonora",
      strength: 20,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Axe
    },{
      name: "Man Serpent Hatchet",
      strength: 16,
      dexterity: 13,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Axe
    },{
      name: "Millwood Battle Axe",
      strength: 15,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Axe
    }
  ];
  //Greataxes
  private greataxes: Weapon[] = [
    {
      name: "Greataxe",
      strength: 32,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Axe
    },{
      name: "Demon's Greataxe",
      strength: 28,
      dexterity: 0,
      intelligence: 12,
      faith: 12,
      weaponClass: WeaponClass.Axe
    },{
      name: "Great Machete",
      strength: 24,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Axe
    },{
      name: "Yhorm's Great Machete",
      strength: 38,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Axe
    },{
      name: "Dragonslayer Greataxe",
      strength: 40,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Axe
    },{
      name: "Black Knight Greataxe",
      strength: 36,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Axe
    },{
      name: "Earth Seeker",
      strength: 24,
      dexterity: 0,
      intelligence: 0,
      faith: 15,
      weaponClass: WeaponClass.Axe
    }
  ];
  //Hammers
  private hammers: Weapon[] = [
    {
      name: "Mace",
      strength: 12,
      dexterity: 7,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Hammer
    },{
      name: "Club",
      strength: 10,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Hammer
    },{
      name: "Morning Star",
      strength: 11,
      dexterity: 9,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Hammer
    },{
      name: "Reinforced Club",
      strength: 12,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Hammer
    },{
      name: "Drang Hammers",
      strength: 18,
      dexterity: 16,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Hammer
    },{
      name: "Heysel Pick",
      strength: 12,
      dexterity: 10,
      intelligence: 19,
      faith: 0,
      weaponClass: WeaponClass.Hammer
    },{
      name: "Blacksmith Hammer",
      strength: 13,
      dexterity: 13,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Hammer
    },{
      name: "Warpick",
      strength: 12,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Hammer
    },{
      name: "Follower Torch",
      strength: 14,
      dexterity: 0,
      intelligence: 10,
      faith: 10,
      weaponClass: WeaponClass.Hammer
    },{
      name: "Torch",
      strength: 5,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Hammer
    }
  ];
  //Great Hammers
  private greatHammers: Weapon[] = [
    {
      name: "Large Club",
      strength: 22,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.GreatHammer
    },{
      name: "Gargoyle Flame Hammer",
      strength: 22,
      dexterity: 0,
      intelligence: 9,
      faith: 9,
      weaponClass: WeaponClass.GreatHammer
    },{
      name: "Great Club",
      strength: 28,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.GreatHammer
    },{
      name: "Vordt's Great Hammer",
      strength: 30,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.GreatHammer
    },{
      name: "Great Mace",
      strength: 32,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.GreatHammer
    },{
      name: "Morne's Great Hammer",
      strength: 50,
      dexterity: 0,
      intelligence: 0,
      faith: 30,
      weaponClass: WeaponClass.GreatHammer
    },{
      name: "Great Wooden Hammer",
      strength: 18,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.GreatHammer
    },{
      name: "Smough's Great Hammer",
      strength: 45,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.GreatHammer
    },{
      name: "Old King's Great Hammer",
      strength: 30,
      dexterity: 0,
      intelligence: 10,
      faith: 10,
      weaponClass: WeaponClass.GreatHammer
    },{
      name: "Pickaxe",
      strength: 18,
      dexterity: 9,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.GreatHammer
    },{
      name: "Dragon Tooth",
      strength: 40,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.GreatHammer
    },{
      name: "Spiked Mace",
      strength: 21,
      dexterity: 13,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.GreatHammer
    },{
      name: "Quakestone Hammer",
      strength: 40,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.GreatHammer
    },{
      name: "Ledo's Great Hammer",
      strength: 60,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.GreatHammer
    }
  ];
  //Fists
  private fists: Weapon[] = [
    {
      name: "Caestus",
      strength: 5,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Fist
    },{
      name: "Demon's Fist",
      strength: 20,
      dexterity: 8,
      intelligence: 9,
      faith: 9,
      weaponClass: WeaponClass.Fist
    },{
      name: "Dark Hand",
      strength: 0,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Fist
    },{
      name: "Claw",
      strength: 6,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Fist
    },{
      name: "Mankin Claws",
      strength: 8,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Fist
    },{
      name: "Crow Talons",
      strength: 6,
      dexterity: 19,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Fist
    }
  ];
  //Spears
  private spears: Weapon[] = [
    {
      name: "Spear",
      strength: 11,
      dexterity: 10,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Spear
    },{
      name: "Tailbone Spear",
      strength: 13,
      dexterity: 15,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Spear
    },{
      name: "Winged Spear",
      strength: 12,
      dexterity: 15,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Spear
    },{
      name: "Drang Twinspears",
      strength: 14,
      dexterity: 20,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Spear
    },{
      name: "Arstor's Spear",
      strength: 11,
      dexterity: 19,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Spear
    },{
      name: "Four-Pronged Plow",
      strength: 13,
      dexterity: 11,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Spear
    },{
      name: "Saint Bident",
      strength: 12,
      dexterity: 12,
      intelligence: 0,
      faith: 16,
      weaponClass: WeaponClass.Spear
    },{
      name: "Rotten Ghru Spear",
      strength: 10,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Spear
    },{
      name: "Partizan",
      strength: 14,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Spear
    },{
      name: "Yorshka's Spear",
      strength: 18,
      dexterity: 14,
      intelligence: 0,
      faith: 13,
      weaponClass: WeaponClass.Spear
    },{
      name: "Gargoyle Flame Spear",
      strength: 15,
      dexterity: 18,
      intelligence: 9,
      faith: 9,
      weaponClass: WeaponClass.Spear
    },{
      name: "Dragonslayer Swordspear",
      strength: 16,
      dexterity: 22,
      intelligence: 0,
      faith: 18,
      weaponClass: WeaponClass.Spear
    },{
      name: "Golden Ritual Spear",
      strength: 10,
      dexterity: 10,
      intelligence: 18,
      faith: 14,
      weaponClass: WeaponClass.Spear
    },{
      name: "Soldering Iron",
      strength: 10,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Spear
    },{
      name: "Lothric Knight Long Spear",
      strength: 14,
      dexterity: 20,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Spear
    },{
      name: "Greatlance",
      strength: 21,
      dexterity: 16,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Spear
    },{
      name: "Pike",
      strength: 18,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Spear
    },{
      name: "Follower Javelin",
      strength: 12,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Spear
    },{
      name: "Ringed Knight Spear",
      strength: 15,
      dexterity: 17,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Spear
    },{
      name: "Lothric War Banner",
      strength: 14,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Spear
    }
  ];
  //Halberds
  private halberds: Weapon[] = [
    {
      name: "Halberd",
      strength: 16,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Halberd
    },{
      name: "Lucerne",
      strength: 15,
      dexterity: 13,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Halberd
    },{
      name: "Winged Knight Halberd",
      strength: 26,
      dexterity: 16,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Halberd
    },{
      name: "Red Hilted Halberd",
      strength: 14,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Halberd
    },{
      name: "Black Knight Glaive",
      strength: 28,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Halberd
    },{
      name: "Gundyr's Halbred",
      strength: 30,
      dexterity: 15,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Halberd
    },{
      name: "Immolation Tinder",
      strength: 18,
      dexterity: 18,
      intelligence: 12,
      faith: 12,
      weaponClass: WeaponClass.Halberd
    },{
      name: "Crescent Axe",
      strength: 14,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Halberd
    },{
      name: "Glaive",
      strength: 17,
      dexterity: 11,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Halberd
    },{
      name: "Splitleaf Greatsword",
      strength: 26,
      dexterity: 16,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Halberd
    },{
      name: "Crucifix of the Mad King",
      strength: 19,
      dexterity: 0,
      intelligence: 10,
      faith: 14,
      weaponClass: WeaponClass.Halberd
    }
  ];
  //Reapers
  private reapers: Weapon[] = [
    {
      name: "Great Scythe",
      strength: 14,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Reaper
    },{
      name: "Pontiff Knight Great Scythe",
      strength: 14,
      dexterity: 19,
      intelligence: 0,
      faith: 12,
      weaponClass: WeaponClass.Reaper
    },{
      name: "Great Corvian Scythe",
      strength: 16,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Reaper
    },{
      name: "Friede's Great Scythe",
      strength: 12,
      dexterity: 16,
      intelligence: 12,
      faith: 11,
      weaponClass: WeaponClass.Reaper
    }
  ];
  //Whips
  private whips: Weapon[] = [
    {
      name: "Whip",
      strength: 6,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Whip
    },{
      name: "Notched Whip",
      strength: 6,
      dexterity: 19,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Whip
    },{
      name: "Witch's Locks",
      strength: 9,
      dexterity: 17,
      intelligence: 12,
      faith: 12,
      weaponClass: WeaponClass.Whip
    },{
      name: "Spotted Whip",
      strength: 9,
      dexterity: 20,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Whip
    },{
      name: "Rose of Ariandel",
      strength: 10,
      dexterity: 12,
      intelligence: 0,
      faith: 17,
      weaponClass: WeaponClass.Whip
    }
  ];
  //Bows
  private bows: Weapon[] = [
    {
      name: "Short Bow",
      strength: 7,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Bow
    },{
      name: "Longbow",
      strength: 9,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Bow
    },{
      name: "Black Bow of Pharis",
      strength: 8,
      dexterity: 18,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Bow
    },{
      name: "Dragonrider Bow",
      strength: 19,
      dexterity: 15,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Bow
    },{
      name: "Composite Bow",
      strength: 12,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Bow
    },{
      name: "Darkmoon Longbow",
      strength: 7,
      dexterity: 16,
      intelligence: 10,
      faith: 0,
      weaponClass: WeaponClass.Bow
    },{
      name: "White Birch Bow",
      strength: 8,
      dexterity: 20,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Bow
    }
  ];
  //Greatbows
  private greatbows: Weapon[] = [
    {
      name: "Dragonslayer Greatbow",
      strength: 20,
      dexterity: 20,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.GreatBow
    },{
      name: "Onislayer Greatbow",
      strength: 18,
      dexterity: 24,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.GreatBow
    },{
      name: "Millwood Greatbow",
      strength: 28,
      dexterity: 12,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.GreatBow
    }
  ];
  //Crossbows
  private crossbows: Weapon[] = [
    {
      name: "Light Crossbow",
      strength: 10,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Crossbow
    },{
      name: "Knight's Crossbow",
      strength: 12,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Crossbow
    },{
      name: "Arbalest",
      strength: 18,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Crossbow
    },{
      name: "Sniper Crossbow",
      strength: 18,
      dexterity: 16,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Crossbow
    },{
      name: "Avelyn",
      strength: 16,
      dexterity: 14,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Crossbow
    },{
      name: "Heavy Crossbow",
      strength: 14,
      dexterity: 8,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Crossbow
    },{
      name: "Repeating Crossbow",
      strength: 16,
      dexterity: 20,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Crossbow
    }
  ];

  //Staves
  private staves: Weapon[] = [
    {
      name: "Sorcerer's Staff",
      strength: 6,
      dexterity: 0,
      intelligence: 10,
      faith: 0,
      weaponClass: WeaponClass.Staff
    },{
      name: "Court Sorcerer's Staff",
      strength: 6,
      dexterity: 0,
      intelligence: 14,
      faith: 0,
      weaponClass: WeaponClass.Staff
    },{
      name: "Heretic's Staff",
      strength: 8,
      dexterity: 0,
      intelligence: 16,
      faith: 0,
      weaponClass: WeaponClass.Staff
    },{
      name: "Witch Tree Branch",
      strength: 7,
      dexterity: 0,
      intelligence: 18,
      faith: 0,
      weaponClass: WeaponClass.Staff
    },{
      name: "Sage's Crystal Staff",
      strength: 7,
      dexterity: 0,
      intelligence: 24,
      faith: 0,
      weaponClass: WeaponClass.Staff
    },{
      name: "Izalith Staff",
      strength: 12,
      dexterity: 0,
      intelligence: 14,
      faith: 10,
      weaponClass: WeaponClass.Staff
    },{
      name: "Storyteller's Staff",
      strength: 6,
      dexterity: 0,
      intelligence: 12,
      faith: 0,
      weaponClass: WeaponClass.Staff
    },{
      name: "Archdeacon Great Staff",
      strength: 8,
      dexterity: 0,
      intelligence: 12,
      faith: 12,
      weaponClass: WeaponClass.Staff
    },{
      name: "Man-Grub's Staff",
      strength: 9,
      dexterity: 0,
      intelligence: 18,
      faith: 0,
      weaponClass: WeaponClass.Staff
    },{
      name: "Mendicant's Staff",
      strength: 7,
      dexterity: 0,
      intelligence: 18,
      faith: 0,
      weaponClass: WeaponClass.Staff
    },{
      name: "Preacher's Right Arm",
      strength: 12,
      dexterity: 0,
      intelligence: 14,
      faith: 0,
      weaponClass: WeaponClass.Staff
    },{
      name: "Murky Longstaff",
      strength: 6,
      dexterity: 0,
      intelligence: 12,
      faith: 0,
      weaponClass: WeaponClass.Staff
    }
  ];
  // Pyro Flames
  pyroFlames: Weapon[] = [
    {
      name: "Pyromancy Flame",
      strength: 0,
      dexterity: 0,
      intelligence: 0,
      faith: 0,
      weaponClass: WeaponClass.Flame
    },{
      name: "Pyromancer's Parting Flame",
      strength: 15,
      dexterity: 0,
      intelligence: 13,
      faith: 13,
      weaponClass: WeaponClass.Flame
    }
  ];

  private talismans: Weapon[] = [
    {
      name: "Talisman",
      strength: 4,
      dexterity: 0,
      intelligence: 0,
      faith: 10,
      weaponClass: WeaponClass.Talisman
    },{
      name: "Saint's Talisman",
      strength: 4,
      dexterity: 0,
      intelligence: 0,
      faith: 16,
      weaponClass: WeaponClass.Talisman
    },{
      name: "Sunlight Talisman",
      strength: 4,
      dexterity: 0,
      intelligence: 0,
      faith: 14,
      weaponClass: WeaponClass.Talisman
    },{
      name: "White Hair Talisman",
      strength: 4,
      dexterity: 0,
      intelligence: 16,
      faith: 20,
      weaponClass: WeaponClass.Talisman
    },{
      name: "Sunless Talisman",
      strength: 4,
      dexterity: 0,
      intelligence: 0,
      faith: 24,
      weaponClass: WeaponClass.Talisman
    },{
      name: "Canvas Talisman",
      strength: 4,
      dexterity: 0,
      intelligence: 0,
      faith: 14,
      weaponClass: WeaponClass.Talisman
    }];

    // Chimes
    private chimes: Weapon[] = [
      {
        name: "Priest's Chime",
        strength: 3,
        dexterity: 0,
        intelligence: 0,
        faith: 10,
        weaponClass: WeaponClass.Chime
      },{
        name: "Cleric's Sacred Chime",
        strength: 3,
        dexterity: 0,
        intelligence: 0,
        faith: 14,
        weaponClass: WeaponClass.Chime
      },{
        name: "Caitha's Chime",
        strength: 3,
        dexterity: 0,
        intelligence: 12,
        faith: 12,
        weaponClass: WeaponClass.Chime
      },{
        name: "Saint Tree Bellvine",
        strength: 3,
        dexterity: 0,
        intelligence: 0,
        faith: 18,
        weaponClass: WeaponClass.Chime
      },{
        name: "Crystal Chime",
        strength: 3,
        dexterity: 0,
        intelligence: 18,
        faith: 18,
        weaponClass: WeaponClass.Chime
      },{
        name: "Yorshka's Chime",
        strength: 3,
        dexterity: 0,
        intelligence: 0,
        faith: 30,
        weaponClass: WeaponClass.Chime
      },{
        name: "Sacred Chime of Filianore",
        strength: 4,
        dexterity: 0,
        intelligence: 0,
        faith: 18,
        weaponClass: WeaponClass.Chime
      }
    ];
}
