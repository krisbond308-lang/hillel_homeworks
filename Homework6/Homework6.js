function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * 901) + 100;

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let evenPercent = (evenCount / count) * 100;
    let oddPercent = (oddCount / count) * 100;

    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", evenCount);
    console.log("Непарних чисел:", oddCount);
    console.log(
        "Відсоток парних до непарних:",
        evenPercent.toFixed(2) + "% / " + oddPercent.toFixed(2) + "%"
    );
}

checkProbabilityTheory(1000);