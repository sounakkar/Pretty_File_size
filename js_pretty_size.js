
/*GPL Release NO COPYRIGHT ALLOWED*/
function pfs(fileSizeInBytes) {
    var i = -1;
    var byteUnits = [' KiB', ' MiB', ' GiB', ' TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    do {
        fileSizeInBytes = fileSizeInBytes / 1024;
        i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
};
function pfs_bits(fileSizeInBytes) {
    var i = -1;
    var byteUnits = [' KB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
        fileSizeInBytes = fileSizeInBytes / 1000;
        i++;
    } while (fileSizeInBytes > 1000);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
};
/*GPL Release NO COPYRIGHT ALLOWED*/
