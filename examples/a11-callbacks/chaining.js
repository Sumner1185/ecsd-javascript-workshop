function download(url, callback){
    callback('downloaded..');
}

function downloadSequentially(callback) {
    download('www.download.com/1', function(file1) {
        download('www.download.com/2', function(file2) {
            download('www.download.com/3', function(file3) {
                download('www.download.com/4', function(file4) {
                    callback([file1, file2, file3, file4]);
                });
            });
        });
    });
}

downloadSequentially(function(files){
    console.log(files);
});
