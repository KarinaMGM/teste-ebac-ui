/// <reference types = "cypress" />

describe('Funcionalidade Endereços de Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Fazer cadastro de faturamento com sucesso', () => {

    });
});