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
  
  let busca = 'O Rei Leão';
  function buscarFilme(catalogo, busca) {
    for (let i = 0; i < catalogo.length; i++) {
      catalogo.indexOf(busca);
    }
    return `Encontrei seu filme ${busca}`;
  }
//   console.log(buscarFilme(catalogo, busca));
