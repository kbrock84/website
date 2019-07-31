import React from "react"

const PengwinWebsiteLogo: React.FC<{ width: string; height: string }> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 100 746 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M175.284 432.769C108.689 415.489 69.1831 349.251 87.0039 284.843C104.826 220.427 173.251 182.187 239.85 199.469C254.205 203.194 267.3 209.194 278.834 216.959C263.594 218.494 240.623 224.57 219.435 238.03C197.585 251.911 177.613 273.659 170.001 306.384C155.022 370.782 195.199 419.37 218.151 436.494C204.129 437.644 189.664 436.501 175.284 432.769Z"
        fill="#9A54BB"
      />
      <path
        d="M115.658 397.639C122.816 399.074 133.632 399.93 144.684 398.188C156.322 396.353 168.28 391.626 176.471 381.594C187.449 407.7 205.427 426.825 218.152 436.317C204.129 437.467 189.664 436.324 175.284 432.593C151.491 426.418 131.156 413.995 115.658 397.639Z"
        fill="#CA8EE5"
      />
      <path
        d="M288.62 132.499C355.215 149.78 394.721 216.017 376.9 280.427C359.077 344.842 290.653 383.082 224.053 365.799C209.699 362.075 196.603 356.075 185.069 348.31C200.31 346.775 223.28 340.699 244.468 327.239C266.319 313.357 286.291 291.61 293.903 258.885C308.882 194.486 268.705 145.899 245.752 128.775C259.775 127.625 274.24 128.768 288.62 132.499Z"
        fill="#9A54BB"
      />
      <path
        d="M348.372 167.421C341.214 165.985 330.398 165.129 319.345 166.872C307.707 168.707 295.75 173.434 287.558 183.466C276.58 157.36 258.602 138.235 245.878 128.742C259.901 127.592 274.366 128.735 288.746 132.467C312.539 138.641 332.874 151.065 348.372 167.421Z"
        fill="#CA8EE5"
      />
      <mask id="path-5-inside-1" fill="white">
        <path d="M261.212 387.217C271.791 387.217 279.907 389.182 285.559 393.112C291.283 396.971 294.145 402.761 294.145 410.48C294.145 414.69 293.348 418.304 291.754 421.321C290.232 424.269 287.986 426.689 285.015 428.584C282.117 430.409 278.566 431.742 274.364 432.584C270.161 433.426 265.415 433.847 260.125 433.847H251.756V460.899H241.213V389.007C244.184 388.305 247.481 387.849 251.104 387.639C254.799 387.358 258.169 387.217 261.212 387.217ZM262.082 396.164C257.589 396.164 254.147 396.27 251.756 396.48V425.111H259.69C263.313 425.111 266.574 424.9 269.473 424.479C272.371 423.988 274.798 423.216 276.755 422.163C278.784 421.041 280.342 419.532 281.428 417.637C282.515 415.743 283.059 413.322 283.059 410.374C283.059 407.568 282.479 405.252 281.32 403.427C280.233 401.603 278.711 400.164 276.755 399.112C274.871 397.989 272.661 397.217 270.125 396.796C267.589 396.375 264.908 396.164 262.082 396.164ZM300.033 433.637C300.033 428.795 300.758 424.584 302.207 421.006C303.656 417.357 305.576 414.339 307.968 411.953C310.359 409.567 313.112 407.778 316.228 406.585C319.344 405.392 322.532 404.796 325.793 404.796C333.401 404.796 339.234 407.111 343.292 411.743C347.35 416.304 349.378 423.286 349.378 432.689C349.378 433.11 349.378 433.672 349.378 434.373C349.378 435.005 349.342 435.601 349.27 436.163H310.576C311.011 441.847 312.714 446.162 315.685 449.11C318.655 452.057 323.293 453.53 329.597 453.53C333.147 453.53 336.118 453.25 338.509 452.688C340.973 452.057 342.821 451.46 344.053 450.899L345.466 459.109C344.234 459.741 342.06 460.407 338.944 461.109C335.901 461.811 332.423 462.162 328.51 462.162C323.583 462.162 319.308 461.46 315.685 460.056C312.134 458.583 309.199 456.583 306.881 454.057C304.562 451.531 302.823 448.548 301.663 445.11C300.577 441.601 300.033 437.777 300.033 433.637ZM338.836 428.268C338.908 423.848 337.749 420.234 335.357 417.427C333.039 414.55 329.814 413.111 325.684 413.111C323.365 413.111 321.3 413.567 319.489 414.479C317.75 415.322 316.264 416.444 315.032 417.848C313.801 419.251 312.822 420.865 312.098 422.69C311.446 424.514 311.011 426.374 310.794 428.268H338.836ZM363.899 407.743C366.217 407.182 369.297 406.585 373.137 405.954C376.978 405.322 381.398 405.006 386.397 405.006C390.89 405.006 394.622 405.638 397.593 406.901C400.563 408.094 402.918 409.813 404.657 412.059C406.469 414.234 407.737 416.865 408.461 419.953C409.186 423.041 409.548 426.444 409.548 430.163V460.899H399.44V432.268C399.44 428.9 399.187 426.023 398.679 423.637C398.245 421.251 397.484 419.321 396.397 417.848C395.31 416.374 393.861 415.322 392.049 414.69C390.238 413.988 387.992 413.637 385.311 413.637C384.224 413.637 383.101 413.673 381.941 413.743C380.782 413.813 379.659 413.918 378.572 414.058C377.557 414.129 376.615 414.234 375.746 414.374C374.949 414.515 374.369 414.62 374.007 414.69V460.899H363.899V407.743ZM461.745 455.425C460.873 455.986 459.171 456.723 456.635 457.636C454.17 458.478 451.272 458.899 447.94 458.899C444.536 458.899 441.309 458.372 438.267 457.32C435.297 456.267 432.687 454.653 430.441 452.478C428.194 450.232 426.419 447.461 425.115 444.162C423.811 440.864 423.158 436.935 423.158 432.373C423.158 428.374 423.774 424.725 425.006 421.427C426.238 418.058 428.013 415.181 430.332 412.795C432.723 410.339 435.621 408.445 439.026 407.111C442.433 405.708 446.272 405.006 450.547 405.006C455.257 405.006 459.352 405.357 462.832 406.059C466.379 406.69 469.353 407.287 471.742 407.848V456.688C471.742 465.109 469.496 471.214 465.005 475.003C460.511 478.793 453.699 480.687 444.569 480.687C441.018 480.687 437.652 480.407 434.463 479.845C431.346 479.284 428.629 478.617 426.31 477.845L428.158 469.319C430.187 470.091 432.651 470.758 435.55 471.319C438.52 471.951 441.599 472.267 444.788 472.267C450.8 472.267 455.114 471.109 457.722 468.793C460.401 466.477 461.745 462.793 461.745 457.741V455.425ZM461.635 414.795C460.62 414.515 459.243 414.269 457.503 414.058C455.839 413.778 453.555 413.637 450.657 413.637C445.222 413.637 441.018 415.357 438.048 418.795C435.15 422.234 433.701 426.795 433.701 432.479C433.701 435.636 434.101 438.338 434.897 440.584C435.765 442.829 436.89 444.689 438.267 446.162C439.716 447.636 441.347 448.724 443.158 449.425C445.041 450.127 446.962 450.478 448.917 450.478C451.6 450.478 454.061 450.127 456.31 449.425C458.556 448.653 460.33 447.776 461.635 446.794V414.795Z" />
      </mask>
      <path
        d="M261.212 387.217C271.791 387.217 279.907 389.182 285.559 393.112C291.283 396.971 294.145 402.761 294.145 410.48C294.145 414.69 293.348 418.304 291.754 421.321C290.232 424.269 287.986 426.689 285.015 428.584C282.117 430.409 278.566 431.742 274.364 432.584C270.161 433.426 265.415 433.847 260.125 433.847H251.756V460.899H241.213V389.007C244.184 388.305 247.481 387.849 251.104 387.639C254.799 387.358 258.169 387.217 261.212 387.217ZM262.082 396.164C257.589 396.164 254.147 396.27 251.756 396.48V425.111H259.69C263.313 425.111 266.574 424.9 269.473 424.479C272.371 423.988 274.798 423.216 276.755 422.163C278.784 421.041 280.342 419.532 281.428 417.637C282.515 415.743 283.059 413.322 283.059 410.374C283.059 407.568 282.479 405.252 281.32 403.427C280.233 401.603 278.711 400.164 276.755 399.112C274.871 397.989 272.661 397.217 270.125 396.796C267.589 396.375 264.908 396.164 262.082 396.164ZM300.033 433.637C300.033 428.795 300.758 424.584 302.207 421.006C303.656 417.357 305.576 414.339 307.968 411.953C310.359 409.567 313.112 407.778 316.228 406.585C319.344 405.392 322.532 404.796 325.793 404.796C333.401 404.796 339.234 407.111 343.292 411.743C347.35 416.304 349.378 423.286 349.378 432.689C349.378 433.11 349.378 433.672 349.378 434.373C349.378 435.005 349.342 435.601 349.27 436.163H310.576C311.011 441.847 312.714 446.162 315.685 449.11C318.655 452.057 323.293 453.53 329.597 453.53C333.147 453.53 336.118 453.25 338.509 452.688C340.973 452.057 342.821 451.46 344.053 450.899L345.466 459.109C344.234 459.741 342.06 460.407 338.944 461.109C335.901 461.811 332.423 462.162 328.51 462.162C323.583 462.162 319.308 461.46 315.685 460.056C312.134 458.583 309.199 456.583 306.881 454.057C304.562 451.531 302.823 448.548 301.663 445.11C300.577 441.601 300.033 437.777 300.033 433.637ZM338.836 428.268C338.908 423.848 337.749 420.234 335.357 417.427C333.039 414.55 329.814 413.111 325.684 413.111C323.365 413.111 321.3 413.567 319.489 414.479C317.75 415.322 316.264 416.444 315.032 417.848C313.801 419.251 312.822 420.865 312.098 422.69C311.446 424.514 311.011 426.374 310.794 428.268H338.836ZM363.899 407.743C366.217 407.182 369.297 406.585 373.137 405.954C376.978 405.322 381.398 405.006 386.397 405.006C390.89 405.006 394.622 405.638 397.593 406.901C400.563 408.094 402.918 409.813 404.657 412.059C406.469 414.234 407.737 416.865 408.461 419.953C409.186 423.041 409.548 426.444 409.548 430.163V460.899H399.44V432.268C399.44 428.9 399.187 426.023 398.679 423.637C398.245 421.251 397.484 419.321 396.397 417.848C395.31 416.374 393.861 415.322 392.049 414.69C390.238 413.988 387.992 413.637 385.311 413.637C384.224 413.637 383.101 413.673 381.941 413.743C380.782 413.813 379.659 413.918 378.572 414.058C377.557 414.129 376.615 414.234 375.746 414.374C374.949 414.515 374.369 414.62 374.007 414.69V460.899H363.899V407.743ZM461.745 455.425C460.873 455.986 459.171 456.723 456.635 457.636C454.17 458.478 451.272 458.899 447.94 458.899C444.536 458.899 441.309 458.372 438.267 457.32C435.297 456.267 432.687 454.653 430.441 452.478C428.194 450.232 426.419 447.461 425.115 444.162C423.811 440.864 423.158 436.935 423.158 432.373C423.158 428.374 423.774 424.725 425.006 421.427C426.238 418.058 428.013 415.181 430.332 412.795C432.723 410.339 435.621 408.445 439.026 407.111C442.433 405.708 446.272 405.006 450.547 405.006C455.257 405.006 459.352 405.357 462.832 406.059C466.379 406.69 469.353 407.287 471.742 407.848V456.688C471.742 465.109 469.496 471.214 465.005 475.003C460.511 478.793 453.699 480.687 444.569 480.687C441.018 480.687 437.652 480.407 434.463 479.845C431.346 479.284 428.629 478.617 426.31 477.845L428.158 469.319C430.187 470.091 432.651 470.758 435.55 471.319C438.52 471.951 441.599 472.267 444.788 472.267C450.8 472.267 455.114 471.109 457.722 468.793C460.401 466.477 461.745 462.793 461.745 457.741V455.425ZM461.635 414.795C460.62 414.515 459.243 414.269 457.503 414.058C455.839 413.778 453.555 413.637 450.657 413.637C445.222 413.637 441.018 415.357 438.048 418.795C435.15 422.234 433.701 426.795 433.701 432.479C433.701 435.636 434.101 438.338 434.897 440.584C435.765 442.829 436.89 444.689 438.267 446.162C439.716 447.636 441.347 448.724 443.158 449.425C445.041 450.127 446.962 450.478 448.917 450.478C451.6 450.478 454.061 450.127 456.31 449.425C458.556 448.653 460.33 447.776 461.635 446.794V414.795Z"
        fill="#FEFBFF"
        strokeWidth="2"
        mask="url(#path-5-inside-1)"
      />
      <path
        d="M522.139 423.191C520.259 430.198 518.198 436.958 515.956 443.473C513.756 449.79 511.664 455.431 509.675 460.399H501.533C498.252 453.259 495.042 445.126 491.903 436L491.903 436C488.781 426.931 485.832 417.152 483.056 406.664H492.874C493.583 409.86 494.427 413.315 495.4 417.027L495.4 417.027C496.416 420.89 497.47 424.752 498.557 428.614L498.557 428.614L498.56 428.622C499.72 432.488 500.919 436.213 502.151 439.799C503.384 443.384 504.549 446.516 505.641 449.193L506.124 450.38L506.572 449.179C507.805 445.873 509.004 442.393 510.164 438.738C511.396 435.014 512.56 431.291 513.648 427.566L513.649 427.564C514.737 423.772 515.749 420.086 516.693 416.505C517.668 412.999 518.508 409.719 519.216 406.664H526.782C527.421 409.718 528.191 412.996 529.093 416.499L529.094 416.501C530.038 420.084 531.054 423.771 532.142 427.564L532.143 427.566C533.231 431.288 534.352 435.01 535.516 438.733L535.516 438.733L535.519 438.743C536.751 442.397 537.983 445.876 539.219 449.179L539.668 450.378L540.151 449.193C541.243 446.513 542.367 443.38 543.532 439.795C544.764 436.211 545.962 432.487 547.122 428.622C548.282 424.758 549.371 420.893 550.387 417.027C551.364 413.315 552.205 409.86 552.913 406.664H562.297C559.522 417.152 556.572 426.931 553.454 436C550.312 445.126 547.102 453.259 543.824 460.399H535.678C533.687 455.43 531.558 449.787 529.29 443.47C527.049 436.956 524.985 430.197 523.105 423.191L522.622 421.392L522.139 423.191ZM574.299 385.587L574.3 385.586C575.507 384.48 576.944 383.928 578.634 383.928C580.324 383.928 581.718 384.479 582.853 385.577L582.864 385.587L582.874 385.596C584.05 386.61 584.656 388.006 584.656 389.849C584.656 391.69 584.05 393.129 582.864 394.216C581.73 395.247 580.332 395.769 578.634 395.769C576.941 395.769 575.503 395.25 574.3 394.216C573.184 393.132 572.613 391.694 572.613 389.849C572.613 387.997 573.188 386.598 574.299 385.587ZM610.734 414.69V460.399H601.627V408.137C603.881 407.607 606.819 407.043 610.447 406.447L610.366 405.954L610.447 406.447C614.252 405.821 618.643 405.506 623.623 405.506C628.075 405.506 631.732 406.132 634.625 407.361L634.634 407.365C637.533 408.529 639.811 410.198 641.49 412.365L641.495 412.371L641.501 412.378C643.257 414.487 644.494 417.046 645.203 420.067C645.917 423.111 646.276 426.476 646.276 430.163V460.399H637.166V432.268C637.166 428.88 636.912 425.968 636.398 423.54C635.951 421.106 635.17 419.101 634.027 417.551C632.879 415.994 631.347 414.884 629.449 414.22C627.564 413.492 625.256 413.137 622.536 413.137C621.439 413.137 620.308 413.173 619.136 413.243L619.164 413.704L619.136 413.243C617.972 413.314 616.845 413.42 615.751 413.56C614.728 413.632 613.774 413.738 612.893 413.88L612.887 413.882C612.09 414.022 611.505 414.128 611.138 414.199L610.734 414.277V414.69ZM583.244 460.399H574.134V406.664H583.244V460.399Z"
        fill="#D3D3D3"
      />
      <path
        d="M240.504 542V497.648H267.576V502.96H246.712V516.144H265.272V521.328H246.712V536.688H269.176V542H240.504ZM276.683 509.68C278.048 509.339 279.861 508.976 282.123 508.592C284.384 508.208 286.987 508.016 289.931 508.016C292.576 508.016 294.773 508.4 296.523 509.168C298.272 509.893 299.659 510.939 300.683 512.304C301.749 513.627 302.496 515.227 302.923 517.104C303.349 518.981 303.562 521.051 303.562 523.312V542H297.611V524.592C297.611 522.544 297.461 520.795 297.163 519.344C296.907 517.893 296.459 516.72 295.819 515.824C295.179 514.928 294.325 514.288 293.259 513.904C292.192 513.477 290.869 513.264 289.291 513.264C288.651 513.264 287.989 513.285 287.307 513.328C286.624 513.371 285.963 513.435 285.323 513.52C284.725 513.563 284.171 513.627 283.659 513.712C283.189 513.797 282.848 513.861 282.635 513.904V542H276.683V509.68ZM319.001 508.72H331.609V513.712H319.001V529.072C319.001 530.736 319.129 532.123 319.385 533.232C319.641 534.299 320.025 535.152 320.537 535.792C321.049 536.389 321.689 536.816 322.457 537.072C323.225 537.328 324.121 537.456 325.145 537.456C326.937 537.456 328.366 537.264 329.433 536.88C330.542 536.453 331.31 536.155 331.737 535.984L332.889 540.912C332.291 541.211 331.246 541.573 329.753 542C328.259 542.469 326.553 542.704 324.633 542.704C322.371 542.704 320.494 542.427 319.001 541.872C317.55 541.275 316.377 540.4 315.481 539.248C314.585 538.096 313.945 536.688 313.561 535.024C313.219 533.317 313.049 531.355 313.049 529.136V499.44L319.001 498.416V508.72ZM336.702 525.424C336.702 522.48 337.128 519.92 337.982 517.744C338.835 515.525 339.966 513.691 341.374 512.24C342.782 510.789 344.403 509.701 346.238 508.976C348.072 508.251 349.95 507.888 351.87 507.888C356.35 507.888 359.784 509.296 362.174 512.112C364.563 514.885 365.757 519.131 365.757 524.848C365.757 525.104 365.757 525.445 365.757 525.872C365.757 526.256 365.736 526.619 365.694 526.96H342.91C343.166 530.416 344.168 533.04 345.918 534.832C347.667 536.624 350.398 537.52 354.11 537.52C356.2 537.52 357.95 537.349 359.358 537.008C360.808 536.624 361.896 536.261 362.622 535.92L363.454 540.912C362.728 541.296 361.448 541.701 359.614 542.128C357.822 542.555 355.774 542.768 353.47 542.768C350.568 542.768 348.051 542.341 345.918 541.488C343.827 540.592 342.099 539.376 340.734 537.84C339.368 536.304 338.344 534.491 337.661 532.4C337.022 530.267 336.702 527.941 336.702 525.424ZM359.55 522.16C359.592 519.472 358.91 517.275 357.502 515.568C356.136 513.819 354.238 512.944 351.806 512.944C350.44 512.944 349.224 513.221 348.158 513.776C347.134 514.288 346.259 514.971 345.534 515.824C344.808 516.677 344.232 517.659 343.806 518.768C343.422 519.877 343.166 521.008 343.038 522.16H359.55ZM386.596 508.016C387.108 508.016 387.684 508.059 388.324 508.144C389.006 508.187 389.668 508.272 390.308 508.4C390.948 508.485 391.524 508.592 392.036 508.72C392.59 508.805 392.996 508.891 393.252 508.976L392.228 514.16C391.758 513.989 390.969 513.797 389.86 513.584C388.793 513.328 387.406 513.2 385.7 513.2C384.59 513.2 383.481 513.328 382.372 513.584C381.305 513.797 380.601 513.947 380.26 514.032V542H374.308V510.128C375.716 509.616 377.465 509.147 379.556 508.72C381.646 508.251 383.993 508.016 386.596 508.016ZM422.099 525.424C422.099 521.541 421.139 518.555 419.219 516.464C417.299 514.373 414.739 513.328 411.539 513.328C409.747 513.328 408.339 513.392 407.315 513.52C406.334 513.648 405.544 513.797 404.947 513.968V534.96C405.672 535.557 406.718 536.133 408.083 536.688C409.448 537.243 410.942 537.52 412.563 537.52C414.27 537.52 415.72 537.221 416.915 536.624C418.152 535.984 419.155 535.131 419.923 534.064C420.691 532.955 421.246 531.675 421.587 530.224C421.928 528.731 422.099 527.131 422.099 525.424ZM428.307 525.424C428.307 527.941 427.966 530.267 427.283 532.4C426.643 534.533 425.683 536.368 424.403 537.904C423.123 539.44 421.544 540.635 419.667 541.488C417.832 542.341 415.72 542.768 413.331 542.768C411.411 542.768 409.704 542.512 408.211 542C406.76 541.488 405.672 540.997 404.947 540.528V553.84H398.995V509.744C400.403 509.403 402.152 509.04 404.243 508.656C406.376 508.229 408.83 508.016 411.603 508.016C414.163 508.016 416.467 508.421 418.515 509.232C420.563 510.043 422.312 511.195 423.763 512.688C425.214 514.181 426.323 516.016 427.091 518.192C427.902 520.325 428.307 522.736 428.307 525.424ZM448.971 508.016C449.483 508.016 450.059 508.059 450.699 508.144C451.381 508.187 452.043 508.272 452.683 508.4C453.323 508.485 453.899 508.592 454.411 508.72C454.965 508.805 455.371 508.891 455.627 508.976L454.603 514.16C454.133 513.989 453.344 513.797 452.235 513.584C451.168 513.328 449.781 513.2 448.075 513.2C446.965 513.2 445.856 513.328 444.747 513.584C443.68 513.797 442.976 513.947 442.635 514.032V542H436.683V510.128C438.091 509.616 439.84 509.147 441.931 508.72C444.021 508.251 446.368 508.016 448.971 508.016ZM467.322 542H461.37V508.72H467.322V542ZM464.314 502.704C463.247 502.704 462.33 502.363 461.562 501.68C460.837 500.955 460.474 499.995 460.474 498.8C460.474 497.605 460.837 496.667 461.562 495.984C462.33 495.259 463.247 494.896 464.314 494.896C465.381 494.896 466.277 495.259 467.002 495.984C467.77 496.667 468.154 497.605 468.154 498.8C468.154 499.995 467.77 500.955 467.002 501.68C466.277 502.363 465.381 502.704 464.314 502.704ZM485.302 537.712C487.734 537.712 489.526 537.392 490.678 536.752C491.872 536.112 492.47 535.088 492.47 533.68C492.47 532.229 491.894 531.077 490.742 530.224C489.59 529.371 487.691 528.411 485.046 527.344C483.766 526.832 482.528 526.32 481.334 525.808C480.182 525.253 479.179 524.613 478.326 523.888C477.472 523.163 476.79 522.288 476.278 521.264C475.766 520.24 475.51 518.981 475.51 517.488C475.51 514.544 476.598 512.219 478.774 510.512C480.95 508.763 483.915 507.888 487.67 507.888C488.608 507.888 489.547 507.952 490.486 508.08C491.424 508.165 492.299 508.293 493.11 508.464C493.92 508.592 494.624 508.741 495.222 508.912C495.862 509.083 496.352 509.232 496.694 509.36L495.606 514.48C494.966 514.139 493.963 513.797 492.598 513.456C491.232 513.072 489.59 512.88 487.67 512.88C486.006 512.88 484.555 513.221 483.318 513.904C482.08 514.544 481.462 515.568 481.462 516.976C481.462 517.701 481.59 518.341 481.845 518.896C482.144 519.451 482.571 519.963 483.126 520.432C483.723 520.859 484.448 521.264 485.302 521.648C486.155 522.032 487.179 522.437 488.374 522.864C489.952 523.461 491.36 524.059 492.598 524.656C493.835 525.211 494.88 525.872 495.734 526.64C496.63 527.408 497.312 528.347 497.782 529.456C498.251 530.523 498.486 531.845 498.486 533.424C498.486 536.496 497.334 538.821 495.03 540.4C492.768 541.979 489.526 542.768 485.302 542.768C482.358 542.768 480.054 542.512 478.39 542C476.726 541.531 475.595 541.168 474.998 540.912L476.086 535.792C476.768 536.048 477.856 536.432 479.35 536.944C480.843 537.456 482.827 537.712 485.302 537.712ZM504.264 525.424C504.264 522.48 504.691 519.92 505.544 517.744C506.397 515.525 507.528 513.691 508.936 512.24C510.344 510.789 511.965 509.701 513.8 508.976C515.635 508.251 517.512 507.888 519.432 507.888C523.912 507.888 527.347 509.296 529.736 512.112C532.125 514.885 533.32 519.131 533.32 524.848C533.32 525.104 533.32 525.445 533.32 525.872C533.32 526.256 533.299 526.619 533.256 526.96H510.472C510.728 530.416 511.731 533.04 513.48 534.832C515.229 536.624 517.96 537.52 521.672 537.52C523.763 537.52 525.512 537.349 526.92 537.008C528.371 536.624 529.459 536.261 530.184 535.92L531.016 540.912C530.291 541.296 529.011 541.701 527.176 542.128C525.384 542.555 523.336 542.768 521.032 542.768C518.131 542.768 515.613 542.341 513.48 541.488C511.389 540.592 509.661 539.376 508.296 537.84C506.931 536.304 505.907 534.491 505.224 532.4C504.584 530.267 504.264 527.941 504.264 525.424ZM527.112 522.16C527.155 519.472 526.472 517.275 525.064 515.568C523.699 513.819 521.8 512.944 519.368 512.944C518.003 512.944 516.787 513.221 515.72 513.776C514.696 514.288 513.821 514.971 513.096 515.824C512.371 516.677 511.795 517.659 511.368 518.768C510.984 519.877 510.728 521.008 510.6 522.16H527.112Z"
        fill="#E5E5E5"
      />
    </svg>
  )
}

export default PengwinWebsiteLogo
