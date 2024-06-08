import { Character } from '../character';
import { Team } from '../team';

describe('Character', () => {
  test('should create a character with a name', () => {
    const character = new Character('Knight');
    expect(character.name).toBe('Knight');
  });
});

describe('Team', () => {
  let team;
  let knight;
  let archer;

  beforeEach(() => {
    team = new Team();
    knight = new Character('Knight');
    archer = new Character('Archer');
  });

  test('should add a character to the team', () => {
    team.add(knight);
    expect(team.members.has(knight)).toBeTruthy();
  });

  test('should throw if trying to add a non-character', () => {
    expect(() => team.add({ name: 'Dragon' })).toThrow('You can only add instances of Character');
  });

  test('should throw if trying to add the same character twice', () => {
    team.add(knight);
    expect(() => team.add(knight)).toThrow('This character is already in the team');
  });

  test('should add multiple characters to the team with addAll', () => {
    team.addAll(knight, archer);
    expect(team.members.has(knight)).toBeTruthy();
    expect(team.members.has(archer)).toBeTruthy();
  });

  test('should not add non-characters with addAll', () => {
    team.addAll(knight, { name: 'Dragon' });
    expect(team.members.has(knight)).toBeTruthy();
    expect(team.members.size).toBe(1);
  });

  test('should convert team members to an array', () => {
    team.addAll(knight, archer);
    const teamArray = team.toArray();
    expect(teamArray).toEqual([knight, archer]);
  });
});