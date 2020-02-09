"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Link(props) {
    const { url, text } = props;
    <a href={url}>{text}</a>;
}
exports.default = Link;
