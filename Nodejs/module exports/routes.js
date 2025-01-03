const requestHandler = (req, res) => {
    const url = req.url;
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html><body><h1>Welcome to Home Page</h1></body></html>");
        return res.end();
    } else if (url === "/about") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html><body><h1>About Page</h1></body></html>");
        return res.end();
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body><h1>404 Page Not Found</h1></body></html>");
    res.end();
};

const someText = "This is a sample text exported from routes.js";

module.exports.handler = requestHandler;
module.exports.someText = someText;
