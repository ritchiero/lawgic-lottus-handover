/* @ds-bundle: {"format":3,"namespace":"DiestraDesignSystem_bce2f6","components":[{"name":"Isotipo","sourcePath":"components/brand/Isotipo.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PixelMotif","sourcePath":"components/brand/PixelMotif.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"ModuleCard","sourcePath":"components/display/ModuleCard.jsx"},{"name":"ProgressBar","sourcePath":"components/display/ProgressBar.jsx"},{"name":"QuoteCard","sourcePath":"components/display/QuoteCard.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Isotipo.jsx":"29c2486ea614","components/brand/Logo.jsx":"0894e571f152","components/brand/PixelMotif.jsx":"3061789aebf6","components/display/Badge.jsx":"54eceb4234e8","components/display/Card.jsx":"8eeece36c3d4","components/display/ModuleCard.jsx":"2019cfb468ee","components/display/ProgressBar.jsx":"e93b72d4f37b","components/display/QuoteCard.jsx":"46876177be9c","components/forms/Button.jsx":"80b27de33755","components/forms/Checkbox.jsx":"e006bf2e5560","components/forms/Input.jsx":"9560f30df48d","components/forms/Select.jsx":"fffd1be66d1f","components/forms/Switch.jsx":"5c0dd54fef0b","components/navigation/Tabs.jsx":"3610598f3a29","ui_kits/platform/app.jsx":"c0cca3226eb5","ui_kits/website/site.jsx":"b73bbe1d0d7a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DiestraDesignSystem_bce2f6 = window.DiestraDesignSystem_bce2f6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Isotipo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ISO_RATIO = 1.0518;
const LEAVES = "M234 7 L249 24 L257 38 L263 54 L267 77 L265 107 L261 121 L252 140 L237 161 L229 203 L217 239 L202 267 L177 299 L154 321 L130 339 L101 355 L79 364 L47 373 L15 379 L7 378 L7 365 L28 363 L70 354 L93 346 L118 334 L140 320 L158 305 L185 276 L196 260 L206 242 L217 215 L228 165 L228 159 L215 142 L204 114 L201 96 L202 69 L207 50 L216 31 L233 8 Z M125 71 L135 75 L157 91 L169 104 L183 128 L190 150 L192 166 L191 194 L187 212 L180 211 L168 205 L145 188 L131 172 L122 156 L114 127 L114 107 L118 87 L124 72 Z M346 136 L371 138 L398 145 L393 158 L383 171 L367 187 L357 194 L346 200 L325 207 L313 209 L292 209 L274 206 L251 198 L248 193 L255 182 L270 166 L287 153 L318 140 L332 137 L345 137 Z M39 151 L61 153 L71 156 L95 168 L107 177 L122 192 L134 209 L143 231 L146 250 L145 263 L142 265 L132 264 L99 254 L86 247 L71 235 L59 221 L48 201 L41 177 L39 152 Z M282 243 L303 243 L333 250 L357 262 L374 276 L346 297 L322 307 L310 309 L279 309 L264 306 L238 294 L227 287 L216 277 L216 273 L223 266 L245 253 L264 246 L281 244 Z M35 270 L47 272 L54 276 L58 281 L62 291 L62 301 L57 311 L46 318 L30 319 L25 317 L16 308 L14 298 L17 282 L26 273 L34 271 Z";
const STEM = "M232.5 162.0 L221.0 215.0 L211.5 240.0 L198.5 264.0 L180.5 288.0 L161.0 308.0 L132.0 331.0 L107.0 345.0 L110.0 346.0 L101.5 355.0";

/**
 * Isotipo — the official Lawgic Diestra laurel mark (vectorized from the
 * client artwork). Recolorable inline SVG; tints via the `color` prop
 * (defaults to currentColor) and renders crisply at any size.
 */
function Isotipo({
  size = 40,
  color = 'currentColor',
  title = 'Lawgic Diestra',
  style,
  ...rest
}) {
  const w = Math.round(size * ISO_RATIO);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: w,
    height: size,
    viewBox: "0 0 406 386",
    role: "img",
    "aria-label": title,
    style: {
      display: 'block',
      flex: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: LEAVES
  }), /*#__PURE__*/React.createElement("path", {
    d: STEM,
    fill: "none",
    stroke: color,
    strokeWidth: 5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
Object.assign(__ds_scope, { Isotipo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Isotipo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Official Lawgic Diestra lockup geometry (client-supplied vector, traced).
   Lives in a 1881x836 viewBox; recolored by the parent <g fill>. */
const LOCKUP_PATHS = `<path d="M2431 5110 c-88 -112 -131 -230 -131 -363 0 -126 46 -263 115 -345&#xA;l26 -31 -17 -98 c-44 -261 -147 -457 -329 -631 -183 -174 -411 -275 -702 -313&#xA;l-93 -12 0 -38 c0 -45 -4 -44 109 -24 304 53 521 158 714 344 134 129 227 266&#xA;282 417 33 90 75 259 75 304 0 26 11 50 41 90 85 114 122 219 122 350 0 134&#xA;-46 260 -131 359 l-39 45 -42 -54z"></path>
<path d="M9141 4910 c-110 -26 -165 -166 -99 -252 74 -97 216 -91 286 12 20&#xA;29 23 44 20 93 -5 66 -28 104 -79 129 -46 22 -87 28 -128 18z"></path>
<path d="M11245 4899 c-135 -5 -181 -11 -225 -27 -129 -47 -220 -119 -270&#xA;-214 -28 -53 -35 -76 -38 -144 -4 -66 -1 -87 16 -120 28 -54 62 -84 105 -91&#xA;31 -5 40 -1 67 25 37 37 38 61 4 93 -60 55 -83 183 -49 267 47 113 190 192&#xA;347 192 109 0 115 -17 72 -209 -173 -790 -268 -1186 -295 -1230 -21 -35 -87&#xA;-70 -131 -71 -16 0 -28 -3 -28 -7 0 -5 169 -7 377 -6 342 2 385 4 477 23 362&#xA;77 609 302 712 647 35 117 44 322 20 427 -56 238 -238 398 -496 435 -91 13&#xA;-434 18 -665 10z m617 -30 c174 -36 289 -156 334 -346 26 -110 14 -317 -25&#xA;-463 -78 -289 -250 -522 -455 -619 -103 -50 -168 -61 -340 -61 -155 0 -156 0&#xA;-172 25 -20 30 -25 3 81 465 189 823 222 953 247 985 19 24 23 25 148 25 71 0&#xA;153 -5 182 -11z"></path>
<path d="M3860 4145 l0 -715 428 4 c235 3 444 5 465 5 l37 1 0 135 0 135 -305&#xA;0 -305 0 0 575 0 575 -160 0 -160 0 0 -715z"></path>
<path d="M1880 4763 c-62 -199 -17 -387 125 -528 58 -57 184 -135 218 -135 17&#xA;0 24 36 33 161 13 165 -48 332 -160 445 -56 55 -158 124 -184 124 -6 0 -21&#xA;-30 -32 -67z"></path>
<path d="M12703 4804 c-33 -17 -63 -66 -63 -106 0 -30 33 -84 61 -98 29 -16&#xA;105 -7 129 15 54 48 46 149 -13 185 -38 24 -71 25 -114 4z"></path>
<path d="M15467 4724 c-16 -62 -62 -120 -111 -140 l-46 -19 0 -82 0 -83 -70 0&#xA;c-56 0 -70 -3 -70 -15 0 -12 14 -15 69 -15 l70 0 3 -432 c3 -391 5 -437 21&#xA;-473 37 -83 104 -125 197 -125 93 0 170 50 204 131 22 53 8 56 -24 5 -37 -57&#xA;-65 -76 -116 -76 -34 0 -49 6 -72 29 -16 17 -32 44 -36 62 -3 17 -6 222 -6&#xA;455 l0 424 115 0 c96 0 115 3 115 15 0 12 -19 15 -115 15 l-115 0 -2 178 c-2&#xA;114 -6 166 -11 146z"></path>
<path d="M2975 4489 c-78 -11 -166 -43 -236 -85 -59 -35 -163 -139 -189 -188&#xA;-18 -34 -15 -36 95 -72 180 -59 376 -24 517 93 71 59 171 194 154 210 -11 12&#xA;-146 41 -211 46 -38 3 -97 1 -130 -4z"></path>
<path d="M5240 4465 c-60 -12 -193 -56 -231 -76 -14 -7 -12 -20 19 -109 29&#xA;-83 38 -100 51 -94 179 81 354 92 437 29 31 -24 63 -90 50 -102 -3 -4 -54 -10&#xA;-112 -14 -171 -12 -259 -31 -347 -76 -237 -119 -252 -451 -24 -563 154 -76&#xA;346 -53 465 54 l41 37 5 -33 c3 -18 7 -44 8 -58 3 -28 1 -27 198 -22 l85 2 -2&#xA;340 c-2 360 -8 411 -53 500 -44 87 -138 154 -257 185 -70 18 -242 18 -333 0z&#xA;m340 -602 c0 -59 -16 -120 -41 -155 -28 -39 -101 -71 -164 -71 -90 0 -145 46&#xA;-145 121 0 95 98 149 273 151 l77 1 0 -47z"></path>
<path d="M8051 4465 c-163 -46 -294 -189 -336 -367 -17 -75 -19 -206 -4 -280&#xA;27 -130 129 -272 237 -327 155 -79 344 -60 462 45 l50 46 0 -49 c0 -63 -23&#xA;-146 -51 -187 -83 -121 -288 -140 -497 -45 -36 16 -66 28 -68 27 -10 -11 -73&#xA;-243 -67 -249 19 -17 188 -69 263 -80 100 -14 269 -6 355 17 146 39 260 128&#xA;315 247 63 134 64 143 64 692 l1 500 -145 0 -145 0 -3 -57 c-2 -32 -4 -58 -6&#xA;-58 -1 0 -22 18 -46 40 -71 66 -136 92 -238 96 -58 3 -105 -1 -141 -11z m277&#xA;-251 c92 -38 137 -123 137 -259 0 -134 -60 -227 -165 -255 -109 -29 -220 29&#xA;-260 137 -42 114 -19 255 55 328 63 63 154 82 233 49z"></path>
<path d="M10015 4474 c-131 -31 -190 -56 -265 -113 -130 -98 -200 -247 -200&#xA;-426 0 -275 184 -475 475 -516 87 -12 221 1 310 31 101 34 99 28 68 150 -14&#xA;58 -28 107 -29 109 -2 2 -32 -4 -66 -15 -88 -27 -217 -25 -278 2 -53 25 -103&#xA;73 -133 129 -18 32 -22 57 -22 125 0 75 4 91 30 139 71 129 232 173 412 112&#xA;38 -13 56 -15 58 -7 3 6 16 58 30 115 30 119 34 110 -65 142 -47 15 -98 22&#xA;-185 25 -66 1 -129 1 -140 -2z"></path>
<path d="M6000 4448 c0 -6 33 -116 74 -246 41 -131 107 -345 146 -477 39 -132&#xA;75 -251 79 -265 l8 -25 156 0 c85 0 158 3 161 6 8 8 100 322 146 499 21 80 40&#xA;138 43 130 3 -8 31 -112 62 -230 30 -118 68 -258 83 -310 l28 -95 99 -3 c55&#xA;-2 127 -1 160 3 l60 6 84 262 c131 406 231 729 231 745 0 12 -26 13 -152 10&#xA;l-152 -3 -13 -43 c-6 -24 -44 -179 -83 -345 -40 -166 -74 -309 -77 -317 -3 -8&#xA;-34 98 -68 235 -35 138 -77 300 -93 360 l-29 110 -132 2 c-127 2 -132 1 -141&#xA;-20 -11 -24 -150 -548 -170 -639 -7 -32 -16 -58 -20 -58 -4 0 -11 21 -15 48&#xA;-8 57 -143 650 -150 663 -8 12 -325 9 -325 -3z"></path>
<path d="M9020 3947 l0 -514 158 3 157 3 0 508 0 508 -157 3 -158 3 0 -514z"></path>
<path d="M1473 4339 c18 -251 185 -442 432 -494 118 -25 115 -26 115 53 -1&#xA;240 -235 488 -489 517 l-64 7 6 -83z"></path>
<path d="M13485 4408 c-146 -27 -302 -151 -370 -292 -20 -43 -39 -95 -42 -117&#xA;-3 -22 -10 -42 -14 -45 -10 -6 -12 -167 -2 -177 3 -4 16 -39 29 -77 116 -368&#xA;613 -485 895 -210 46 46 99 122 99 145 0 3 -36 5 -80 5 -68 0 -82 -3 -86 -17&#xA;-54 -162 -164 -255 -303 -257 -126 -1 -235 73 -301 204 -39 76 -60 178 -60&#xA;286 l0 84 116 0 c74 0 113 4 109 10 -4 6 -54 10 -117 10 l-110 0 7 47 c19 127&#xA;87 263 158 317 53 40 129 66 195 66 146 0 265 -126 307 -326 24 -112 31 -104&#xA;-95 -104 -96 0 -110 -2 -110 -17 0 -14 13 -15 128 -10 70 4 160 7 200 7 l72 0&#xA;0 28 c0 16 -7 53 -16 83 -76 258 -333 409 -609 357z"></path>
<path d="M14543 4410 c-171 -37 -268 -186 -221 -342 15 -52 74 -117 134 -150&#xA;27 -14 119 -54 205 -87 185 -72 227 -100 263 -172 39 -79 31 -157 -21 -220&#xA;-61 -72 -190 -91 -291 -44 -79 37 -157 115 -184 186 l-23 59 -72 0 c-69 0 -73&#xA;-1 -73 -22 0 -13 11 -50 25 -82 13 -33 22 -63 19 -67 -8 -13 65 -57 151 -92&#xA;76 -30 86 -32 215 -31 116 0 143 3 190 22 80 32 148 88 184 152 28 49 31 64&#xA;31 135 0 63 -5 89 -22 121 -44 83 -133 141 -331 216 -212 79 -271 117 -288&#xA;184 -13 51 2 123 31 154 113 118 357 49 457 -128 21 -36 35 -51 45 -48 8 3 21&#xA;6 29 6 12 0 14 18 12 98 l-3 97 -105 28 c-114 30 -283 43 -357 27z"></path>
<path d="M16379 4406 c-113 -40 -194 -132 -267 -306 -8 -19 -11 15 -11 143&#xA;l-1 169 -32 -8 c-18 -4 -77 -14 -130 -23 -96 -17 -136 -31 -84 -31 16 0 37&#xA;-10 51 -26 24 -26 25 -30 25 -195 l0 -168 -32 -3 -33 -3 0 -85 0 -85 33 -3 32&#xA;-3 0 -175 0 -176 -29 -29 c-21 -20 -39 -29 -62 -29 -18 0 -29 -3 -26 -6 10&#xA;-10 407 -11 407 -2 0 4 -12 8 -26 8 -38 0 -64 18 -80 55 -11 27 -14 91 -14&#xA;278 0 267 6 322 49 412 80 171 203 210 359 111 22 -13 43 -22 46 -19 3 4 6 48&#xA;6 99 l0 92 -31 11 c-42 14 -105 13 -150 -3z"></path>
<path d="M16955 4409 c-38 -5 -112 -22 -162 -37 l-93 -27 0 -92 0 -93 40 0&#xA;c36 0 41 4 59 38 27 52 87 107 146 134 70 32 181 31 245 -1 100 -51 150 -126&#xA;158 -233 5 -78 26 -66 -172 -99 -330 -53 -490 -137 -546 -285 -41 -108 -15&#xA;-221 68 -296 112 -102 331 -105 482 -8 52 34 135 119 153 158 18 39 27 24 27&#xA;-49 0 -38 5 -90 11 -115 l11 -44 127 1 c69 1 117 3 106 6 -46 10 -73 26 -84&#xA;49 -7 17 -11 129 -11 349 0 191 -4 344 -11 373 -24 115 -118 215 -237 252 -75&#xA;24 -220 32 -317 19z m368 -798 c-89 -184 -320 -264 -460 -161 -50 37 -73 84&#xA;-80 159 -11 119 42 217 155 285 73 44 130 62 283 90 l124 23 3 -171 c2 -167 2&#xA;-171 -25 -225z"></path>
<path d="M12805 4399 c-16 -5 -74 -14 -127 -21 -54 -6 -98 -16 -98 -20 0 -4 9&#xA;-8 19 -8 11 0 33 -11 48 -24 l28 -24 3 -424 c2 -388 1 -426 -15 -458 -14 -26&#xA;-27 -37 -55 -44 -21 -5 -38 -12 -38 -15 0 -3 83 -6 185 -6 102 0 185 3 185 8&#xA;0 4 -8 7 -17 7 -34 1 -65 35 -73 81 -5 24 -6 250 -3 502 3 259 2 457 -3 456&#xA;-5 0 -22 -5 -39 -10z"></path>
<path d="M13514 3945 c-3 -6 -4 -45 -2 -86 l3 -74 45 -3 c25 -2 64 -1 88 3&#xA;l42 6 0 80 0 79 -57 2 c-32 0 -71 2 -86 3 -16 1 -31 -3 -33 -10z"></path>
<path d="M2680 3939 c-77 -11 -159 -43 -229 -90 -92 -61 -93 -65 -44 -109 51&#xA;-45 158 -102 232 -124 70 -20 209 -21 286 -1 72 19 133 52 210 112 l59 46 -41&#xA;37 c-64 56 -176 109 -268 125 -88 16 -123 17 -205 4z"></path>
<path d="M1415 3796 c-51 -23 -68 -51 -73 -116 -4 -57 -3 -61 31 -95 30 -30&#xA;42 -35 82 -35 105 0 162 86 121 183 -25 60 -102 90 -161 63z"></path>`;

/**
 * Logo — the official Lawgic Diestra lockup (vector).
 * Renders the client-supplied SVG, recolored by tone. The wordmark is the
 * real brand typeface (not a webfont stand-in).
 */
function Logo({
  variant = 'horizontal',
  // 'horizontal' | 'stacked' | 'isotipo'
  tone = 'navy',
  // 'navy' | 'inverse' | 'mono'
  size = 32,
  // visual scale (≈ wordmark cap height in px)
  style,
  ...rest
}) {
  const ink = tone === 'inverse' ? 'var(--blanco)' : tone === 'mono' ? 'var(--grafito)' : 'var(--azul-profundo)';
  if (variant === 'isotipo') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(__ds_scope.Isotipo, {
      size: Math.round(size * 1.18),
      color: ink
    }));
  }
  const full = variant !== 'stacked';
  // Full lockup, or wordmark-only crop (isotipo occupies x≈130–310 of the 1881 box).
  const vb = full ? '0 0 1881 836' : '352 0 1529 836';
  const h = Math.round(full ? size * 1.95 : size * 1.45);
  const w = Math.round(h * (full ? 1881 / 836 : 1529 / 836));
  const mark = /*#__PURE__*/React.createElement("svg", {
    viewBox: vb,
    width: w,
    height: h,
    role: "img",
    "aria-label": "Lawgic Diestra",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0,836) scale(0.1,-0.1)",
    fill: ink,
    dangerouslySetInnerHTML: {
      __html: LOCKUP_PATHS
    }
  }));
  if (full) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        ...style
      }
    }, rest), mark);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: Math.round(size * 0.32),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Isotipo, {
    size: Math.round(size * 1.55),
    color: ink
  }), mark);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PixelMotif.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PixelMotif — the "acento pixel" brand decoration: a cross/plus
 * cluster built from small squares. Used as a quiet accent on
 * cards, hero corners and section dividers. Never load-bearing.
 *
 * cell  = square size in px
 * gap   = gap between cells in px
 * tone  = 'navy' | 'inverse' (square color for the core)
 * multi = sprinkle pastel accent squares (mint / lila / lime)
 */
function PixelMotif({
  cell = 9,
  gap = 4,
  tone = 'navy',
  multi = true,
  style,
  ...rest
}) {
  const core = tone === 'inverse' ? 'var(--blanco)' : 'var(--azul-profundo)';
  // grid is 7 columns x 7 rows; [col,row,color]
  const coreCells = [[3, 0], [3, 1], [3, 2], [3, 4], [3, 5], [3, 6],
  // vertical (hollow center)
  [0, 3], [1, 3], [2, 3], [4, 3], [5, 3], [6, 3] // horizontal (hollow center)
  ];
  const accents = multi ? [[5, 1, 'var(--lila-suave)'], [1, 1, 'var(--menta-suave)'], [5, 5, 'var(--lima-acento)'], [1, 5, 'var(--azul-bruma)']] : [];
  const span = n => n * cell + n * gap;
  const Square = ({
    c,
    r,
    color
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: c * (cell + gap),
      top: r * (cell + gap),
      width: cell,
      height: cell,
      background: color,
      borderRadius: Math.max(1, cell * 0.12)
    }
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "presentation",
    style: {
      position: 'relative',
      display: 'inline-block',
      width: span(6) + cell,
      height: span(6) + cell,
      flex: 'none',
      ...style
    }
  }, rest), coreCells.map(([c, r], i) => /*#__PURE__*/React.createElement(Square, {
    key: 'c' + i,
    c: c,
    r: r,
    color: core
  })), accents.map(([c, r, color], i) => /*#__PURE__*/React.createElement(Square, {
    key: 'a' + i,
    c: c,
    r: r,
    color: color
  })));
}
Object.assign(__ds_scope, { PixelMotif });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PixelMotif.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge / Tag — pill label for categories, status and "new".
 */
function Badge({
  variant = 'outline',
  // 'outline' | 'soft' | 'solid' | 'lime'
  iconRight = null,
  iconLeft = null,
  style,
  children,
  ...rest
}) {
  const variants = {
    outline: {
      bg: 'transparent',
      color: 'var(--text-body)',
      border: 'var(--border-default)'
    },
    soft: {
      bg: 'var(--neutral-100)',
      color: 'var(--text-heading)',
      border: 'transparent'
    },
    solid: {
      bg: 'var(--azul-profundo)',
      color: 'var(--blanco)',
      border: 'transparent'
    },
    lime: {
      bg: 'var(--lima-acento)',
      color: 'var(--azul-profundo)',
      border: 'transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: '0 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '-0.005em',
      color: variants.color,
      background: variants.bg,
      border: `1px solid ${variants.border}`,
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — base surface container. White, 16px radius, hairline border
 * + soft shadow, optional hover lift. Compose freely; the optional
 * icon / title / footer slots match the brand's "módulo destacado" card.
 */
function Card({
  icon = null,
  title,
  subtitle,
  footer = null,
  hover = false,
  padding = 24,
  style,
  children,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: h ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur-normal) var(--ease-standard), transform var(--dur-normal) var(--ease-standard)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--lila-bg)',
      color: 'var(--azul-profundo)',
      borderRadius: 'var(--radius-md)'
    }
  }, icon), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--text-heading)',
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--text-muted)'
    }
  }, subtitle), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 4,
      paddingTop: 14,
      borderTop: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProgressBar — rounded track with navy (or lime) fill.
 */
function ProgressBar({
  value = 0,
  // 0..100
  label,
  showValue = true,
  accent = 'navy',
  // 'navy' | 'lime'
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const fill = accent === 'lime' ? 'var(--lima-acento)' : 'var(--azul-profundo)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%',
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-heading)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 999,
      background: 'var(--neutral-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      borderRadius: 999,
      background: fill,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/display/ModuleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ModuleCard — a learning module tile. Gradient header carries the
 * module number + acento-pixel motif; body holds the title and progress.
 */
function ModuleCard({
  number = '01',
  title = 'Fundamentos de IA para abogados',
  meta,
  progress = null,
  // 0..100 or null
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: h ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur-normal) var(--ease-standard), transform var(--dur-normal) var(--ease-standard)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 116,
      padding: 20,
      background: 'var(--gradient-marca)',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--azul-profundo)',
      lineHeight: 1
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      right: 18,
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PixelMotif, {
    cell: 6,
    gap: 3
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 17,
      lineHeight: 1.3,
      color: 'var(--text-heading)',
      letterSpacing: '-0.01em'
    }
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, meta), progress != null && /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: progress,
    label: "Progreso"
  })));
}
Object.assign(__ds_scope, { ModuleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ModuleCard.jsx", error: String((e && e.message) || e) }); }

// components/display/QuoteCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * QuoteCard — pull quote on the soft brand gradient. Quote text is set
 * in the display serif; attribution in Google Sans Flex.
 */
function QuoteCard({
  quote = 'La destreza no es innata. Se entrena. Se practica. Se convierte en ventaja.',
  author = 'Lawgic Diestra',
  tone = 'gradient',
  // 'gradient' | 'ink'
  style,
  ...rest
}) {
  const ink = tone === 'ink';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      padding: '28px 30px',
      background: ink ? 'var(--gradient-ink)' : 'var(--gradient-soft)',
      borderRadius: 'var(--radius-xl)',
      color: ink ? 'var(--blanco)' : 'var(--text-heading)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      lineHeight: 0.5,
      height: 28,
      color: ink ? 'rgba(255,255,255,0.65)' : 'var(--azul-profundo)'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 23,
      lineHeight: 1.32,
      letterSpacing: '-0.01em'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 500,
      color: ink ? 'rgba(255,255,255,0.78)' : 'var(--text-muted)'
    }
  }, "\u2014 ", author));
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action control.
 * Navy fill is the primary; lime is the high-energy CTA used sparingly.
 */
function Button({
  variant = 'primary',
  // 'primary' | 'secondary' | 'ghost' | 'lime'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  caps = false,
  // UPPERCASE wide-tracked CTA treatment
  iconLeft = null,
  iconRight = null,
  disabled = false,
  fullWidth = false,
  style,
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      h: 36,
      px: 16,
      fs: 13,
      gap: 8
    },
    md: {
      h: 44,
      px: 22,
      fs: 14,
      gap: 9
    },
    lg: {
      h: 52,
      px: 28,
      fs: 15,
      gap: 10
    }
  }[size];
  const variants = {
    primary: {
      bg: 'var(--azul-profundo)',
      color: 'var(--blanco)',
      border: 'transparent'
    },
    secondary: {
      bg: 'var(--blanco)',
      color: 'var(--azul-profundo)',
      border: 'var(--azul-profundo)'
    },
    ghost: {
      bg: 'transparent',
      color: 'var(--azul-profundo)',
      border: 'transparent'
    },
    lime: {
      bg: 'var(--lima-acento)',
      color: 'var(--azul-profundo)',
      border: 'transparent'
    }
  }[variant];
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  let bg = variants.bg;
  if (!disabled && hover) {
    if (variant === 'primary') bg = 'var(--navy-700)';else if (variant === 'secondary' || variant === 'ghost') bg = 'var(--neutral-50)';else if (variant === 'lime') bg = '#CBEE52';
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizes.gap,
      height: sizes.h,
      padding: `0 ${sizes.px}px`,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: sizes.fs,
      letterSpacing: caps ? '0.06em' : '-0.005em',
      textTransform: caps ? 'uppercase' : 'none',
      color: variants.color,
      background: bg,
      border: `1.5px solid ${variants.border}`,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: active && !disabled ? 'scale(0.975)' : 'scale(1)',
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — square check with navy fill when selected.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      border: `1.5px solid ${checked ? 'var(--azul-profundo)' : 'var(--border-default)'}`,
      background: checked ? 'var(--azul-profundo)' : 'var(--blanco)',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12.5l4.5 4.5L19 7",
    stroke: "var(--blanco)",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field with optional label, leading/trailing
 * adornments and error state. Rounded, hairline border, navy focus ring.
 */
function Input({
  label,
  hint,
  error,
  type = 'text',
  size = 'md',
  // 'md' | 'lg'
  iconLeft = null,
  iconRight = null,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const h = size === 'lg' ? 52 : 46;
  const borderColor = error ? 'var(--negative)' : focus ? 'var(--azul-profundo)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-heading)',
      letterSpacing: '-0.005em'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: h,
      padding: '0 14px',
      background: disabled ? 'var(--neutral-50)' : 'var(--blanco)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-subtle)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-subtle)'
    }
  }, iconRight)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: error ? 'var(--negative)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native select styled to match Input.
 */
function Select({
  label,
  hint,
  options = [],
  value,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 46,
      padding: '0 40px 0 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-body)',
      background: disabled ? 'var(--neutral-50)' : 'var(--blanco)',
      border: `1.5px solid ${focus ? 'var(--azul-profundo)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      outline: 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    stroke: "var(--text-muted)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — on/off toggle. On = navy track, knob slides right.
 */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 44,
      height: 26,
      flex: 'none',
      borderRadius: 999,
      background: checked ? 'var(--azul-profundo)' : 'var(--neutral-300)',
      transition: 'background var(--dur-normal) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: 999,
      background: 'var(--blanco)',
      boxShadow: '0 1px 3px rgba(11,29,58,0.3)',
      transition: 'left var(--dur-normal) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — horizontal section switcher with an animated navy underline.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const items = tabs.map(t => typeof t === 'string' ? {
    value: t,
    label: t
  } : t);
  const current = value ?? items[0]?.value;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), items.map(t => {
    const active = t.value === current;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(t.value),
      style: {
        position: 'relative',
        appearance: 'none',
        border: 'none',
        background: 'none',
        padding: '12px 14px',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 14.5,
        fontWeight: active ? 600 : 500,
        color: active ? 'var(--text-heading)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, t.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: -1,
        height: 2.5,
        borderRadius: 2,
        background: active ? 'var(--azul-profundo)' : 'transparent',
        transition: 'background var(--dur-fast) var(--ease-standard)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/app.jsx
try { (() => {
/* Lawgic Diestra — learning platform UI kit
   Login → dashboard → lesson flow, composed from DS primitives.
   Exposes window.PlatformApp. */
const {
  Logo,
  Button,
  Input,
  Badge,
  Card,
  ModuleCard,
  ProgressBar,
  Isotipo,
  PixelMotif
} = window.DiestraDesignSystem_bce2f6;
const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const Eye = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z",
  stroke: "currentColor",
  strokeWidth: "1.7"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "2.6",
  stroke: "currentColor",
  strokeWidth: "1.7"
}));
const Play = () => /*#__PURE__*/React.createElement("svg", {
  width: "26",
  height: "26",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8 5v14l11-7z"
}));
const Check = () => /*#__PURE__*/React.createElement("svg", {
  width: "13",
  height: "13",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12.5l4.5 4.5L19 7",
  stroke: "currentColor",
  strokeWidth: "2.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
function NavIcon({
  d
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, d);
}
const NAV = [{
  id: 'inicio',
  label: 'Inicio',
  icon: /*#__PURE__*/React.createElement(NavIcon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 11l9-7 9 7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 10v10h14V10"
    }))
  })
}, {
  id: 'programas',
  label: 'Programas',
  icon: /*#__PURE__*/React.createElement(NavIcon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "4",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "13",
      y: "4",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "13",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "13",
      y: "13",
      width: "7",
      height: "7",
      rx: "1"
    }))
  })
}, {
  id: 'progreso',
  label: 'Mi progreso',
  icon: /*#__PURE__*/React.createElement(NavIcon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 19V5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 15l5-4 4 3 7-7"
    }))
  })
}, {
  id: 'recursos',
  label: 'Recursos',
  icon: /*#__PURE__*/React.createElement(NavIcon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 5a2 2 0 012-2h7l3 3v13a2 2 0 01-2 2H6a2 2 0 01-2-2z"
    }))
  })
}];
const MODULES = [{
  n: '01',
  t: 'Fundamentos de IA para abogados',
  m: '8 lecciones · 2h 45m',
  p: 86
}, {
  n: '02',
  t: 'Redacción y revisión asistida',
  m: '6 lecciones · 2h 10m',
  p: 40
}, {
  n: '03',
  t: 'Análisis documental con IA',
  m: '7 lecciones · 3h 05m',
  p: 0
}, {
  n: '04',
  t: 'Ética, riesgos y buenas prácticas',
  m: '5 lecciones · 1h 50m',
  p: 0
}];
const LESSONS = [{
  t: 'Qué es y qué no es la IA legal',
  dur: '14 min',
  done: true
}, {
  t: 'Casos de uso en el despacho',
  dur: '18 min',
  done: true
}, {
  t: 'Prompting con criterio jurídico',
  dur: '22 min',
  done: false,
  active: true
}, {
  t: 'Verificación y control de calidad',
  dur: '16 min',
  done: false
}, {
  t: 'Flujo de trabajo aplicado',
  dur: '20 min',
  done: false
}];
function Avatar({
  name = 'Ana López',
  size = 36
}) {
  const initials = name.split(' ').map(p => p[0]).slice(0, 2).join('');
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      background: 'var(--lila-suave)',
      color: 'var(--azul-profundo)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: size * 0.4,
      flex: 'none'
    }
  }, initials);
}

/* ---------- Login ---------- */
function Login({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--gradient-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(100%, 420px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "stacked",
    size: 30
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      padding: 34
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--text-heading)',
      margin: '0 0 6px',
      letterSpacing: '-0.01em'
    }
  }, "Accede a tu formaci\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      color: 'var(--text-muted)',
      margin: '0 0 24px'
    }
  }, "Contin\xFAa donde lo dejaste."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Correo profesional",
    placeholder: "ana@despacho.com",
    defaultValue: "ana@despacho.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Contrase\xF1a",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    defaultValue: "demo1234",
    iconRight: /*#__PURE__*/React.createElement(Eye, null)
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null),
    onClick: onLogin
  }, "Acceder"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, "\xBFOlvidaste tu contrase\xF1a?"))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginTop: 22
    }
  }, "\xBFTu despacho a\xFAn no tiene acceso? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--text-heading)',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "Solicita una demo"))));
}

/* ---------- Shell ---------- */
function Sidebar({
  active,
  setActive,
  onLogout
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flex: 'none',
      background: 'var(--surface-page)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      position: 'sticky',
      top: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 22px 14px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "navy",
    size: 21
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      padding: '8px 14px'
    }
  }, NAV.map(n => {
    const on = active === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => setActive(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-md)',
        background: on ? 'var(--lila-bg)' : 'transparent',
        color: on ? 'var(--azul-profundo)' : 'var(--text-muted)',
        fontFamily: 'var(--font-sans)',
        fontSize: 14.5,
        fontWeight: on ? 600 : 500,
        textAlign: 'left'
      }
    }, n.icon, n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 16,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement(Avatar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, "Ana L\xF3pez"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Despacho Rodr\xEDguez")), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    title: "Salir",
    style: {
      marginLeft: 'auto',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement(NavIcon, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 21H6a2 2 0 01-2-2V5a2 2 0 012-2h3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 17l5-5-5-5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 12H9"
    }))
  }))));
}
function TopBar({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 68,
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '0 32px',
      background: 'rgba(255,255,255,0.8)',
      backdropFilter: 'blur(8px)',
      position: 'sticky',
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 19,
      fontWeight: 600,
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      width: 260
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar m\xF3dulos\u2026",
    iconLeft: /*#__PURE__*/React.createElement("svg", {
      width: "17",
      height: "17",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 21l-4-4",
      strokeLinecap: "round"
    }))
  })), /*#__PURE__*/React.createElement(Badge, {
    variant: "lime"
  }, "Plan despacho"));
}

/* ---------- Dashboard ---------- */
function Dashboard({
  openLesson
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dx-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Martes, 16 de junio"), /*#__PURE__*/React.createElement("h2", {
    className: "dx-display",
    style: {
      fontSize: 34,
      margin: 0
    }
  }, "Hola, Ana")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--gradient-marca)',
      borderRadius: 'var(--radius-xl)',
      padding: '30px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      right: 22,
      opacity: 0.8
    }
  }, /*#__PURE__*/React.createElement(PixelMotif, {
    cell: 8
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--navy-700)',
      marginBottom: 10
    }
  }, "Contin\xFAa donde lo dejaste"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--azul-profundo)',
      margin: '0 0 16px',
      letterSpacing: '-0.01em'
    }
  }, "Fundamentos de IA para abogados"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 86,
    label: "Progreso del m\xF3dulo"
  }))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null),
    onClick: openLesson
  }, "Continuar")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--text-heading)',
      margin: 0
    }
  }, "Tus programas"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, "Ver todos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, MODULES.map(m => /*#__PURE__*/React.createElement(ModuleCard, {
    key: m.n,
    number: m.n,
    title: m.t,
    meta: m.m,
    progress: m.p || null,
    onClick: openLesson
  })))));
}

/* ---------- Lesson ---------- */
function LessonView({
  back
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: back,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-muted)',
      marginBottom: 20,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5M11 6l-6 6 6 6",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "Volver al m\xF3dulo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16/9',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--gradient-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 18,
      right: 22,
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(PixelMotif, {
    cell: 7,
    tone: "inverse"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 999,
      background: 'var(--lima-acento)',
      color: 'var(--azul-profundo)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(Play, null))), /*#__PURE__*/React.createElement("div", {
    className: "dx-eyebrow",
    style: {
      margin: '24px 0 10px'
    }
  }, "M\xF3dulo 01 \xB7 Lecci\xF3n 3"), /*#__PURE__*/React.createElement("h2", {
    className: "dx-display",
    style: {
      fontSize: 30,
      margin: '0 0 14px'
    }
  }, "Prompting con criterio jur\xEDdico"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      maxWidth: 580,
      margin: '0 0 26px'
    }
  }, "Aprende a formular instrucciones precisas a un asistente de IA partiendo del razonamiento legal: contexto, fuente, l\xEDmites y verificaci\xF3n. La destreza no es innata: se entrena."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, "Siguiente lecci\xF3n"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Marcar completada"))), /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, "Contenido del m\xF3dulo"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "2 de 5 lecciones")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, LESSONS.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 10px',
      borderRadius: 'var(--radius-md)',
      background: l.active ? 'var(--lila-bg)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: 'none',
      borderRadius: 999,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: l.done ? 'var(--azul-profundo)' : l.active ? 'var(--azul-profundo)' : 'var(--neutral-200)',
      color: l.done || l.active ? '#fff' : 'var(--text-subtle)',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600
    }
  }, l.done ? /*#__PURE__*/React.createElement(Check, null) : i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: l.active ? 600 : 500,
      color: l.active ? 'var(--text-heading)' : 'var(--text-body)',
      lineHeight: 1.3
    }
  }, l.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-subtle)'
    }
  }, l.dur)))))));
}

/* ---------- App ---------- */
function PlatformApp() {
  const [view, setView] = React.useState('login'); // login | app
  const [active, setActive] = React.useState('inicio');
  const [lesson, setLesson] = React.useState(false);
  if (view === 'login') return /*#__PURE__*/React.createElement(Login, {
    onLogin: () => setView('app')
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    setActive: id => {
      setActive(id);
      setLesson(false);
    },
    onLogout: () => setView('login')
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: lesson ? 'Fundamentos de IA para abogados' : 'Inicio'
  }), lesson ? /*#__PURE__*/React.createElement(LessonView, {
    back: () => setLesson(false)
  }) : /*#__PURE__*/React.createElement(Dashboard, {
    openLesson: () => setLesson(true)
  })));
}
window.PlatformApp = PlatformApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site.jsx
try { (() => {
/* Lawgic Diestra — marketing website UI kit
   Composes the design-system primitives into a homepage.
   Exposes window.WebsiteApp for index.html to mount. */
const {
  Logo,
  Button,
  Badge,
  Card,
  ModuleCard,
  QuoteCard,
  Tabs,
  Isotipo,
  PixelMotif
} = window.DiestraDesignSystem_bce2f6;
const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const Sparkle = () => /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"
}));
const IconEff = () => /*#__PURE__*/React.createElement("svg", {
  width: "26",
  height: "26",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M13 2L4 14h7l-1 8 9-12h-7z"
}));
const IconPrec = () => /*#__PURE__*/React.createElement("svg", {
  width: "26",
  height: "26",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "1",
  fill: "currentColor"
}));
const IconAdv = () => /*#__PURE__*/React.createElement("svg", {
  width: "26",
  height: "26",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 19V13M10 19V8M16 19V11M22 19V5"
}));
const NAV = ['Programas', 'Módulos', 'Para despachos', 'Recursos'];
function NavBar({
  tab,
  setTab
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(255,255,255,0.86)',
      backdropFilter: 'saturate(160%) blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      height: 70,
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "navy",
    size: 24
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 16
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setTab(n),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: '8px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      fontWeight: tab === n ? 600 : 500,
      color: tab === n ? 'var(--text-heading)' : 'var(--text-muted)'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Acceder"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, "Empezar"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-soft)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '88px 32px 96px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "soft"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginRight: 4
    }
  }, /*#__PURE__*/React.createElement(Sparkle, null)), "Educaci\xF3n especializada en IA")), /*#__PURE__*/React.createElement("h1", {
    className: "dx-display",
    style: {
      fontSize: 60,
      lineHeight: 1.04,
      margin: 0,
      letterSpacing: '-0.025em'
    }
  }, "IA con criterio.", /*#__PURE__*/React.createElement("br", null), "Derecho con ventaja."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      maxWidth: 460,
      marginTop: 22
    }
  }, "No vendemos tecnolog\xEDa: hacemos que los despachos la dominen con criterio. Formaci\xF3n pr\xE1ctica para profesionales del derecho."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, "Explorar programas"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Para despachos"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -18,
      left: 6,
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement(PixelMotif, {
    cell: 9
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ModuleCard, {
    number: "01",
    title: "Fundamentos de IA para abogados",
    meta: "8 lecciones \xB7 2h 45m",
    progress: 86
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 28
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 18,
    style: {
      boxShadow: 'var(--shadow-md)'
    },
    icon: /*#__PURE__*/React.createElement(Sparkle, null),
    title: "M\xF3dulo destacado",
    subtitle: "Domina habilidades de IA aplicadas al trabajo legal."
  }))))));
}
const VALUES = [{
  icon: /*#__PURE__*/React.createElement(IconEff, null),
  t: 'Eficiencia',
  d: 'Automatiza tareas repetitivas y gana tiempo valioso en cada caso.'
}, {
  icon: /*#__PURE__*/React.createElement(IconPrec, null),
  t: 'Precisión',
  d: 'Mejora la calidad del análisis y la toma de decisiones con método.'
}, {
  icon: /*#__PURE__*/React.createElement(IconAdv, null),
  t: 'Ventaja competitiva',
  d: 'Diferencia tu despacho con criterio aplicado y soluciones innovadoras.'
}];
function WhySection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '84px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 52px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dx-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "Por qu\xE9 Diestra"), /*#__PURE__*/React.createElement("h2", {
    className: "dx-display",
    style: {
      fontSize: 40,
      margin: 0
    }
  }, "\xBFPor qu\xE9 educar en IA legal?")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 28
    }
  }, VALUES.map(v => /*#__PURE__*/React.createElement("div", {
    key: v.t,
    style: {
      textAlign: 'center',
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--mint-bg)',
      color: 'var(--azul-profundo)',
      borderRadius: 14
    }
  }, v.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 19,
      fontWeight: 600,
      color: 'var(--text-heading)',
      margin: '18px 0 8px'
    }
  }, v.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, v.d))))));
}
const PROGRAMS = [{
  n: '01',
  t: 'Fundamentos de IA para abogados',
  m: '8 lecciones · 2h 45m',
  p: 86,
  tag: 'Básico'
}, {
  n: '02',
  t: 'Redacción y revisión asistida',
  m: '6 lecciones · 2h 10m',
  p: 40,
  tag: 'Intermedio'
}, {
  n: '03',
  t: 'Análisis documental con IA',
  m: '7 lecciones · 3h 05m',
  p: 0,
  tag: 'Intermedio'
}, {
  n: '04',
  t: 'Gestión del conocimiento legal',
  m: '5 lecciones · 1h 50m',
  p: 0,
  tag: 'Avanzado'
}];
function ProgramsSection() {
  const [filter, setFilter] = React.useState('Todos');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '84px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 32,
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dx-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Cat\xE1logo"), /*#__PURE__*/React.createElement("h2", {
    className: "dx-display",
    style: {
      fontSize: 38,
      margin: 0
    }
  }, "Programas")), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Todos', 'Básico', 'Intermedio', 'Avanzado'],
    value: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 22
    }
  }, PROGRAMS.filter(p => filter === 'Todos' || p.tag === filter).map(p => /*#__PURE__*/React.createElement(ModuleCard, {
    key: p.n,
    number: p.n,
    title: p.t,
    meta: p.m,
    progress: p.p || null
  })))));
}
function DespachosBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-ink)',
      color: 'var(--blanco)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '80px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dx-eyebrow",
    style: {
      color: 'rgba(255,255,255,0.6)',
      marginBottom: 16
    }
  }, "Para despachos"), /*#__PURE__*/React.createElement("h2", {
    className: "dx-display",
    style: {
      fontSize: 40,
      color: 'var(--blanco)',
      margin: '0 0 18px'
    }
  }, "Formaci\xF3n in-company a medida"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 17,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,0.78)',
      maxWidth: 440,
      margin: '0 0 28px'
    }
  }, "Programas dise\xF1ados para tu equipo legal: diagn\xF3stico inicial, sesiones pr\xE1cticas y acompa\xF1amiento con m\xE9tricas de impacto."), /*#__PURE__*/React.createElement(Button, {
    variant: "lime",
    size: "lg",
    caps: true,
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, "Solicitar propuesta")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, [['+150%', 'Documentos generados'], ['−50%', 'Tiempo en investigación'], ['94%', 'Satisfacción del cliente'], ['24 h', 'Programa aplicado']].map(([big, lab]) => /*#__PURE__*/React.createElement("div", {
    key: lab,
    style: {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 16,
      padding: '22px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 600,
      color: 'var(--lima-acento)'
    }
  }, big), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'rgba(255,255,255,0.7)',
      marginTop: 4
    }
  }, lab))))));
}
function QuoteSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '84px 32px'
    }
  }, /*#__PURE__*/React.createElement(QuoteCard, {
    tone: "gradient",
    style: {
      padding: '40px 44px'
    }
  })));
}
function Footer() {
  const cols = [['Programas', ['Fundamentos', 'Redacción asistida', 'Análisis documental', 'Gestión del conocimiento']], ['Empresa', ['Sobre Diestra', 'Para despachos', 'Casos de éxito', 'Contacto']], ['Recursos', ['Blog', 'Guías', 'Webinars', 'FAQ']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--azul-profundo)',
      color: 'var(--blanco)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '64px 32px 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    tone: "inverse",
    size: 22
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.66)',
      maxWidth: 250,
      marginTop: 18
    }
  }, "Educaci\xF3n especializada en IA para profesionales del derecho.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)',
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'rgba(255,255,255,0.8)'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '20px 32px 40px',
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Lawgic Diestra"), /*#__PURE__*/React.createElement("span", null, "lawgicdiestra.com")));
}
function WebsiteApp() {
  const [tab, setTab] = React.useState('Programas');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    tab: tab,
    setTab: setTab
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(WhySection, null), /*#__PURE__*/React.createElement(ProgramsSection, null), /*#__PURE__*/React.createElement(DespachosBand, null), /*#__PURE__*/React.createElement(QuoteSection, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.WebsiteApp = WebsiteApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Isotipo = __ds_scope.Isotipo;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PixelMotif = __ds_scope.PixelMotif;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ModuleCard = __ds_scope.ModuleCard;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
