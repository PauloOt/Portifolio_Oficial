# 21/10/2026 — Página de freelance e projetos novos

## O que foi feito

**index.html (portfólio de entrevistas)**
- **Projetos:** a seção foi reescrita em três grupos.
  - **No trabalho · MLEGATE:** Assinador EFD-REINF (em produção), Painel de TI e ferramentas contábeis.
  - **Projetos próprios:** Tabletop, Modo Zona e Seis na Quadra.
  - **Para clientes e faculdade:** fotos do casamento com o convite, landing do apartamento em Moema e Biblioteca UniFECAF.
  - **Antigos:** Projeto Integrador, DataDashboard e Imobiliária RM viraram uma linha de links no fim.
  - **Contagem:** passou para 26 repositórios públicos.
- **Stack, ficha e "Sobre":** atualizados para React, Next.js, TypeScript, Node, ASP.NET Core e Astro, contando a passagem do suporte para o desenvolvimento.
- **Contato:** ganhou botões de e-mail e WhatsApp e um link para a página de freelance.
- **Versão do rodapé:** v0.5.

**freelance.html (nova)**
- **Página de vendas no mesmo visual:** serviços, como funciona (4 passos), trabalhos, por que comigo, dúvidas comuns (FAQ com `<details>`) e orçamento.

**script.js**
- **Objeto `CONTATO`:** guarda o WhatsApp `5511986755485`, o e-mail `paulo.dev0705@gmail.com` e a mensagem padrão.
- **Botões `data-contato`:** recebem o link montado. Cada botão pode ter `data-msg` e `data-assunto` próprios, e o index usa uma mensagem neutra, para recrutador. Sem valor preenchido, o botão fica escondido.

**styles.css**
- **Estilos novos:** `.sub-label`, `.badge`, `.proj.static` (projeto sem link), `a.inline`, `.link.primary`, além dos grids de serviços, passos e FAQ, com versões para mobile.
- **Correção:** o nome e a descrição dos projetos ficavam colados na mesma linha, porque eram spans inline. Isso já acontecia na versão anterior.

## Decisões

- **Mesmo repositório:** a página de freelance fica em `freelance.html`. O index continua sendo o portfólio de entrevistas.
- **Trabalhos da MLEGATE sem link e sem nome de cliente:** os repositórios FCxOdoo, anomalias e depreciacoes são privados, e as pastas locais têm dados de clientes. O projeto da BTC ficou de fora.
- **Seis na Quadra e Tabletop:** têm repositório privado. O Seis na Quadra aponta para o site no ar, e o Tabletop aparece sem link.
- **Links ao vivo conferidos em 21/10/2026:** quintoandarapartamento.vercel.app, seis-na-quadra.vercel.app, pauloot.github.io/modo-zona e pauloot.github.io/biblioteca-unifecaf.

## O que ficou aberto

- **Promessas comerciais a confirmar:** "até 5 páginas", "ajustes pequenos inclusos" e "poucos dias" para landing page.
- **Publicação:** o merge na `main` publica na Vercel (portifolio-paulot.vercel.app).

## Ajuste depois do merge

- **Site do casamento sem link:** a pedido do Paulo, o card continua nas duas páginas, mas virou `.proj.static`, sem link para o site. As notas sobre "projetos sem link" passaram a citar também os projetos particulares de cliente.
