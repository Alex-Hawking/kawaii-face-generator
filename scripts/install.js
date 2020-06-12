const fsp = require('fs').promises;
var eyesarr, earsarr, mouthsarr;

eyesarr = ['⌐■ ■', 'ᗒ ᗕ', '° °', 'ʘ ʘ', '◕ ◕', 'ŏ ŏ', '´• •`', 'º º', '･ิ ･ิ', '^ ^', 'ー ー', '~ ~', '◠ ◠', '° o', '♡ ♡', '- -', '❦ ❦', 'ಥ ಥ', '≖ ≖', '´ `', 'T T', '´- -`', '･ิ ･ิ', '･ั ･ั', '→ →', '• •', '✧ ✧', '✪ ✪', '► ◄', 'ᴗ ᴗ', '@ @', '◎ ◎', '⊃ ⊂', '☼ ☼', '〇 〇', 'Ω Ω', '☭ ☭', '$ $', '⎚ ⎚'];
earsarr = ['( )', '¯\\_( )_/¯', '[ ]', 'ᕙ( )ᕗ', '(∩ )⊃━☆ﾟ.*', 'ᕕ( )ᕗ', '(づ )づ', '(✿ )', 'ʕ ʔ', '(メ )', '( )♡', '凸( )凸', '٩( )۶', 'm( )m', '(ง )ง', '(✧ )', '(ლ )ლ', '乁( )ㄏ', '☞ ☞', '(╭☞ )╭☞', '⤜( )⤏', 'ᕦ ᕥ', '⸮ ?', 'ᕮ ᕭ', '| |', '﴾ ﴿', 'ᘳ ᘰ', 'ʢ ʡ', '( )¤=[]:::::>', '( )つ──☆*', '( )︻̷┻̿═━一-', '(∩ ) ⊃-(===>', '(˵ ˵)ﾉ⌒♡*:。', '(˵ ˵)ᓄ✂', '┐( )┌']
mouthsarr = ['͟ʖ', 'ᗝ', '>', 'ᴥ', ' ͟ʖ', '▽', 'o', '‿', 'ω', '﹏', '오', 'ゝ', 'д', '^', ' ͜ つ', 'ʖ̯ ', '_ゝ', '﹏', 'ل͜', 'ڡ', 'ε', 'ө', 'ᨓ', 'ᨎ', '˛', '╭╮', '෴', '⍘', '👅', '~͜ʖ~', '⊱', 'ε', ' ͜U', ' ͜ 𐭃'];

function installFaces() {
    fs.mkdirSync(app.getPath("userData") + '/faces');
    for (i in eyesarr) {
        fs.appendFileSync(app.getPath("userData") + '/faces/eyes.txt', eyesarr[i] + "\n");
    }
    for (i in earsarr) {
        fs.appendFileSync(app.getPath("userData") + '/faces/ears.txt', earsarr[i] + "\n");
    }
    for (i in mouthsarr) {
        fs.appendFileSync(app.getPath("userData") + '/faces/mouths.txt', mouthsarr[i] + "\n");
    }
}