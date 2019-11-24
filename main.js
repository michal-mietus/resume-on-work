window.onload = () => {
    addCollpaseResumeButtonsFunctionality();
}

window.onscroll = (event) => {
    const hiddenElementClass = 'hidden-before-scroll';
    const hiddenBeforeScrollElements = document.getElementsByClassName(hiddenElementClass);

    Array.prototype.forEach.call(hiddenBeforeScrollElements, hiddenElement => {
        let elementDistanceFromTop = hiddenElement.getBoundingClientRect().top;

        if (window.scrollY >= (elementDistanceFromTop - 200)) {
            /* change opacity on scroll */
            const displayedElementClass = 'displayed-on-scroll';

            hiddenElement.classList.toggle(hiddenElementClass);
            hiddenElement.classList.toggle(displayedElementClass);
        }
    });

    const sectionHeaderRolledInClass = 'section-header--rolled-in';
    const sectionHeadersElements = document.getElementsByClassName(sectionHeaderRolledInClass);

    Array.prototype.forEach.call(sectionHeadersElements, sectionHeaderElement => {
        let elementDistanceFromTop = sectionHeaderElement.getBoundingClientRect().top;

        if (window.scrollY >= (elementDistanceFromTop - 200)) {
            /** roll out header underline */
            const rollOutClass = 'section-header--rolled-out';
            sectionHeaderElement.classList.toggle(sectionHeaderRolledInClass);
            sectionHeaderElement.classList.toggle(rollOutClass);
        }
    })
}

const addCollpaseResumeButtonsFunctionality = () => {
    const collapsingButtons = document.querySelectorAll('[class^=resume__icon]');

    collapsingButtons.forEach ((button) => {
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
        if (buttonClass.includes('--mobile')) {
            isMobile = true;
        }
    });

    return isMobile;
}