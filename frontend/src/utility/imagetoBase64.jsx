const imagetoBase64  = async  (file)=>{
        const reader = new FileReader()
        reader.readAsDataURL(file)

        const data = new Promise((resolve, reject)=>{
            reader.onload = ()=> resolve(reader.result)
            reader.onerror = ()=> reject(Error)
        })
        return data

}

export {imagetoBase64}