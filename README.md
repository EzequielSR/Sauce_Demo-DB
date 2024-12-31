# 🧪 Desafio de Automação de Testes com Cypress - Sauce Demo

## 📄 Descrição
Este projeto contém uma automação completa de testes para o site **Sauce Demo** utilizando **Cypress**. O objetivo é testar diversas funcionalidades do site, como login, listagem de produtos, carrinho de compras e checkout.

## 🛠️ Configuração de Repositório
1. Clone este repositório:
   ```bash
   git clone https://gitlab.com/seu_usuario/Sauce_Demo-DB.git
   ```

2. Navegue para o diretório do projeto:
    ```bash
     cd Sauce_Demo-DB
    ```

3. Instale as dependências:
    ```bash
     npm install
    ```

## ⚙️ Caso de Uso 

* **Login**: Testes de login com credenciais válidas e inválidas, incluindo a validação de mensagens de erro.

* **Página de Produtos**: Validação da listagem de produtos, filtros de ordenação e validação visual.

* **Carrinho de Compras**:  Testes de adição e remoção de produtos, além da validação de quantidade e total.

* **Checkout**: Validação do preenchimento de informações obrigatórias e finalização da compra.

## 🏗️ Configuração de Aplicação
Este projeto utiliza o **Cypress** para a automação dos testes e está configurado para rodar localmente ou em um pipeline CI/CD.

### Variáveis de Ambiente
- `BASE_URL`: URL base do site Sauce Demo (ex: https://www.saucedemo.com/v1)

## 🧪 Testes Implementados

Os seguintes testes estão implementados no projeto:
- **Login**:
  - Login com credenciais válidas
  - Login com credenciais inválidas
  - Validação de campos obrigatórios e mensagens de erro

- **Páginade Produtos**:
  - Listagem de produtos
  - Filtros de ordenação
  - Validação visual

- **Carrinho de Compras**:
  - Adição de produtos
  - Remoção de produtos
  - Validação de quantidade e total

- **Checkout**:
  - Preenchimento de informações obrigatórias
  - Finalização da compra

## 📊 Gerar Relatório

Os testes geram relatórios usando o **Mochawesome**. Para visualizar os relatórios, execute os testes e os arquivos HTML serão gerados na pasta `cypress/reports`.

### Comando para executar os testes:

```bash
npx cypress run
```

## 📝 Logs
Os logs detalhados de execução de testes podem ser encontrados na pasta `cypress/reports` após a execução dos testes.

## 🐞 Bugs e Inconsistências

- **Bug 1**: O filtro de ordenação não está funcionando corretamente para todos os tipos de ordenação.

- **Inconsistência 1**: O site apresenta um atraso na renderização de imagens após o login.

## 🧰 Stack

- **Cypress** para automação de testes.
- **JavaScript** como linguagem de programação.
- **Mochawesome** para geração de relatórios.
- **GitLab CI/CD** (opcional) para integração contínua.

## 🚧 Roadmap

- 🏁 **Conclusão da Implementação**: Todos os testes principais estão implementados.

- 🛠️ **Aprimoramento de Testes**: Adicionar mais cenários e melhorar a cobertura de testes.

- 🚀 **Integração com CI/CD**: Configurar a execução automática de testes no GitLab CI.

