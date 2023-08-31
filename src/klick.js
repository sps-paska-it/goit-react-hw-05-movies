refs.backdrop.addEventListener('mousedown', e => {
    if (!e.target.classList.contains('backdrop')) return;
    e.target.addEventListener(
        'mouseup',
        el => {
            el.target.classList.add('is-hidden');
            if (!refs.autorizeModal.classList.contains('is-hidden')) {
                refs.autorizeModal.classList.add('is-hidden');
                refs.formSignIn.reset();
                refs.formSignUp.reset();
                formClose();
            }
            if (!refs.userProfile.classList.contains('is-hidden')) {
                refs.userProfile.classList.add('is-hidden');
                refs.userProfileForm.reset();
            }
            resetStyle();
            enableBodyScroll(document.body);
        },
        { once: true }
    );
});