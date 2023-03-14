let url = 'data/dataset.xml'
$.ajax(url)
    .done(function(xml) {
        $(xml).find('contribuinte').each(function() {
            $("#cards").append(`<div class="card"> 
                                    <img src="${$(this).find("foto").text()}" class="image-card"/>
                                    <p class="nome">${$(this).find("nome").text()}</p>
                                    <p class="cpf">${$(this).find("cpf").text()}</p>
                                    <p class="cidade">${$(this).find("cidade").text()}</p>
                                    <div class="contado">
                                        <p class="celular">${$(this).find("celular").text()}</p>
                                        <p class="email">${$(this).find("email").text()}</p>
                                        <p>Hello</p>
                                    </div>
                                </div>
                                    `)
        })
    })
    .fail(function () {
        alert('Ocorreu um erro na leitura do arquivo XML')
    })