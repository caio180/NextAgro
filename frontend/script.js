const api = 'http://localhost:5000/formSugestao'
function formuSuges(){
    const form = document.getElementById('formularioSugestao');
    form.addEventListener('submit', (e)=>{
        e.preventDefault()

        const nome = document.getElementById('formnome').value 
        const email = document.getElementById('formemail').value 
        const melhoria = document.getElementById('melhoria').value 
        const assuntos = document.getElementById('assuntos').value 
        const avaliacao = document.querySelector(
            'input[name="avaliacao"]:checked'
        )?.id;
        fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    Sugestao_melhoria: melhoria,
                    Sugestao_assuntos: assuntos,
                    avaliacao: avaliacao

                    
                })
            })
            
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert("Formulário enviado");
                form.reset()
        
            })
            .catch(error => {
            console.error(error);
            alert("Erro ao enviar formulario");
            });
  })
}
formuSuges()