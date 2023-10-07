const {Builder, Browser, By, Key, until} = require('selenium-webdriver');


const driver = new Builder().forBrowser('chrome').build();
let path = 'https://www.calculadoraonline.com.br/basica';

async function soma() {
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
        
        // Aguarda até que o resultado seja exibido
        await driver.wait(until.elementTextIs(divElement, '4'), 5000);

        // Captura e imprime o resultado
        const resultSoma = await divElement.getText();
        console.log('Resultado: ' + resultSoma);
        await tdElement.click()

        // ---------------------------------- SOMA NEGATIVA ---------------------------------
        
        // Realiza soma por negativo
        await btn_negativo.click()
        await btn_5.click()
        await btn_soma.click()
        await btn_3.click()

        // Aguarda até que o resultado seja exibido
        await driver.wait(until.elementTextIs(divElement, '-2'), 5000);

        // Captura e imprime o resultado
        const resultNegativo = await divElement.getText()
        console.log('Resultado ' + resultNegativo)
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

        await driver.wait(until.elementTextIs(divElement, '2'), 5000);

        const resulDecimal = await divElement.getText()
        console.log('Resultado ' + resulDecimal)
        await tdElement.click()

        // --------------------------------- Soma de números grandes -------------------------

        for(let i = 0; i < 5; i++) {
            await btn_9.click()
        }

        await btn_soma.click()

        for(let i = 0; i < 5; i++) {
            await btn_1.click()
        }

        await driver.wait(until.elementTextIs(divElement, '111110'), 5000)
        const resultGrandes = await divElement.getText()
        console.log('Resultado ' + resultGrandes)
        await tdElement.click()

        // --------------------------------- Soma por 0 ----------------------------------------

        for (let i = 0; i < 5; i++) {
            await btn_0.click()
        }

        await btn_soma.click()

        for (let i = 0; i < 5; i++) {
            await btn_1.click()
        }

        await driver.wait(until.elementTextIs(divElement, '11111'), 5000)
        const resultSomaZero = await divElement.getText()
        console.log('Resultado ' + resultSomaZero)
        await tdElement.click()

        // -------------------------------- Subtração ----------------------------------------

        await btn_8.click()
        await btn_negativo.click()
        await btn_3.click()

        await driver.wait(until.elementTextIs(divElement, '5'), 5000)
        const resultSubtracao = await divElement.getText()
        console.log('Resultado ' + resultSubtracao)
        await tdElement.click()

        // -------------------------------- Subtração de dois negativos ----------------------

        await btn_negativo.click()
        await btn_3.click()
        await btn_negativo.click()
        await btn_8.click()

        await driver.wait(until.elementTextIs(divElement, '-11'), 5000)
        const resultSubtracaoNegativa = await divElement.getText()
        console.log('Resultado ' + resultSubtracaoNegativa)
        await tdElement.click()

        // ------------------------------- Subtração com resultado negativo ------------------

        await btn_3.click()
        await btn_negativo.click()
        await btn_7.click()

        await driver.wait(until.elementTextIs(divElement, '-4'), 5000)
        const resultSubNegativo = await divElement.getText()
        console.log('Resultado ' + resultSubNegativo)
        await tdElement.click()

        // ------------------------------- Subtração decimal ---------------------------------

        await btn_5.click()
        await btn_ponto.click()
        await btn_5.click()
        await btn_negativo.click()
        await btn_2.click()
        await btn_ponto.click()
        await btn_5.click()

        await driver.wait(until.elementTextIs(divElement, '3'), 5000)
        const resutDecimal = await divElement.getText()
        console.log('Resultado ' + resutDecimal)
        await tdElement.click()

        // ------------------------------ Subtração por zeros -------------------------------

        await btn_0.click()
        await btn_negativo.click()
        await btn_9.click()

        await driver.wait(until.elementTextIs(divElement, '-9'), 5000)
        const resultZero = await divElement.getText()
        console.log('Resultado ' + resultZero)
        await tdElement.click()

        // ------------------------------- Multiplicação -------------------------------------

        await btn_6.click()
        await btn_multiplicacao.click()
        await btn_7.click()

        await driver.wait(until.elementTextIs(divElement, '42'), 5000)
        const resultMultiplicacao = await divElement.getText()
        console.log('Resultado ' + resultMultiplicacao)
        await tdElement.click()

        // ------------------------------- Multiplicação de negativos ------------------------

        await btn_negativo.click()
        await btn_2.click()
        await btn_multiplicacao.click()
        await btn_5.click()

        await driver.wait(until.elementTextIs(divElement, '-10'), 5000)
        const resultMultNegativo = await divElement.getText()
        console.log('Resultado ' + resultMultNegativo)
        await tdElement.click()

        // ------------------------------- Multiplicação de decimais -------------------------

        await btn_3.click()
        await btn_ponto.click()
        await btn_5.click()
        await btn_multiplicacao.click()
        await btn_2.click()
        await btn_ponto.click()
        await btn_5.click()

        await driver.wait(until.elementTextIs(divElement, '8,75'), 5000)
        const resultMultDeci = await divElement.getText()
        console.log('Resultado ' + resultMultDeci)
        await tdElement.click()

        // ------------------------------- Multiplicação por zero ----------------------------

        await btn_0.click()
        await btn_multiplicacao.click()
        await btn_5.click()

        await driver.wait(until.elementTextIs(divElement, '0'), 5000)
        const resultMultZero = await divElement.getText()
        console.log('Resultado ' + resultMultZero)
        await tdElement.click()

        // ------------------------------- Multiplicação por 1 -------------------------------

        await btn_1.click()
        await btn_multiplicacao.click()
        await btn_5.click()

        await driver.wait(until.elementTextIs(divElement, '5'), 5000)
        const resultMultUm = await divElement.getText()
        console.log('Resultado ' + resultMultUm)
        await tdElement.click()

        // ------------------------------- Divisão por 0 -------------------------------------

        await btn_9.click()
        await btn_divisao.click()
        await btn_0.click()

        await driver.wait(until.elementTextIs(divElement, 'Infinity'), 5000)
        const resultDivZero = await divElement.getText()
        console.log('Resultado ' + resultDivZero)
        await tdElement.click()

        // ---------------------------- Divisor menor que dividendo -------------------------

        await btn_3.click()
        await btn_divisao.click()
        await btn_9.click()

        await driver.wait(until.elementTextIs(divElement, '0,3333333333333333'), 5000)
        const resultDivMenDiv = await divElement.getText()
        console.log('Resultado ' + resultDivMenDiv)
        await tdElement.click()

        // --------------------------- Divisão de decimais -----------------------------------

        await btn_3.click()
        await btn_ponto.click()
        await btn_5.click()
        await btn_divisao.click()
        await btn_7.click()
        await btn_ponto.click()
        await btn_2.click()

        await driver.wait(until.elementTextIs(divElement, '0,4861111111111111'), 5000)
        const resultDivDecimal = await divElement.getText()
        console.log('Resultado ' + resultDivDecimal)
        await tdElement.click()

        // --------------------------- Divisão normal -----------------------------------------

        await btn_8.click()
        await btn_divisao.click()
        await btn_2.click()

        await driver.wait(until.elementTextIs(divElement, '4'), 5000)
        const resultDiv = await divElement.getText()
        console.log('Resultado ' + resultDiv)
        await tdElement.click()

        // ---------------------------- Divisão com dizima -----------------------------------------

        await btn_1.click()
        await btn_3.click()
        await btn_divisao.click()
        await btn_9.click()

        await driver.wait(until.elementTextIs(divElement, '1,4444444444444444'), 5000)
        const resultDizima = await divElement.getText()
        console.log('Resultado ' + resultDizima)
        await tdElement.click()

        // --------------------------- Verificar limpar visor ---------------------------------

        await btn_2.click()
        await tdElement.click()

        // await driver.wait(until.elementTextIs(inputElement, "2"))
        const resultDisplay = await inputElement.getAttribute('value')
        console.log('Resultado ' + resultDisplay)
        await tdElement.click()


        // -------------------------- Potência de dois números ---------------------------------

        await btn_potencia.click()
        await driver.findElement(By.id('cx31_0')).sendKeys('2')
        await driver.findElement(By.id('cx31_1')).sendKeys('3')

        await driver.findElement(By.xpath("//button[text()='Calcular']")).click()

        const resultDisplayPot = await inputElement.getAttribute('value')
        console.log('Resultado ' + resultDisplayPot)


    } catch (error) {
        console.log('Error:', error)
    } finally {
        await driver.quit();
    }
}


soma();
