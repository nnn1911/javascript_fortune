console.log('Hello world!');

const drawButton = document.querySelector('#drawButton');
const resultDisplay = document.querySelector('#resultDisplay');
// 1. 下部に表示するテキスト要素を取得（HTMLに #messageDisplay がある場合）
const messageDisplay = document.querySelector('#messageDisplay');

// ボタンがクリックされたら、動作させる
drawButton.addEventListener('click', () => {

    // 0から1未満のランダムな数字を生成する
    const randomNumber = Math.random();
    console.log(randomNumber); // コンソールに表示（確認用）

    // 既存のクラスを削除
    document.body.classList.remove('daikichi', 'chukichi', 'kichi');

    // 0.3 未満だったら（レア吉）
    if (randomNumber < 0.3) {
        resultDisplay.textContent = 'レア吉';
        document.body.classList.add('daikichi');
        // レア吉の時のメッセージ
        messageDisplay.textContent = '超ラッキー！今日は何かいいことがあるかも！';

    // 0.8 未満だったら（ちゅ〜吉）
    } else if (randomNumber < 0.8) {
        resultDisplay.textContent = 'ちゅ〜吉';
        document.body.classList.add('chukichi');
        // ちゅ〜吉の時のメッセージ
        messageDisplay.textContent = 'そこそこ良い一日！マイペースに過ごそう！';

    // どちらでもない場合（ドカ大幸運）
    } else {
        resultDisplay.textContent = 'ドカ大幸運';
        // ドカ大幸運の時のメッセージ
        messageDisplay.textContent = 'とんでもない幸運があなたを待っています！';
    }

});
