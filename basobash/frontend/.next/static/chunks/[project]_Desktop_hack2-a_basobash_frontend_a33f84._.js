(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[project]_Desktop_hack2-a_basobash_frontend_a33f84._.js", {

"[project]/Desktop/hack2-a/basobash/frontend/components/listForm.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$form$2f$dist$2f$chunk$2d$LIZLXVVX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/@nextui-org/form/dist/chunk-LIZLXVVX.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/@nextui-org/react/node_modules/@nextui-org/input/dist/chunk-JZOL6GD7.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$radio$2f$dist$2f$chunk$2d$CNMWLC36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__radio_group_default__as__RadioGroup$3e$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/@nextui-org/radio/dist/chunk-CNMWLC36.mjs [app-client] (ecmascript) <export radio_group_default as RadioGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$radio$2f$dist$2f$chunk$2d$7XMGXS3U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__radio_default__as__Radio$3e$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/@nextui-org/radio/dist/chunk-7XMGXS3U.mjs [app-client] (ecmascript) <export radio_default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/@nextui-org/react/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-client] (ecmascript) <export button_default as Button>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const ListForm = ({ marker })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        description: "",
        price: 0,
        location: "",
        bedrooms: 0,
        bathrooms: 0,
        kitchen: "no",
        images: []
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!formData.title || !formData.price || !formData.bedrooms || !formData.bathrooms) {
            alert("Please fill out all required fields.");
            return;
        }
        try {
            const response = await fetch("/api/properties", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    kitchen: formData.kitchen === "yes" ? 1 : 0,
                    location: marker ? `Lat: ${marker.lat}, Lng: ${marker.lng}` : formData.location
                })
            });
            if (response.ok) {
                const data = await response.json();
                alert("Property listed successfully!");
                console.log(data);
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred. Please try again.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$form$2f$dist$2f$chunk$2d$LIZLXVVX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
            className: "w-full max-w-xs",
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                    errorMessage: "Please add a valid image",
                    label: "Images",
                    labelPlacement: "outside",
                    name: "images",
                    type: "file",
                    placeholder: "Image URLs (comma-separated)",
                    onChange: handleChange
                }, void 0, false, {
                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/listForm.jsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                    errorMessage: "Please enter a valid phone number",
                    label: "Phone",
                    labelPlacement: "outside",
                    name: "price",
                    placeholder: "Enter your price",
                    type: "number",
                    onChange: handleChange
                }, void 0, false, {
                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/listForm.jsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                    errorMessage: "Please enter a valid rent fee",
                    label: "Rent Fee",
                    labelPlacement: "outside",
                    name: "price",
                    placeholder: "Enter rent fee",
                    type: "number",
                    onChange: handleChange
                }, void 0, false, {
                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/listForm.jsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                    errorMessage: "Please enter valid number of bedroom",
                    label: "No. of bedroom",
                    labelPlacement: "outside",
                    name: "bedrooms",
                    placeholder: "Enter no. of bedrooms",
                    type: "number",
                    onChange: handleChange
                }, void 0, false, {
                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/listForm.jsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                    errorMessage: "Please enter valid number of bathroom",
                    label: "No. of bathroom",
                    labelPlacement: "outside",
                    name: "bathrooms",
                    placeholder: "Enter no. of bathrooms",
                    type: "number",
                    onChange: handleChange
                }, void 0, false, {
                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/listForm.jsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$radio$2f$dist$2f$chunk$2d$CNMWLC36$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__radio_group_default__as__RadioGroup$3e$__["RadioGroup"], {
                    label: "Has a Kitchen",
                    onChange: (value)=>setFormData({
                            ...formData,
                            kitchen: value
                        }),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$radio$2f$dist$2f$chunk$2d$7XMGXS3U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__radio_default__as__Radio$3e$__["Radio"], {
                            value: "yes",
                            children: "Yes"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/listForm.jsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$radio$2f$dist$2f$chunk$2d$7XMGXS3U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__radio_default__as__Radio$3e$__["Radio"], {
                            value: "no",
                            children: "No"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/listForm.jsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/listForm.jsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$JZOL6GD7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                    errorMessage: "Please enter a description",
                    label: "Description",
                    labelPlacement: "outside",
                    name: "description",
                    placeholder: "Enter description (optional)",
                    type: "text",
                    onChange: handleChange
                }, void 0, false, {
                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/listForm.jsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                    type: "submit",
                    variant: "bordered",
                    children: "Submit"
                }, void 0, false, {
                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/listForm.jsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/listForm.jsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/listForm.jsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
};
_s(ListForm, "HyqvoNFI9iufFfyxeEqCItQ5dq0=");
_c = ListForm;
const __TURBOPACK__default__export__ = ListForm;
var _c;
__turbopack_refresh__.register(_c, "ListForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$components$2f$listForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/components/listForm.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/Desktop/hack2-a/basobash/frontend/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
const GEOAPIFY_API_KEY = "1f3eec48fa604cf7b262e4d4ba1d004c";
// Fix for Leaflet's default icon
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.imagePath = "/";
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.mergeOptions({
    iconRetinaUrl: "marker-icon-2x.png",
    iconUrl: "marker-icon.png",
    shadowUrl: "marker-shadow.png"
});
const GeocodedListMap = ()=>{
    _s();
    var _s1 = __turbopack_refresh__.signature();
    const [marker, setMarker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedLocation, setSelectedLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showListForm, setShowListForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const AddMarker = ()=>{
        _s1();
        const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"])({
            dblclick: {
                "GeocodedListMap.AddMarker.useMapEvents": (e)=>{
                    const { lat, lng } = e.latlng;
                    setMarker({
                        lat,
                        lng
                    });
                }
            }["GeocodedListMap.AddMarker.useMapEvents"]
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "GeocodedListMap.AddMarker.useEffect": ()=>{
                // Get user's location on mount
                navigator.geolocation.getCurrentPosition({
                    "GeocodedListMap.AddMarker.useEffect": (position)=>{
                        const { latitude, longitude } = position.coords;
                        map.flyTo([
                            latitude,
                            longitude
                        ], 13, {
                            animate: true
                        });
                    }
                }["GeocodedListMap.AddMarker.useEffect"], {
                    "GeocodedListMap.AddMarker.useEffect": (error)=>{
                        console.error("Error getting user location:", error);
                    }
                }["GeocodedListMap.AddMarker.useEffect"]);
            }
        }["GeocodedListMap.AddMarker.useEffect"], [
            map
        ]); // Only run once when map is available
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "GeocodedListMap.AddMarker.useEffect": ()=>{
                if (selectedLocation) {
                    map.flyTo([
                        selectedLocation.lat,
                        selectedLocation.lng
                    ], 13, {
                        animate: true
                    });
                }
            }
        }["GeocodedListMap.AddMarker.useEffect"], [
            map,
            selectedLocation
        ]);
        return null;
    };
    _s1(AddMarker, "bAiY8kQwIaLc+pS6cg8p6133MgY=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"]
        ];
    });
    const fetchSuggestions = async (searchText)=>{
        if (!searchText) {
            setSuggestions([]);
            return;
        }
        const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(searchText)}&apiKey=${GEOAPIFY_API_KEY}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setSuggestions(data.features || []);
        } catch (error) {
            console.error("Error fetching Geoapify suggestions:", error);
        }
    };
    const handleInputChange = (e)=>{
        setQuery(e.target.value);
        fetchSuggestions(e.target.value);
    };
    const handleSuggestionClick = (feature)=>{
        const [lon, lat] = feature.geometry.coordinates;
        const newLocation = {
            lat,
            lng: lon
        };
        setMarker(newLocation);
        setSelectedLocation(newLocation);
        setSuggestions([]);
        setQuery(feature.properties.formatted);
    };
    const handleSaveToDB = ()=>{
        if (marker) {
            setShowListForm((prev)=>!prev);
        } else {
            alert("Please add a marker before saving.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[500px] w-full flex flex-col justify-center items-center relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row gap-10 h-full w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row h-full w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex-grow transition-all duration-300 rounded-lg overflow-hidden shadow-lg ${showListForm ? "w-1/2" : "w-full"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
                                center: [
                                    27.7172,
                                    85.324
                                ],
                                zoom: 13,
                                style: {
                                    height: "100%",
                                    width: "100%"
                                },
                                className: "z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-4 left-0 right-0 px-4 z-[1000]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full max-w-sm mx-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: query,
                                                    onChange: handleInputChange,
                                                    placeholder: "Search for a location...",
                                                    className: "w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this),
                                                suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "absolute z-[1001] w-full bg-white shadow-xl rounded-lg mt-1 max-h-60 overflow-y-auto border border-gray-200",
                                                    children: suggestions.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-full p-3 text-left hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0",
                                                            onClick: ()=>handleSuggestionClick(feature),
                                                            onKeyDown: (e)=>e.key === "Enter" && handleSuggestionClick(feature),
                                                            tabIndex: 0,
                                                            children: feature.properties.formatted
                                                        }, index, false, {
                                                            fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                                        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                                        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddMarker, {}, void 0, false, {
                                        fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    marker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                        position: [
                                            marker.lat,
                                            marker.lng
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                            children: [
                                                "Marker at ",
                                                marker.lat,
                                                ", ",
                                                marker.lng
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    showListForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/2 h-full p-4 bg-white border-l border-gray-200 overflow-y-auto shadow-inner",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$components$2f$listForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            marker: marker
                        }, void 0, false, {
                            fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-5 left-5 z-[1000]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hack2$2d$a$2f$basobash$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleSaveToDB,
                    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200",
                    children: showListForm ? "Hide Form" : "Add Location"
                }, void 0, false, {
                    fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/hack2-a/basobash/frontend/components/geocodedListMap.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
};
_s(GeocodedListMap, "oR3Fv5n+MnST9PZ53YbNz6DXZG0=");
_c = GeocodedListMap;
const __TURBOPACK__default__export__ = GeocodedListMap;
var _c;
__turbopack_refresh__.register(_c, "GeocodedListMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/Desktop/hack2-a/basobash/frontend/app/list/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=%5Bproject%5D_Desktop_hack2-a_basobash_frontend_a33f84._.js.map