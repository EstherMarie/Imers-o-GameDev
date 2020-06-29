class TelaInicial {
    constructor() {

    }

    draw() {
        // this._imagemDeFundo();
        
        this._botao();
        clouds.exibe();
        clouds.move();
        mountains.exibe();
        mountains.move();
        trees.exibe();
        trees.move();
        ground.exibe();
        ground.move();
        this._titulo();
    }

    _imagemDeFundo() {
        // image(startScreen, 0, 0, width, height)
        clouds = new Cenario(bg_clouds, 2);
        mountains = new Cenario(bg_mountains, 5);
        trees = new Cenario(bg_trees, 10);
        ground = new Cenario(bg_ground, 20);
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