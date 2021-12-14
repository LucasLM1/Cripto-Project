fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" //Obs.: colocar a chave de acesso da api para fazer a requisição
)
    .then((response) => {
    if (!response.ok)
    throw new Error(
        "Erro ao executar a requisição, status " + response.status
    );
    return response.json();
    })
    .then((api) => {
    var texto = "";
    // Coletando 10 moedas aleat´rias da API
    for (let i = 0; i < 10; i++) {
      //Mostrando as informações coletadas na API

        texto = texto + `<div class="media">
                            <img src="../assets/images/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                            <div class="media-body">
                                <h5 class="mt-2">${api.data[i].name}</h5>
                                <p>${api.data[i].symbol}</p>
                            </div>
                        </div>`;

    document.getElementById("coins").innerHTML = texto;
    }
    })
    .catch((error) => {
    console.error(error.message);
});
