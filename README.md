# React Testing Librar
The purpose of this repository is to collect courses and tutorials that I did on youtube about unit tests with ReactJS.

> Parecer que funciona é lindo, podemos chamar de programação voltada a esperança, tomara que funcione em prod, em dev...

> "Quanto mais seus testes se assemelham à maneira como seu software é usado, mais confiança eles podem oferecer."

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

# Videos Relacionados
- [x] [React: Teste seus componentes | Jest | Testing Library](https://www.youtube.com/watch?v=pbwXsjVEMqg&t=1152s)
- [x] [Testes com React Testing Library](https://www.youtube.com/watch?v=UKCIfwI8DxA&t=4s)
- [x] [Front-End | React  - Testando interfaces com react-testing-library](https://www.youtube.com/watch?v=sdkgUu5hr6g&t=105s)
- [x] [React Testing Crash Course](https://www.youtube.com/watch?v=OVNjsIto9xM)*
- [ ] [React Testing Library Tutorial](https://www.youtube.com/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ)

