function template(locals) {
var jade_debug = [{ lineno: 1, filename: undefined }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

jade_debug.unshift({ lineno: 0, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 1, filename: jade_debug[0].filename });
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("<html>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("<head>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("<!--link(href=\"/favicon.ico\", rel=\"shortcut icon\", type=\"image/x-icon\");-->");
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("<body>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("Hello World yay");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "doctype\nhtml\n    head\n        //link(href=\"/favicon.ico\", rel=\"shortcut icon\", type=\"image/x-icon\");\n    body\n        h1 Hello World yay\n");
}
}