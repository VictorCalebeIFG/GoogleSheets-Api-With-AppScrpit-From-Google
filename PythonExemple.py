import requests

api_url = "https://script.google.com/macros/s/AKfycbxSWhnDWX1kmjMP3dghWljRq210q15xl-WuXe-AwbwiespaeQPy5LrZaRa06WnQfRG54w/exec"

# Exemplo de dados para enviar na requisição (altere conforme necessário)
data_to_append = {
    'action': 'append',
    'wkname': 'table1',  # Adicione o parâmetro 'wkname'
    'data': 'Valor1,Valor2,Valor3'  # Substitua pelos valores que deseja adicionar
}

# Número de requisições que você deseja fazer
num_requests = 5

for _ in range(num_requests):
    response = requests.get(api_url, params=data_to_append)

    # Verifica se a requisição foi bem-sucedida (código de status 200)
    if response.status_code == 200:
        print("Requisição bem-sucedida!")
    else:
        print(f"Falha na requisição. Código de status: {response.status_code}")
