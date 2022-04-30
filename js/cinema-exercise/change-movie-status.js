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
 
  function alterarStatusEmCartaz(catalogo) {
    if (catalogo.emCartaz === true) {
      return false;
    } else {
      catalogo.emCartaz === false;
      return true;
    }
  }
//   console.log(alterarStatusEmCartaz(catalogo[0]));
