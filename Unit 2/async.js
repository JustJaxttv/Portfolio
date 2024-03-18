async function race() {
    let runner1 = false;
    let runner2 = false;
    let loser = '';

    let runner1Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner1';
            resolve(true);
        }, 3000);
    });
    
    let runner2Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner2';
            resolve(true);
        }, 7000);
    });

    race().then((result) => {
        console.log("Loser:", result[2]);
    });

    return [
        await runner1Go,
        await runner2Go,
        loser
    ];
}

