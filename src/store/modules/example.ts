import { defineStore } from 'pinia';

interface AuthorState {
  name: string;
  age: number;
}

export const useExampleStore = defineStore('example', {
  state: (): AuthorState => ({
    name: 'PercyMo',
    age: 18,
  }),
  getters: {
    getAuthor(): string {
      return `hello ${this.name}`;
    },
  },
  actions: {
    increment() {
      this.age++;
    },
  },
});
