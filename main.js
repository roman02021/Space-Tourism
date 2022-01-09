let selected = 0;
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        selected = i;
    }
}
document.links[selected].classList.add('selected');
