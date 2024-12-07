// cross-site scripting attack(xss attack)
// inject malicious script into the code in th client side
// to remove that we sould integrate input sanitization 
// Ex - add url in javascript://somefun()

// cross site request forgery attack(csrf)

//Cross-Site Request Forgery (CSRF) vulnerabilities can exploit users’ trust in a web application to perform unauthorized actions on their behalf.

// add a csrf token for each request such that backend verified request is authenticated

// Not all cookies can be accessed by document.cookie. If you set a cookie with the HttpOnly attribute, it will be inaccessible to JavaScript running in the browser, which adds a layer of security to protect sensitive information (such as session tokens) from potential XSS attacks.