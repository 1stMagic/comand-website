import {basename, resolve} from "path"
import {writeFileSync} from "fs"

const FILENAME_PATTERN = /^(.+?)-iconfont.css$/i
const ICON_PATTERN = /\.(icon-(.+?)):/g

function buildTargetFilename(cssName, filenameTemplate) {
    const template = filenameTemplate || "{cssName}Icons.json"
    return template.replace("{cssName}", cssName)
}

function camelize(value) {
    return (value || "").replace(/(.)-(.)/g, (match, p1, p2) => p1 + p2.toUpperCase())
}

export default function iconFontPlugin(options) {
    return {
        name: "icon-font",
        transform(src, id) {
            const filename = basename(id)
            if (FILENAME_PATTERN.test(filename)) {
                const icons = []
                for (const match of src.matchAll(ICON_PATTERN)) {
                    icons.push({
                        name: match[2],
                        iconClass: match[1]
                    })
                }
                if (icons.length) {
                    const match = filename.match(FILENAME_PATTERN)
                    const cssName = camelize(match[1] || filename.slice(0, -4))
                    const targetFilename = buildTargetFilename(cssName, options.targetFilenameTemplate)
                    const targetFile = resolve(options.targetDirectory, targetFilename)
                    try {
                        writeFileSync(targetFile, JSON.stringify(icons, null, 4))
                    } catch (e) {
                        console.warn(e)
                    }
                }
            }
        }
    }
}
