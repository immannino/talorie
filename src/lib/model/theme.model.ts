export class TallyMeta {
    name: string;
    colorClass: string;
    multiplier: number;
}

const workout: TallyMeta = {
    name: 'workout',
    colorClass: 'bg-salmon',
    multiplier: 50
}

const water: TallyMeta = {
    name: 'water',
    colorClass: 'bg-blue',
    multiplier: 8
}

const nutrition: TallyMeta = {
    name: 'nutrition',
    colorClass: 'bg-yellow',
    multiplier: 50
}

export const tallys = {
    workout,
    water,
    nutrition
}