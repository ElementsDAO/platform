import React from 'react'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

const Logo: React.FC = () => (
  <Link href='/'>
    <Box sx={{
      '& svg': {
        height: 36,
        width: 'auto',
        display: 'flex',
        alignItems: 'center'
      }
    }}>
      <svg width="388" height="97" viewBox="0 0 388 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2203 6.24959C16.2269 6.24959 16.2328 6.24724 16.2373 6.24251C18.2352 4.15698 24.7699 0 34.9916 0C45.2249 0 54.5106 6.24959 57.8744 9.37438L61.2754 12.7731C61.8304 13.3278 61.8304 14.2272 61.2754 14.7818L58.453 17.6024C57.8979 18.1571 56.998 18.1571 56.443 17.6024L53.042 14.2036C50.6732 11.9784 45.0828 7.52791 34.9916 7.52791C33.1084 7.52791 31.4162 7.75054 30.1559 7.98511C29.1089 8.17999 28.7833 9.41976 29.5365 10.1724L32.0313 12.6656C32.5864 13.2203 32.5864 14.1196 32.0313 14.6743L29.317 17.3868C28.7619 17.9415 27.862 17.9415 27.307 17.3868L16.2034 6.29049C16.1883 6.2754 16.199 6.24959 16.2203 6.24959ZM30.1231 20.2011C30.1219 20.1999 30.1219 20.1981 30.1231 20.1969L34.8432 15.4799C34.8444 15.4787 34.8462 15.4787 34.8474 15.4799C34.8485 15.481 34.8504 15.481 34.8516 15.4799L39.4105 10.9239C39.7562 10.5784 40.2551 10.4325 40.728 10.5569C42.0697 10.9097 43.989 11.5144 45.499 12.2394C46.2841 12.6164 46.3749 13.6224 45.759 14.238L28.748 31.2378C28.193 31.7925 27.2931 31.7925 26.738 31.2378L23.9156 28.4173C23.3606 27.8626 23.3606 26.9633 23.9156 26.4086L30.1231 20.2052C30.1242 20.2041 30.1242 20.2022 30.1231 20.2011ZM37.674 25.7384C37.1189 26.2931 37.1189 27.1924 37.674 27.7471L48.4837 38.5498C49.0388 39.1044 49.9387 39.1044 50.4938 38.5498L82.7738 6.29079C82.7891 6.27558 82.7783 6.24959 82.7568 6.24959C82.7505 6.24959 82.7447 6.24739 82.7402 6.243C79.1711 2.77124 68.8974 -2.64868 55.03 1.61815C53.9082 1.9633 53.7546 3.4523 54.73 4.10467C56.2071 5.09257 57.9164 6.29813 59.1962 7.36118C59.5329 7.64089 59.9724 7.76333 60.4058 7.70093C62.5023 7.39907 66.0896 7.19905 69.0855 7.95356C70.0412 8.19424 70.26 9.35393 69.5631 10.0504L50.4937 29.1073C49.9387 29.662 49.0388 29.662 48.4837 29.1073L42.3983 23.0258C41.8433 22.4712 40.9434 22.4712 40.3883 23.0258L37.674 25.7384Z" fill="currentColor" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M92.3206 15.7761C92.3206 15.7827 92.323 15.7886 92.3277 15.7931C94.4215 17.7831 98.5947 24.2923 98.5947 34.4741C98.5947 44.6675 92.3206 53.917 89.1836 57.2676L85.7715 60.6553C85.2147 61.2082 84.3118 61.2082 83.755 60.6553L80.9234 57.8439C80.3665 57.291 80.3665 56.3946 80.9234 55.8418L84.3355 52.454C86.5694 50.0945 91.0373 44.5259 91.0373 34.4741C91.0373 32.5983 90.8138 30.9127 90.5783 29.6574C90.3827 28.6144 89.138 28.2901 88.3825 29.0403L85.8795 31.5254C85.3226 32.0783 84.4198 32.0783 83.8629 31.5254L81.1397 28.8217C80.5829 28.2688 80.5829 27.3724 81.1397 26.8195L92.2796 15.7592C92.2947 15.7442 92.3206 15.7549 92.3206 15.7761ZM78.3145 29.6246C78.3156 29.6235 78.3175 29.6235 78.3186 29.6246L83.0542 34.3263C83.0554 34.3275 83.0554 34.3293 83.0542 34.3305C83.0531 34.3316 83.0531 34.3335 83.0542 34.3346L87.628 38.8757C87.9749 39.2202 88.1213 39.7171 87.9965 40.1882C87.6423 41.5246 87.0352 43.4364 86.3074 44.9405C85.9289 45.7226 84.9189 45.813 84.3009 45.1995L67.2345 28.2549C66.6776 27.702 66.6776 26.8057 67.2345 26.2528L70.0661 23.4414C70.6229 22.8885 71.5258 22.8885 72.0826 23.4414L78.3103 29.6246C78.3114 29.6257 78.3133 29.6257 78.3145 29.6246ZM72.7555 37.146C72.1986 36.5932 71.2958 36.5932 70.7389 37.146L59.8939 47.9136C59.337 48.4665 59.337 49.3629 59.8939 49.9158L92.2793 82.0698C92.2945 82.085 92.3206 82.0742 92.3206 82.0528C92.3206 82.0465 92.3228 82.0408 92.3273 82.0363C95.8126 78.4812 101.254 68.2475 96.9702 54.4343C96.6237 53.3169 95.1289 53.1639 94.474 54.1355C93.4822 55.6068 92.2719 57.3094 91.2047 58.5842C90.9239 58.9196 90.801 59.3574 90.8636 59.7891C91.1667 61.8775 91.3675 65.4507 90.61 68.4349C90.3684 69.3869 89.2041 69.6049 88.505 68.9107L69.3734 49.9158C68.8165 49.3629 68.8165 48.4665 69.3734 47.9136L75.4786 41.8519C76.0355 41.299 76.0355 40.4027 75.4786 39.8498L72.7555 37.146Z" fill="currentColor" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M82.7567 90.7504C82.7502 90.7504 82.7442 90.7528 82.7397 90.7575C80.7419 92.843 74.2072 97 63.9854 97C53.7522 97 44.4664 90.7504 41.1027 87.6256L37.7017 84.2269C37.1466 83.6722 37.1466 82.7728 37.7017 82.2182L40.5241 79.3976C41.0791 78.8429 41.979 78.8429 42.5341 79.3976L45.9351 82.7964C48.3039 85.0216 53.8943 89.4721 63.9854 89.4721C65.8686 89.4721 67.5608 89.2495 68.8211 89.0149C69.8682 88.82 70.1937 87.5802 69.4406 86.8276L66.9457 84.3344C66.3907 83.7797 66.3907 82.8804 66.9457 82.3257L69.6601 79.6132C70.2151 79.0585 71.115 79.0585 71.6701 79.6132L82.7737 90.7095C82.7888 90.7246 82.7781 90.7504 82.7567 90.7504ZM68.854 76.7989C68.8551 76.8001 68.8551 76.8019 68.854 76.8031L64.1338 81.5201C64.1327 81.5213 64.1308 81.5213 64.1297 81.5201C64.1285 81.519 64.1266 81.519 64.1255 81.5201L59.5666 86.0761C59.2208 86.4216 58.7219 86.5675 58.249 86.4431C56.9073 86.0903 54.988 85.4856 53.4781 84.7606C52.6929 84.3836 52.6021 83.3776 53.2181 82.762L70.229 65.7622C70.7841 65.2075 71.684 65.2075 72.239 65.7622L75.0614 68.5827C75.6165 69.1374 75.6165 70.0367 75.0614 70.5914L68.854 76.7948C68.8528 76.7959 68.8528 76.7978 68.854 76.7989ZM61.3031 71.2616C61.8581 70.7069 61.8581 69.8076 61.3031 69.2529L50.4933 58.4502C49.9383 57.8956 49.0383 57.8956 48.4833 58.4502L16.2032 90.7092C16.188 90.7244 16.1988 90.7504 16.2203 90.7504C16.2266 90.7504 16.2324 90.7526 16.2369 90.757C19.8059 94.2288 30.0797 99.6487 43.9471 95.3818C45.0688 95.0367 45.2225 93.5477 44.247 92.8953C42.7699 91.9074 41.0607 90.7019 39.7809 89.6388C39.4441 89.3591 39.0046 89.2367 38.5712 89.2991C36.4747 89.6009 32.8875 89.8009 29.8916 89.0464C28.9359 88.8058 28.717 87.6461 29.4139 86.9496L48.4833 67.8927C49.0383 67.338 49.9383 67.338 50.4933 67.8927L56.5787 73.9742C57.1338 74.5288 58.0337 74.5288 58.5887 73.9742L61.3031 71.2616Z" fill="currentColor" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.6564 82.053C6.6564 82.0464 6.65405 82.0405 6.64931 82.036C4.55559 80.046 0.382324 73.5368 0.382323 63.355C0.382323 53.1616 6.6564 43.9121 9.79344 40.5615L13.2055 37.1738C13.7624 36.621 14.6652 36.6209 15.2221 37.1738L18.0537 39.9852C18.6105 40.5381 18.6105 41.4345 18.0537 41.9874L14.6416 45.3751C12.4076 47.7346 7.93974 53.3032 7.93974 63.355C7.93974 65.2308 8.16324 66.9164 8.39873 68.1717C8.59437 69.2147 9.839 69.539 10.5946 68.7888L13.0976 66.3037C13.6544 65.7508 14.5573 65.7508 15.1141 66.3037L17.8373 69.0074C18.3942 69.5603 18.3942 70.4567 17.8373 71.0096L6.69747 82.0699C6.68232 82.0849 6.6564 82.0743 6.6564 82.053ZM20.6626 68.2045C20.6614 68.2056 20.6596 68.2056 20.6584 68.2045L15.9229 63.5028C15.9217 63.5016 15.9217 63.4998 15.9228 63.4986C15.924 63.4975 15.924 63.4956 15.9228 63.4945L11.3491 58.9534C11.0022 58.6089 10.8557 58.112 10.9806 57.6409C11.3348 56.3045 11.9418 54.3927 12.6697 52.8886C13.0481 52.1065 14.0582 52.0161 14.6761 52.6296L31.7426 69.5742C32.2995 70.1271 32.2995 71.0234 31.7426 71.5763L28.911 74.3877C28.3541 74.9406 27.4513 74.9406 26.8944 74.3877L20.6668 68.2045C20.6656 68.2034 20.6637 68.2034 20.6626 68.2045ZM26.2216 60.6831C26.7785 61.2359 27.6813 61.2359 28.2382 60.6831L39.0832 49.9155C39.64 49.3626 39.64 48.4662 39.0832 47.9133L6.69777 15.7593C6.6825 15.7441 6.6564 15.7549 6.6564 15.7763C6.6564 15.7826 6.6542 15.7883 6.64979 15.7928C3.16442 19.348 -2.27674 29.5816 2.00681 43.3948C2.35331 44.5122 3.84815 44.6653 4.50308 43.6936C5.49485 42.2223 6.70513 40.5197 7.77236 39.2449C8.05316 38.9095 8.17608 38.4717 8.11344 38.04C7.8104 35.9516 7.60959 32.3784 8.36705 29.3942C8.60868 28.4423 9.77291 28.2242 10.4721 28.9184L29.6037 47.9133C30.1606 48.4662 30.1606 49.3626 29.6037 49.9155L23.4984 55.9772C22.9416 56.5301 22.9416 57.4265 23.4984 57.9793L26.2216 60.6831Z" fill="currentColor" />
        <path d="M137.516 27.4025C139.618 27.4025 141.76 27.4025 143.942 27.4025C146.165 27.4025 148.348 27.4429 150.49 27.5237C152.632 27.6046 154.653 27.7258 156.552 27.8875L156.188 33.5256H139.82C138.688 33.5256 137.839 33.8085 137.273 34.3743C136.748 34.9402 136.485 35.8293 136.485 37.0418V59.8368C136.485 61.0493 136.748 61.9385 137.273 62.5043C137.839 63.0702 138.688 63.3531 139.82 63.3531H156.188L156.552 68.9912C154.653 69.1529 152.632 69.2741 150.49 69.3549C148.348 69.3954 146.165 69.4156 143.942 69.4156C141.76 69.456 139.618 69.4762 137.516 69.4762C134.929 69.4762 132.848 68.7689 131.272 67.3543C129.736 65.8993 128.948 63.9593 128.907 61.5343V35.3443C128.948 32.9193 129.736 30.9996 131.272 29.585C132.848 28.13 134.929 27.4025 137.516 27.4025ZM129.998 44.6806H153.885V50.2581H129.998V44.6806Z" fill="currentColor" />
        <path d="M170.697 26.9175L170.636 60.3824C170.636 61.5141 170.959 62.3831 171.606 62.9893C172.253 63.5552 173.182 63.8381 174.395 63.8381H177.002L177.85 68.9912C177.406 69.1933 176.779 69.3751 175.971 69.5368C175.203 69.6985 174.395 69.7995 173.546 69.8399C172.738 69.9208 172.03 69.9612 171.424 69.9612C168.959 69.9612 166.999 69.2943 165.544 67.9606C164.089 66.6268 163.361 64.707 163.361 62.2012V26.9175H170.697Z" fill="currentColor" />
        <path d="M195.7 38.8606C200.51 38.8606 203.965 39.7093 206.067 41.4068C208.169 43.0639 209.24 45.5293 209.28 48.8031C209.321 51.511 208.674 53.5722 207.34 54.9868C206.047 56.361 203.885 57.0481 200.853 57.0481H183.878V52.5012H198.853C200.227 52.5012 201.096 52.1375 201.46 51.41C201.864 50.6825 202.066 49.7933 202.066 48.7425C202.025 47.0854 201.54 45.9335 200.611 45.2868C199.722 44.6402 198.186 44.3168 196.003 44.3168C194.104 44.3168 192.629 44.5795 191.578 45.105C190.527 45.6304 189.779 46.5802 189.335 47.9543C188.93 49.3285 188.728 51.3089 188.728 53.8956C188.728 56.6439 188.991 58.7658 189.517 60.2612C190.042 61.7566 190.911 62.7872 192.123 63.3531C193.336 63.8785 194.953 64.1412 196.973 64.1412C198.469 64.1412 200.187 64.0806 202.127 63.9593C204.107 63.8381 206.007 63.6764 207.825 63.4743L208.553 68.1424C207.462 68.587 206.209 68.9508 204.794 69.2337C203.379 69.5166 201.904 69.7187 200.368 69.8399C198.873 70.0016 197.458 70.0824 196.125 70.0824C192.487 70.0824 189.557 69.557 187.334 68.5062C185.152 67.4149 183.555 65.7174 182.545 63.4137C181.575 61.1099 181.09 58.1393 181.09 54.5018C181.09 50.5814 181.575 47.4895 182.545 45.2262C183.555 42.9225 185.131 41.2856 187.273 40.3156C189.456 39.3456 192.265 38.8606 195.7 38.8606Z" fill="currentColor" />
        <path d="M252.976 38.8606C255.603 38.8606 257.604 39.5679 258.978 40.9825C260.393 42.3566 261.1 44.3775 261.1 47.045V69.3549H253.825V49.2881C253.784 47.7927 253.481 46.7216 252.916 46.075C252.35 45.3879 251.359 45.0443 249.945 45.0443C249.096 45.0443 248.268 45.1858 247.459 45.4687C246.691 45.7112 245.822 46.1154 244.852 46.6812C243.882 47.247 242.71 47.9948 241.336 48.9243L240.912 44.4987C242.973 42.5991 244.953 41.1846 246.853 40.255C248.793 39.3254 250.834 38.8606 252.976 38.8606ZM221.754 39.5881L222.482 45.4081L223.209 46.2568V69.3549H215.874V39.5881H221.754ZM234.001 38.8606C236.587 38.8606 238.568 39.5477 239.942 40.9218C241.316 42.296 242.023 44.337 242.064 47.045V69.3549H234.971V49.2881C234.971 47.7118 234.647 46.6206 234.001 46.0143C233.354 45.3677 232.384 45.0443 231.091 45.0443C230.282 45.0443 229.474 45.1656 228.666 45.4081C227.857 45.6506 226.968 46.0548 225.998 46.6206C225.028 47.1864 223.816 47.9543 222.361 48.9243L221.936 44.4987C223.957 42.5991 225.937 41.1846 227.877 40.255C229.817 39.3254 231.858 38.8606 234.001 38.8606Z" fill="currentColor" />
        <path d="M282.434 38.8606C287.244 38.8606 290.699 39.7093 292.801 41.4068C294.903 43.0639 295.974 45.5293 296.014 48.8031C296.055 51.511 295.408 53.5722 294.074 54.9868C292.781 56.361 290.619 57.0481 287.587 57.0481H270.612V52.5012H285.587C286.961 52.5012 287.83 52.1375 288.194 51.41C288.598 50.6825 288.8 49.7933 288.8 48.7425C288.759 47.0854 288.274 45.9335 287.345 45.2868C286.456 44.6402 284.92 44.3168 282.737 44.3168C280.838 44.3168 279.363 44.5795 278.312 45.105C277.261 45.6304 276.513 46.5802 276.069 47.9543C275.664 49.3285 275.462 51.3089 275.462 53.8956C275.462 56.6439 275.725 58.7658 276.25 60.2612C276.776 61.7566 277.645 62.7872 278.857 63.3531C280.07 63.8785 281.686 64.1412 283.707 64.1412C285.203 64.1412 286.92 64.0806 288.86 63.9593C290.841 63.8381 292.74 63.6764 294.559 63.4743L295.287 68.1424C294.195 68.587 292.943 68.9508 291.528 69.2337C290.113 69.5166 288.638 69.7187 287.102 69.8399C285.607 70.0016 284.192 70.0824 282.859 70.0824C279.221 70.0824 276.291 69.557 274.068 68.5062C271.885 67.4149 270.289 65.7174 269.279 63.4137C268.309 61.1099 267.824 58.1393 267.824 54.5018C267.824 50.5814 268.309 47.4895 269.279 45.2262C270.289 42.9225 271.865 41.2856 274.007 40.3156C276.19 39.3456 278.999 38.8606 282.434 38.8606Z" fill="currentColor" />
        <path d="M322.189 38.8606C327.727 38.8606 330.495 41.5887 330.495 47.045V69.3549H323.159V49.2881C323.159 47.6714 322.877 46.56 322.311 45.9537C321.745 45.3475 320.795 45.0443 319.461 45.0443C317.966 45.0443 316.43 45.3879 314.854 46.075C313.278 46.7216 311.378 47.6714 309.155 48.9243L308.852 44.4987C311.075 42.68 313.298 41.2856 315.521 40.3156C317.784 39.3456 320.007 38.8606 322.189 38.8606ZM308.609 39.5881L309.337 45.4081L309.943 46.2568V69.3549H302.608V39.5881H308.609Z" fill="currentColor" />
        <path d="M348.366 31.1006V60.3824C348.366 61.5949 348.628 62.4841 349.154 63.0499C349.72 63.5754 350.669 63.8381 352.003 63.8381H356.126L356.914 68.9912C356.227 69.1933 355.398 69.3751 354.428 69.5368C353.458 69.6985 352.508 69.7995 351.579 69.8399C350.649 69.9208 349.861 69.9612 349.214 69.9612C346.628 69.9612 344.607 69.2741 343.152 67.8999C341.737 66.4854 341.03 64.4645 341.03 61.8374V31.1006H348.366ZM357.217 39.5881V44.6806H335.756V39.8912L341.576 39.5881H357.217Z" fill="currentColor" />
        <path d="M373.371 38.8606C374.745 38.8606 376.22 38.901 377.797 38.9818C379.413 39.0627 380.99 39.1839 382.525 39.3456C384.061 39.4668 385.435 39.6487 386.648 39.8912L386.163 44.6806C384.223 44.6402 382.283 44.5998 380.343 44.5593C378.443 44.4785 376.564 44.4381 374.705 44.4381C373.048 44.4381 371.734 44.4785 370.764 44.5593C369.835 44.6402 369.168 44.8827 368.764 45.2868C368.4 45.691 368.218 46.3781 368.218 47.3481C368.218 48.5202 368.541 49.3083 369.188 49.7125C369.835 50.0762 370.885 50.44 372.34 50.8037L380.464 52.6831C382.93 53.2893 384.728 54.2189 385.86 55.4718C387.032 56.6843 387.618 58.5637 387.618 61.1099C387.618 63.5754 387.153 65.4547 386.224 66.7481C385.334 68.001 383.9 68.8699 381.919 69.3549C379.979 69.7995 377.494 70.0218 374.462 70.0218C373.29 70.0218 371.552 69.9612 369.249 69.8399C366.945 69.7591 364.419 69.4964 361.671 69.0518L362.155 64.2624C362.964 64.2624 363.914 64.2827 365.005 64.3231C366.137 64.3635 367.329 64.3837 368.582 64.3837C369.875 64.3837 371.189 64.3837 372.522 64.3837C374.664 64.3837 376.301 64.3231 377.433 64.2018C378.605 64.0402 379.413 63.737 379.858 63.2924C380.303 62.8074 380.525 62.1204 380.525 61.2312C380.525 60.0995 380.141 59.3518 379.373 58.9881C378.645 58.5839 377.554 58.2 376.099 57.8362L368.157 55.8962C366.339 55.4112 364.924 54.805 363.914 54.0775C362.903 53.3095 362.176 52.38 361.731 51.2887C361.287 50.157 361.064 48.7829 361.064 47.1662C361.064 44.9837 361.468 43.2862 362.277 42.0737C363.126 40.8612 364.439 40.0125 366.217 39.5275C368.036 39.0425 370.421 38.8202 373.371 38.8606Z" fill="currentColor" />
      </svg>
    </Box>
  </Link>
)

export default Logo
