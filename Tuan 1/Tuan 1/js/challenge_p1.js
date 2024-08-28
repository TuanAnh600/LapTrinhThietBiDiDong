        /* challenge 1,2
                                                                // Test Data 1
                                                                let markMass1 = 78; // kg
                                                                let markHeight1 = 1.69; // meters
                                                                let johnMass1 = 92; // kg
                                                                let johnHeight1 = 1.95; // meters

                                                                // Test Data 2
                                                                let markMass2 = 95; // kg
                                                                let markHeight2 = 1.88; // meters
                                                                let johnMass2 = 85; // kg
                                                                let johnHeight2 = 1.76; // meters

                                                                // Function to calculate BMI
                                                                function calculateBMI(mass, height) {
                                                                    return mass / (height * height);
                                                                }

                                                                // Calculate BMIs for Test Data 1
                                                                let markBMI1 = calculateBMI(markMass1, markHeight1);
                                                                let johnBMI1 = calculateBMI(johnMass1, johnHeight1);
                                                                let markHigherBMI1 = markBMI1 > johnBMI1;

                                                                // Calculate BMIs for Test Data 2
                                                                let markBMI2 = calculateBMI(markMass2, markHeight2);
                                                                let johnBMI2 = calculateBMI(johnMass2, johnHeight2);
                                                                let markHigherBMI2 = markBMI2 > johnBMI2;

                                                                // Print results
                                                                console.log(`Test Data 1: Mark's BMI: ${markBMI1.toFixed(2)}, John's BMI: ${johnBMI1.toFixed(2)}, Mark has higher BMI: ${markHigherBMI1}`);
                                                                console.log(`Test Data 2: Mark's BMI: ${markBMI2.toFixed(2)}, John's BMI: ${johnBMI2.toFixed(2)}, Mark has higher BMI: ${markHigherBMI2}`);

                                                                if (markBMI1 > johnBMI1) {
                                                                    console.log(`Data 1: Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)})!`);
                                                                } else {
                                                                    console.log(`Data 1: John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)})!`);
                                                                }

                                                                if (markBMI2 > johnBMI2) {
                                                                    console.log(`Data 2: Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)})!`);
                                                                } else {
                                                                    console.log(`Data 2: John's BMI (${johnBMI2.toFixed(2)}) is higher than Mark's (${markBMI2.toFixed(2)})!`);
                                                                }
                                                                */
        /*CHallenge 3
        // Test Data
        const data1Dolphins = [96, 108, 89];
        const data1Koalas = [88, 91, 110];

        //Data bonus 1
        const bonus1Dolphins = [97, 112, 101];
        const bonus1Koalas = [109, 95, 123];

        //Data bonus 2
        const bonus2Dolphins = [97, 112, 101];
        const bonus2Koalas = [109, 95, 106];

        function calculateAverage(scores) {
            const total = scores.reduce((acc, score) => acc + score, 0);
            return total / scores.length;
        }

        function determineWinner(dolphinsScores, koalasScores, minScoreRequired = false) {
            const dolphinsAvg = calculateAverage(dolphinsScores);
            const koalasAvg = calculateAverage(koalasScores);

            console.log(`Dolphins Average: ${dolphinsAvg.toFixed(2)}`);
            console.log(`Koalas Average: ${koalasAvg.toFixed(2)}`);

            if (minScoreRequired) {
                if (dolphinsAvg >= 100 && koalasAvg >= 100) {
                    if (dolphinsAvg > koalasAvg) {
                        console.log("Dolphins win!");
                    } else if (koalasAvg > dolphinsAvg) {
                        console.log("Koalas win!");
                    } else {
                        console.log("Draw!");
                    }
                } else {
                    console.log("No winner - Both teams did not meet the minimum score requirement.");
                }
            } else {
                if (dolphinsAvg > koalasAvg) {
                    console.log("Dolphins win!");
                } else if (koalasAvg > dolphinsAvg) {
                    console.log("Koalas win!");
                } else {
                    console.log("Draw!");
                }
            }
        }

        // Test cases
        console.log("Test Data 1:");
        determineWinner(data1Dolphins, data1Koalas);

        console.log("\nBonus Data 1:");
        determineWinner(bonus1Dolphins, bonus1Koalas);

        console.log("\nBonus Data 2:");
        determineWinner(bonus2Dolphins, bonus2Koalas);*/

        //Test data
        const billValues = [275, 40, 430];

        billValues.forEach(bill => {

            const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

            const totalValue = bill + tip;
            
   
            console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${totalValue.toFixed(2)}`);
        });