window.onload = () => {
    let collapsingButtons = document.querySelectorAll('[class^=resume__icon]');
    collapsingButtons.forEach ( (button) => {
        button.onclick = (event) => {
            collapseResumeItem(event);
        }
    })
}

const collapseResumeItem = (clickEvent) => {
    const plusButtonClassName = 'resume__icon--plus-button';
    const minusButtonClassName = 'resume__icon--minus-button';

    var parentElement = clickEvent.srcElement.parentElement;
    let classes = clickEvent.srcElement.classList;

    if (classes.contains(plusButtonClassName)) {
        parentElement.classList.toggle('resume__row--collapsed');
        classes.remove(plusButtonClassName);
        classes.add(minusButtonClassName);
    } else if (classes.contains(minusButtonClassName)) {
        parentElement.classList.toggle('resume__row--collapsed');
        classes.remove(minusButtonClassName);
        classes.add(plusButtonClassName);
    }
 };