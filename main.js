const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();
let path = 'https://www.calculadoraonline.com.br/basica';
let data = require('./data')

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
        
        // Limpa o visor
        const tdElement = await driver.findElement(By.css('td[onclick*="limpa()"]'));
        
        // ----------------------------- SOMA -----------------------------------
        
        console.log('\n')
        console.log('---------------------- SOMA -----------------------' + '\n')

        
        for (const item of data.soma) {
          
            await inputElement.sendKeys(item.valor_01);
            await inputElement.sendKeys(data.operacoes.soma);
            await inputElement.sendKeys(item.valor_02);
            await inputElement.sendKeys(Key.RETURN);
          
            await driver.sleep(2000); // Aguarde 2 segundos
          
            let result_soma = await inputElement.getAttribute('value');
          
            if (result_soma == item.result.toString()) {
              console.log(item.descricao);
              console.log(data.texto.result + result_soma + '\n');
            } else {
              console.log(item.descricao);
              console.log(data.texto.error + result_soma + '\n');
            }
          
            await tdElement.click();
        }

        await tdElement.click()

        // --------------------------- SUBTRAÇÃO -----------------------------
        
        console.log('\n')
        console.log('---------------------- SUBTRAÇÃO -----------------------' + '\n')
        
        for (const item of data.subtracao) {
          
            await inputElement.sendKeys(item.valor_01);
            await inputElement.sendKeys(data.operacoes.subtracao);
            await inputElement.sendKeys(item.valor_02);
            await inputElement.sendKeys(Key.RETURN);
          
            await driver.sleep(2000); // Aguarde 2 segundos
          
            let result_subtracao = await inputElement.getAttribute('value');
          
            if (result_subtracao == item.result.toString()) {
              console.log(item.descricao);
              console.log(data.texto.result + result_subtracao + '\n');
            } else {
              console.log(item.descricao);
              console.log(data.texto.error + result_subtracao + '\n');
            }
          
            await tdElement.click();
        }

        await tdElement.click();

        // --------------------------------- MULTIPLICAÇÃO --------------------

        console.log('\n')
        console.log('---------------------- MULTIPLICAÇÃO -----------------------' + '\n')
        
        for (const item of data.multiplicacao) {
          
            await inputElement.sendKeys(item.valor_01);
            await inputElement.sendKeys(data.operacoes.multiplicacao);
            await inputElement.sendKeys(item.valor_02);
            await inputElement.sendKeys(Key.RETURN);
          
            await driver.sleep(2000); // Aguarde 2 segundos
          
            let result_multiplicacao = await inputElement.getAttribute('value');
          
            if (result_multiplicacao == item.result.toString()) {
              console.log(item.descricao);
              console.log(data.texto.result + result_multiplicacao + '\n');
            } else {
              console.log(item.descricao);
              console.log(data.texto.error + result_multiplicacao + '\n');
            }
          
            await tdElement.click();
        }

        await tdElement.click();

        // ------------------------------- DIVISÃO ---------------------------

        console.log('\n')
        console.log('---------------------- DIVISÃO -----------------------' + '\n')
        
        for (const item of data.divisao) {
          
            await inputElement.sendKeys(item.valor_01);
            await inputElement.sendKeys(data.operacoes.divisao);
            await inputElement.sendKeys(item.valor_02);
            await inputElement.sendKeys(Key.RETURN);
          
            await driver.sleep(2000); // Aguarde 2 segundos
          
            let result_divisao = await inputElement.getAttribute('value');
          
            if (result_divisao == item.result.toString()) {
              console.log(item.descricao);
              console.log(data.texto.result + result_divisao + '\n');
            } else {
              console.log(item.descricao);
              console.log(data.texto.error + result_divisao + '\n');
            }
          
            await tdElement.click();
        }

        await tdElement.click();

        // ----------------------- POTÊNCIAÇÃO ------------------------------

        console.log('\n')
        console.log('---------------------- POTÊNCIAÇÃO -----------------------' + '\n')

        for (const item of data.potenciacao) {
          
            await inputElement.sendKeys(item.valor_01);
            await inputElement.sendKeys(data.operacoes.potencia);
            await inputElement.sendKeys(item.valor_02);
            await inputElement.sendKeys(Key.RETURN);
          
            await driver.sleep(2000); // Aguarde 2 segundos
          
            let result_potenciacao = await inputElement.getAttribute('value');
          
            if (result_potenciacao == item.result.toString()) {
              console.log(item.descricao);
              console.log(data.texto.result + result_potenciacao + '\n');
            } else {
              console.log(item.descricao);
              console.log(data.texto.error + result_potenciacao + '\n');
            }
          
            await tdElement.click();
        }

        await tdElement.click();

    } catch (error) {
        console.log('Error:', error)
    } finally {
        await driver.quit();
    }
}


operacoes();
