const chatInput = document.querySelector(".chat-input textarea")
const sendChatBtn = document.querySelector(".chat-input span")
const chatBox = document.querySelector(".chatbox")

let userMessage
let id = 0
const API_KEY = "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"

const createChatLi = (message, className) => {
    // crie um elemento de bate-papo <li> com mensagem passada e nome de classe
    const chatLi = document.createElement("li")
    chatLi.classList.add("chat", className)
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`

    chatLi.innerHTML = chatContent
    return chatLi
}

/*
const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions"
    const messageElement = incomingChatLi.querySelector("p")

    const requestOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": userMessage
            }
            ]
        })
    }

    // enviar a requisição para a API OpenAI para gerar uma resposta
    fetch(API_URL, requestOption).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content
    }).catch((error) => {
        messageElement.textContent = "Ops! Algo de errado"
    }).finally(() => chatBox.scrollTo(0, chatBox.scrollHeight))
}
*/

const handleChat = () => {

    //userMessage = chatInput.value.trim()
    userMessage = chatInput.value
    //console.log(userMessage)
    if(!userMessage) return

    // adicionar a messagem do user na caixa de bate papo
    chatBox.appendChild(createChatLi(userMessage, "outgoing"))
    chatBox.scrollTo(0, chatBox.scrollHeight)

    setTimeout(() => {
        // mostrar "pensamento..." da messagem do bot enquanto espera por uma resposta
        //const incomingChatLi = createChatLi("Digitando...", "incoming")
        let incomingChatLi = ""
        console.log(id)
        if(userMessage.toLowerCase().includes("sim") || userMessage.toLowerCase().includes("s") && id === 0){
            incomingChatLi = createChatLi("Legal! Jonny falou bem de você, curte alguma banda? Escreva 'curto'", "incoming")
            id++
            chatboxinclude(incomingChatLi)
            return
        }else if(id === 0){
            incomingChatLi = createChatLi("Não compreendi extamente! Mas tudo bem, vamos continuar, escreva 'sim'", "incoming")
            id++
            chatboxinclude(incomingChatLi)
            return
        }
        
        if(userMessage.toLowerCase().includes("curto") && id === 1){
            incomingChatLi = createChatLi("Certo! Jonny me falou que você gosta do Pablo, escreva 'verdade' ou 'mentira'?", "incoming")
            id++
            chatboxinclude(incomingChatLi)
            return
        }else if(id === 1){
            incomingChatLi = createChatLi("Ah que homem mentiroso hahahah, brincadeira a parte, agora escreva se quer sim você 'está bem' ou 'não'", "incoming")
            id++
            chatboxinclude(incomingChatLi)
            return
        }

        if(userMessage.toLowerCase().includes("verdade") || userMessage.toLowerCase().includes("vdd") && id === 2){
            incomingChatLi = createChatLi("Que legal! Vamos cantar a Feat na minha cama? Eu começo: Será que a gente começou pelo ponto final? Já não importa quem errou... agora é com você Vitória!", "incoming")
            id++
            chatboxinclude(incomingChatLi)
            return
        }else if(id === 2){
            incomingChatLi = createChatLi("Ah que homem mentiroso hahahah, brincadeira a parte, agora escreva se quer sim você está 'bem' ou 'não'", "incoming")
            id = id + 2
            chatboxinclude(incomingChatLi)
            return
        }

        if(userMessage.toLowerCase().includes("nao somos mais casal") || userMessage.toLowerCase().includes("não somos mais casal")  && id === 3){
            incomingChatLi = createChatLi("Boa! Isso que é mulher sábia! Hahaha, top conversar com você! ok, escreva 'continuar' para conhecer o site", "incoming")
            id = id + 2
            chatboxinclude(incomingChatLi)
            return
        }else if(id === 3){
            incomingChatLi = createChatLi("Uhm... parece tem alguém que errou hahaha... legal conversar com você, agora vamos conhecer agora o site? Escreva 'continuar'", "incoming")
            id = id + 2
            chatboxinclude(incomingChatLi) 
            return
        }

        if(userMessage.toLowerCase().includes("bem") && id === 4){
            incomingChatLi = createChatLi("Que bom amiga! Fico muito feliz, vamos conhecer o site? Escreva sim", "incoming")
            id++
            chatboxinclude(incomingChatLi)
            return
        }else if(id === 4){
            incomingChatLi = createChatLi("Poxa! Indepedente que seja sinto muito e que tudo melhore! Quer conhecer o site agora? Escreva 'sim'", "incoming")
            id++
            chatboxinclude(incomingChatLi)
            return
        }

        if(userMessage.toLowerCase().includes("continuar") && id === 5){
            incomingChatLi = createChatLi("Mas antes disso, sabe por que é tão bom ver o sol? Por que sem ele a beleza que essa minha amiga tem não brilharia sobre a manhã! haha... Surpresinha! vamos agora pro site", "incoming")
            id++
            chatboxinclude(incomingChatLi)
            return
        }else if(id === 5){
            incomingChatLi = createChatLi("Poxa! Não quer conhecer o site? Vamos deixa pro outro dia", "incoming")
            id++
            chatboxinclude(incomingChatLi)
            return
        }

        if(id >= 6){
            incomingChatLi = createChatLi("Conversa finalizada! Bjs!", "incoming")
            chatboxinclude(incomingChatLi)
            return
        }

        //chatBox.appendChild(incomingChatLi)
        //chatBox.scrollTo(0, chatBox.scrollHeight)
        //generateResponse(incomingChatLi)
    }, 600)
}

function chatboxinclude(incomingChatLi){
    chatBox.appendChild(incomingChatLi)
    chatBox.scrollTo(0, chatBox.scrollHeight)
}

sendChatBtn.addEventListener("click", handleChat)