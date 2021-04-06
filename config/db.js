if (process.env.NODE_ENV == "production") {
    module.exports = {mongoURI: "mongodb+srv://<user>:<password>@<...>"}
} else {
    module.exports = {mongoURI: "mongodb://localhost/me-ajuda-ai"}
}