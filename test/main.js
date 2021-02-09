$.ajax({
    url: 'https://picsum.photos/v2/list?page=1&limit=50'
})
    .done(function (picsumImages) {
        // Handling the images here by using picsumImages
    });