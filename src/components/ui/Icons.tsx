const Coin = () => (
  <svg
    height="1.8em"
    width="1.8em"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 291.764 291.764"
    xmlSpace="preserve"
  >
    <g>
      <path
        fill="#EFC75E"
        d="M145.882,0c80.573,0,145.882,65.319,145.882,145.882s-65.31,145.882-145.882,145.882
		S0,226.446,0,145.882S65.31,0,145.882,0z"
      />
      <path
        fill="#CC9933"
        d="M145.882,27.353c-65.465,0-118.529,53.065-118.529,118.529s53.065,118.529,118.529,118.529
		s118.529-53.065,118.529-118.529S211.347,27.353,145.882,27.353z M145.882,246.176c-55.39,0-100.294-44.904-100.294-100.294
		S90.493,45.588,145.882,45.588s100.294,44.904,100.294,100.294S201.281,246.176,145.882,246.176z M158.009,138.269
		c-5.452-2.289-25.493-5.452-25.493-14.214c0-6.464,7.495-8.334,11.99-8.334c4.094,0,8.999,1.295,11.589,3.875
		c1.641,1.577,2.316,2.726,2.854,4.313c0.684,1.869,1.094,3.875,3.684,3.875h13.357c3.136,0,3.957-0.574,3.957-4.021
		c0-14.789-11.589-23.122-24.809-25.994V86.28c0-2.58-0.821-4.167-3.957-4.167h-10.64c-3.136,0-3.957,1.577-3.957,4.167v11.051
		c-14.178,2.726-26.031,11.634-26.031,27.718c0,18.235,12.683,23.979,26.441,28.566c11.589,3.884,23.724,4.021,23.724,12.063
		s-5.99,9.765-13.357,9.765c-5.051,0-10.631-1.304-13.366-4.741c-1.769-2.152-2.453-4.021-2.58-5.89
		c-0.274-3.592-1.769-4.021-4.914-4.021H113.28c-3.136,0-3.957,0.729-3.957,4.021c0,16.366,13.093,26.286,27.262,29.441v11.206
		c0,2.58,0.821,4.167,3.957,4.167h10.64c3.136,0,3.957-1.586,3.957-4.167v-10.905c16.084-2.453,27.125-12.209,27.125-29.441
		C182.28,145.591,167.829,141.424,158.009,138.269z"
      />
    </g>
  </svg>
);

import React from "react";
export interface IconInterface {
  size: any;
  fill: any;
  className: string;
  width: string | number;
  height: string | number;
}
const Diploma = ({
  size,
  fill,
  className,
  width,
  height,
}: Partial<IconInterface>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className={className}
    >
      <path
        fill="#FFBA00"
        d="M87.507 494.871L104.634 511.998 512 104.632 494.873 87.505 283.802 283.8z"
      ></path>
      <path
        fill="#FDE09C"
        d="M477.746 70.378L259.286 259.284 70.38 477.744 87.507 494.871 494.873 87.505z"
      ></path>
      <path
        fill="#FFBA00"
        d="M35.19 442.554L70.38 477.744 477.746 70.378 442.556 35.188 224.096 224.094z"
      ></path>
      <path
        fill="#FDE09C"
        d="M-66.773 196.395H509.326V246.161H-66.773z"
        transform="rotate(134.999 221.278 221.279)"
      ></path>
      <path
        fill="#FF4F67"
        d="M241.433 270.985L346.882 346.88 391.272 327.345 288.172 224.245z"
      ></path>
      <path
        fill="#FF6E7A"
        d="M224.247 288.171L327.347 391.271 346.882 346.88 256.21 256.208z"
      ></path>
      <path
        fill="#FF0F4D"
        d="M169.064 169.063l40.258 69.812 71.698 42.144c30.915-30.915 30.915-81.039 0-111.956-30.915-30.916-81.04-30.916-111.956 0z"
      ></path>
      <path
        fill="#FF4F67"
        d="M169.064 281.018c30.915 30.915 81.039 30.915 111.956 0L169.064 169.063c-30.915 30.915-30.915 81.04 0 111.955z"
      ></path>
      <path
        fill="#FF8E00"
        d="M200.352 200.35l8.964 38.519 40.417 10.863c13.636-13.636 13.636-35.745 0-49.382s-35.745-13.637-49.381 0z"
      ></path>
      <path
        fill="#FFBA00"
        d="M200.351 249.731c13.636 13.636 35.745 13.636 49.382 0l-49.382-49.382c-13.636 13.637-13.636 35.746 0 49.382z"
      ></path>
    </svg>
  );
};

const Github = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    role="img"
    viewBox="0 0 24 24"
    color="white"
    className="text-xs md:text-5xl hidden md:flex text-white"
    height="2em"
    width="2em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title></title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
  </svg>
);

const Discord = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    height="1.2em"
    width="1.2em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
  </svg>
);

const Mail = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    className="text-4xl md:text-7xl lg:text-9xl text-white dark:text-[#ffffffaa]"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
  </svg>
);

const Spotify = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"></path>
  </svg>
);

const DownLoad = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    height="1em"
    width="1em"
    className="absolute right-2 bottom-2 top-auto md:right-5 md:top-5 text-xl text-white dark:text-[#ffffffaa]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
  </svg>
);

const Linkedin = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    className="text-4xl md:text-5xl lg:text-7xl text-white dark:text-[#ffffffaa]"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
  </svg>
);

const NewTab = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    className="absolute right-2 bottom-2 top-auto md:right-5 md:top-5 text-xl text-white dark:text-[#ffffffaa]"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
  </svg>
);

const AvatarNotion = () => (
  <svg
    height="4em"
    width="4em"
    viewBox="0 0 1080 1080"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {" "}
    <defs>
      {" "}
      <filter
        id="filter"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="linearRGB"
      >
        {" "}
        <feMorphology
          operator="dilate"
          radius="20 20"
          in="SourceAlpha"
          result="morphology"
        />{" "}
        <feFlood floodColor="#ffffff" floodOpacity="1" result="flood" />{" "}
        <feComposite
          in="flood"
          in2="morphology"
          operator="in"
          result="composite"
        />{" "}
        <feMerge result="merge">
          {" "}
          <feMergeNode in="composite" result="mergeNode" />{" "}
          <feMergeNode in="SourceGraphic" result="mergeNode1" />{" "}
        </feMerge>{" "}
      </filter>
    </defs>{" "}
    <g id="notion-avatar" filter="url(#filter)">
      {" "}
      <g id="notion-avatar-face" fill="#ffffff">
        {" "}
        <title>Notion profile</title>{" "}
        <g
          id="Face/-10"
          stroke="none"
          strokeWidth="1"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path
            d="M532,379 C664.54834,379 772,486.45166 772,619 C772,751.54834 684.54834,899 592,899 C535.13263,899 351.668898,801.612202 313.752775,718.980575 L313.322946,718.989282 L312,719 C267.81722,719 232,683.18278 232,639 C232,599.134956 261.158843,566.080325 299.312086,560.00055 C325.599297,455.979213 419.809919,379 532,379 Z M295.858895,624.545187 L304.141105,655.454813"
            id="Path"
            stroke="#000000"
            strokeWidth="24"
          />{" "}
        </g>{" "}
      </g>
      <g id="notion-avatar-nose">
        {" "}
        <g id="Nose/ 13">
          <path
            id="Path"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M644 560C644 560 665.892 613.522 673 623C676 627 693.906 641.256 692.774 653.58C690.065 683.076 644 684.359 644 684.359C644 684.359 700 689.489 700 653.58C700 637.222 687 632 674 620C666.959 613.5 644 560 644 560Z"
            fill="black"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>{" "}
      </g>
      <g id="notion-avatar-mouth">
        {" "}
        <title>Mouth/ 0</title>{" "}
        <g
          id="Mouth/-0"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path
            d="M549,759 C576.33038,765.666667 599.663714,769 619,769 C638.336286,769 655.002953,765.666667 669,759"
            id="Path"
            stroke="#000000"
            strokeWidth="16"
          />{" "}
        </g>{" "}
      </g>
      <g id="notion-avatar-eyes">
        {" "}
        <title>Eyes/ 9</title>{" "}
        <g
          id="Eyes/-9"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          {" "}
          <path
            d="M570,507 C575.854822,507 581.122051,511.025253 584.779642,517.440484 L578,531 L589.369946,531.000208 C589.781247,533.557105 590,536.237678 590,539 C590,556.673112 581.045695,571 570,571 C558.954305,571 550,556.673112 550,539 C550,521.326888 558.954305,507 570,507 Z M708,507 C713.854822,507 719.122051,511.025253 722.779642,517.440484 L716,531 L727.369946,531.000208 C727.781247,533.557105 728,536.237678 728,539 C728,556.673112 719.045695,571 708,571 C696.954305,571 688,556.673112 688,539 C688,521.326888 696.954305,507 708,507 Z"
            id="Combined-Shape"
            fill="#000000"
          />{" "}
        </g>{" "}
      </g>
      <g id="notion-avatar-eyebrows">
        {" "}
        <g id="Eyebrows/ 11">
          <g id="Group">
            <path
              id="Path"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M682.541 491.005C682.541 491.005 728.644 489.216 741.813 495.149C754.982 501.082 753.21 511.484 753.21 511.484C753.21 511.484 746.419 503.992 737.34 499.348C728.26 494.703 682.541 491.005 682.541 491.005Z"
              fill="black"
              stroke="black"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M595.459 491.005C595.459 491.005 549.356 489.216 536.187 495.149C523.018 501.082 524.79 511.484 524.79 511.484C524.79 511.484 531.581 503.992 540.66 499.348C549.74 494.703 595.459 491.005 595.459 491.005Z"
              fill="black"
              stroke="black"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>{" "}
      </g>
      <g id="notion-avatar-glasses">
        {" "}
        <title>Glasses/ 0</title>{" "}
        <g
          id="Glasses/-0"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        />{" "}
      </g>
      <g id="notion-avatar-hair">
        {" "}
        <g id="Hairstyle/ 51">
          <path
            id="Path"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M382.001 274C429.761 244.346 494.39 241.407 575.889 265.181L577.14 264.65C597.829 255.949 630.441 246.059 677.001 272C747.001 311 754.98 383.101 781.001 387C799.46 389.766 805.56 435.498 822.001 477C828.104 492.404 867.001 502 867.001 502L822.001 521C822.001 521 831.927 531.092 845.001 539C856.33 545.852 876.001 570 876.001 570C876.001 570 833.793 577.748 828.001 590C824.892 596.577 861.406 604.103 872.001 648C886.001 706 839.99 786.03 868.953 803.495C882.072 811.406 916.953 833.495 916.953 833.495C916.953 833.495 864.775 885.051 840.953 878.495C804.135 868.363 756.953 833.495 756.953 833.495C756.953 833.495 768.409 700.557 764.001 625C760.916 572.103 746.184 514.788 732.001 493C697.561 440.091 627.001 387 540.001 387C473.08 387 468.925 425.463 468.925 425.463C465.119 446.727 465.116 469.946 450.001 502C423.775 557.618 331.05 595.505 331.05 624.505C331.05 653.505 340.05 654.505 340.05 670.505C340.05 686.505 328.02 694.862 331.05 716.505C333.07 730.933 344.021 804.095 360.001 825C332.475 852.867 306.808 870.534 283.001 878C259.195 885.466 228.528 885.466 191.001 878C200.307 869.655 206.974 861.989 211.001 855L211.393 854.308C215.33 847.232 219.867 835.462 225.001 819C218.698 825.705 212.365 830.371 206.001 833C199.637 835.628 190.637 837.295 179.001 838L181.003 835.564C186.363 829.017 190.521 823.735 193.477 819.717L194.434 818.408C199.252 811.846 203.628 806.7 201.001 796C198.297 784.981 163.573 686.372 165.05 653.505C166.035 631.593 176.701 599.259 197.05 556.505C193.586 560.378 189.586 563.378 185.05 565.505C180.513 567.631 173.847 569.631 165.05 571.505L166.29 570.4C177.121 560.712 184.708 552.746 189.05 546.505C193.556 540.027 196.222 533.027 197.05 525.505C190.855 527.314 185.855 527.98 182.05 527.505C178.244 527.029 172.578 525.029 165.05 521.505L166.345 520.889C174.864 516.82 181.099 513.358 185.05 510.505C189.198 507.508 194.532 502.508 201.05 495.505L202.221 492.969C221.276 451.815 236.552 423.661 248.05 408.505C280.199 366.126 314.722 340.408 344.05 318.505C360.26 306.398 368.717 282.248 382.001 274Z"
            fill="black"
            stroke="black"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>{" "}
      </g>
      <g id="notion-avatar-accessories">
        {" "}
        <title>Accessories/ 0</title>{" "}
        <g
          id="Accessories/-0"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        />{" "}
      </g>
      <g id="notion-avatar-details">
        {" "}
        <g id="Details/ 12">
          <g id="Group">
            <path
              id="Path"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M511.307 445.692C511.307 445.692 487.802 466.737 479.157 484.515C470.511 502.293 465.201 540.499 465.201 540.499C465.201 540.499 474.765 503.28 482.827 486.703C490.889 470.125 511.307 445.692 511.307 445.692Z"
              fill="black"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Path_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M478.14 452.968C478.14 452.968 468.587 468.207 465.775 476.369C462.963 484.53 460.527 497.199 462.555 498.204C464.582 499.21 465.445 484.848 467.592 477.026C469.739 469.204 478.14 452.968 478.14 452.968Z"
              fill="black"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>{" "}
      </g>
      <g id="notion-avatar-beard">
        {" "}
        <title>Beard/ 0</title>{" "}
        <g
          id="Beard/-0"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        />{" "}
      </g>
      <g id="notion-avatar-christmas">
        {" "}
        <title>Christmas/ 0</title>{" "}
        <g
          id="Christmas/-0"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        />{" "}
      </g>{" "}
    </g>{" "}
  </svg>
);

export const Icons = {
  Linkedin,
  NewTab,
  DownLoad,
  Spotify,
  Mail,
  Github,
  Discord,
  AvatarNotion,
  Coin,
  Diploma,
};
