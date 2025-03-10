// Espera o DOM carregar pra garantir que os elementos existam
document.addEventListener('DOMContentLoaded', function () {

    const cepInput = document.getElementById('cep');
  
    cepInput.addEventListener('blur', function () {
      const cep = cepInput.value.replace(/\D/g, '');
  
      if (cep.length !== 8) {
        alert('CEP inválido! Digite 8 números.');
        return;
      }
  
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro na requisição');
          }
          return response.json();
        })
        .then(data => {
          if (data.erro) {
            alert('CEP não encontrado!');
            return;
          }
  
          // Preenche os campos com os dados retornados
          document.getElementById('estado').value = data.uf;
          document.getElementById('cidade').value = data.localidade;
          document.getElementById('bairro').value = data.bairro;
          document.getElementById('rua').value = data.logradouro;
        })
        .catch(error => {
          console.error('Erro ao buscar o CEP:', error);
          alert('Erro ao buscar o CEP. Tente novamente.');
        });
    });
  
  });

  //BIBLIOTECA DOS INPUT IMASK

  document.addEventListener('DOMContentLoaded', function () {

    // CPF - Formato: 000.000.000-00
    const cpfInput = document.getElementById('cpf');
    IMask(cpfInput, {
      mask: '000.000.000-00'
    });
  
    // RG - Formato: 00.000.000-0
    const rgInput = document.getElementById('rg');
    IMask(rgInput, {
      mask: '00.000.000-0'
    });
  
    // CEP - Formato: 00000-000
    const cepInput = document.getElementById('cep');
    IMask(cepInput, {
      mask: '00000-000'
    });
  
    // Telefone - Formato: (00) 00000-0000
    const telefoneInput = document.getElementById('telefone');
    IMask(telefoneInput, {
      mask: '(00) 00000-0000'
    });
  
  });
  
  
  