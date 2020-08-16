export const isJSON = item => {
    item = (typeof item !== "string") ? JSON.stringify(item) : item
    try {
        item = JSON.parse(item)
    } catch (e) {
        return false
    }
    if (typeof item === "object" && item !== null) return true
    return false
}

export const isTrue = (value) => {
    if (["false", "null", "0", "undefined", "NaN"].includes(String(value))) return false
    return true
}

export const checkemail = email => {
    const value = String(email).replace(/ /g, '').trim()
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(value)) return false
    return true
}

export const checkpassword = password => {
    if (password.length < 6) return false
    return true
}