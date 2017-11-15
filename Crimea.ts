class Crimea {
  execute() {
    console.log(`Success.`);
    console.log(`All Russians are executed.`);
  }

  anex() {
    console.log(`Anexation started.`);
    this.resist();
  }

  resist() {
    console.log(`Resistance started.`);
    this.execute();
  }
}

let c = new Crimea;
c.anex();