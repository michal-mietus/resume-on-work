window.onload = () => {
    addCollpaseResumeButtonsFunctionality();
    processArray('Web Developer'.split(''));
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
            addCollapseAnimation(event);
        }
    })
}

const addCollapseAnimation = (clickEvent) => {
    const plusButtonClassName = 'resume__icon--plus-button';
    const minusButtonClassName = 'resume__icon--minus-button';

    const collapsedClass = 'item__collapsing-items--collapsed';
    const extendedClass = 'item__collapsing-items--expanded';

    var parentElement = clickEvent.srcElement.parentElement;
    let classes = clickEvent.srcElement.classList;

    // TODO refactor repeating code

    if (classes.contains(plusButtonClassName)) {
        if (isMobileButton(classes)) {
            collapsingContainer = parentElement.parentElement.querySelector('.item__collapsing-items');
        } else {
            collapsingContainer = parentElement.querySelector('.resume__item .item__container .item__collapsing-items');     
        }

        collapsingContainer.classList.toggle(collapsedClass);
        collapsingContainer.classList.toggle(extendedClass);
        classes.remove(plusButtonClassName);
        classes.add(minusButtonClassName);

    } else if (classes.contains(minusButtonClassName)) {
        if (isMobileButton(classes)) {
            collapsingContainer = parentElement.parentElement.querySelector('.item__collapsing-items');
        } else {
            collapsingContainer = parentElement.querySelector('.resume__item .item__container .item__collapsing-items');     
        }

        collapsingContainer.classList.toggle(collapsedClass);
        collapsingContainer.classList.toggle(extendedClass);
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


async function processArray(array) {
    for (const item of array) {
      await delayedLog(item);
    }
}

async function delayedLog(item) {
    await delay();
    document.getElementById('first-page-subtitle').innerHTML += item;
}

function delay() {
    return new Promise(resolve => setTimeout(resolve, 100));
}
