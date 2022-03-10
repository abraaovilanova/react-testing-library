# Componentes

|  Componente | Conceitos de teste                                                                          | Ultima atualização |
|:-----------:|:-------------------------------------------------------------------------------------------:|:------------------:|
|  Contador   | <ul><li> Encontrar elementos na tela utilizando diferentes métodos </li><li> clicar em elementos</li><li>Verificar se os botões estão desabilitados</li><li>Verificar se o elemento está na DOM ou não</li></ul> | 17/02/22 |
|  CardTexto  | <ul><li>Encontrar elementos na tela utilizando diferentes métodos<li><li>Esperar que elemento apareça na tela</li></ul>                                                                                             |      10/03/22             |


                
## Contador

O primeiro componente que nos iremos testar é um **Contador** simples que deve funcionar da seguinte maneira:

1. O display do contador deve iniciar com zero
2. Ao clicar no botão +1 deve ser adicionado 1 ao valor do contador
3. O botão -1 deve iniciar desabilitado
4. Quando o contador estiver com um valor maior que zero o botão -1 deve ser habilitado
5. Ao clicar no botão -1 deve ser subtraido -1 ao valor do contador
6. O botão restaurar não deve está do documento
7. Quando o contador for maior que 1 o contador deve está no documento
8. Ao clicar no botão Restaurar o contador deve voltar para Zero


O componente `Contador.jsx`  eu criei para a gente começar os testes possui o seguinte código:

```jsx
import React, {useState} from 'react'

export default () => {

    const [contador, setContador] = useState(0)

    return (
        <div className="contador">
            <h1>Contador</h1>

            <span data-testid="contador-valor">{contador}</span>

            <div>
                <button
                    onClick={()=>setContador(contador + 1)}
                >+1</button>

                <button
                    disabled={contador <= 0}
                    onClick={()=>setContador(contador - 1)}
                >-1</button>
            </div>

            {contador > 0 && (
                <button
                    onClick={()=>setContador(0)}
                >Restaurar</button>
            )}
        
        </div>
    )
}
```

O arquivo completo do teste ficou assim:

```jsx
import { render, screen, fireEvent } from '@testing-library/react'
import Contador from './Contador'

describe('testes para o componente Contador', ()=>{
    test('1. O contador deve iniciar com zero', ()=>{
        render(<Contador />)

        // encontrar o elemento com função spam
        const contador = screen.getByTestId('contador-valor')

        // verificar se o valor do contador é zero
        expect(contador).toHaveTextContent('0')
    })

    test('2. Ao clicar no botão +1 deve ser adicionado 1 ao valor do contador', () => {
        render(<Contador />)

        // encontrar o elemento com testid 'contador-valor'
        const contador = screen.getByTestId('contador-valor')

        // verificar se o valor do contador é zero
        expect(contador).toHaveTextContent('0')

        // encontrar o botão
        const addButton = screen.getByRole('button', { name: '+1'})

        // clicar no botão
        fireEvent.click(addButton)

        // verificar se o contador agora possui o valor 1
        expect(contador).toHaveTextContent('1')
    })

    test('3. O botão -1 deve iniciar desabilitado', ()=>{
        render(<Contador />)

        // encontrar o botão '-1'
        const subButton = screen.getByRole('button', { name: '-1'})

        // verificar se o botão está desabilitado
        expect(subButton).toBeDisabled()
    })

    test('4. Quando o contador estiver com um valor maior que zero o botão -1 deve ser habilitado', () => {
        render(<Contador />)

        // encontrar o elemento com testid 'contador-valor'
        const contador = screen.getByTestId('contador-valor')

        // verificar se o valor do contador é zero
        expect(contador).toHaveTextContent('0')

        // encontrar os botões
        const addButton = screen.getByRole('button', { name: '+1'})
        const subButton = screen.getByRole('button', {name: '-1' })

        // verifica se o botão de subtrair está desabilitado
        expect(subButton).toBeDisabled()

        // clicar no botão '+1'
        fireEvent.click(addButton)

        // verificar se o contador agora possui o valor 1
        expect(contador).toHaveTextContent('1')

        //  verifica se o botão '-1' está habilitado
        expect(subButton).toBeEnabled()
    })

    test('5. Ao clicar no botão -1 deve ser subtraido -1 ao valor do contador', () => {
        render(<Contador />)

        // encontrar o elemento com testid 'contador-valor'
        const contador = screen.getByTestId('contador-valor')

        // encontrar os botões
        const addButton = screen.getByRole('button', { name: '+1' })
        const subButton = screen.getByRole('button', { name: '-1' })

        // clicando no botão '+1' 
        fireEvent.click(addButton)

        // verifica se o contador adicionou +1
        expect(contador).toHaveTextContent('1')

        // clicando no botão -1
        fireEvent.click(subButton)

        // verifica se contador subtraiu -1
        expect(contador).toHaveTextContent('0')
    })

    test('6. O botão restaurar não deve está do documento', () => {
        render(<Contador />)

        // procurar por botão 'Restaurar'
        const restButton = screen.queryByRole('button', { name: 'Restaurar' })

        // verificar se o botão não está na DOM
        expect(restButton).not.toBeInTheDocument()
    })

    test('7. Quando o contador for maior que 1 o botão restaurar deve está no documento', ()=>{
        render(<Contador />)

        // encontrando display do contador
        const contador = screen.getByTestId('contador-valor')

        // encontrando botão '+1'
        const addButton = screen.getByRole('button', '+1')


        // clicando no botão '+1'
        fireEvent.click(addButton)

        // encontrnado o botão restaurar
        const restButton = screen.getByRole('button', 'Restaurar')

        // verificando se o botão está na DOM
        expect(restButton).toBeInTheDocument()
    })

    test('8. Ao clicar no botão Restaurar o contador deve voltar para Zero', () => {
        render(<Contador />)

        // encontrando display do contador
        const contador = screen.getByTestId('contador-valor')

        // encontrando botão '+1'
        const addButton = screen.getByRole('button', '+1')


        // clicando no botão '+1'
        fireEvent.click(addButton)

        // encontrnado o botão restaurar
        const restButton = screen.getByRole('button', 'Restaurar')

        // verificando se o botão está na DOM
        expect(restButton).toBeInTheDocument()

        // clicando no botão restaurar
        fireEvent.click(restButton)

        // verificando se o display do contador é igual a zero
        expect(contador).toHaveTextContent('0')

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


