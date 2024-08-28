let player = Character('Kobe', 100, 'Punch', 'Kick', 'Block');

player.getMoves();

console.log(player.getHP());
console.log(player.getName());

function Character(Name, HP, ...Moves){
    let hp = HP;
    let name = Name;
    let moves = Moves;

    return {
        getHP: function() {
            return hp;
        },
        getName: function() {
            return name;
        },
        getMoves: function() {
            let movesList = document.querySelector('.moves');
            
                for (const move of moves) {
                    let paragraph = document.createElement('p');
                    paragraph.textContent = move;
                    movesList.appendChild(paragraph);
                }
        }
    }
}
