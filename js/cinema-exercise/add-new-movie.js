let catalogo = [
    {
      codigo: 123,
      titulo: 'A bela e a fera',
      duraçao: 2,
      atores: ['Bela', 'Fera'],
      anoLancamento: 1990,
      emCartaz: true,
    },
    {
      codigo: 124,
      titulo: 'O Rei Leão',
      duraçao: 2.67,
      atores: ['Timão', 'Pumba'],
      anoLancamento: 2001,
      emCartaz: false,
    },
  ];
  let novoFilme = {
    codigo: 125,
    titulo: 'Shrek',
    duraçao: 3,
    atores: ['Shrek', 'Fiona'],
    anoLancamento: 2010,
    emCartaz: true,
  };
  function adicionarFilme(catalogo, novoFilme) {
    catalogo.push(novoFilme);
    return catalogo;
  }
//   console.log(adicionarFilme(catalogo, novoFilme));
