export default function getData(path) {
	return fetch ('https://api.themoviedb.org/3/'+path, {
		headers: {
			'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTc3NGQwNGNiZGQ4YjkzZmI3MDJlM2U0NTY4MjM5NyIsInN1YiI6IjYyMzhiZTViOGFjM2QwMDA3NTdhZDIwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tp4pw201x3rroTVV9YZLt-ZKJGsbnx-s9yV1AaGh_ko',
			'Content-Type': 'application/json;charset=utf-8',
		},
	}).then ((result) => result.json())
}

