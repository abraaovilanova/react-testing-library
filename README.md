# [Abe] Anotações React Test Library

# Introdução

No começo da minha carreira como desenvolvedor Front-end eu morria de medo de fazer testes unitários, sempre que eu me candidatava para uma vaga de emprego que solicitava que no desafio técnico fossem implementados teste unitários nos componentes eu ficava ansioso e já fazia o desafio técnico sabendo que eu não iria passar - ou teria em vender muito bem meu peixe na entrevista para os recrutadores não me perguntarem sobre os testes unitários -  se esse ponto fosse muito importante na avaliação,  ou seja, sempre que “testes unitários” aparecia na minha frente eu queria chorar.  Logo quando eu comecei a aprender React eu tentei estudar testes usando jets mas como eu ainda não tinha um domínio bom do framework eu não consegui aprender corretamente e nem entender a filosofia por trás dos testes.

Hoje em dia, depois de mais de um ano trabalhando e participando e ajudando a criar testes End-To-End na empresa que eu trabalho eu acabei perdendo o medo dos teste, o melhor de tudo é que agora eu também sei a importância que eles tem para se desenvolver um software de qualidade. 

Nesse repositório você irá encontrar vários componentes com funcionalidades distintas para tentar abordar toda as opções das bibliotecas nativas de test do React, então esse repositório será atualizado aos poucos a medida que eu vou tendo ideias para componentes que eu acabo criando ou fazendo manutenção diariamente na minha rotina como Dev Front-end React.

Antes de mais nada, leia a documentação!

Vou deixar aqui algumas citação que eu acredito que são interessantes sobre testes:

> Parecer que funciona é lindo, podemos chamar de programação voltada a esperança, tomara que funcione em prod, em dev...
> 

> "Quanto mais seus testes se assemelham à maneira como seu software é usado, mais confiança eles podem oferecer.”
> 
# Organização do repositório
* **Cpmponentes** : Nesse projeto existem diversos componentes que funcionam de forma isolada, o objetivo aqui é testas funcionalidades básicas de click em botões, preenchimento em formulários, mudança de estilo de uma tag, ou seja, o foco aqui é mais os tetes unitários.

* **Projetos completos** : Nessa pasta possui alguns projetos completos para que possamos fazer um fluxo de teste mais completos, fazendo testes de integração. Aqui os testes já são mais parecidos com a maneira que o usuário utiliza os aplicativos

* **APIs**: Algumas api em nodeJS/express que foram criadas para testar alguns dos projetos citados acima.

# Componentes

## Contador

O primeiro componente que iremos testar é um **Contador** simples que deve funcionar da seguinte maneira:

1. O contador deve iniciar com zero;
2. Ao clicar no botão +1 deve ser adicionado 1 ao valor do contador;
3. Ao clicar no botão -1 deve ser subtraído 1 ao valor do contador;
4. Ao clicar no botão Restaurar o contador deve voltar para Zero;
5. O botão restaurar não deve está na DOM se o contador estiver zerado;
6. Se o contador estiver zerado o botão de subtrair deve está desabilitado (ou seja, o contador não pode ter valores negativos);
7. Se o contador estiver com um número maior que zero deve aparecer um botão de restaurar;
8. Ao clicar no botão restaurar o contador deve voltar para zero;

O componente `Contador.jsx`  eu criei para a gente começar os testes possui o seguinte código:

```jsx
import React, {useState} from 'react'

export default () => {

    const [contador, setContador] = useState(0)

    return (
        <>
            <h1 data-testid="titulo-componente">Contador</h1>

            <span data-testid="display-contador">{contador}</span>

            <br /><br />

            <div>
                <button
                    data-testid="btn-add"
                    onClick={()=>setContador(contador + 1)}
                >+1</button>

                <button
                    data-testid="btn-sub"
                    disabled={contador <= 0}
                    onClick={()=>setContador(contador - 1)}
                >-1</button>
            </div>

            <br />

            {contador > 0 && (
                <button
                data-testid="btn-restaurar"
                    onClick={()=>setContador(0)}
                >Restaurar</button>
            )}
        
        </>
    )
}
```

É um componente bem básico que qualquer estudante com o básico de conhecimento em JavaScrip e React poderia criar, porém por mais simples que possa parecer existem diversas formas de testar esse componente. Para fins educativos vamos apenas focar nas 8 principais guias de funcionamento do componente que eu listei no começo dessa sessão.

O próximo passo é criar um arquivo na mesma pasta (No meu caso eu gosto de criar os componentes em pastas separadas nos meus projetos React, por exemplo src/components/Contador) chamado `Contador.test.js` , e vamos começar a testar! 

No arquivo novo criado nos precisamos importar algumas bibliotecas que vão nos fornecer o material necessário para *renderezar* o componente e procurar na DOM pelos seus elementos. E também lembrar de importar o componente que iremos testar, nesse caso o Contador.

```jsx
import { render, screen, fireEvent } from '@testing-library/react'
import Contador from './Contador'
```

O primeiro teste que iremos fazer é se o *display* do nosso componente `Contador.jsx` é inicia com o valor Zero.

```jsx
test('1. contador deve iniciar o display com zero', ()=>{
        render(<Contador />)

        const nodeDisplayContador = screen.getByTestId('display-contador')
        expect(nodeDisplayContador).toHaveTextContent('0')
    })
```

Vamos entender um pouco o que está acontecendo nesse teste, primeiramente a gente faz uma declaração de que irá inicializar o teste e colocamos um comentário com um pequeno resumo do que o teste irá fazer. Depois *renderizamos* o nosso componente com a função `render( <Contador />)` . Depois nos encontramos o nosso elemento que possui a propriedade data-testid que colocamos lá no nosso jsx que nesse caso seria “display-contador”. Depois nos verificamos de tem um texto dentro desse elemento com o valor zero (é interessante a gente trocar esse valor para ver se o teste quebra, isso garante que nos estamos indo pelo caminho certo).  Pronto, nosso primeiro teste foi executado com sucesso 🎉

O nosso segundo teste agora possui uma funcionalidade nova, além de achar um elemento na tela, nos vamos querer clicar! Isso mesmo, já imaginou as possibilidade? Agora a gente precisa encontrar o botão e clicar nele!

```jsx
test('2. Ao clicar no botão +1 deve ser adicionado 1 ao valor do contador', ()=>{
        render(<Contador />)

        const nodeAddBtn = screen.getByTestId('btn-add')
        fireEvent.click(nodeAddBtn)

        const nodeDisplayContador = screen.getByTestId('display-contador')
        expect(nodeDisplayContador).toHaveTextContent('1')
     
    })
```

Novamente nos renderizamos o componente, e usamos novamente o `getByTestId(...)` para encontrar um elemento na DOM (percebemos aqui que a medida que vamos fazendo os testes padrões são repetidos...), após isso a gente usa o `fireEvent.click(...)` para clicar no botão encontrado.

Procuramos na nossa DOM o display e verificamos se agora o conteúdo  igual a ‘1’

```jsx
expect(nodeDisplayContador).toHaveTextContent('1')
```

O terceiro e o quarto nos utilizamos os mesmo conhecimentos dos testes 1 e 2, como podemos observar:

```jsx
test('3. Ao clicar no botão -1 deve ser subtrair 1 ao valor do contador', ()=>{
        render(<Contador />)

        const nodeAddBtn = screen.getByTestId('btn-add')
        const nodeSubBtn = screen.getByTestId('btn-sub')
        const nodeDisplayContador = screen.getByTestId('display-contador')

        fireEvent.click(nodeAddBtn)
        fireEvent.click(nodeSubBtn)

        expect(nodeDisplayContador).toHaveTextContent('0')
     
    })

    test('4. Ao clicar no botão Restaurar o contador deve voltar para Zero', ()=>{
        render(<Contador />)

        const nodeAddBtn = screen.getByTestId('btn-add')

        const nodeDisplayContador = screen.getByTestId('display-contador')
        
        fireEvent.click(nodeAddBtn)

        const nodeRestBtn = screen.getByTestId('btn-restaurar')

        fireEvent.click(nodeRestBtn)
        
        expect(nodeDisplayContador).toHaveTextContent('0')
     
    })
```

O quinto teste possui uma peculiaridade pois o botão restaurar só deve está na DOM se o valor do display do contador for maior que zero. Para isso nos iremos utilizar o metódo `query` que retorna `null` se não encontrar o elemento na DOM (diferente do `get` que retorna um erro) e para fazer a verificação iremos utilizar o `not.toBeInTheDocument()`

```jsx
test('5. O botão restaurar não deve está na DOM se o contador estiver zerado', ()=>{
        render(<Contador />)
        
        const nodeDisplayContador = screen.getByTestId('display-contador')

        expect(nodeDisplayContador).toHaveTextContent('0')
        
        const nodeRestBtn = screen.queryByTestId('btn-restaurar')

        expect(nodeRestBtn).not.toBeInTheDocument()  // Esse elemento não existe!
     
    })
```

O sexto teste verifica se o botão está desabilitado com o método `toBeDisabled()`

```jsx
test('6. Se o contador estiver zerado o botão de subtrair deve está desabilitado (ou seja, o contador não pode ter valores negativos)', ()=>{
        render(<Contador />)
        
        const nodeDisplayContador = screen.getByTestId('display-contador')

        expect(nodeDisplayContador).toHaveTextContent('0')
        
        const nodeSubBtn = screen.getByTestId('btn-sub')

        expect(nodeSubBtn).toBeDisabled() // Esse botão está desabilitado
     
    })
```

O sétimo teste é o oposto do teste 5 agora quando o contador estiver com um valor maior que zero o botão restaurar deve aparecer na DOM

```jsx
test('7. Se o contador estiver com um número maior que zero deve aparecer um botão de restaurar', ()=>{
        render(<Contador />)
        
        const nodeDisplayContador = screen.getByTestId('display-contador')
        const nodeAddBtn = screen.getByTestId('btn-add')
        fireEvent.click(nodeAddBtn)
        expect(nodeDisplayContador).toHaveTextContent('1')

        
        const nodeRestBtn = screen.getByTestId('btn-restaurar')

        expect(nodeRestBtn).toBeInTheDocument()  // Esse elemento existe!
     
    })
```

O ultimo teste teste mais completo, que usa praticamente tudo que aprendemos nessa sessão. Primeiramente nos encontramos o elemento display-contador, depois encontramos o botão btn-add clicamos duas vezes no botão e verificamos se aparece 2 no display.

sepois procuramos pelo borão restaurar, verificamos se ele está na DOM

Clicamos no botão restaurar, verificamos se o contador agora marca zero, se o botão subtrair está desabilitado e se o botão restaurar sumiu.

```jsx
test('8. Ao clicar no botão restaurar o contador deve voltar para zero', ()=>{
        render(<Contador />)
        
        const nodeDisplayContador = screen.getByTestId('display-contador')
        const nodeAddBtn = screen.getByTestId('btn-add')
        fireEvent.click(nodeAddBtn)
        fireEvent.click(nodeAddBtn)
        expect(nodeDisplayContador).toHaveTextContent('2')

        const nodeRestBtn = screen.getByTestId('btn-restaurar')
        expect(nodeRestBtn).toBeInTheDocument()  // it exist

        fireEvent.click(nodeRestBtn)
        expect(nodeDisplayContador).toHaveTextContent('0')
        expect(nodeRestBtn).not.toBeInTheDocument()  // it exist

        const nodeSubBtn = screen.getByTestId('btn-sub')
        expect(nodeSubBtn).toBeDisabled()

    })
```

O arquivo completo do teste ficou assim:

```jsx
import { render, screen, fireEvent } from '@testing-library/react'
import Contador from './Contador'

// Testes Unitários
/**
* 1. O contador deve iniciar com zero
* 2. Ao clicar no botão +1 deve ser adicionado 1 ao valor do contador
* 3. ao clicar no botão -1 deve ser adicionado -1 ao valor do contador
* 4. Ao clicar no botão Restaurar o contador deve voltar para Zero
* 5. O botão restaurar não deve está na DOM se o contador estiver zerado
* 6. Se o contador estiver zerado o botão de subtrair deve está desabilitado (ou seja, o contador não pode ter valores negativos)
* 7. Se o contador estiver com um número maior que zero deve aparecer um botão de restaurar
* 8. Ao clicar no botão restaurar o contador deve voltar para zero
*/

describe('Testes Unitários do componente Contador', ()=>{
    test('1. contador deve iniciar o display com zero', ()=>{
        render(<Contador />)

        const nodeDisplayContador = screen.getByTestId('display-contador')
        expect(nodeDisplayContador).toHaveTextContent('0')
    })

    test('2. Ao clicar no botão +1 deve ser adicionado 1 ao valor do contador', ()=>{
        render(<Contador />)

        const nodeAddBtn = screen.getByTestId('btn-add')
        fireEvent.click(nodeAddBtn)

        const nodeDisplayContador = screen.getByTestId('display-contador')
        expect(nodeDisplayContador).toHaveTextContent('1')
     
    })

    test('3. Ao clicar no botão -1 deve ser subtrair 1 ao valor do contador', ()=>{
        render(<Contador />)

        const nodeAddBtn = screen.getByTestId('btn-add')
        const nodeSubBtn = screen.getByTestId('btn-sub')
        const nodeDisplayContador = screen.getByTestId('display-contador')

        fireEvent.click(nodeAddBtn)
        fireEvent.click(nodeSubBtn)

        expect(nodeDisplayContador).toHaveTextContent('0')
     
    })

    test('4. Ao clicar no botão Restaurar o contador deve voltar para Zero', ()=>{
        render(<Contador />)

        const nodeAddBtn = screen.getByTestId('btn-add')

        const nodeDisplayContador = screen.getByTestId('display-contador')
        
        fireEvent.click(nodeAddBtn)

        const nodeRestBtn = screen.getByTestId('btn-restaurar')

        fireEvent.click(nodeRestBtn)
        
        expect(nodeDisplayContador).toHaveTextContent('0')
     
    })

    test('5. O botão restaurar não deve está na DOM se o contador estiver zerado', ()=>{
        render(<Contador />)
        
        const nodeDisplayContador = screen.getByTestId('display-contador')

        expect(nodeDisplayContador).toHaveTextContent('0')
        
        const nodeRestBtn = screen.queryByTestId('btn-restaurar')

        expect(nodeRestBtn).not.toBeInTheDocument()  // it doesn't exist
     
    })

    test('6. Se o contador estiver zerado o botão de subtrair deve está desabilitado (ou seja, o contador não pode ter valores negativos)', ()=>{
        render(<Contador />)
        
        const nodeDisplayContador = screen.getByTestId('display-contador')

        expect(nodeDisplayContador).toHaveTextContent('0')
        
        const nodeSubBtn = screen.getByTestId('btn-sub')

        expect(nodeSubBtn).toBeDisabled()
     
    })

    test('7. Se o contador estiver com um número maior que zero deve aparecer um botão de restaurar', ()=>{
        render(<Contador />)
        
        const nodeDisplayContador = screen.getByTestId('display-contador')
        const nodeAddBtn = screen.getByTestId('btn-add')
        fireEvent.click(nodeAddBtn)
        expect(nodeDisplayContador).toHaveTextContent('1')

        
        const nodeRestBtn = screen.getByTestId('btn-restaurar')

        expect(nodeRestBtn).toBeInTheDocument()  // it exist
     
    })

    test('8. Ao clicar no botão restaurar o contador deve voltar para zero', ()=>{
        render(<Contador />)
        
        const nodeDisplayContador = screen.getByTestId('display-contador')
        const nodeAddBtn = screen.getByTestId('btn-add')
        fireEvent.click(nodeAddBtn)
        fireEvent.click(nodeAddBtn)
        expect(nodeDisplayContador).toHaveTextContent('2')

        const nodeRestBtn = screen.getByTestId('btn-restaurar')
        expect(nodeRestBtn).toBeInTheDocument()  // it exist

        fireEvent.click(nodeRestBtn)
        expect(nodeDisplayContador).toHaveTextContent('0')
        expect(nodeRestBtn).not.toBeInTheDocument()  // it exist

        const nodeSubBtn = screen.getByTestId('btn-sub')
        expect(nodeSubBtn).toBeDisabled()

    })
 

})
```

## CardTexto

** Está dando o seguinte erro neste componente: Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

Esse será um componente simples, mas possui uma funcionalidade importante que simulará uma requisição que demora um certo tempo para aparecer o resultado na DOM.

1. O TitleCard deve ter um Titulo que deve ser passado pelo usuário, se não for passado nem um valor o titulo deve ser igual a Titulo 1.
2. O Title Card deve ter um subtitulo que pode ser passado pelo o usuário, se não for passado deve ter o valor igual a Subtitulo 1.
3. O TitleCard deve ter um parágrafo que demora 2 segundos para aparecer após a renderização do componente. O conteúdo desse parágrafo pode ou não se passado pelo usuário, quando não for passado deve aparecer Lorem Ipsum.

O componente `CardTexto.jsx` ficou assim:

```jsx
import React, {useState, useEffect} from 'react'

export default ({
        texto1 = 'Titulo 1', 
        texto2 = 'Titulo 2',
        info = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    }) => {

    const [titulo1, setTitulo1] = useState('')
    const [titulo2, setTitulo2] = useState('')
    const [paragrafo1, setParagrafo1] = useState('')
    
    useEffect(()=>{
        setTimeout(()=>{
            setTitulo1(texto1)
        },500)

        setTimeout(()=>{
            setTitulo2(texto2)
        },1000)

        setTimeout(()=>{
            setParagrafo1(info)
        },1500)
    },[])

    return (
        <div>
            <h1>CardTexto</h1>
            <h2 data-testid="titulo1">{titulo1}</h2>
            <h3 data-testid="titulo2">{titulo2}</h3>
            <p data-testid="paragrafo1">{paragrafo1}</p>
        </div>
    )
}

```

O primeiro teste que iremos fazer neste componente é no titulo1, se o usuário não passar nada o valor mostrado na tela deve ser ‘Titulo 1’.

```jsx
test('1. O componente deve mostrar o titulo passado pelo usuario',() => {
        render(<CardTexto texto1={texto1} />)

        const nodeTitle1 = screen.getByTestId('titulo1')
        expect(nodeTitle1).toHaveTextContent(texto1)
    })
```

O segundo teste....

```jsx
test('2. O componente deve mostrar o Titulo 1 quando nenhum texto é passado pelo usuario',() => {
        render(<CardTexto />)

        const nodeTitle1 = screen.getByTestId('titulo1')
        expect(nodeTitle1).toHaveTextContent('Titulo 1')
```

O terceiro teste possui uma pequena pegadinha, o texto relacionado ao subtitulo só aparece na DOM apos 0.6 segundos então devemos esperar que ele aparece, por isso devemos usar o async/await.

```jsx
test('3. O componente deve mostrar o subtitulo passado pelo usuário', async () => {
        render(<CardTexto texto2={texto2} />)

        const nodeTitle2 = await screen.findByText(texto2)
        expect(nodeTitle2).toHaveTextContent(texto2)
    })
```

O quarto teste....

```jsx
test('4. O componente deve mostrar o subtitulo Subtitulo quando nenhum texto for passado pelo usuario', async () => {
        render(<CardTexto />)

        const nodeTitle2 = await screen.findByText('Titulo 2')
        expect(nodeTitle2).toHaveTextContent('Titulo 2')
    })
```

No quinto teste nos devemos usar a função waitFor por que o tempo que o texto demora para aparecer na tela é maior que 2 segundos...

## Todo (08/02/21)

Um componente que tem um formulário para escrever as tarefas e uma lista de tarefas, ao clicar em um item da lista deve esse deve ser “riscado”, deve aparecer um total de itens para fazer e fazendo....

## FetchAPI (15/02/21)

O componente deve buscar dados de uma api e mostrar na tela....

## DropDown (22/02/21)

O app deve renderizar uma lista dropdown, ao clicar em um item da lista deve mostrar detalhes sobre ele

## Search (01/03/21)

Vamos testar uma barra de pesquisa

## Filter (08/03/21)

Vamos testar um filtro....

# Outros Exemplos

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

# Components and Tests
...

# Videos Relacionados
- [x] [React: Teste seus componentes | Jest | Testing Library](https://www.youtube.com/watch?v=pbwXsjVEMqg&t=1152s)
- [x] [Testes com React Testing Library](https://www.youtube.com/watch?v=UKCIfwI8DxA&t=4s)
- [x] [Front-End | React  - Testando interfaces com react-testing-library](https://www.youtube.com/watch?v=sdkgUu5hr6g&t=105s)
- [x] [React Testing Crash Course](https://www.youtube.com/watch?v=OVNjsIto9xM)*
- [ ] [React Testing Library Tutorial](https://www.youtube.com/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ)

