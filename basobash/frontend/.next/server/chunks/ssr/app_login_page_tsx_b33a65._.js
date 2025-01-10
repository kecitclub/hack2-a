module.exports = {

"[project]/Desktop/hack2-a/basobash/frontend/app/login/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/@nextui-org/react/node_modules/@nextui-org/input/dist/chunk-JZOL6GD7.mjs [app-ssr] (ecmascript) <export input_default as Input>");
"use client";
;
;
;
;
const Login = ()=>{
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogin = async ()=>{
        setError("");
        if (!phone || !password) {
            setError("Phone number and password are required");
            return;
        }
        try {
            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phone,
                    password
                })
            });
            const rawText = await response.text();
            console.log("Raw response:", rawText);
            let data;
            try {
                data = JSON.parse(rawText);
            } catch (e) {
                console.error("Error parsing response as JSON:", e);
                setError("Failed to parse server response");
                return;
            }
            if (response.ok && data.token) {
                alert("Login successful");
                localStorage.setItem("token", data.token);
                router.push("/dashboard");
            } else {
                setError(data.error || "Invalid phone number or password");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("An error occurred during login");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "w-full w-[350px]  p-10 bg-white rounded-lg space-y-5 shadow-md",
            onSubmit: handleLogin,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-6 text-2xl font-bold text-center text-gray-800",
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/app/login/page.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                    label: "Phone Number",
                    id: "phone",
                    type: "text",
                    placeholder: "Enter your phone number",
                    value: phone,
                    onChange: (e)=>setPhone(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/app/login/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                    label: "Password",
                    id: "password",
                    type: "password",
                    placeholder: "Enter your password",
                    value: password,
                    onChange: (e)=>setPassword(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/app/login/page.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-4 text-sm text-left text-red-500 px-3",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/app/login/page.tsx",
                    lineNumber: 80,
                    columnNumber: 10
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-center text-gray-600 my-5",
                    children: [
                        "Don't have an account? ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push("/register"),
                            className: "text-[#f63e3e] cursor-pointer hover:underline",
                            children: "Register"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/hack2-a/basobash/frontend/app/login/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/app/login/page.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLogin,
                    className: "w-full px-4 py-2 text-white bg-[#f63e3e] hover:bg-[#fc4949] rounded-full  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400",
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/app/login/page.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/hack2-a/basobash/frontend/app/login/page.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/hack2-a/basobash/frontend/app/login/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Login;
}}),
"[project]/Desktop/hack2-a/basobash/frontend/app/login/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=app_login_page_tsx_b33a65._.js.map