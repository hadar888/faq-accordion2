"use strict";
let selectedQuestion = '-1';
const selectQuestion = (id) => {
    const prevFaq = document.getElementById(selectedQuestion);
    const prevQuestionPart = prevFaq === null || prevFaq === void 0 ? void 0 : prevFaq.getElementsByClassName('question')[0];
    prevQuestionPart === null || prevQuestionPart === void 0 ? void 0 : prevQuestionPart.classList.remove('selected');
    const prevImagePart = prevQuestionPart === null || prevQuestionPart === void 0 ? void 0 : prevQuestionPart.getElementsByTagName('img')[0];
    if (prevImagePart) {
        prevImagePart.style.transform = 'rotate(0)';
    }
    const prevAnsPart = prevFaq === null || prevFaq === void 0 ? void 0 : prevFaq.getElementsByClassName('ans')[0];
    if (prevAnsPart) {
        prevAnsPart.style.height = '0';
    }
    if (id !== selectedQuestion) {
        selectedQuestion = id;
        const selectedFaq = document.getElementById(selectedQuestion);
        const questionPart = selectedFaq === null || selectedFaq === void 0 ? void 0 : selectedFaq.getElementsByClassName('question')[0];
        questionPart === null || questionPart === void 0 ? void 0 : questionPart.classList.add('selected');
        const imagePart = questionPart === null || questionPart === void 0 ? void 0 : questionPart.getElementsByTagName('img')[0];
        if (imagePart) {
            imagePart.style.transform = 'rotate(180deg)';
        }
        const ansPart = selectedFaq === null || selectedFaq === void 0 ? void 0 : selectedFaq.getElementsByClassName('ans')[0];
        ansPart.style.height = ansPart.scrollHeight + 'px';
    }
    else {
        selectedQuestion = '-1';
    }
};
