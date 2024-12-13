"use strict"

const container = document.querySelector('.container');
const divContainer = document.querySelector('.div-container');
const absDivs = divContainer.querySelectorAll('.abs');
const buttons = document.querySelectorAll('.div-emow');

document.querySelectorAll('.div-emow').forEach((button, index) => {
    button.addEventListener('mouseenter', () => {
        const currentDiv = absDivs[index];

        buttons.forEach((btn) => {
            btn.classList.remove('hover');
        });

        button.classList.add('hover');

        if (currentDiv) {
            divContainer.style.height = `${currentDiv.scrollHeight + 8}px`;

            absDivs.forEach((div, i) => {
                if (i < index) {
                    div.style.left = '-100%';
                    div.style.visibility = 'hidden';
                } else if (i === index) {
                    div.style.left = '0';
                    div.style.visibility = 'visible';
                } else {
                    div.style.left = '100%';
                    div.style.visibility = 'hidden';
                }
            });
        }
    });
});

container.addEventListener('mouseleave', () => {
    divContainer.style.height = '0';

    absDivs.forEach((div) => {
        div.style.left = '0';
        div.style.visibility = 'hidden';
    });

    buttons.forEach((button) => {
        button.classList.remove('hover');
    });
});

