# 10/11/2026 — Texto do Assinador EFD-REINF

## O que foi feito

- **index.html:**
  - **Card do Assinador EFD-REINF:** o selo passou a dizer "em produção desde abril/2026". A descrição foi trocada pelo texto do Paulo, que conta:
    - a entrada no projeto já em produção;
    - a entrega do R-4080 de ponta a ponta (XML e planilha de importação), aprovado de primeira na homologação da Receita;
    - a correção de dois bugs que faziam envios serem rejeitados: NF duplicada no mesmo evento e obra de construção civil saindo com CNPJ no lugar do CNO.
  - **Lista de experiência:** o item do REINF agora diz "em produção desde abril de 2026".
- **freelance.html:** o card "Sistema de transmissão à Receita Federal" ganhou o mesmo selo e diz que o sistema está no ar há meses. O texto técnico ficou só no index, porque a página de freelance fala com leigo.
- **styles.css:** `.badge` ganhou `white-space:nowrap` e `display:inline-block`. Com o texto mais comprido, o selo se partia em duas linhas em tela estreita. Agora ele desce inteiro para a linha de baixo do título.

## Decisões

- **Data:** abril de 2026 vem do histórico do repositório REINFWeb-React, onde o commit "feat: deploy production" é de 02/04/2026.
- **Conferência visual:** feita com o Chrome headless em 500 px e 1200 px. O headless não desce abaixo de 500 px de largura, então os 375 px de um celular pequeno não foram conferidos por imagem.
