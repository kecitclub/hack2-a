const CHUNK_PUBLIC_PATH = "server/pages/api/test.js";
const runtime = require("../../chunks/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/[root of the server]__e9317a._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/frontend/node_modules/next/dist/esm/build/templates/pages-api.js { INNER_PAGE => \"[project]/frontend/pages/api/test.ts [api] (ecmascript)\" } [api] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
