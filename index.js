"use strict";
const isUrl = require("is-url-superb");
const urlParser = require("js-video-url-parser");

module.exports = url => {
	if (typeof url !== "string") {
		throw new TypeError(`Expected \`url\` to be a \`string\`, got \`${typeof url}\``);
	}

	if (!isUrl(url)) {
		return false;
	}

	const urlInfo = urlParser.parse(url);

	return urlInfo.provider === "youtube" && (urlInfo.mediaType === "playlist" || typeof urlInfo.list !== "undefined");
};
