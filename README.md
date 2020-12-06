# Dashboard

## Configurando testes unitários

```bash
# Instalando pacotes necessários
$ npm install @vue/cli-plugin-unit-jest @vue/test-utils
```

Adicione `"test": "jest"` aos scripts disponíveis.

```bash
# Criar o arquivo 'jest.config.js' na raiz e adicione:
module.exports = {
  preset: '@vue/cli-plugin-unit-jest'
}
```

Crie os testes dentro da pasta `/tests/unit/` com extensão `*.test.js` ou `*.spec.js`

> Link usado como base: https://www.digitalocean.com/community/tutorials/vuejs-vue-testing

## 