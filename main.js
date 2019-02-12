const buildDom = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
}


const main = ()=> {

    let splashMain;
    let game;

    const buildSplash = ()=>{
        
        spashMain = buildDom(`
            <main>
                <h1> Up and Down </h1>
                <button>Start</button>
            </main>
        `);

        document.body.appendChild(splashMain);
        const button = splashMain.querySelector('button');
        button.addEventListener('click', startGame);

        
    }
    
    const startGame = () => {
        destroySplash();

        game = new Game();
        game.start();

    }

    const destroySplash = () => {
        splashMain.remove();
    }

    buildSplash();

};

window.addEventListener('load', main);