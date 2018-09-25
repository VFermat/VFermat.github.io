document.addEventListener('DOMContentLoaded', function() {

	let db = new DB('https://projeto-1-codes-19810.firebaseio.com/')
	console.log(db)
	

	let params = new URLSearchParams(window.location.search)

	let url = '/' + params.get('projeto') + '/' + params.get('categoria') + '/' + params.get('materia') + '/' 
    console.log(url)

	 db.download(url, function(data) {

	  	console.log(data)

	  	let nome_projeto = document.querySelector('.project-title')
	  	nome_projeto.innerHTML = data['name']


	  	let nome_projeto_dropdown = document.querySelector('.dropdown-item')
	 	nome_projeto_dropdown.innerHTML = data['name']


	 	let descricao_projeto = document.querySelector('.descricao_projeto')
	 	descricao_projeto.innerHTML = data['Descrição']
	 	

	 	let p1 = document.querySelector('.p1')
	 	p1.innerHTML = data['Procedimento']['p1']


	 	let p2 = document.querySelector('.p2')
	 	p2.innerHTML = data['Procedimento']['p2']


	 	let p3 = document.querySelector('.p3')
	 	p3.innerHTML = data['Procedimento']['p3']


	 	let p4 = document.querySelector('.p4')
	 	p4.innerHTML = data['Procedimento']['p4']


	 	let p5 = document.querySelector('.p5')
	 	p5.innerHTML = data['Procedimento']['p5']

	 	let p6 = document.querySelector('.p6')
	 	p6.innerHTML = data['Procedimento']['p6']

	 	let exemplos = document.querySelector('.exemplos')
	 	exemplos.innerHTML = data['Exemplos']

  	  
    })




	let url1 = '/' + params.get('projeto') + '/' + params.get('categoria') + '/' 
    console.log(url1)

	 db.download(url1, function(data) {
	 	console.log(data)

	 	let nome_categoria = document.querySelector('.topic')
	 	nome_categoria.innerHTML = data['Nome Categoria']

	 	let nome_categoria_dropdown = document.querySelector('.dropdown-name')
	 	nome_categoria_dropdown.innerHTML = data['Nome Categoria']


	 	let descricao_categoria = document.querySelector('.topic-initial-description')
	 	descricao_categoria.innerHTML = data['Descrição Categoria']


	})

	



})