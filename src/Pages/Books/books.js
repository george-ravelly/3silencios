const books = [
	{
		id: "1",
		nome: "o nome do vento",
		autor: "Patrick Ruthfuss",
		lancamento: "2013",
		descricao: "Ninguém sabe ao certo quem é o herói ou o vilão desse fascinante universo criado por Patrick Rothfuss. Na realidade, essas duas figuras se concentram em Kote, um homem enigmático que se esconde sob a identidade de proprietário da hospedaria Marco do Percurso.Da infância numa trupe de artistas itinerantes, passando pelos anos vividos numa cidade hostil e pelo esforço para ingressar na escola de magia, O nome do vento acompanha a trajetória de Kote e as duas forças que movem sua vida: o desejo de aprender o mistério por trás da arte de nomear as coisas e a necessidade de reunir informações sobre o Chandriano - os lendários demônios que assassinaram sua família no passado.",
		preco: 51.22
	},
	{
		id: "2",
		nome: "o temor do sabio",
		autor: "Patrick Ruthfuss",
		lancamento: "2015",
		descricao: "Velit cupidatat nulla nisi proident aute duis ut Lorem duis reprehenderit. Excepteur voluptate ad cupidatat sint dolor magna reprehenderit nostrud pariatur nulla minim aliquip elit. Nostrud eiusmod do labore ea adipisicing voluptate deserunt ut deserunt ad id. Mollit aute deserunt commodo in do pariatur est consequat exercitation Lorem. Officia eu ea esse duis velit incididunt culpa dolor.",
		preco: 55.92
	},
	{
		id: "3",
		nome: "a musica do silencio",
		autor: "Patrick Ruthfuss",
		lancamento: "2018",
		descricao: "Velit cupidatat nulla nisi proident aute duis ut Lorem duis reprehenderit. Excepteur voluptate ad cupidatat sint dolor magna reprehenderit nostrud pariatur nulla minim aliquip elit. Nostrud eiusmod do labore ea adipisicing voluptate deserunt ut deserunt ad id. Mollit aute deserunt commodo in do pariatur est consequat exercitation Lorem. Officia eu ea esse duis velit incididunt culpa dolor.",
		preco: 19.99
	},
	
	{
		id: "4",
		nome: "percy jackson e o ladrão de raios",
		autor: "rick riordan",
		lancamento: "2005",
		descricao: "Velit cupidatat nulla nisi proident aute duis ut Lorem duis reprehenderit. Excepteur voluptate ad cupidatat sint dolor magna reprehenderit nostrud pariatur nulla minim aliquip elit. Nostrud eiusmod do labore ea adipisicing voluptate deserunt ut deserunt ad id. Mollit aute deserunt commodo in do pariatur est consequat exercitation Lorem. Officia eu ea esse duis velit incididunt culpa dolor.",
		preco: 35.99
	},	
	{
		id: "5",
		nome: "percy jackson e o mar de monstros",
		autor: "rick riordan",
		lancamento: "2006",
		descricao: "Velit cupidatat nulla nisi proident aute duis ut Lorem duis reprehenderit. Excepteur voluptate ad cupidatat sint dolor magna reprehenderit nostrud pariatur nulla minim aliquip elit. Nostrud eiusmod do labore ea adipisicing voluptate deserunt ut deserunt ad id. Mollit aute deserunt commodo in do pariatur est consequat exercitation Lorem. Officia eu ea esse duis velit incididunt culpa dolor.",
		preco: 35.99
	},
	{
		id: "6",
		nome: "percy jackson e a maldição do titã",
		autor: "rick riordan",
		lancamento: "2007",
		descricao: "Velit cupidatat nulla nisi proident aute duis ut Lorem duis reprehenderit. Excepteur voluptate ad cupidatat sint dolor magna reprehenderit nostrud pariatur nulla minim aliquip elit. Nostrud eiusmod do labore ea adipisicing voluptate deserunt ut deserunt ad id. Mollit aute deserunt commodo in do pariatur est consequat exercitation Lorem. Officia eu ea esse duis velit incididunt culpa dolor.",
		preco: 35.99
	},
	{
		id: "7",
		nome: "percy jackson e a batalha do labirinto",
		autor: "rick riordan",
		lancamento: "2008",
		descricao: "Velit cupidatat nulla nisi proident aute duis ut Lorem duis reprehenderit. Excepteur voluptate ad cupidatat sint dolor magna reprehenderit nostrud pariatur nulla minim aliquip elit. Nostrud eiusmod do labore ea adipisicing voluptate deserunt ut deserunt ad id. Mollit aute deserunt commodo in do pariatur est consequat exercitation Lorem. Officia eu ea esse duis velit incididunt culpa dolor.",
		preco: 35.99
	},
	{
		id: "8",
		nome: "percy jackson e o ultimo olimpiano",
		autor: "rick riordan",
		lancamento: "2010",
		descricao: "Velit cupidatat nulla nisi proident aute duis ut Lorem duis reprehenderit. Excepteur voluptate ad cupidatat sint dolor magna reprehenderit nostrud pariatur nulla minim aliquip elit. Nostrud eiusmod do labore ea adipisicing voluptate deserunt ut deserunt ad id. Mollit aute deserunt commodo in do pariatur est consequat exercitation Lorem. Officia eu ea esse duis velit incididunt culpa dolor.",
		preco: 35.99
	},
	{
		id: "9",
		nome: "jardins da lua - o livro malazano dos caidos 1",
		autor: "steven erickson",
		lancamento: "2017",
		descricao: "Velit cupidatat nulla nisi proident aute duis ut Lorem duis reprehenderit. Excepteur voluptate ad cupidatat sint dolor magna reprehenderit nostrud pariatur nulla minim aliquip elit. Nostrud eiusmod do labore ea adipisicing voluptate deserunt ut deserunt ad id. Mollit aute deserunt commodo in do pariatur est consequat exercitation Lorem. Officia eu ea esse duis velit incididunt culpa dolor.",
		preco: 39.99
	},
	{
		id: "10",
		nome: "os portais da casa dos mortos - o livro malazano dos caidos 2",
		autor: "steven erickson",
		lancamento: "2019",
		descricao: "Velit cupidatat nulla nisi proident aute duis ut Lorem duis reprehenderit. Excepteur voluptate ad cupidatat sint dolor magna reprehenderit nostrud pariatur nulla minim aliquip elit. Nostrud eiusmod do labore ea adipisicing voluptate deserunt ut deserunt ad id. Mollit aute deserunt commodo in do pariatur est consequat exercitation Lorem. Officia eu ea esse duis velit incididunt culpa dolor.",
		preco: 9.99
	},
	{
		id: "11",
		nome: "box - trilogia o senhor dos aneis - 3 volumes",
		autor: "j.r.r. tolkien",
		lancamento: "2019",
		descricao: "Velit cupidatat nulla nisi proident aute duis ut Lorem duis reprehenderit. Excepteur voluptate ad cupidatat sint dolor magna reprehenderit nostrud pariatur nulla minim aliquip elit. Nostrud eiusmod do labore ea adipisicing voluptate deserunt ut deserunt ad id. Mollit aute deserunt commodo in do pariatur est consequat exercitation Lorem. Officia eu ea esse duis velit incididunt culpa dolor.",
		preco: 199.99
	},
	{
		id: "12",
		nome: "a pequena caixa de gwendy",
		autor: "Stephen King",
		lancamento: "2019",
		descricao: "Velit cupidatat nulla nisi proident aute duis ut Lorem duis reprehenderit. Excepteur voluptate ad cupidatat sint dolor magna reprehenderit nostrud pariatur nulla minim aliquip elit. Nostrud eiusmod do labore ea adipisicing voluptate deserunt ut deserunt ad id. Mollit aute deserunt commodo in do pariatur est consequat exercitation Lorem. Officia eu ea esse duis velit incididunt culpa dolor.",
		preco: 31.90
	},
];



export default books;
