import unicodedata

def remover_acentos(txt):
    return ''.join(
        c for c in unicodedata.normalize('NFD', txt)
        if unicodedata.category(c) != 'Mn'
    )


respostas = {
    "saudacao": ["oi", "ola", "bom dia", "boa tarde", "boa noite"],
    "horario": ["horario", "funcionamento", "abre", "fecha", "atendimento"],
    "preco": ["preco", "valor", "custa", "quanto", "tarifa"]
}


intencoes = {
    "saudacao": "Olá! Como posso te ajudar?",
    "horario": "Atendemos de segunda a sexta, das 9h às 18h.",
    "preco": "Nosso plano custa R$ 99 por mês."
}

def responder(mensagem):
    mensagem = mensagem.lower()
    mensagem = remover_acentos(mensagem)
    
    for chave, lista in respostas.items():
        if any(p in mensagem for p in lista):
            return intencoes[chave]
    return "Desculpe, não entendi."


while True:
    msg = input("Você: ")
    if msg.lower() in ["sair", "quit", "fim"]:
        print("Até mais!")
        break
    print(responder(msg))

