/**
 * POST /api/submit
 */
export async function onRequestPost({ request, env }) {
	try {
		let input = await request.formData();

		const {
			name,
			email,
			referers,
			movies
			  } = Object.fromEntries(input)
		
			  await env.MEMBERS.put(email, name);

			  const list = await env.MEMBERS.list();
			  const keys = list.keys;
			  if (!keys) {
				return new Response("List is empty", { status: 404 });
			  }
			  const length = keys.length;
			
			  for (let i = 0; i < length; i++) {
				const name = keys[i].name;
				const value = await MEMBERS.get(name);
				keys[i].value = value;
			  }
			  return new Response(JSON.stringify(keys));

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
