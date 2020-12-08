# Dashboard

## Configurando testes unitários

```bash
# Instalando pacotes necessários
$ npm install @vue/cli-plugin-unit-jest @vue/test-utils
```

Adicione `"test": "jest"` aos scripts disponíveis.

```javascript
// Criar o arquivo 'jest.config.js' na raiz e adicione:
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  verbose: true,
  rootDir: '.',
  roots: [
    'tests/unit/'
  ]
}
```

Crie os testes dentro da pasta `/tests/unit/` com extensão `*.test.js` ou `*.spec.js`

## Links

- [How to Test Your Vue Components Using the Jest Testing Framework](https://www.digitalocean.com/community/tutorials/vuejs-vue-testing)
- [When to Write Jest Snapshot Tests](https://medium.com/javascript-in-plain-english/should-i-be-writing-snapshot-tests-47da13a62085)