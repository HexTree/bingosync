bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Blue Collar"
    },
    {
        "name": "Guru's Oil Pot"
    },
    {
        "name": "Blue Cape"
    },
    {
        "name": "Water Medal"
    },
    {
        "name": "Healing Herb"
    },
    {
        "name": "Ultimate Egg"
    },
    {
        "name": "Music Box"
    },
    {
        "name": "Selfi's Prized Egg"
    },
    {
        "name": "Octopus Balls"
    },
    {
        "name": "Aura Bike"
    },
    {
        "name": "3+ buildings in Save Screen"
    },
    {
        "name": "6+ buildings in Save Screen"
    },
    {
        "name": "9+ buildings in Save Screen"
    },
    {
        "name": "2+ girls in Save Screen"
    },
    {
        "name": "4+ girls in Save Screen"
    },
    {
        "name": "Nico (Good): Meet Nico at a Cultural Building"
    },
    {
        "name": "Nico (Evil): Punch Nico (cello scene)"
    },
    {
        "name": "Selfi (Good): Get saved from a U-Boat by Selfi"
    },
    {
        "name": "Selfi (Evil): Be called a Bastard by Selfi (pulunpa rescue failure)"
    },
    {
        "name": "Fur (Good): Give Octopus Dumplings to Fur"
    },
    {
        "name": "Fur (Evil): Make Fur swear at you (deny dumplings)"
    },
    {
        "name": "Patty (Good): Have Patty serve you Octopus Wieners"
    },
    {
        "name": "Patty (Evil): Eat Patty's specialty and leave without paying"
    },
    {
        "name": "Vivian (Good): Offer Vivian flowers after her dance at the theatre"
    },
    {
        "name": "Vivian (Evil): Leave Vivian to gamble at the Casino forever"
    },
    {
        "name": "Mia (Good): Return Mia's glasses"
    },
    {
        "name": "Mia (Evil): Tell Mia she has a bad figure (pool event)"
    },
    {
        "name": "Cherrl (Good): \"Curry\" (Cherrl Nurse path)"
    },
    {
        "name": "Cherrl (Evil): Find the healing herb and feed it to a monster"
    },
    {
        "name": "Ghosh (Good): Watch Vivian's dance together with Ghosh"
    },
    {
        "name": "Ghosh (Evil): Have 3 Wins against Ghosh in combat"
    },
    {
        "name": "Familiar level 15"
    },
    {
        "name": "Familiar level 25"
    },
    {
        "name": "Koh level 10"
    },
    {
        "name": "Koh level 20"
    },
    {
        "name": "3 eggs in inventory"
    },
    {
        "name": "5 hatched familiars in Monster Hut"
    },
    {
        "name": "Come first at the Racetrack"
    },
    {
        "name": "Beat Bet at the Bowling game (30 points)"
    },
    {
        "name": "777 jackpot at the Casino"
    },
    {
        "name": "Beat the gym record at Barbell Toss (20 points)"
    },
    {
        "name": "Complete theatre routine"
    },
    {
        "name": "Stand on top of the Fountain"
    },
    {
        "name": "Teach familiar a spell from a ball"
    },
    {
        "name": "Amass at least 1,000,000 Gold"
    },
    {
        "name": "Sacrifice a home-hatched familiar with Oleem"
    },
    {
        "name": "Deal 100+ damage in a single melee/mixture/ball attack from Koh"
    },
    {
        "name": "Destroy a rock or ice rock"
    },
    {
        "name": "Recover an item from an enemy Picket"
    },
    {
        "name": "Recover an egg from an enemy Viper"
    },
    {
        "name": "Feed limit fruit to a Killer, then survive an attack from it"
    },
    {
        "name": "Seal yourself off using transformed Manoeva until Earthquake"
    },
    {
        "name": "Acquire all 3 elements of either sword/shield/wand/seed/crystal"
    },
    {
        "name": "Have both a troll melee and troll ranged weapon"
    },
    {
        "name": "Cold Fusion: Fuse two water monsters"
    },
    {
        "name": "Survive on 1HP after an enemy attack"
    },
    {
        "name": "Frog Strats: Kill an enemy with your Frog melee attack"
    },
    {
        "name": "Reflect a spell back to the caster"
    }
];
