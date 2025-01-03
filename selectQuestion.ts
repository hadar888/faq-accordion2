let selectedQuestion  = '1';

const selectQuestion = (id: string) => {
    const prevFaq = document.getElementById(selectedQuestion);
    const prevQuestionPart = prevFaq?.getElementsByClassName('question')[0];
    prevQuestionPart?.classList.remove('selected');
    const prevImagePart = prevQuestionPart?.getElementsByTagName('img')[0];
    if (prevImagePart) {
        prevImagePart.style.transform = 'rotate(0)';
    }
    const prevAnsPart = prevFaq?.getElementsByClassName('ans')[0] as HTMLElement;
    prevAnsPart.style.display = 'none';

    selectedQuestion = id;
    const selectedFaq = document.getElementById(selectedQuestion);
    const questionPart = selectedFaq?.getElementsByClassName('question')[0];
    questionPart?.classList.add('selected');
    const imagePart = questionPart?.getElementsByTagName('img')[0];
    if (imagePart) {
        imagePart.style.transform = 'rotate(180deg)';
    }
    const ansPart = selectedFaq?.getElementsByClassName('ans')[0] as HTMLElement;
    ansPart.style.display = 'block';
}
