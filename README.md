# Minhas anotações sobre Testes em React utilizando React Test Library e Jest

# Introdução

No começo da minha carreira como desenvolvedor Front-end eu morria de medo de fazer testes unitários, primeiramente eu não entendia a nescessidade de fazer os testes já que sempre que eu criava um componente eu testava ele de forma manual, eu só vim entender a filosofia e a utilidade quando eu comecei a trabalhar em equipes grandes e com demandas semanais de entrega de produto ao cliente. Além disso, Sempre que eu me candidatava para uma vaga de emprego que solicitava que no desafio técnico fossem implementados teste unitários nos componentes eu ficava ansioso e já fazia o desafio técnico sabendo que eu não iria passar - ou teria em vender muito bem meu peixe na entrevista para os recrutadores não me perguntarem sobre os testes unitários -  se esse ponto fosse muito importante na avaliação,  ou seja, sempre que “testes unitários” aparecia na minha frente eu queria chorar.  Logo quando eu comecei a aprender React eu tentei estudar testes usando jest mas como eu ainda não tinha um domínio bom do framework eu não consegui aprender corretamente e nem entender a filosofia por trás dos testes.

Hoje em dia, depois de mais de um ano trabalhando e participando e ajudando a criar testes End-To-End na empresa que eu trabalho eu acabei perdendo o medo dos testes, o melhor de tudo é que agora eu também sei a importância que eles têm para se desenvolver um software de qualidade. 

Nesse repositório você irá encontrar vários componentes com funcionalidades distintas para tentar abordar toda as opções das bibliotecas nativas de test do React, então esse repositório será atualizado aos poucos a medida que eu vou tendo ideias para componentes que eu acabo criando ou fazendo manutenção diariamente na minha rotina como Dev Front-end React.

Vou deixar aqui algumas citação que eu acredito que são interessantes sobre testes:

> Parecer que funciona é lindo, podemos chamar de programação voltada a esperança, tomara que funcione em ambiente de produção, em ambiente de desenvolvimento...
> 

> "Quanto mais seus testes se assemelham à maneira como seu software é usado, mais confiança eles podem oferecer.”
> 

# Organização do repositório
* **Componentes** : Nessa pasta existe um projeto com diversos componentes criados independentes que não interagem entre si, o objetivo aqui é testar funcionalidades básicas de click em botões, preenchimento em formulários, mudança de estilo de uma tag, click em checkbox, ou seja, o foco aqui é mais os tetes unitários.

* **Projetos completos** : Nessa pasta possui alguns projetos completos para que possamos fazer um fluxo de teste mais completos, fazendo testes de integração. Aqui os testes já são mais parecidos com a maneira que o usuário utiliza os aplicativos, entre os aplicativos nessa pasta nos temos:
    * Color Button

* **APIs**: Algumas api em NodeJS/express que foram criadas para testar alguns dos projetos citados acima.

# +Info

# The Importance of Testing
* Catch Bugs
* Increases Confidence in Application
* Speeds up QA Time
* Can Serve as Documentations

# Types of Test
* Unit Tests: Are Tests that test a pice of code or component in complete isolation.
* Integration Tests: Test the interaction between components
* End to Emd (E2E) Tests: Simulates user flow in app

# Structure of Tests (Test Block)
* Render a component we to test
* Find elements we want to interact with
* Interact with those elements
* Assert that the results are as expected

# Why you should test?
* Goal: Check whether an applications behaves as expected
* Safeguard against unwanted behaviour when changes are made
* Automated, and thus efficient on the long-term

# What should you test?
Have a test priority (example):
1. High value features
2. Edge cases in high value features
3. Things that are easy to break
4. Basic React component testing
    * User interaction
    * Conditional rendering
    * Utils / Hooks

# Intro to Query Methods
|          |  getBy | findBy | queryBy | getAllBy | findAllBy | queryAllBy |
|:--------:|:------:|:------:|:-------:|:--------:|:---------:|:----------:|
| No Match |  error |  error |   null  |   error  |   error   |    array   |
|  1 Match | return | return |  return |   array  |   array   |    array   |
| +1 Match |  error |  error |  error  |   array  |   array   |    array   |
|   Await  |   no   |   yes  |    no   |    no    |    yes    |     no     |

# Videos no Youtube Relacionados
- [x] [React: Teste seus componentes | Jest | Testing Library](https://www.youtube.com/watch?v=pbwXsjVEMqg&t=1152s)
- [x] [Testes com React Testing Library](https://www.youtube.com/watch?v=UKCIfwI8DxA&t=4s)
- [x] [Front-End | React  - Testando interfaces com react-testing-library](https://www.youtube.com/watch?v=sdkgUu5hr6g&t=105s)
- [x] [React Testing Crash Course](https://www.youtube.com/watch?v=OVNjsIto9xM)*
- [ ] [React Testing Library Tutorial](https://www.youtube.com/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ)

# Cursos Relacionados
- [ ] [Udemy - Testing React with Jest and Testing Library](https://www.udemy.com/course/react-testing-library/)

# Documentação Relacionada

# Artigos Relacionados


