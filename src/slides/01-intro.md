# Acessibilidade

Tornando a web acessível para todos

---

# Como testar a acessibilidade de um site?

---

# Navegue com o teclado

- Elementos de interação
- Destaque no foco

---

# Leitores de tela

- NVDA (Windows)
- Orca (Linux)
- Voiceover (Mac)
- Chrome Vox (Chrome)

---

# Cores

- Relação de contraste
- Não utilizar apenas as cores para diferenciar elementos

---

# Ferramentas de validação

- Axe
- Lighthouse
- NoCoffee

---

# Responsividade

---

# Formulários

- labels
- campos obrigatórios

---

    <label>Nome</label>
    <input />

<label>Nome</label>
<input />

---

    <label>
        Nome
        <input />
    </label>

<div>
<label>
    Nome
    <input />
</label>
</div>

---

    <label for="nome">Nome</label>
    <input id="nome" />

<label for="nome">Nome</label>
<input id="nome" />

---

# Modal

- armadilha de foco
- teclas de ação

---

# Gerenciamento de foco

- tabIndex

---

# tabIndex

```html
tabIndex="-1"
tabIndex="0"
tabIndex="1"
```

---
    <button tabIndex="-1">Primeiro item</button>
    <button>Segundo item</button>
    <button tabIndex="1">Terceiro item</button>

<button tabIndex="-1" id="primeiroItem">Primeiro item</button>
<button>Segundo item</button>
<button tabIndex="1">Terceiro item</button>

---

# Comunicados

- status
- alert

---

    <div role="status">Os dados foram atualizados</div>
    <div role="alert">Ocorreu um erro</div>

---

# Links para os conteúdos

O primeiro link da página deve ser um atalho para o conteúdo principal

- [Google](https://www.google.com/search?q=w3c)

---

# accesskey

Atalhos para o menu principal, para o conteúdo e para a caixa de pesquisa

___

# Títulos das páginas

O título da página deve ser descritivo e informativo, devendo representar o conteúdo principal da página.

---

## [assunto principal da página] – [nome do sítio ou sistema]
ePWG - Padrões Web em Governo Eletrônico

---

# Semântica

- [Padrões da W3C](https://w3c.br/Home/WebHome)

---

## Níveis de cabeçalho

---

## Landmarks

- header
- main
- navigation

---

## Navegação X Ação

---
    <a>Remover</a>
<a>Remover</a>

---

# Listas

---

    <ul>
        <li>Azul</li>
        <li>Vermelhor</li>
    </ul>

<ul>
    <li>Azul</li>
    <li>Vermelhor</li>
</ul>

---

# O site deve possuir informações sobre a sua acessibilidade

---

# Lint

- eslint-plugin-jsx-a11y

---

# Obrigado

---