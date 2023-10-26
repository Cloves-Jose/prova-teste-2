let data = {
    texto: {
        result: 'Resultado: ',
        error: 'O valor é diferente do esperado: '
    },
    operacoes: {
        soma: '+',
        subtracao: '-',
        multiplicacao: '*',
        divisao: '/',
        potencia: '^'
    },
    soma: [
        {
            descricao: "Caso 01 - Realizar soma entre dois números inteiros positivos",
            valor_01: 2,
            valor_02: 2,
            result: 4
        },
        {
            descricao: "Caso 02 - Realizar soma com resultado negativo",
            valor_01: -5,
            valor_02: 3,
            result: -2
        },
        {
            descricao: "Caso 03 - Realizar soma com números decimais",
            valor_01: 0.5,
            valor_02: 1.5,
            result: 2
        },
        {
            descricao: "Caso 04 - Realizar soma com número grandes",
            valor_01: 99999,
            valor_02: 11111,
            result: 111110
        },
        {
            descricao: "Caso 05 - Realizar soma por zero",
            valor_01: 0,
            valor_02: 11111,
            result: 11111
        },
    ],
    subtracao: [
        {
            descricao: "Caso 01 - Subtração de dois inteiros positivos",
            valor_01: 8,
            valor_02: 3,
            result: 5
        },
        {
            descricao: "Caso 02 - Subtração de um número negativo e um positivo",
            valor_01: -3,
            valor_02: 8,
            result: -11
        },
        {
            descricao: "Caso 03 - Subtração com resultado negativo",
            valor_01: 3,
            valor_02: 7,
            result: -4
        },
        {
            descricao: "Caso 04 - Subtração de números decimais",
            valor_01: 5.5,
            valor_02: 2.5,
            result: 3
        },
        {
            descricao: "Caso 05 - Subtração de um número com zero",
            valor_01: 0,
            valor_02: 9,
            result: -9
        }
    ],
    multiplicacao: [
        {
            descricao: "Caso 01 - Multiplicacao de dois números naturais positivos",
            valor_01: 6,
            valor_02: 7,
            result: 42
        },
        {
            descricao: "Caso 02 - Multiplicação de números negativos",
            valor_01: -2,
            valor_02: -5,
            result: 10
        },
        {
            descricao: "Caso 03 - Multiplicação de números decimais",
            valor_01: 3.5,
            valor_02: 2.5,
            result: '8,75'
        },
        {
            descricao: "Caso 04 - Multiplicação por zero",
            valor_01: 0,
            valor_02: 5,
            result: 0
        },
        {
            descricao: "Caso 05 - Multiplicação por um",
            valor_01: 1,
            valor_02: 5,
            result: 5
        }
    ],
    divisao: [
        {
            descricao: "Caso 01 - Divisão por zero",
            valor_01: 9,
            valor_02: 0,
            result: 'Infinity'
        },
        {
            descricao: "Caso 02 - Divisor menor que dividendo",
            valor_01: 3,
            valor_02: 9,
            result: '0,3333333333333333'
        },
        {
            descricao: "Caso 03 - Divisão de dois números decimais",
            valor_01: 3.5,
            valor_02: 7.2,
            result: '0,4861111111111111'
        },
        {
            descricao: "Caso 04 - Divisão de dois números naturais positivos",
            valor_01: 8,
            valor_02: 2,
            result: 4
        },
        {
            descricao: "Caso 05 - Divisão com dízima periódica",
            valor_01: 13,
            valor_02: 9,
            result: '1,4444444444444444'
        }
    ],
    potenciacao: [
        {
            descricao: "Caso 01 - Potência de dois números inteiros positivos",
            valor_01: 2,
            valor_02: 3,
            result: 8
        },
        {
            descricao: "Caso 02 - Potência de um número decimal e um inteiro",
            valor_01: 3.7,
            valor_02: 5,
            result: "693,4395700000002"
        },
        {
            descricao: "Caso 03 - Potência de um número negativo",
            valor_01: -3,
            valor_02: 4,
            result: 81
        },
        {
            descricao: "Caso 04 - Zero elevado a uma potência",
            valor_01: 0,
            valor_02: 5,
            result: 0
        },
        {
            descricao: "Caso 05 - Número positivo elevado a zero",
            valor_01: 5,
            valor_02: 0,
            result: 1
        }
    ]
    
}

module.exports = data;