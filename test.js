import test from "ava";
import m from ".";

test("throw if url is not a string", t => {
	t.throws(() => m(5), "Expected `url` to be a `string`, got `number`");
	t.throws(() => m(true), "Expected `url` to be a `string`, got `boolean`");
});

test("validate url of video from playlist", t => {
	const url = "https://youtu.be/BCQHnlnPusY?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV";
	const invalidUrl = "https://youtu.be/dQw4w9WgXcQ";

	t.true(m(url));
	t.false(m(invalidUrl));
});

test("validate url of playlist", t => {
	const url = "https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV";
	t.true(m(url));
});

test("invalidate when provider is not youtube", t => {
	const url = "https://vimeo.com/channels/staffpicks/229370456";
	t.false(m(url));
});
