class QandA {
    $container;
    $question;
    $answer;
    $tButton;

    constructor(question, answer) {
        this.$container = document.createElement('div');
        this.$container.classList.add("styleDiv");
        this.$container.style.display = "flex";
        this.$container.style.flexDirection = "column";

        this.$question = document.createElement('div');
        this.$question.classList.add("theQ");
        this.$question.innerHTML = question;

        this.$tButton = document.createElement('button');
        this.$tButton.innerHTML = '+';

        this.$answer = document.createElement('span');
        this.$answer.classList.add("theA");
        this.$answer.innerHTML = answer;
        this.$answer.style.display = 'none';
    }

    displayAnswer = () => {
        this.$answer.style.display = 'inline';
        this.$tButton.innerHTML = '-';
    }

    hideAnswer = () => {
        this.$answer.style.display = 'none';
        this.$tButton.innerHTML = '+';
    }

    render() {
        this.$question.appendChild(this.$tButton);
        this.$container.appendChild(this.$question);
        this.$container.appendChild(this.$answer);

        return this.$container;
    }



}