export class Animal {     //descrie structura unui animal
    constructor(
      public id: number,
      public name: string,
      public type: string, // Ex: "Câine", "Pisică"
      public age: number,
      public description: string,
      public imageUrl: string
    ) {}
  }
  