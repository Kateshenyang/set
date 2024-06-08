import { Character } from './js/character';
import { Team } from './js/team';

const team = new Team();
const knight = new Character('Knight');
const archer = new Character('Archer');

try {
    team.add(knight);
    team.addAll(knight, archer);
    const teamArray = team.toArray();
    console.log(teamArray);
} catch (error) {
    console.error(error.message);
}