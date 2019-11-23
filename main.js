window.onload = () => {
    let collapsingButtons = document.querySelectorAll('[class^=resume__icon]');
    collapsingButtons.forEach ( (button) => {
        button.onclick = (event) => {
            collapseResumeItem(event);
        }
    })
}

const collapseResumeItem = (clickEvent) => {
    // TODO extend for mobile buttons

    const plusButtonClassName = 'resume__icon--plus-button';
    const minusButtonClassName = 'resume__icon--minus-button';

    var parentElement = clickEvent.srcElement.parentElement;
    let classes = clickEvent.srcElement.classList;

    if (classes.contains(plusButtonClassName)) {
        if (isMobileButton(classes)) {
            // TODO minimalize access to 4th parent
            parentElement = parentElement.parentElement.parentElement.parentElement;
        } 

        parentElement.classList.toggle('resume__row--collapsed');
        classes.remove(plusButtonClassName);
        classes.add(minusButtonClassName);

    } else if (classes.contains(minusButtonClassName)) {
        if (isMobileButton(classes)) {
            parentElement = parentElement.parentElement.parentElement.parentElement;
        }

        parentElement.classList.toggle('resume__row--collapsed');
        classes.remove(minusButtonClassName);
        classes.add(plusButtonClassName); 
    }
};

const isMobileButton = (buttonClasses) => {
    var isMobile = false;

    buttonClasses.forEach(function(buttonClass) {
        console.log(buttonClass);
        if (buttonClass.includes('--mobile')) {
            isMobile = true;
        }
    });

    return isMobile;
}