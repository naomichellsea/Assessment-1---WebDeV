function result() {
        var score = 0;
        if (document.getElementById('right1').checked) {
            score++;
        }
        if (document.getElementById('right2').checked) {
            score++;
        }
        if (document.getElementById('right3').checked) {
            score++;
        }

        if (score == 3) {
            document.write("Your score is: " + score + " Excellent 3/3");
        }
        if (score == 2) {
            document.write("Your score is: " + score + " Good 2/3");
        }
        if (score == 1) {
            document.write("Your score is: " + score + " Try Better Next Time! 1/3");
        }
        if (score == 0) {
            document.write("Your score is: " + score + " You Dont Know Me!! 0/3");
        }
    }
