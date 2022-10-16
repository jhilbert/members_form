/**
 * POST /api/submit
 */
export async function onRequestPost({ request }) {
	try {
		let input = await request.formData();

		const {
			name,
			email,
			referers,
			movies
			  } = Object.fromEntries(input)
		
			  await MEMBERS.put(email, name);

				const value = await MEMBERS.get("josef.hilbert@icloud.com");
				if (value === null) {
				  return new Response("Value not found", { status: 404 });
				}
				return new Response(value);

				// Convert FormData to JSON
		// NOTE: Allows mutliple values per key
//		let tmp, output = {};
//		for (let [key, value] of input) {
//			tmp = output[key];
//			if (tmp === undefined) {
//				output[key] = value;
//			} else {
//				output[key] = [].concat(tmp, value);
//			}
//		}

	//	let pretty = JSON.stringify(output, null, 2);

	} catch (err) {
		return new Response('Error parsing JSON content', { status: 400 });
	}
}
