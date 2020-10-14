// ES5
{
  this.n = 200;

  function f1() {
    console.log(this.n);
  }

  function f2() {

    this.n = 50;
    f1();
  }

  f2();
}

// Arrow functions
{
  this.n = 200;

  const f1 = () => console.log(this.n);

  function f2() {

    this.n = 50;
    f1();
  }

  f2();
}
