import { Character } from './src/character';
import { Team } from './src/team';

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