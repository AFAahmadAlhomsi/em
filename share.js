function share() {
    var shareData = {
        title: document.title,
        text: 'hello🥰',
        url: document.location.href
    }
    if (navigator.canShare(shareData)) {
        navigator.share(shareData);
    }
}
