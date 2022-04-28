// Adicionar Novo Super Herói

const adicionarNovoSuperHeroi = (superHerois, novoSuperHeroi) => {
    superHerois.push(novoSuperHeroi);
    return superHerois;
};

// Adicionar outro Super Herói

const adicionarOutroSuperHeroi = (
    id,
    nome,
    identidade,
    editora,
    superHerois
) => {
    const superHeroi = {
        id,
        nome,
        identidade,
        editora,
    };
    superHerois.push(superHeroi);
    return superHeroi;
};

// Buscar o índice do Super Herói pelo Id

const buscarIndiceSuperHeroiId = (id, superHerois) => {
    const indiceSuperHeroi = superHerois.findIndex(
        (superHeroi) => superHeroi.id === id
    );
    const resultado =
        indiceSuperHeroi < 0
            ? "Super herói não encontrado"
            : `O índice do super herói buscado é ${indiceSuperHeroi}`;
    return resultado;
};

// Buscar ID Super Herói

const buscarsuperHeroisId = (id, superHerois) => {
    const superHeroi = superHerois.find((superHeroi) => superHeroi.id === id);
    return superHeroi;
};




module.exports = {
    adicionarNovoSuperHeroi,
    adicionarOutroSuperHeroi,
    buscarIndiceSuperHeroiId,
    buscarsuperHeroisId,
};
