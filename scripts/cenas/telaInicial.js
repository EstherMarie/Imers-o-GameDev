class TelaInicial {
    constructor() {

    }

    draw() {
        this._imagemDeFundo();
        this._titulo();
        this._botao();
    }

    _imagemDeFundo() {
        let imgMove = .2;
        image(startScreen, 0, 0, width, height, mouseX * umgMove, mouseY * imgMkve, img_inicio.width * imgMove, img_inicio.height * imgMove)
    }

    _titulo() {
        image(title, width/2-194, height/3, 388, 130)
    }

    _botao() {
        botaoGerenciador.y = height / 7 * 5;
        botaoGerenciador.draw();
        textFont(font);
    }
}
