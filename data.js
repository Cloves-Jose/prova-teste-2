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
            descricao: "Realizar soma entre dois números inteiros positivos",
            valor_01: 2,
            valor_02: 2,
            result: 4
        },
        {
            descricao: "Realizar soma com resultado negativo",
            valor_01: -5,
            valor_02: 3,
            result: -2
        },
        {
            descricao: "Realizar soma com números decimais",
            valor_01: 0.5,
            valor_02: 1.5,
            result: 2
        },
        {
            descricao: "Realizar soma com número grandes",
            valor_01: 99999,
            valor_02: 11111,
            result: 111110
        },
        {
            descricao: "Realizar soma por zero",
            valor_01: 0,
            valor_02: 11111,
            result: 11111
        },
    ],
    subtracao: [
        {
            descricao: "Subtração de dois inteiros positivos",
            valor_01: 8,
            valor_02: 3,
            result: 5
        },
        {
            descricao: "Subtração de um número negativo e um positivo",
            valor_01: -3,
            valor_02: 8,
            result: -11
        },
        {
            descricao: "Subtração com resultado negativo",
            valor_01: 3,
            valor_02: 7,
            result: -4
        },
        {
            descricao: "Subtração de números decimais",
            valor_01: 5.5,
            valor_02: 2.5,
            result: 3
        },
        {
            descricao: "Subtração de um número com zero",
            valor_01: 0,
            valor_02: 9,
            result: -9
        }
    ],
    multiplicacao: [
        {
            descricao: "Multiplicacao de dois números naturais positivos",
            valor_01: 6,
            valor_02: 7,
            result: 42
        },
        {
            descricao: "Multiplicação de números negativos",
            valor_01: -2,
            valor_02: -5,
            result: 10
        },
        {
            descricao: "Multiplicação de números decimais",
            valor_01: 3.5,
            valor_02: 2.5,
            result: '8,75'
        },
        {
            descricao: "Multiplicação por zero",
            valor_01: 0,
            valor_02: 5,
            result: 0
        },
        {
            descricao: "Multiplicação por um",
            valor_01: 1,
            valor_02: 5,
            result: 5
        }
    ],
    divisao: [
        {
            descricao: "Divisão por zero",
            valor_01: 9,
            valor_02: 0,
            result: 'Infinity'
        },
        {
            descricao: "Divisor menor que dividendo",
            valor_01: 3,
            valor_02: 9,
            result: '0,3333333333333333'
        },
        {
            descricao: "Divisão de dois números decimais",
            valor_01: 3.5,
            valor_02: 7.2,
            result: '0,4861111111111111'
        },
        {
            descricao: "Divisão de dois números naturais positivos",
            valor_01: 8,
            valor_02: 2,
            result: 4
        },
        {
            descricao: "Divisão com dízima periódica",
            valor_01: 13,
            valor_02: 9,
            result: '1,4444444444444444'
        }
    ],
    potenciacao: [
        {
            descricao: "Potência de dois números inteiros positivos",
            valor_01: 2,
            valor_02: 3,
            result: 8
        },
        {
            descricao: "Potência de um número decimal e um inteiro",
            valor_01: 3.7,
            valor_02: 5,
            result: "693,4395700000002"
        },
        {
            descricao: "Potência de um número negativo",
            valor_01: -3,
            valor_02: 4,
            result: 81
        },
        {
            descricao: "Zero elevado a uma potência",
            valor_01: 0,
            valor_02: 5,
            result: 0
        },
        {
            descricao: "Número positivo elevado a zero",
            valor_01: 5,
            valor_02: 0,
            result: 1
        }
    ]
    
}

module.exports = data;