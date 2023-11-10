/// <reference types = "cypress" />
import enderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços de Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });

    it.only('Fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Karina', 'Macedo', 'Folia', 'Brasil', 'Av Senador', '1004', 'São Paulo', 'São Paulo', '02248790', '946325879', 'kari@folia.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });
});