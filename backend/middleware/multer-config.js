const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../uploads/')
    },
    filename: (req, file, callback) => {
        const time = new Date();
        let timestamp = `${time.getFullYear()}${time.getMonth()}${time.getDate()}_${time.getHours()}${time.getMinutes()}${time.getSeconds()}`;

        callback(null, `${timestamp}_${file.originalname}`)
    }
})

module.exports = multer({ storage: storage }).single('image');