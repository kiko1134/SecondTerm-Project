class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    Check(){
        var server = "http://127.0.0.1:5000/"
        var q1 = document.quiz.question1.value;
        var q2 = document.quiz.question2.value;
        var q3 = document.quiz.question3.value;
        var q4 = document.quiz.question4.value;
        var q5 = document.quiz.question5.value;
        var q6 = document.quiz.question6.value;
        var grade = 0;

        if (q1 === "Option4"){grade++}
        if (q2 === "Option1"){grade++}
        if (q3 === "Option2"){grade++}
        if (q4 === "Option3"){grade++}
        if (q5 === "Option1"){grade++}
        if (q6 === "Option2"){grade++}

        if(grade < 2){
                grade = 2
        }

        $.ajax({
            url:server + 'OverallDB6',
            type:'POST',
            data:{'Grade':grade},
            success: function (response){
                console.log(response);
            },
            error: function (error){
                console.log(error);
            }

        })

        if (grade>4){
            alert("Поздравления! Оценка: " + grade)
        }
        else if(grade>2 && grade<5){
            alert("Вашата оценка е: " + grade + ". Може би бихте искали да изгледате видеото наново?")
        }
        else {
            alert("Лошо! Изкарахте: 2. Не се предавайте! Изгледайте видеото отново и направете теста пак!")
        }
    }


    render() {
        return (
            <form name="quiz" id="quiz">
                <div id="question">
                    <p>1. Какво правят джойн заявките?</p>
                    <p><input type="radio" id="1.1" name="question1" value="Option1"/>a) Служат за обединяване на бази</p>
                    <p><input type="radio" id="1.2" name="question1" value="Option2"/>b) Служат за комбиниране на редове от две или повече таблици</p>
                    <p><input type="radio" id="1.3" name="question1" value="Option3"/>c) Служат за добавяне на елементи в таблица</p>
                    <p><input type="radio" id="1.4" name="question1" value="Option4"/>d) И трите отговора са верни</p>
                </div>

                <div id="question">
                    <p>2. Какво прави Inner join?</p>
                    <p><input type="radio" id="2.1" name="question2" value="Option1"/>a) Взима общите елементи на две таблици</p>
                    <p><input type="radio" id="2.2" name="question2" value="Option2"/>b) Взима всички елементи от лявата таблица и общите между двете</p>
                    <p><input type="radio" id="2.3" name="question2" value="Option3"/>c) Взима всички елементи от дясната таблица и общите между двете</p>
                    <p><input type="radio" id="2.4" name="question2" value="Option4"/>d) Нито един от посочените</p>
                </div>

                <div id="question">
                    <p>3. Какво прави Left join?</p>
                    <p><input type="radio" id="3.1" name="question3" value="Option1"/>a) Взима общите елементи на две таблици</p>
                    <p><input type="radio" id="3.2" name="question3" value="Option2"/>b) Взима всички елементи от лявата таблица и общите между двете</p>
                    <p><input type="radio" id="3.3" name="question3" value="Option3"/>c) Взима всички елементи от дясната таблица и общите между двете</p>
                    <p><input type="radio" id="3.4" name="question3" value="Option4"/>d) Нито един от посочените</p>
                </div>

                <div id="question">
                    <p>4. Какво прави Right join?</p>
                    <p><input type="radio" id="4.1" name="question4" value="Option1"/>a) Взима общите елементи на две таблици</p>
                    <p><input type="radio" id="4.2" name="question4" value="Option2"/>b) Взима всички елементи от лявата таблица и общите между двете</p>
                    <p><input type="radio" id="4.3" name="question4" value="Option3"/>c) Взима всички елементи от дясната таблица и общите между двете</p>
                    <p><input type="radio" id="4.4" name="question4" value="Option4"/>d) Нито един от посочените</p>
                </div>

                <div id="question">
                    <p>5. Кое е жизненоважно, за да можем да осъществим join между две таблици?</p>
                    <p><input type="radio" id="5.1" name="question5" value="Option1"/>a) Да имат еднакъв брой променливи</p>
                    <p><input type="radio" id="5.2" name="question5" value="Option2"/>b) Да имат колона, която и в двете таблици играе една и съща роля</p>
                    <p><input type="radio" id="5.3" name="question5" value="Option3"/>c) Да имат timestamp</p>
                    <p><input type="radio" id="5.4" name="question5" value="Option4"/>d) Нито един от посочените</p>
                </div>

                <div id="question">
                    <p>6. Може ли в една джойн заявка да вкараме друга?</p>
                    <p><input type="radio" id="6.1" name="question6" value="Option1"/>a) Да</p>
                    <p><input type="radio" id="6.2" name="question6" value="Option2"/>b) Не</p>
                    <p><input type="radio" id="6.3" name="question6" value="Option3"/>c) Само в някои случаи</p>
                    <p><input type="radio" id="6.4" name="question6" value="Option4"/>d) Нито един от посочените</p>
                </div>

                <input type="button" name="" value="Предай" id="button" onClick={this.Check}/>
            </form>
        )
    }
}