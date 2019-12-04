import React from "react";
import books from "../Pages/Books/books.js";
import { Link } from "react-router-dom";
import "./style.css";

const listLancamente = () => (
    books.filter(it => it.lancamento >= 2015)
);
   

function lancamento(){
    let l = listLancamente();
    return(
        <div className="container mb-3 mt-3">
            <strong className="titulo">lancamentos</strong>
            <div className="row">
                {l.map(it => (
                    <div className="view border border-secondary col-xl-3 col-lg-4 col-12">
                        <div className="livro">
                            <Link to={`/listBooks/${it.id}`}>
                                <img
                                    src={require("../img/"+it.nome+".png")}
                                    alt=" "
                                    className="capa"
                                    key={it.id}
                                />
                            </Link>
                        </div>
                        <div className="container dados">
                            <strong 
                                className="text-capitalize d-inline-block text-truncate" 
                                id="titulo"
                            >{it.nome}</strong><br />
                            <small className="text-capitalize">{it.autor} - {it.lancamento}</small>
                            <br/>
                            <strong>R$: {it.preco}</strong>
                            <br/><br/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default lancamento;