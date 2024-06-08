import { Character } from './character.js';

export class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (!(character instanceof Character)) {
            throw new Error('You can only add instances of Character');
        }
        if (this.members.has(character)) {
            throw new Error('This character is already in the team');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach(character => {
            if (character instanceof Character) {
                this.members.add(character);
            }
        });
    }

    toArray() {
        return Array.from(this.members);
    }
}