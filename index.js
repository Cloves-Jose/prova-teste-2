const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const fs = require('fs')
const parse = require('xml2json')

const driver = new Builder().forBrowser('chrome').build();
let path = 'https://www.calculadoraonline.com.br/basica';

let dataXml

fs.readFile('./data.xml', (err, data) => {
    let json = parse.toJson(data)
    dataXml = json
})

async function operacoes() {
    try {   
        // Abre a página da calculadora
        await driver.get(path);
        
        // Encontra o elemento visor da calculadora
        const divElement = await driver.findElement(By.id('LBSubResu'));

        // Encontre o elemento <input> pelo ID "TIExp"
        const inputElement = await driver.findElement(By.id('TIExp'));

         // Execute um scroll para a exibição do elemento visor
         await driver.executeScript("arguments[0].scrollIntoView();", divElement);

        // Pega os botões pelo id    
        const btn_2 = await driver.findElement(By.id('b18'));
        const btn_soma = await driver.findElement(By.id('b4'));
        const btn_igual = await driver.findElement(By.id('b27'));
        const btn_negativo = await driver.findElement(By.id('b12'))
        const btn_5 = await driver.findElement(By.id('b10'))
        const btn_3 = await driver.findElement(By.id('b19'))
        const btn_6 = await driver.findElement(By.id('b11'))
        const btn_0 = await driver.findElement(By.id('b25'))
        const btn_1 = await driver.findElement(By.id('b17'))
        const btn_7 = await driver.findElement(By.id('b1'))
        const btn_9 = await driver.findElement(By.id('b3'))
        const btn_divisao = await driver.findElement(By.id('b28'))
        const btn_multiplicacao = await driver.findElement(By.id('b20'))
        const btn_potencia = await driver.findElement(By.id('b31'))
        const btn_8 = await driver.findElement(By.id('b2'))
        const btn_ponto = await driver.findElement(By.id('b26'))
        const tdElement = await driver.findElement(By.css('td[onclick*="limpa()"]'));
        

        // ---------------------------------- SOMA ------------------------------------------
        
        // Realiza uma soma
        await btn_2.click();
        await btn_soma.click();
        await btn_2.click();
        await btn_igual.click()

        await driver.sleep(2000)

        const resultSoma = await inputElement.getAttribute('value')

        if (resultSoma == '4') {
            console.log('Resultado '+ resultSoma)
        } else {
            console.log('O valor é diferente do esperado')
        }
        
        await tdElement.click()

        // ---------------------------------- SOMA NEGATIVA ---------------------------------
        
        // Realiza soma por negativo
        await btn_negativo.click()
        await btn_5.click()
        await btn_soma.click()
        await btn_3.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resultNegativo = await inputElement.getAttribute('value')

        if (resultNegativo == '-2') {
            console.log('Resultado '+ resultNegativo)
        } else {
            console.log('O valor é diferente do esperado')
        }

        
        await tdElement.click()

        // ---------------------------------- SOMA DECIMAL ----------------------------------

        // Realiza a soma
        await btn_0.click()
        await btn_ponto.click()
        await btn_5.click()
        await btn_soma.click()
        await btn_1.click()
        await btn_ponto.click()
        await btn_5.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resulDecimal = await inputElement.getAttribute('value')

        if (resulDecimal == '2') {
            console.log('Resultado '+ resulDecimal)
        } else {
            console.log('O valor é diferente do esperado')
        }

        
        await tdElement.click()

        // --------------------------------- Soma de números grandes -------------------------

        for(let i = 0; i < 5; i++) {
            await btn_9.click()
        }

        await btn_soma.click()

        for(let i = 0; i < 5; i++) {
            await btn_1.click()
        }

        await btn_igual.click()

        await driver.sleep(2000)

        const resultGrandes = await inputElement.getAttribute('value')

        if (resultGrandes == '111110') {
            console.log('Resultado '+ resultGrandes)
        } else {
            console.log('O valor é diferente do esperado')
        }

        
        await tdElement.click()

        // --------------------------------- Soma por 0 ----------------------------------------

        for (let i = 0; i < 5; i++) {
            await btn_0.click()
        }

        await btn_soma.click()

        for (let i = 0; i < 5; i++) {
            await btn_1.click()
        }

        await btn_igual.click()

        await driver.sleep(2000)

        const resultSomaZero = await inputElement.getAttribute('value')

        if (resultSomaZero == '11111') {
            console.log('Resultado '+ resultSomaZero)
        } else {
            console.log('O valor é diferente do esperado')
        }

       
        await tdElement.click()

        // -------------------------------- Subtração ----------------------------------------

        await btn_8.click()
        await btn_negativo.click()
        await btn_3.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resultSubtracao = await inputElement.getAttribute('value')

        if (resultSubtracao == '5') {
            console.log('Resultado '+ resultSubtracao)
        } else {
            console.log('O valor é diferente do esperado')
        }

        
        await tdElement.click()

        // -------------------------------- Subtração de dois negativos ----------------------

        await btn_negativo.click()
        await btn_3.click()
        await btn_negativo.click()
        await btn_8.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resultSubtracaoNegativa = await inputElement.getAttribute('value')

        if (resultSubtracaoNegativa == '-11') {
            console.log('Resultado '+ resultSubtracaoNegativa)
        } else {
            console.log('O valor é diferente do esperado')
        }

        
        await tdElement.click()

        // ------------------------------- Subtração com resultado negativo ------------------

        await btn_3.click()
        await btn_negativo.click()
        await btn_7.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resultSubNegativo =  await inputElement.getAttribute('value')

        if (resultSubNegativo == '-4') {
            console.log('Resultado '+ resultSubNegativo)
        } else {
            console.log('O valor é diferente do esperado')
        }

        await tdElement.click()

        // ------------------------------- Subtração decimal ---------------------------------

        await btn_5.click()
        await btn_ponto.click()
        await btn_5.click()
        await btn_negativo.click()
        await btn_2.click()
        await btn_ponto.click()
        await btn_5.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resutDecimal = await inputElement.getAttribute('value')

        if (resutDecimal == '3') {
            console.log('Resultado '+ resutDecimal)
        } else {
            console.log('O valor é diferente do esperado')
        }

        await tdElement.click()

        // ------------------------------ Subtração por zeros -------------------------------

        await btn_0.click()
        await btn_negativo.click()
        await btn_9.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resultZero = await inputElement.getAttribute('value')

        if (resultZero == '-9') {
            console.log('Resultado '+ resultZero)
        } else {
            console.log('O valor é diferente do esperado')
        }

        await tdElement.click()

        // ------------------------------- Multiplicação -------------------------------------

        await btn_6.click()
        await btn_multiplicacao.click()
        await btn_7.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resultMultiplicacao = await inputElement.getAttribute('value')

        if (resultMultiplicacao == '42') {
            console.log('Resultado '+ resultMultiplicacao)
        } else {
            console.log('O valor é diferente do esperado')
        }

        await tdElement.click()

        // ------------------------------- Multiplicação de negativos ------------------------

        await btn_negativo.click()
        await btn_2.click()
        await btn_multiplicacao.click()
        await btn_5.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resultMultNegativo = await inputElement.getAttribute('value')

        if (resultMultNegativo == '-10') {
            console.log('Resultado ' + resultMultNegativo)
        } else {
            console.log('O valor é diferente do esperado')
        }

        await tdElement.click()

        // ------------------------------- Multiplicação de decimais -------------------------

        await btn_3.click()
        await btn_ponto.click()
        await btn_5.click()
        await btn_multiplicacao.click()
        await btn_2.click()
        await btn_ponto.click()
        await btn_5.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resultMultDeci = await inputElement.getAttribute('value')

        if (resultMultDeci == '8,75') {
            console.log('Resultado '+ resultMultDeci)
        } else {
            console.log('O valor é diferente do esperado')
        }

        await tdElement.click()

        // ------------------------------- Multiplicação por zero ----------------------------

        await btn_0.click()
        await btn_multiplicacao.click()
        await btn_5.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resultMultZero = await inputElement.getAttribute('value')

        if (resultMultZero == '0') {
            console.log('Resultado '+ resultMultZero)
        } else {
            console.log('O valor é diferente do esperado')
        }

        await tdElement.click()

        // ------------------------------- Multiplicação por 1 -------------------------------

        await btn_1.click()
        await btn_multiplicacao.click()
        await btn_5.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resultMultUm = await inputElement.getAttribute('value')

        if (resultMultUm == '5') {
            console.log('Resultado '+ resultMultUm)
        } else {
            console.log('O valor é diferente do esperado')
        }

        await tdElement.click()

        // ------------------------------- Divisão por 0 -------------------------------------

        await btn_9.click()
        await btn_divisao.click()
        await btn_0.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resultDivZero = await inputElement.getAttribute('value')

        if (resultDivZero == 'Infinity') {
            console.log('Resultado '+ resultDivZero)
        } else {
            console.log('O valor é diferente do esperado')
        }

        await tdElement.click()

        // ---------------------------- Divisor menor que dividendo -------------------------

        await btn_3.click()
        await btn_divisao.click()
        await btn_9.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resultDivMenDiv = await inputElement.getAttribute('value')

        if (resultDivMenDiv == '0,3333333333333333') {
            console.log('Resultado '+ resultDivMenDiv)
        } else {
            console.log('O valor é diferente do esperado')
        }

        await tdElement.click()

        // --------------------------- Divisão de decimais -----------------------------------

        await btn_3.click()
        await btn_ponto.click()
        await btn_5.click()
        await btn_divisao.click()
        await btn_7.click()
        await btn_ponto.click()
        await btn_2.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resultDivDecimal = await inputElement.getAttribute('value')

        if (resultDivDecimal == '0,4861111111111111') {
            console.log('Resultado ' + resultDivDecimal)
        } else {
            console.log('O valor é diferente do esperado')
        }

        await tdElement.click()

        // --------------------------- Divisão normal -----------------------------------------

        await btn_8.click()
        await btn_divisao.click()
        await btn_2.click()
        await btn_igual.click()

        await driver.sleep(2000)

        const resultDiv = await inputElement.getAttribute('value')
      
        if (resultDiv == '4') {
            console.log('Resultado ' + resultDiv)
        } else {
            console.log('O valor é diferente do esperado')
        }

        await tdElement.click()

        // ---------------------------- Divisão com dizima -----------------------------------------

        await btn_1.click();
        await btn_3.click();
        await btn_divisao.click();
        await btn_9.click();
        await btn_igual.click();

        // Agora, você deve esperar um pouco para o resultado ser exibido
        await driver.sleep(2000);

        // Obtenha o texto do visor da calculadora e verifique se ele é igual ao valor esperado
        const resultDizima = await inputElement.getAttribute('value');

        if (resultDizima == '1,4444444444444444') {
            console.log('Resultado ' + resultDizima)
        } else {
            console.log('O valor é difernete do esperado')
        }
        
        await tdElement.click()

        // --------------------------- Verificar limpar visor ---------------------------------

        await btn_2.click()
        await tdElement.click()

        // await driver.wait(until.elementTextIs(inputElement, "2"))
        const resultDisplay = await inputElement.getAttribute('value')

        if (resultDisplay == "") {
            console.log('Resultado ' + resultDisplay)
        } else {
            console.log('O valor é difernete do esperado')
        }
        await tdElement.click()


        // -------------------------- Potência de dois números ---------------------------------

        await btn_potencia.click()
        await driver.findElement(By.id('cx31_0')).sendKeys('2')
        await driver.findElement(By.id('cx31_1')).sendKeys('3')

        await driver.findElement(By.xpath("//button[text()='Calcular']")).click()

        const resultDisplayPot = await inputElement.getAttribute('value')

        if (resultDisplayPot == '8') {
            console.log('Resultado ' + resultDisplayPot)
        } else {
            console.log('O valor é difernete do esperado')
        }


    } catch (error) {
        console.log('Error:', error)
    } finally {
        await driver.quit();
    }
}


operacoes();
