const gltfFolder = './public/gltf';
const fs = require('fs');

const buildFilesArray = () => {
    const files = []

    fs.readdirSync(gltfFolder).forEach(file => {
        files.push(file)
    });

    return files;
}

const buildJson = (files) => {
    let result = 'const jsonData = { "items": ['

    for (var i = 0; i < files.length; i++) {
        result += "'" + files[i] + "'"

        if (i < files.length - 1) {
            result += ','
        }
    }

    return result + ']}; export default jsonData;'
}

const files = buildFilesArray()
const result = buildJson(files)

console.log(result);