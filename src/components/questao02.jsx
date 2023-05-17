import { useState } from "react";

const Questao02 = () => {
    // Estado para controlar se a imagem está virada para frente ou para trás
    const [upFront, setupFront] = useState(true);

    // Função para trocar o estado de emFrente quando o botão for clicado
    const Trocar = () => {
        setupFront(!upFront);
    };

    // Variável para armazenar o caminho da imagem
    const srcImagem = upFront
        ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/81.png"
        : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/81.png";

    return (
        <div>
            <div><img width={'200px'} src={srcImagem} alt="Pikachu" /></div>
            <div><button onClick={Trocar}>Press</button></div>     
        </div>
    );
}

export default Questao02;
