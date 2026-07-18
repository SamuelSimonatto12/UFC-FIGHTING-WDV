var database = require("../database/config");

function totalComparacoes(idUsuario) {

    var instrucaoSql = `
        SELECT COUNT(*) AS total
        FROM comparacoes
        WHERE fk_usuario = ${idUsuario};
    `;

    return database.executar(instrucaoSql);
}

function lutadorFavorito(idUsuario) {

    var instrucaoSql = `
        SELECT nome, COUNT(*) AS quantidade
        FROM (
            SELECT l.nome
            FROM comparacoes c
            JOIN lutadores l
                ON c.id_lutador1 = l.id
            WHERE c.fk_usuario = ${idUsuario}

            UNION ALL

            SELECT l.nome
            FROM comparacoes c
            JOIN lutadores l
                ON c.id_lutador2 = l.id
            WHERE c.fk_usuario = ${idUsuario}
        ) AS escolhas
        GROUP BY nome
        ORDER BY quantidade DESC
        LIMIT 1;
    `;

    return database.executar(instrucaoSql);
}

function lutadorMaisVencedor(idUsuario) {

    var instrucaoSql = `
        SELECT vencedor AS nome,
               COUNT(*) AS vitorias
        FROM comparacoes
        WHERE fk_usuario = ${idUsuario}
        GROUP BY vencedor
        ORDER BY vitorias DESC
        LIMIT 1;
    `;

    return database.executar(instrucaoSql);
}

function grafico(idUsuario) {

    var instrucaoSql = `
        SELECT nome, COUNT(*) AS quantidade
        FROM (
            SELECT l.nome
            FROM comparacoes c
            JOIN lutadores l
                ON c.id_lutador1 = l.id
            WHERE c.fk_usuario = ${idUsuario}

            UNION ALL

            SELECT l.nome
            FROM comparacoes c
            JOIN lutadores l
                ON c.id_lutador2 = l.id
            WHERE c.fk_usuario = ${idUsuario}
        ) AS escolhas
        GROUP BY nome
        ORDER BY quantidade DESC;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    totalComparacoes,
    lutadorFavorito,
    lutadorMaisVencedor,
    grafico
};