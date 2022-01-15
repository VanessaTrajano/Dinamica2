//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade

idade = 13

if(idade > 18){
    console.log("Parabéns, você tem mais do que 18 anos!")
} else {
    console.log("Puuuts, você não tem mais de 18 anos...")
}

idade = 22

if(idade > 18){
    console.log("Parabéns, você tem mais do que 18 anos!")
} else {
    console.log("Puuuts, você não tem mais de 18 anos...")
}


//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a variável "humano" seja true

let humano

idade = 13
humano = true

if(idade >= 18 && humano == true){
    console.log("Você é um humano maior de idade.")
} else {
    console.log("Você não é um humano maior de idade.")
}

idade = 19
humano = false

if(idade >= 18 && humano == true){
    console.log("Você é um humano maior de idade.")
} else {
    console.log("Você não é um humano maior de idade.")
}

idade = 24
humano = true

if(idade >= 18 && humano == true){
    console.log("Você é um humano maior de idade.")
} else {
    console.log("Você não é um humano maior de idade.")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let nome, mes

nome = "Dan"
mes = "Junho"

if(mes == "Janeiro" || mes == "Dezembro"){
    console.log(`${nome}, você faz aniversário em Dezembro ou Janeiro :)`)
} else {
    console.log(`${nome}, você não faz aniversário em Dezembro ou Janeiro :(`)
}

nome = "Vanessa"
mes = "Dezembro"

if(mes == "Janeiro" || mes == "Dezembro"){
    console.log(`${nome}, você faz aniversário em Dezembro ou Janeiro :)`)
} else {
    console.log(`${nome}, você não faz aniversário em Dezembro ou Janeiro :(`)
}

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

let primeiraLetra

primeiraLetra = "J"

if(primeiraLetra == "R"){
    console.log("Seu nome começa com a letra R!!!")
} else {
    console.log(`Seu nome não começa com a letra R, ele começa com ${primeiraLetra}`)
}

primeiraLetra = "R"

if(primeiraLetra == "R"){
    console.log("Seu nome começa com a letra R!!!")
} else {
    console.log(`Seu nome não começa com a letra R, ele começa com ${primeiraLetra}`)
}


//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let numLetras
    // Vou reutilizar a variável primeiraLetra pra essa questão :)

numLetras = 8
primeiraLetra = "E"

if(numLetras > 6 || primeiraLetra == "E"){
    console.log("Seu sobrenome tem mais de seis letras ou começa com a letra E :)")
} else {
    console.log("Seu sobrenome não tem mais de seis letras e nem começa com a letra E :(")
}

numLetras = 7
primeiraLetra = "V"

if(numLetras > 6 || primeiraLetra == "E"){
    console.log("Seu sobrenome tem mais de seis letras ou começa com a letra E :)")
} else {
    console.log("Seu sobrenome não tem mais de seis letras e nem começa com a letra E :(")
}

numLetras = 4
primeiraLetra = "S"

if(numLetras > 6 || primeiraLetra == "E"){
    console.log("Seu sobrenome tem mais de seis letras ou começa com a letra E :)")
} else {
    console.log("Seu sobrenome não tem mais de seis letras e nem começa com a letra E :(")
}